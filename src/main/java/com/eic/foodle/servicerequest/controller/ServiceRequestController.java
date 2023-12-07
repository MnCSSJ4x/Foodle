package com.eic.foodle.servicerequest.controller;

// ServiceRequestController.java
import com.eic.foodle.servicerequest.models.ServiceRequest;
import com.eic.foodle.servicerequest.service.ServiceRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/service-requests")
public class ServiceRequestController {

    private final ServiceRequestService service;

    @Autowired
    public ServiceRequestController(ServiceRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ServiceRequest createServiceRequest(@RequestBody ServiceRequest serviceRequest) {
        return service.createServiceRequest(serviceRequest);
    }

    @GetMapping
    public Iterable<ServiceRequest> getAllServiceRequests() {
        return service.getAllServiceRequests();
    }

    @GetMapping("/{id}")
    public ServiceRequest getServiceRequestById(@PathVariable String id) {
        return service.getServiceRequestById(id);
    }

    @PatchMapping("/{id}")
    public void updateStatus(@PathVariable String id, @RequestParam String status) {
        service.updateStatus(id, status);
    }

    @GetMapping("/active")
    public Iterable<ServiceRequest> getActiveServiceRequests() {
        return service.getActiveServiceRequests();
    }
}
