(function(){
	'use strict'
	
	angular
		.module("todoapp")
		.controller("registerCtrl",registerCtrl);
	
	registerCtrl.$inject = ['Auth','$location'];
	function registerCtrl(Auth,$location){
		var register = this;
		register.register = function(){
			
			Auth.$createUser({
			email: register.email,
			password: register.password
			}).then(function(userData) {
				console.log("User created with uid: ",userData);
				$location.path("/login");
			}).catch(function(error) {
				console.log(error);
			});
			
		}
		
	}
	
})();