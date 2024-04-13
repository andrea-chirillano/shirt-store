package com.shirtstore.repository;

import com.shirtstore.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long> {

    // Eliminar un usuario por ID
    @Modifying
    @Transactional
    @Query("DELETE FROM Users u WHERE u.id = ?1")
    void deleteById(@NonNull Long userId);

    // Obtener un usuario por ID
    @SuppressWarnings("null")
    Optional<Users> findById(@NonNull Long userId);

    // Obtener usuarios por nombre y/o email
    List<Users> findByNameOrEmail(String name, String email);

    // Método para agregar un usuario con todos los datos
    // No es necesario, ya que JpaRepository proporciona el método save()
    // Puedes simplemente usar save() para agregar un nuevo usuario.

}
