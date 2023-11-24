package com.eic.messmenuservice.service;
import com.eic.messmenuservice.models.Day;
import com.eic.messmenuservice.repository.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayService {
    @Autowired
    private DayRepository dayRepository;
    public Day addDay(Day day) {
        return dayRepository.save(day);
    }
    public Day updateDay(String id, Day updatedDay) {
        Day existingDay = dayRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Day not found with id: " + id));

        existingDay.setName(updatedDay.getName());
        existingDay.setMenus(updatedDay.getMenus());

        return dayRepository.save(existingDay);
    }
    public Day getDayById(String id) {
        return dayRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Day not found with id: " + id));
    }

}
