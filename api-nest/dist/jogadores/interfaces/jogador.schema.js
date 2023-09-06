"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jogadorSchema = void 0;
const mongoose = require("mongoose");
exports.jogadorSchema = new mongoose.Schema({
    telefoneCelular: { type: String, unique: true },
    email: { type: String, unique: true },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String,
}, { timestamps: true, collection: 'jogadores' });
//# sourceMappingURL=jogador.schema.js.map