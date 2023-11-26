package com.eic.canteenservice.repository;

import com.eic.canteenservice.models.CanteenItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CanteenItemRepository extends MongoRepository<CanteenItem,String> {


}
