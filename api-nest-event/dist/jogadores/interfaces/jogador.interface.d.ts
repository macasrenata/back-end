import { Document } from "mongodb";
export interface Jogador extends Document {
    readonly email: string;
    readonly telefoneCelular: string;
    nome: string;
    ranking: string;
    posicaoRanking: number;
    urlFotoJogador: string;
}
