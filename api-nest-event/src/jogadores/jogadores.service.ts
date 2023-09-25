import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CriarJogadorDTO } from "./dtos/criar-jogador.dto";
import { Jogador } from "./interfaces/jogador.interface";
import { v4 as uuidv4 } from "uuid"; // gerar id unico
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { jogadorSchema } from "./interfaces/jogador.schema";
import { AtualizarJogadorDto } from "./dtos/atualizar-jogador.dto";

// @Injectable()
// export class JogadoresService {
//   constructor(
//     @InjectModel("Jogador") private readonly jogadorModel: Model<Jogador>
//   ) {} // construtor da classe e injetando o model do jogador e o tipo do model (Jogador), no caso objeto do tipo Jogador

//   private readonly logger = new Logger(JogadoresService.name); // gravar logs em memoria

//   // criar um metodo para criar ou atualizar um jogador
//   async criarJogador(criarJogadorDto: CriarJogadorDTO): Promise<void> {
//     const { email } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
//     const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec(); // busca o jogador pelo email

//     if (jogadorEncontrado) {
//       throw new NotFoundException(`Jogador com e-mail ${email} já cadastrado`); // retorna um erro
//     }
//     await this.criarJogador(criarJogadorDto);
//     const jogadorCriado = new this.jogadorModel(criarJogadorDto); // cria um novo jogador com o model do jogador e o objeto recebido do http
//     await jogadorCriado.save(); // salva o jogador no mongoDB
//   }

//   // criar um metodo para atualizar um jogador
//   async atualizarJogador(
//     _id: string,
//     criarJogadorDto: AtualizarJogadorDto
//   ): Promise<void> {
//     const { email } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
//     const jogadorEncontrado = await this.jogadorModel.findOne({ _id }).exec(); // busca o jogador pelo email

//     if (!jogadorEncontrado) {
//       throw new NotFoundException(`Jogador com e-mail ${email} não encontrado`); // retorna um erro
//     }
//     await this.jogadorModel
//       .findOneAndUpdate({ _id }, { $set: criarJogadorDto })
//       .exec(); // atualiza o jogador no mongoDB
//   }

//   // criar um metodo para consultar todos os jogadores
//   async consultarTodosJogadores(): Promise<Jogador[]> {
//     return await this.jogadorModel.find().exec(); // retorna todos os jogadores do mongoDB
//   }

//   // criar um metodo para consultar um jogador pelo id/email
//   async consultarJogadorId(_id: string): Promise<Jogador> {
//     const jogadorEncontrado = await this.jogadorModel.findOne({ _id }).exec(); 
//     if (!jogadorEncontrado) {
//       throw new Error(`Jogador com e-mail ${_id} não encontrado`); 
//     }
//     return jogadorEncontrado; // retorna o jogador encontrado
//   }

//   // deletar um jogador ou nao retorna nada (void)
//   async deletarJogador(_id: string): Promise<any> {
//     const jogadorRemovido = await this.jogadorModel.deleteOne({ _id }).exec();
//     if (!jogadorRemovido) {
//       throw new Error(`Jogador com e-mail ${_id} não encontrado`); 
//     }
//     return jogadorRemovido + "Jogador Deletado"; // deleta o jogador encontrado, atualizando o array de jogadores menos o encontrado
//   }
// }

@Injectable()
export class JogadoresService {

    constructor(@InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>) {}

    private readonly logger = new Logger(JogadoresService.name)
    

    async criarJogador(criaJogadorDto: CriarJogadorDTO): Promise<Jogador> {

        const { email } = criaJogadorDto

        const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec();

        if (jogadorEncontrado) {
            throw new BadRequestException(`Jogador com e-mail ${email} já cadastrado`)
        } 
            
        const jogadorCriado = new this.jogadorModel(criaJogadorDto)
        return await jogadorCriado.save()
    
    }


    async atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void> {

        const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec();

        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogadodor com id ${_id} não econtrado`)
        }

        await this.jogadorModel.findOneAndUpdate({_id}, 
                {$set: atualizarJogadorDto}).exec()
 
    }


    async consultarTodosJogadores(): Promise<Jogador[]> {
        return await this.jogadorModel.find().exec()
    }

    async consultarJogadorPeloId(_id: string): Promise<Jogador> {
        const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec();

        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com id ${_id} não encontrado`)
        }
        return jogadorEncontrado
    }

    async deletarJogador(_id): Promise<any> {

        const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec();

        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com id ${_id} não encontrado`)
        }

        return await this.jogadorModel.deleteOne({_id}).exec();
    }

}


