import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarJogador } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  // criar um metodo handle para tratar as requisições
  // criar um metodo get para retornar todos os jogadores
  // criar um metodo post para criar um jogador
  // criar um metodo put para atualizar um jogador
  // criar um metodo delete para deletar um jogador

  constructor(private readonly jogadoresService: JogadoresService) {} // injetando o service uso dos objetos e metodos com a importação das classes

  @Post()
  @UsePipes(ValidationPipe) // validação dos parametros de entrada
  async criarJogador(
    @Body() criarJogadorDto: CriarJogador): Promise<void> {
    return await this.jogadoresService.criarJogador(criarJogadorDto);
  }
    // parametros de entrada interceptados na requisição http
    // criar um metodo para criar um jogador

    @Put('/:_id')
    @UsePipes(ValidationPipe) 
    async atualizarJogador(
      @Body() criarJogadorDto: CriarJogador, 
      @Param('_id', JogadoresValidacaoParametrosPipe ) _id: string
    ) {
      await this.jogadoresService.atualizarJogador(_id, criarJogadorDto);
    }
    // parametros de entrada interceptados na requisição http para atualizar um jogador

  @Get()
  async consultarJogadores(): Promise<Jogador | Jogador[]> {
      return await this.jogadoresService.consultarTodosJogadores();
    }
    // criar um metodo para consultar todos os jogadores

  @Get('/:_id')
  async consultarJogadoresId(
    @Param('_id', JogadoresValidacaoParametrosPipe ) _id: string): Promise<Jogador[] | Jogador> {
      return await this.jogadoresService.consultarJogadorId(_id);
    }
    // criar um metodo para consultar um jogador pelo email utlizando o @param que pega o parametro da requisição http

  @Delete('/:_id')
  async deletarJogador(@Param('_id', JogadoresValidacaoParametrosPipe) _id: string): Promise<void> { 
    await this.jogadoresService.deletarJogador(_id);
  }
    // deletar um jogador ou nao retorna nada (void) e validação dos parametros de entrada
}
