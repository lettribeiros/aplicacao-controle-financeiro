package com.transacoesbancarias.transacoes.repositories;


import com.transacoesbancarias.transacoes.entities.TransacoesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface TransacoesRepository extends JpaRepository<TransacoesEntity, Integer> {

}
