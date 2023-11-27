package com.eic.feedback.controller;

import com.eic.feedback.models.Feedback;
import com.eic.feedback.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackService service;

    @GetMapping
    public List<Feedback> getAllFeedbacks() {
        return service.getAllFeedbacks();
    }

    @GetMapping("/{id}")
    public Feedback getFeedbackById(@PathVariable String id) {
        return service.getFeedbackById(id);
    }

    @PostMapping
    public Feedback saveFeedback(@RequestBody Feedback feedback) {
        return service.saveFeedback(feedback);
    }

    @DeleteMapping("/{id}")
    public void deleteFeedback(@PathVariable String id) {
        service.deleteFeedback(id);
    }

}
