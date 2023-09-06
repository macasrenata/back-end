// modela a interface do jogador com o modelo do mongoDB no mongoose

import { Document } from "mongodb";

export interface Jogador extends Document {
  // readonly _id: string; // id do jogador, mas o mongo ira criar automaticamente
  readonly email: string;
  readonly telefoneCelular: string;
  nome: string;
  ranking: string;
  posicaoRanking: number;
  urlFotoJogador: string;
}


