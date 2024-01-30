import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria, Transacao } from "./transacao";

@Injectable({
    providedIn: 'root'
})
export class TransacaoService {
    constructor( private http:HttpClient) {}

    private url = 'http://localhost:8080';

    public listarTransacoes():Observable<Transacao[]>{
        return this.http.get<Transacao[]>(this.url+"/transacoes");
    }

    public cadastrarTransacao(transacao:Transacao):Observable<any>{
        console.log(transacao);
        return this.http.post<any>(this.url+"/transacoes", transacao);
    }

    public atualizarTransacao(transacao:Transacao):Observable<any>{
        return this.http.put<any>(this.url+"/transacoes", transacao);
    }

    public deletarTransacao(id:number):Observable<any>{
        return this.http.delete<any>(this.url+"/transacoes?id="+id);
    }

    public listarCategorias():Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.url+"/categorias");
    }

    public excluirTodasAsTransacoes():Observable<Transacao[]>{
        return this.http.delete<Transacao[]>(this.url+"/transacoes/excluirtodas");
    }

}

