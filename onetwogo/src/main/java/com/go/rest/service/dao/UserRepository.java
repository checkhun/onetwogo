package com.go.rest.service.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.go.rest.vo.User;

public interface UserRepository extends JpaRepository<User, String> {

}
