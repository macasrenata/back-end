import { CriarJogador } from "./dtos/criar-jogador.dto";
import { Jogador } from "./interfaces/jogador.interface";
import { Model } from "mongoose";
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    private readonly logger;
    criarAtualizarJogador(criarJogadorDto: CriarJogador): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloEmail(email: string): Promise<Jogador>;
    deletarJogador(email: string): Promise<any>;
    private criarJogador;
    private atualizarJogador;
}
