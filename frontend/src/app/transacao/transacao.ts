import { DatePipe } from "@angular/common";

export class Transacao {
    id?: number|null;
    data?: Date|null;
    valor?: number|null;
    categoria?: {
        id: number | null;
        nome?: string | null
    } | null;

    constructor(id?:number|null, data?:Date|null, valor?:number|null, categoria?: { id: number | null, nome?: string | null } | null){
        this.id = id;
        this.data = data;
        this.valor = valor;
        this.categoria = categoria || {id:null, nome:null};
    }
}

export class Categoria {
    id?: number | null;
    nome?: string|null;

    constructor(id?:number|null, nome?:string|null){
        this.id = id;
        this.nome = nome;
    }
}