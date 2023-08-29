import { CriarJogador } from './dtos/criar-jogador.dto';
export declare class JogadoresService {
    private jogadores;
    private readonly logger;
    criarAtualizarJogador(criarJogadorDto: CriarJogador): Promise<void>;
    private criarJogador;
    private atualizarJogador;
}
