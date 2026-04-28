package com.portfolio.cbw.controller;

import com.portfolio.cbw.model.Post;
import com.portfolio.cbw.repository.PostRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

    private final PostRepository repo;

    public PostController(PostRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Post> all() {
        return repo.findAll();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Post> bySlug(@PathVariable String slug) {
        return repo.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
