import { CriarJogador } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarJogador(criarJogadorDto: CriarJogador): Promise<void>;
    atualizarJogador(criarJogadorDto: CriarJogador, _id: string): Promise<void>;
    consultarJogadores(): Promise<Jogador | Jogador[]>;
    consultarJogadoresId(_id: string): Promise<Jogador[] | Jogador>;
    deletarJogador(_id: string): Promise<void>;
}
