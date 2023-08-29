import { Injectable, Logger } from '@nestjs/common';
import { CriarJogador } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
// import * as uuid from 'uuid'; // gerar id unico
// import * as uuid from 'uuid'; // gerar id unico
import { v4 as uuidv4 } from 'uuid'; // gerar id unico

@Injectable()
export class JogadoresService {
  // criação de metodos para a regra de negócio
  // vamos fazer a persditencia em memoria e depois faremos no mongoDB

  private jogadores: Jogador[] = []; // importado a interface
  private readonly logger = new Logger(JogadoresService.name); // gravar logs em memoria

  async criarAtualizarJogador(criarJogadorDto: CriarJogador): Promise<void> {
    // criar um metodo para criar ou atualizar um jogador
    const { email } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
    const jogadorEncontrado = await this.jogadores.find(
      (jogador) => jogador.email === email,
    ); // busca o jogador pelo email

    if (jogadorEncontrado) {
      await this.atualizarJogador(); // atualiza o jogador
    } else {
      await this.criarJogador(criarJogadorDto); // retorna todos os jogadores EM MEMORIA
    }
  }

  private criarJogador(criarJogadorDto: CriarJogador): void {
    const { email, telefoneCelular, nome } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
    const jogador: Jogador = {
      _id: uuidv4(),
      nome,
      email,
      telefoneCelular,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`jogador: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador); // adiciona o jogador no array EM MEMORIA
  }

  private atualizarJogador() {
    // atualizar
  }
}
