package com.go;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableAutoConfiguration
@EntityScan("com.go.rest.vo")
@EnableJpaRepositories("com.go.rest.service.dao")
@ComponentScan({"com.go.rest"})
@PropertySource("application.properties")
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
