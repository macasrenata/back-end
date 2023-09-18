import { CriarJogador } from "./dtos/criar-jogador.dto";
import { Jogador } from "./interfaces/jogador.interface";
import { Model } from "mongoose";
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    private readonly logger;
    criarJogador(criarJogadorDto: CriarJogador): Promise<void>;
    atualizarJogador(_id: string, criarJogadorDto: CriarJogador): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadorId(_id: string): Promise<Jogador>;
    deletarJogador(_id: string): Promise<any>;
}
