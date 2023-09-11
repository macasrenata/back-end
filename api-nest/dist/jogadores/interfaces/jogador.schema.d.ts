import * as mongoose from 'mongoose';
export declare const jogadorSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    telefoneCelular?: string;
    email?: string;
    nome?: string;
    ranking?: string;
    posicaoRanking?: number;
    urlFotoJogador?: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    telefoneCelular?: string;
    email?: string;
    nome?: string;
    ranking?: string;
    posicaoRanking?: number;
    urlFotoJogador?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    telefoneCelular?: string;
    email?: string;
    nome?: string;
    ranking?: string;
    posicaoRanking?: number;
    urlFotoJogador?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
