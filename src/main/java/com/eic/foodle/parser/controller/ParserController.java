package com.eic.foodle.parser.controller;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("/api/parse")
public class ParserController {
    private static final Logger logger = LoggerFactory.getLogger(ParserController.class);
    @PostMapping(value="/upload")
    public String handleFileUpload(@RequestParam("multipart")MultipartFile file) {

        try {
            logger.debug(file.getContentType());
            // Validate file type
            if (!Objects.equals(file.getContentType(), "application/vnd.ms-excel") && !Objects.equals(file.getContentType(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
                return "Invalid file type. Please upload an Excel file.";
            }

            // Process the Excel file
            InputStream inputStream = file.getInputStream();
            Workbook workbook = WorkbookFactory.create(inputStream);
            Sheet sheet = workbook.getSheetAt(0); // Assuming the data is in the first sheet

            for (Row row : sheet) {
                // Assuming the data is in the first two columns
                Cell cell1 = row.getCell(0);
                Cell cell2 = row.getCell(1);

                // Process the cell values (replace with your logic)
                String value1 = cell1.getStringCellValue();
                String value2 = cell2.getStringCellValue();

                // Perform further processing or store the values as needed
                System.out.println("Value 1: " + value1 + ", Value 2: " + value2);
            }

            workbook.close();
            inputStream.close();

            return "File uploaded and processed successfully.";
        } catch (IOException | EncryptedDocumentException e) {
            e.printStackTrace();
            return "Error processing the Excel file.";
        }
    }
}
