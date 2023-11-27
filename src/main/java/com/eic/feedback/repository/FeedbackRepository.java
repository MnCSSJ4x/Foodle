package com.eic.feedback.repository;

import com.eic.feedback.models.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<Feedback,String> {
}
