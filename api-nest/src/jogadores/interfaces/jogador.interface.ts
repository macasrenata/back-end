import { Document } from "mongodb";

// modela a interface do jogador com o modelo do mongoDB no mongoose
export interface Jogador extends Document {
  readonly email: string;
  readonly telefoneCelular: string;
  nome: string;
  ranking: string;
  posicaoRanking: number;
  urlFotoJogador: string;
}


