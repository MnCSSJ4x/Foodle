package com.eic.messmenuservice.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "days")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Day {
    @Id
    private String name;
    private List<Menu> menus;

}
