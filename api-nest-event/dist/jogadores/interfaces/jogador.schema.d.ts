import * as mongoose from 'mongoose';
export declare const jogadorSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome?: string;
    ranking?: string;
    posicaoRanking?: number;
    urlFotoJogador?: string;
    email?: string;
    telefoneCelular?: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome?: string;
    ranking?: string;
    posicaoRanking?: number;
    urlFotoJogador?: string;
    email?: string;
    telefoneCelular?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome?: string;
    ranking?: string;
    posicaoRanking?: number;
    urlFotoJogador?: string;
    email?: string;
    telefoneCelular?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
