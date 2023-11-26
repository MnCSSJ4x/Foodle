package com.eic.userservice.controller;

import com.eic.userservice.models.User;
import com.eic.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return service.getUserByEmail(email);
    }
    @PostMapping
    public User saveUser(@RequestBody User user) {
        return service.addUser(user);
    }

    @PutMapping("/{email}/updateRole")
    public User updateUserRole( @PathVariable String email, @RequestParam String newRole){
        return service.updateUserRole(email, newRole);
    }
}
