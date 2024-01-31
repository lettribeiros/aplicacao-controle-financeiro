import { Component, OnInit } from '@angular/core';
import { TransacaoService } from './transacao.service';
import { Categoria, Transacao } from './transacao';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent implements OnInit{

  constructor(private transacaoService: TransacaoService){}

  ngOnInit(): void {
      this.listarTodasTransacoes();
      this.listarTodasCategorias();
  }

  listaTransacoes:Transacao[] = [];

  listaTransacoesPorData:Transacao[] = [];

  listaCategorias:Categoria[] = [];

  transacaoSelecionada:Transacao = new Transacao;

  temTransacao: boolean = true;

  dataFiltro?: Date;

  filtroAtivo:boolean = false;


  listarTodasTransacoes():void {
    this.transacaoService.listarTransacoes().subscribe(
      (resposta) => {
        if (resposta.length == 0){
          this.temTransacao = false;
        }
        this.listaTransacoes = resposta;
        this.filtroAtivo = false;
        this.temTransacao = true;
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  selecionaTransacao(transacao:Transacao): void{
    this.transacaoSelecionada = transacao;
  }

  deletarTransacaoSelecionada(id?:number|null): void{
    this.transacaoService.deletarTransacao(id!).subscribe(
      () => {
        alert("Transação excluída com sucesso!")
        this.listarTodasTransacoes();
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  deletarTodasAsTransacoes():void {
    this.transacaoService.excluirTodasAsTransacoes().subscribe(
      () => {
       alert("Todas as transações foram excluídas");
       this.listarTodasTransacoes(); 
       this.temTransacao = false;
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  listarTodasCategorias():void {
    this.transacaoService.listarCategorias().subscribe(
      (resposta) => {
        this.listaCategorias = resposta;
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  valorTotalCategoria(categoria?: String | null){

    let valorTotal = 0;

    if(!this.filtroAtivo){
      for (let transacao of this.listaTransacoes){
        if(transacao.categoria?.nome === categoria){
          if(transacao.valor == undefined || transacao.valor == null){
            transacao.valor = 0
          }
  
          valorTotal += transacao.valor
        }
      }
    } else {
      for (let transacao of this.listaTransacoesPorData){
        if(transacao.categoria?.nome === categoria){
          if(transacao.valor == undefined || transacao.valor == null){
            transacao.valor = 0
          }
  
          valorTotal += transacao.valor
        }
      }
    }

    return valorTotal;
  }

  filtrarTransacoes(){
    this.filtroAtivo = true;

    for (let transacao of this.listaTransacoes){
      if(transacao.data == this.dataFiltro){
        this.listaTransacoesPorData.push(transacao);
      } 
    }

    if(this.listaTransacoesPorData.length == 0){
      this.temTransacao = false;
    }
  }

}
