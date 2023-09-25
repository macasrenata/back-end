import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class JogadoresValidacaoParametrosPipe implements PipeTransform { // implementa a interface PipeTransform e o metodo transform que recebe dois parametros (value, metadata)
  transform(value: any, metadata: ArgumentMetadata) { // metodo transform que recebe dois parametros (value, metadata) e retorna um valor
    if(!value) {
        throw new BadRequestException(`O valor do parametro ${metadata.data} deve ser informado`); // retorna um erro caso o valor do parametro não seja informado
    }
    console.log( `value: ${value} metadata: ${metadata.type}`); // value = valor do parametro, metadata = metadados do parametro
    return value; // retorna o valor do parametro recebido (value) 
  }
}