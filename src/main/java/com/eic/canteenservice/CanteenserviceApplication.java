package com.eic.canteenservice;

import com.eic.canteenservice.controller.CanteenItemController;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@Slf4j
@SpringBootApplication
@EnableDiscoveryClient
public class CanteenserviceApplication {
	private static final Logger LOG = LogManager.getLogger(CanteenserviceApplication.class);
	public static void main(String[] args) {
		LOG.info("Started canteen service");
		LOG.debug("Started canteen service");
		LOG.warn("Started canteen service");
		LOG.trace("Started canteen service");
		LOG.error("Started canteen service");
		LOG.fatal("Started canteen service");
		SpringApplication.run(CanteenserviceApplication.class, args);
	}

}
