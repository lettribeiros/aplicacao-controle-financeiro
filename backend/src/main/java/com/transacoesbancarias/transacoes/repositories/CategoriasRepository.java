package com.transacoesbancarias.transacoes.repositories;

import com.transacoesbancarias.transacoes.entities.CategoriasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepository extends JpaRepository<CategoriasEntity, Integer> {
}
