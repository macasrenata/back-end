import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CriarJogador } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  // criar um metodo handle para tratar as requisições
  // criar um metodo get para retornar todos os jogadores
  // criar um metodo post para criar um jogador
  // criar um metodo put para atualizar um jogador
  // criar um metodo delete para deletar um jogador

  constructor(private readonly jogadoresService: JogadoresService) {} // injetando o service uso dos objetos e metodos com a importação das classes

  @Post()
  async criarAtualizarJogador(
    @Body() criarJogadorDto: CriarJogador, // recebendo o http body
  ) {
    // parametros de entrada interceptados na requisição http
    // criar um metodo para criar ou atualizar um jogador
    await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
  }

  @Get()
  async consultarJogadores(
    @Query('email') email: string,
  ): Promise<Jogador | Jogador[]> {
    if (email) {
      return await this.jogadoresService.consultarJogadorPeloEmail(email);
    } else {
      return await this.jogadoresService.consultarTodosJogadores();
    }
    // criar um metodo para consultar todos os jogadores
  }

  @Delete()
  async deletarJogador(@Query('email') email: string): Promise<void> { // deletar um jogador ou nao retorna nada (void)
    await this.jogadoresService.deletarJogador(email);
  }
}