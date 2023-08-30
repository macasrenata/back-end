import { CriarJogador } from "./dtos/criar-jogador.dto";
import { Jogador } from "./interfaces/jogador.interface";
export declare class JogadoresService {
    private jogadores;
    private readonly logger;
    criarAtualizarJogador(criarJogadorDto: CriarJogador): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloEmail(email: string): Promise<Jogador>;
    deletarJogador(email: string): Promise<void>;
    private criarJogador;
    private atualizarJogador;
}
