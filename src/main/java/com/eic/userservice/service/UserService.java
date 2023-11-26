package com.eic.userservice.service;

import com.eic.userservice.models.User;
import com.eic.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;
    public User addUser(User user){
        user.setId(user.getEmailID());
        return repository.save(user);
    }
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUserByEmail(String emailID) {
        return repository.findByemailID(emailID);
    }

    public User updateUserRole(String email, String newRole) {
        User userToUpdate = repository.findByemailID(email);

        if (userToUpdate != null) {
            userToUpdate.setRole(newRole);
            return repository.save(userToUpdate);
        } else {
            return null;
        }
    }
}
