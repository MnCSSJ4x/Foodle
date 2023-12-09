package com.eic.canteenservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CanteenserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CanteenserviceApplication.class, args);
	}

}
