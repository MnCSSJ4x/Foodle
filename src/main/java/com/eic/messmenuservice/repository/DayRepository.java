package com.eic.messmenuservice.repository;

import com.eic.messmenuservice.models.Day;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DayRepository extends MongoRepository<Day,String> {
}
