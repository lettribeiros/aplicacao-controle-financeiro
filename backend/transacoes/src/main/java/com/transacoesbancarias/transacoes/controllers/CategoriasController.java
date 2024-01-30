package com.transacoesbancarias.transacoes.controllers;

import com.transacoesbancarias.transacoes.entities.CategoriasEntity;
import com.transacoesbancarias.transacoes.services.CategoriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("categorias")
@CrossOrigin(origins = "http://localhost:4200/")
public class CategoriasController {

    @Autowired
    CategoriasService categoriasService;

    @GetMapping
    public List<CategoriasEntity> listarTransacoes(){
        return categoriasService.listarCategorias();
    }

}
