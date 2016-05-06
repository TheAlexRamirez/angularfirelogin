(function(){
	'use strict'
	
	angular
		.module("todoapp")
		.controller("loginCtrl",loginCtrl);
	
	loginCtrl.$inject = ['Auth','$location'];
	function loginCtrl(Auth,$location){
		var login = this;
		login.login = function(){
			
			
			Auth.$authWithPassword({
			email: login.email,
			password: login.password
			}).then(function(userData) {
				console.log("User logged in: ",userData);
				$location.path("/");
				location.reload();
			}).catch(function(error) {
				console.log(error);
			});
			
			
			
		}
		
	}
	
})();