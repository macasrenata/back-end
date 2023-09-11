import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CriarJogador } from "./dtos/criar-jogador.dto";
import { Jogador } from "./interfaces/jogador.interface";
import { v4 as uuidv4 } from "uuid"; // gerar id unico
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { jogadorSchema } from "./interfaces/jogador.schema";

@Injectable()
export class JogadoresService {
  // criação de metodos para a regra de negócio
  // vamos fazer a persditencia em memoria e depois faremos no mongoDB

 // private jogadores: Jogador[] = []; // importado a interface

  // constructor(
  //   @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>
  // ) {} // construtor da classe e injetando o model do jogador e o tipo do model (Jogador), no caso objeto do tipo Jogador

  constructor(
    @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>
  ) {} // construtor da classe e injetando o model do jogador e o tipo do model (Jogador), no caso objeto do tipo Jogador

  private readonly logger = new Logger(JogadoresService.name); // gravar logs em memoria

  // criar um metodo para criar ou atualizar um jogador
  async criarAtualizarJogador(criarJogadorDto: CriarJogador): Promise<void> {
    const { email } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
    // const jogadorEncontrado = this.jogadores.find(
    //   (jogador) => jogador.email === email
    // ); // busca o jogador pelo email

    // vamos refatorar o codigo para usar o mongoDB
    const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec(); // busca o jogador pelo email

    if (jogadorEncontrado) {
      // this.atualizarJogador(jogadorEncontrado, criarJogadorDto);  atualiza o jogador

      // vamos refatorar o codigo para usar o mongoDB
      await this.atualizarJogador(criarJogadorDto)
    } else {
    //  this.criarJogador(criarJogadorDto);  retorna todos os jogadores EM MEMORIA

    // vamos refatorar o codigo para usar o mongoDB
    await this.criarJogador(criarJogadorDto);
    }
  }

  // criar um metodo para consultar todos os jogadores
  async consultarTodosJogadores(): Promise<Jogador[]> {
   // return this.jogadores;  retorna todos os jogadores EM MEMORIA

    // vamos refatorar o codigo para usar o mongoDB
    return await this.jogadorModel.find().exec(); // retorna todos os jogadores do mongoDB
  }

  // criar um metodo para consultar um jogador pelo email
  async consultarJogadorPeloEmail(email: string): Promise<Jogador> {
    // const jogadorEncontrado = this.jogadores.find(
    //   (jogador) => jogador.email === email
    // );  busca o jogador pelo email
    // if (!jogadorEncontrado) {
    //   throw new Error(`Jogador com e-mail ${email} não encontrado`);  retorna um erro
    // }

    // vamos refatorar o codigo para usar o mongoDB

    const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec(); // busca o jogador pelo email
    if (!jogadorEncontrado) {
      throw new Error(`Jogador com e-mail ${email} não encontrado`); // retorna um erro
    }

    return jogadorEncontrado; // retorna o jogador encontrado
  }

  // deletar um jogador ou nao retorna nada (void)
  async deletarJogador(email: string): Promise<any> {
    // const jogadorEncontrado = this.jogadores.find(
    //   (jogador) => jogador.email === email
    // );  busca o jogador pelo email
    // this.jogadores = this.jogadores.filter(
    //    atualiza o array de jogadores
    //   (jogador) => jogador.email !== jogadorEncontrado.email // filtra o jogador encontrado e retorna todos os jogadores menos o encontrado
    // );  deleta o jogador encontrado, atualizando o array de jogadores menos o encontrado

    // vamos refatorar o codigo para usar o mongoDB

    const jogadorRemovido = await this.jogadorModel.deleteOne({ email }).exec(); // busca o jogador pelo email

    return jogadorRemovido + 'Jogador Deletado'; // deleta o jogador encontrado, atualizando o array de jogadores menos o encontrado

  }

  // metodos privados async após a refatoração utilizando Promisses e não mais o array em memoria - void não retorna nada
  private async criarJogador(criarJogadorDto: CriarJogador): Promise<Jogador> {
    //   const { email, telefoneCelular, nome } = criarJogadorDto;  desestruturar o objeto que recebemos do objeto http (POST)
    //   const jogador: Jogador = {
    //     _id: uuidv4(),
    //     nome,
    //     email,
    //     telefoneCelular,
    //     ranking: "A",
    //     posicaoRanking: 1,
    //     urlFotoJogador: "www.google.com.br/foto123.jpg",
    //   };
    //   this.logger.log(`jogador: ${JSON.stringify(jogador)}`);
    //   this.jogadores.push(jogador); // adiciona o jogador no array EM MEMORIA

    // vamos refatorar o codigo para usar o mongoDB
    const jogadorCriado = new this.jogadorModel(criarJogadorDto); // cria um novo jogador com o model do jogador e o dto do jogador
    return await jogadorCriado.save(); // salva o jogador no mongoDB
  }

  // metodos privados async após a refatoração utilizando Promisses e não mais o array em memoria - void não retorna nada
  private async atualizarJogador( criarJogadorDto: CriarJogador): Promise<Jogador> {
    // metodo async só retorna void nãpo retorna nada
    // const { nome } = criarJogadorDto; // desestruturar o objeto que recebemos do objeto http (POST)
    // jogadorEncontrado.nome = nome; // atualizar o nome do jogador

    // vamos refatorar o codigo para usar o mongoDB
    return await this.jogadorModel
      .findOneAndUpdate({ email: criarJogadorDto.email }, { $set: criarJogadorDto }) // campo para realizar a busca e o campo do objeto para realizar a atualização
      .exec(); // atualiza o jogador no mongoDB

  }
}


