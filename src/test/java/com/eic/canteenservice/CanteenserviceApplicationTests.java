package com.eic.canteenservice;

import com.eic.canteenservice.repository.CanteenItemRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import com.eic.canteenservice.CanteenserviceApplication;
import com.eic.canteenservice.service.CanteenItemService;
import com.eic.canteenservice.controller.CanteenItemController;
import com.eic.canteenservice.models.CanteenItem;

import static org.springframework.test.util.AssertionErrors.assertEquals;

@SpringBootTest(classes =  CanteenserviceApplication.class)
@AutoConfigureMockMvc
class CanteenserviceApplicationTests {
	@Mock
	private CanteenItemRepository canteenItemRepository;

	@InjectMocks
	private CanteenItemController canteenItemController;

	public void CanteenControllerTests(){
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testGetId(){
		CanteenItem item = new CanteenItem();
		item.setId("T1");

		assertEquals("T1", item.getId());
	}


//	@Test
//	void testGetAllFoodItems() {
//		CanteenItem item1 = new CanteenItem();
//		item1.setid("T1");
//		item1.settitle("testName");
//		item1.setdescription("test description")
//	}

}
