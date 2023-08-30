import { Injectable, Logger } from "@nestjs/common";
import { CriarJogador } from "./dtos/criar-jogador.dto";
import { Jogador } from "./interfaces/jogador.interface";
// import * as uuid from 'uuid'; // gerar id unico
// import * as uuid from 'uuid'; // gerar id unico
import { v4 as uuidv4 } from "uuid"; // gerar id unico

@Injectable()
export class JogadoresService {
  // criação de metodos para a regra de negócio
  // vamos fazer a persditencia em memoria e depois faremos no mongoDB

  private jogadores: Jogador[] = []; // importado a interface
  private readonly logger = new Logger(JogadoresService.name); // gravar logs em memoria

  async criarAtualizarJogador(criarJogadorDto: CriarJogador): Promise<void> {
    // criar um metodo para criar ou atualizar um jogador
    const { email } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
    const jogadorEncontrado = this.jogadores.find(
      (jogador) => jogador.email === email
    ); // busca o jogador pelo email

    if (jogadorEncontrado) {
      this.atualizarJogador(jogadorEncontrado, criarJogadorDto); // atualiza o jogador
    } else {
      this.criarJogador(criarJogadorDto); // retorna todos os jogadores EM MEMORIA
    }
  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    // criar um metodo para consultar todos os jogadores
    return this.jogadores; // retorna todos os jogadores EM MEMORIA
  }

  async consultarJogadorPeloEmail(email: string): Promise<Jogador> {
    // criar um metodo para consultar um jogador pelo email
    const jogadorEncontrado = this.jogadores.find(
      jogador => jogador.email === email
    ); // busca o jogador pelo email
    if (!jogadorEncontrado) {
      throw new Error(`Jogador com e-mail ${email} não encontrado`); // retorna um erro
    }

    return jogadorEncontrado; // retorna o jogador encontrado
  }

  async deletarJogador(email: string): Promise<void> { // deletar um jogador ou nao retorna nada (void)
    const jogadorEncontrado = this.jogadores.find(
      jogador => jogador.email === email
    ); // busca o jogador pelo email
    this.jogadores = this.jogadores.filter( // atualiza o array de jogadores
      jogador => jogador.email !== jogadorEncontrado.email // filtra o jogador encontrado e retorna todos os jogadores menos o encontrado
    ); // deleta o jogador encontrado, atualizando o array de jogadores menos o encontrado
  }

  private criarJogador(criarJogadorDto: CriarJogador): void {
    const { email, telefoneCelular, nome } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
    const jogador: Jogador = {
      _id: uuidv4(),
      nome,
      email,
      telefoneCelular,
      ranking: "A",
      posicaoRanking: 1,
      urlFotoJogador: "www.google.com.br/foto123.jpg",
    };
    this.logger.log(`jogador: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador); // adiciona o jogador no array EM MEMORIA
  }

  private atualizarJogador(
    jogadorEncontrado: Jogador,
    criarJogadorDto: CriarJogador
  ): void {
    // metodo async só retorna void nãpo retorna nada
    const { nome } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)

    jogadorEncontrado.nome = nome; // atualizar o nome do jogador
  }
}
