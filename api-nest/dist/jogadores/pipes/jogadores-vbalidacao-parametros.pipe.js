"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresValidacaoParametrosPipe = void 0;
const common_1 = require("@nestjs/common");
class JogadoresValidacaoParametrosPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O valor do parametro ${metadata.data} deve ser informado`);
        }
        console.log(`value: ${value} metadata: ${metadata.type}`);
        return value;
    }
}
exports.JogadoresValidacaoParametrosPipe = JogadoresValidacaoParametrosPipe;
//# sourceMappingURL=jogadores-vbalidacao-parametros.pipe.js.map