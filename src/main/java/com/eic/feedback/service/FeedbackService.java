package com.eic.feedback.service;

import com.eic.feedback.models.Feedback;
import com.eic.feedback.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository repository;

    public List<Feedback> getAllFeedbacks() {
        return repository.findAll();
    }

    public Feedback getFeedbackById(String id) {
        return repository.findById(id).orElse(null);
    }

    public Feedback saveFeedback(Feedback feedback) {
        return repository.save(feedback);
    }

    public void deleteFeedback(String id) {
        repository.deleteById(id);
    }



}
