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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;


@SpringBootTest(classes =  CanteenserviceApplication.class)
@AutoConfigureMockMvc
class CanteenserviceApplicationTests {
	@Mock
	private CanteenItemRepository canteenItemRepository;

	@InjectMocks
	private CanteenItemController canteenItemController;
	public void ItemControllerTest() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testGetId(){
		CanteenItem item = new CanteenItem();
		item.setId("T1");

		assertEquals("T1", item.getId());
	}
	@Test
	void testGetTitle() {
		CanteenItem item = new CanteenItem();
		item.setTitle("testTitle");

		assertEquals("testTitle", item.getTitle());
	}


	@Test
	void testGetAllFoodItems() {
		CanteenItem item1 = new CanteenItem();
		item1.setId("T1");
		item1.setTitle("testName1");
		item1.setDescription("test description1");
		item1.setPrice(10);

		CanteenItem item2 = new CanteenItem();
		item2.setId("T2");
		item2.setTitle("testName2");
		item2.setDescription("test description2");
		item2.setPrice(20);

		List<CanteenItem> mockItemList = Arrays.asList(item1, item2);
		when(canteenItemRepository.findAll()).thenReturn(mockItemList);
		System.out.println(canteenItemRepository.findAll());
		System.out.println(canteenItemController);
//		List<CanteenItem> result = canteenItemController.getAllFoodItems();
//
//		assertEquals(mockItemList.size(), result.size());
//		assertEquals(mockItemList.get(0).getTitle(), result.get(0).getTitle());
	}

}
