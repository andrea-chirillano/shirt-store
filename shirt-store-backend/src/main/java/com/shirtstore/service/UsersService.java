package com.shirtstore.service;

import com.shirtstore.model.Users;
import com.shirtstore.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    // Método para obtener todos los usuarios
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    // Método para obtener un usuario por ID
    @SuppressWarnings("null")
    public Optional<Users> getUserById(Long userId) {
        return usersRepository.findById(userId);
    }

    // Método para obtener usuarios por nombre y/o email
    public List<Users> getUsersByNameOrEmail(String name, String email) {
        return usersRepository.findByNameOrEmail(name, email);
    }

    // Método para agregar un usuario
    @SuppressWarnings("null")
    public Users addUser(Users user) {
        // Puedes agregar lógica adicional antes de guardar, si es necesario
        return usersRepository.save(user);
    }

    // Método para eliminar un usuario por ID
    @SuppressWarnings("null")
    public void deleteUserById(Long userId) {
        // Puedes agregar lógica adicional antes de eliminar, si es necesario
        usersRepository.deleteById(userId);
    }

    // Otros métodos según las operaciones que necesites

}
