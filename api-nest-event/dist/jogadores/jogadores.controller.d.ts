import { CriarJogadorDTO } from "./dtos/criar-jogador.dto";
import { JogadoresService } from "./jogadores.service";
import { Jogador } from "./interfaces/jogador.interface";
import { AtualizarJogadorDto } from "./dtos/atualizar-jogador.dto";
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarJogador(criarJogadorDto: CriarJogadorDTO): Promise<Jogador>;
    atualizarJogador(atualizarJogador: AtualizarJogadorDto, _id: string): Promise<void>;
    consultarJogadores(): Promise<Jogador | Jogador[]>;
    consultarJogadoresId(_id: string): Promise<Jogador[] | Jogador>;
    deletarJogador(_id: string): Promise<void>;
}
