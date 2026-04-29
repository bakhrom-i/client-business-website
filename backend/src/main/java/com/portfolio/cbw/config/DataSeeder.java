package com.portfolio.cbw.config;

import com.portfolio.cbw.model.Post;
import com.portfolio.cbw.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

/**
 * Inserts a few sample posts on first boot so the /blog page has content.
 * Idempotent — only seeds when the table is empty.
 */
@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedPosts(PostRepository repo) {
        return args -> {
            if (repo.count() > 0) return;

            Post welcome = new Post();
            welcome.setSlug("welcome");
            welcome.setTitle("Welcome");
            welcome.setContent(
                "This is a sample blog post served from the Spring Boot backend on Render. " +
                "The post list is fetched by the Angular frontend via /api/posts."
            );
            welcome.setPublishedAt(LocalDateTime.now().minusDays(3));
            repo.save(welcome);

            Post stack = new Post();
            stack.setSlug("how-this-was-built");
            stack.setTitle("How this was built");
            stack.setContent(
                "Spring Boot 3 exposes a REST API backed by PostgreSQL on Render. " +
                "Angular 17 is deployed on Vercel and proxies /api/* to the backend. " +
                "GitHub Actions runs the build on every push."
            );
            stack.setPublishedAt(LocalDateTime.now().minusDays(1));
            repo.save(stack);

            Post performance = new Post();
            performance.setSlug("notes-on-the-free-tier");
            performance.setTitle("Notes on the free tier");
            performance.setContent(
                "Render's free web services sleep after 15 minutes of inactivity. " +
                "First request after a sleep takes ~30 seconds to wake the dyno. " +
                "After that, latency is normal."
            );
            performance.setPublishedAt(LocalDateTime.now());
            repo.save(performance);
        };
    }
}
