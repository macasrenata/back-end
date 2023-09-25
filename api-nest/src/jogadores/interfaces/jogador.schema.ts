import * as mongoose from 'mongoose'; 


// criando o schema do jogador o modelo de dados do mongoDB no mongoose

export const jogadorSchema = new mongoose.Schema({  
    email: { type: String, unique: true }, 
    telefoneCelular: { type: String },  
    nome: String, 
    ranking: String,  
    posicaoRanking: Number,  
    urlFotoJogador: String, 
}, { timestamps: true, collection: 'jogadores' }); 