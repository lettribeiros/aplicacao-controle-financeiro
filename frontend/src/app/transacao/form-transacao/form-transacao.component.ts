import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TransacaoService } from "../transacao.service";
import { Categoria, Transacao } from "../transacao";


@Component({
    selector: 'app-form-transacao',
    templateUrl: './form-transacao.component.html',
    styleUrls: ['./form-transacao.component.scss']
  })
export class FormTransacaoComponent implements OnInit{
    constructor( private transacaoService: TransacaoService){}

    ngOnInit(): void {
        this.listarTodasCategorias();
    }

    @Output()
    statusParaAtualizacao: EventEmitter<boolean> = new EventEmitter(false);

    @Input()
    transacao:Transacao = new Transacao();

    listaCategorias:Categoria[] = [];

    limpar(){
        this.transacao = new Transacao;
    }

    salvar():void{
        this.transacaoService.cadastrarTransacao(this.transacao).subscribe(
            () => {
                alert("Transação cadastrada com sucesso!")
                this.limpar();
                this.statusParaAtualizacao.emit(true);
            },
            (erro) => {
                console.log(erro);
            }
        )
    }

    alterar():void{
        this.transacaoService.atualizarTransacao(this.transacao).subscribe(
            () => {
                alert("Transação atualizada com sucesso!")
                this.limpar();
                this.statusParaAtualizacao.emit(true);
            },
            (erro) => {
                console.log(erro);
            }
        )
    }

    listarTodasCategorias():void {
        this.transacaoService.listarCategorias().subscribe(
          (resposta) => {
            console.log(resposta);
            this.listaCategorias = resposta;
          },
          (erro) => {
            console.log(erro);
          }
        )
      }

}