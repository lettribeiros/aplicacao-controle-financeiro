package com.transacoesbancarias.transacoes.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity(name = "transacoes")
public class TransacoesEntity {

    @Id
    @Column(name = "idtransacao")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "datatransacao")
    private LocalDate data;

    @Column(name = "valortransacao")
    private double valor;

    @OneToOne
    @JoinColumn
    private CategoriasEntity categoria;

}
