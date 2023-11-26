package com.eic.canteenservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "canteen_food_items")
@Data
public class CanteenItem {
    @Id
    private String id;
    private String title;
    private byte[] image;
    private String description;
    private double price;
}
