package com.eic.foodle.servicerequest.service;

import com.eic.foodle.servicerequest.models.ServiceRequest;
import com.eic.foodle.servicerequest.repository.ServiceRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceRequestService {

    private final ServiceRequestRepository repository;

    @Autowired
    public ServiceRequestService(ServiceRequestRepository repository) {
        this.repository = repository;
    }

    public ServiceRequest createServiceRequest(ServiceRequest serviceRequest) {
        // Implement any business logic/validation here
        // For simplicity, we just save the service request to the repository
        return repository.save(serviceRequest);
    }

    public Iterable<ServiceRequest> getAllServiceRequests() {
        return repository.findAll();
    }

    public ServiceRequest getServiceRequestById(String id) {
        return repository.findById(id).orElse(null);
    }

    public void updateStatus(String id, String status) {
        ServiceRequest serviceRequest = repository.findById(id).orElse(null);
        if (serviceRequest != null) {
            serviceRequest.setStatus(status);
            repository.save(serviceRequest);
        }
    }
    public Iterable<ServiceRequest> getActiveServiceRequests() {
        return repository.findByStatus("active");
    }
}
