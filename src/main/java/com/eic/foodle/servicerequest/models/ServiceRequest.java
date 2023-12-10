package com.eic.foodle.servicerequest.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "service-request")
public class ServiceRequest {
    @Id
    private String id;
    private String requestType;
    private String name;
    private String email;
    private String phoneNumber;
    private String additionalInfo;
    private String status;
}
