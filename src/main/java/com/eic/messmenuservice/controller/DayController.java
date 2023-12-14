package com.eic.messmenuservice.controller;
import com.eic.messmenuservice.models.Day;
import com.eic.messmenuservice.service.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/days")
public class DayController {
    @Autowired
    private DayService dayService;
    @PostMapping
    public Day addDay(@RequestBody Day day) {
        return dayService.addDay(day);
    }

    @PutMapping("/{id}")
    public Day updateDay(@PathVariable String id, @RequestBody Day updatedDay) {
        return dayService.updateDay(id, updatedDay);
    }
    @GetMapping
    public List<Day> getAllDays(){
        return dayService.getDays();
    }
    @GetMapping("/{id}")
    public Day getDayById(@PathVariable String id) {
        return dayService.getDayById(id);
    }
}
