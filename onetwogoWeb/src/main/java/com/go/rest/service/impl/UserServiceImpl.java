package com.go.rest.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.go.rest.service.UserService;
import com.go.rest.service.dao.UserRepository;
import com.go.rest.vo.User;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public User test(String id){
		return userRepository.findOne(id);
		
	}
	
}
