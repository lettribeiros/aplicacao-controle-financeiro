package com.transacoesbancarias.transacoes.controllers;

import com.transacoesbancarias.transacoes.entities.TransacoesEntity;
import com.transacoesbancarias.transacoes.services.TransacoesService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("transacoes")
@CrossOrigin(origins = "http://localhost:4200/")
public class TransacoesController {

    @Autowired
    TransacoesService transacoesService;

    @GetMapping
    public List<TransacoesEntity> listarTransacoes() {
        return transacoesService.listarTransacoes();
    }

    @PostMapping
    public ResponseEntity cadastrarTransacao (@RequestBody TransacoesEntity transacao){
        if (transacao.getId() == null){
            transacoesService.cadastrarOuAtualizarTransacao(transacao);
            return ResponseEntity.status(201).build();
        } else {
            return ResponseEntity.status(500).build();
        }
    }

    @PutMapping
    public ResponseEntity atualizarTransacao (@RequestBody TransacoesEntity transacao){
        if (transacao.getId() != null && transacoesService.existeTransacao(transacao.getId())){
            transacoesService.cadastrarOuAtualizarTransacao(transacao);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping
    public void deletarTransacao(@PathParam("id") Integer id){
        transacoesService.deletarTransacao(id);
    }

    @DeleteMapping("/excluirtodas")
    public void deletarTodasAsTransacoes(){
        transacoesService.deletarTodasAsTransacoes();
    }

}
