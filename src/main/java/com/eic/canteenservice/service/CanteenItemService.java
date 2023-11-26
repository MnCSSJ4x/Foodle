package com.eic.canteenservice.service;

import com.eic.canteenservice.models.CanteenItem;
import com.eic.canteenservice.repository.CanteenItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CanteenItemService {
    @Autowired
    private CanteenItemRepository repository;

    public List<CanteenItem> getAllFoodItems() {
        return repository.findAll();
    }

    public CanteenItem getFoodItemById(String id) {
        return repository.findById(id).orElse(null);
    }

    public CanteenItem saveFoodItem(CanteenItem foodItem) {
        return repository.save(foodItem);
    }

    public void deleteFoodItem(String id) {
        repository.deleteById(id);
    }

}
