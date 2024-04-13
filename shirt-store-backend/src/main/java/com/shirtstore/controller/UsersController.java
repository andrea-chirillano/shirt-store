package com.shirtstore.controller;

import com.shirtstore.model.Users;
import com.shirtstore.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = usersService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Users> getUserById(@PathVariable Long userId) {
        Optional<Users> user = usersService.getUserById(userId);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Users>> getUsersByNameOrEmail(@RequestParam(required = false) String name,
                                                             @RequestParam(required = false) String email) {
        List<Users> users = usersService.getUsersByNameOrEmail(name, email);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users user) {
        Users addedUser = usersService.addUser(user);
        return new ResponseEntity<>(addedUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long userId) {
        usersService.deleteUserById(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Otros métodos según las operaciones que necesites

}
