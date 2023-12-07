package com.eic.foodle.servicerequest.repository;

import com.eic.foodle.servicerequest.models.ServiceRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ServiceRequestRepository extends MongoRepository<ServiceRequest,String> {
    Iterable<ServiceRequest> findByStatus(String status);
}
