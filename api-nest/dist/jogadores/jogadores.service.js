"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JogadoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let JogadoresService = exports.JogadoresService = JogadoresService_1 = class JogadoresService {
    constructor() {
        this.jogadores = [];
        this.logger = new common_1.Logger(JogadoresService_1.name);
    }
    async criarAtualizarJogador(criarJogadorDto) {
        const { email } = criarJogadorDto;
        const jogadorEncontrado = await this.jogadores.find((jogador) => jogador.email === email);
        if (jogadorEncontrado) {
            await this.atualizarJogador();
        }
        else {
            await this.criarJogador(criarJogadorDto);
        }
    }
    criarJogador(criarJogadorDto) {
        const { email, telefoneCelular, nome } = criarJogadorDto;
        const jogador = {
            _id: (0, uuid_1.v4)(),
            nome,
            email,
            telefoneCelular,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg',
        };
        this.logger.log(`jogador: ${JSON.stringify(jogador)}`);
        this.jogadores.push(jogador);
    }
    atualizarJogador() {
    }
};
exports.JogadoresService = JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)()
], JogadoresService);
//# sourceMappingURL=jogadores.service.js.map