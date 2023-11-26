package com.eic.canteenservice.controller;

import com.eic.canteenservice.models.CanteenItem;
import com.eic.canteenservice.service.CanteenItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/canteen")
public class CanteenItemController {
    @Autowired
    private CanteenItemService service;

    @GetMapping
    public List<CanteenItem> getAllFoodItems() {
        return service.getAllFoodItems();
    }

    @GetMapping("/{id}")
    public CanteenItem getFoodItemById(@PathVariable String id) {
        return service.getFoodItemById(id);
    }

    @PostMapping
    public CanteenItem saveFoodItem(@RequestBody CanteenItem foodItem) {
        return service.saveFoodItem(foodItem);
    }

    @DeleteMapping("/{id}")
    public void deleteFoodItem(@PathVariable String id) {
        service.deleteFoodItem(id);
    }

}
