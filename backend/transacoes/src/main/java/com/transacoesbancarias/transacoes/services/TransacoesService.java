package com.transacoesbancarias.transacoes.services;

import com.transacoesbancarias.transacoes.entities.TransacoesEntity;
import com.transacoesbancarias.transacoes.repositories.TransacoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransacoesService {

    @Autowired
    private TransacoesRepository transacoesRepository;

    public List<TransacoesEntity> listarTransacoes(){
        return transacoesRepository.findAll();
    }

    public void cadastrarOuAtualizarTransacao(TransacoesEntity transacoes){
        transacoesRepository.save(transacoes);
    }

    public void deletarTransacao(Integer id){
        transacoesRepository.deleteById(id);
    }

    public boolean existeTransacao(Integer id){
        return transacoesRepository.existsById(id);
    }

    public void deletarTodasAsTransacoes() {
         transacoesRepository.deleteAll();
    }

}
