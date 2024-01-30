package com.transacoesbancarias.transacoes.services;

import com.transacoesbancarias.transacoes.entities.CategoriasEntity;
import com.transacoesbancarias.transacoes.repositories.CategoriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriasService {

    @Autowired
    private CategoriasRepository categoriasRepository;

    public List<CategoriasEntity> listarCategorias(){
        return categoriasRepository.findAll();
    }

}
