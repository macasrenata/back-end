import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CriarJogadorDTO } from "./dtos/criar-jogador.dto";
import { JogadoresService } from "./jogadores.service";
import { Jogador } from "./interfaces/jogador.interface";
import { JogadoresValidacaoParametrosPipe } from "./pipes/jogadores-validacao-parametros.pipe";
import { AtualizarJogadorDto } from "./dtos/atualizar-jogador.dto";

@Controller("api/v1/jogadores")
export class JogadoresController {
  
  constructor(private readonly jogadoresService: JogadoresService) {} // injetando o service uso dos objetos e metodos com a importação das classes

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(
    @Body() criarJogadorDto: CriarJogadorDTO): Promise<Jogador> {    
    return await this.jogadoresService.criarJogador(criarJogadorDto);
  }

  @Put("/:_id")
  @UsePipes(ValidationPipe)
  async atualizarJogador(
    @Body() atualizarJogador: AtualizarJogadorDto,
    @Param("_id", JogadoresValidacaoParametrosPipe) _id: string
  ) {
    await this.jogadoresService.atualizarJogador(_id, atualizarJogador);
  }
  // parametros de entrada interceptados na requisição http para atualizar um jogador

  @Get()
  async consultarJogadores(): Promise<Jogador | Jogador[]> {
    return await this.jogadoresService.consultarTodosJogadores();
  }
  // criar um metodo para consultar todos os jogadores

  @Get("/:_id")
  async consultarJogadoresId(
    @Param("_id", JogadoresValidacaoParametrosPipe) _id: string
  ): Promise<Jogador[] | Jogador> {
    return await this.jogadoresService.consultarJogadorPeloId(_id);
  }
  // criar um metodo para consultar um jogador pelo email utlizando o @param que pega o parametro da requisição http

  @Delete("/:_id")
  async deletarJogador(
    @Param("_id", JogadoresValidacaoParametrosPipe) _id: string
  ): Promise<void> {
    await this.jogadoresService.deletarJogador(_id);
  }
  // deletar um jogador ou nao retorna nada (void) e validação dos parametros de entrada
}
