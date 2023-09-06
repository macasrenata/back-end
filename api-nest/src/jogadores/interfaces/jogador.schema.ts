import * as mongoose from 'mongoose';  // importando o mongoose

export const jogadorSchema = new mongoose.Schema({  // criando o schema do jogador o modelo de dados do mongoDB no mongoose
    // _id: { type: String, required: true },  id do jogador, mas o mongo ira criar automaticamente
    telefoneCelular: { type: String, unique: true },  // telefone celular do jogador
    email: { type: String, unique: true },  // email do jogador
    nome: String,  // nome do jogador
    ranking: String,  // ranking do jogador
    posicaoRanking: Number,  // posição do ranking do jogador
    urlFotoJogador: String, // url da foto do jogador
}, { timestamps: true, collection: 'jogadores' });  // cria um campo de data de criação e atualização do registro e cria a collection jogadores no mongoDB