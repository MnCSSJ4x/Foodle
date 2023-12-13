package com.eic.canteenservice.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.eic.canteenservice.models.CanteenItem;
import com.eic.canteenservice.service.CanteenItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/canteen")
public class CanteenItemController {
    private static final Logger LOG = LogManager.getLogger(CanteenItemController.class);

    @Autowired
    private CanteenItemService service;

    @GetMapping
    public List<CanteenItem> getAllFoodItems() {
        LOG.info("Getting all items");
        return service.getAllFoodItems();
    }

    @GetMapping("/{id}")
    public CanteenItem getFoodItemById(@PathVariable String id) {
        LOG.info("Getting item by id");
        return service.getFoodItemById(id);
    }

    @PostMapping
    public CanteenItem saveFoodItem(@RequestBody CanteenItem foodItem) {
        LOG.info("Adding new item to menu");
        return service.saveFoodItem(foodItem);
    }

    @DeleteMapping("/{id}")
    public void deleteFoodItem(@PathVariable String id) {
        service.deleteFoodItem(id);
    }

}
