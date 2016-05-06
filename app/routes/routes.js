(function(){
	'use strict'
	
	angular
		.module('todoapp')
		.config(configuration);
	
	configuration.$inject = ['$routeProvider'];
	function configuration($routeProvider){
		
		$routeProvider.when("/", {
		  // the rest is the same for ui-router and ngRoute...
		  controller: "homeCtrl",
	      controllerAs : "home",
		  templateUrl: "app/views/home/home.html",
		  resolve: {
			// controller will not be loaded until $waitForAuth resolves
			// Auth refers to our $firebaseAuth wrapper in the example above
			"currentAuth": ["Auth", function(Auth) {
			  // $waitForAuth returns a promise so the resolve waits for it to complete
			  return Auth.$waitForAuth();
			  //return Auth.$requireAuth();
			}]
		  }
		}).when("/login", {
		  // the rest is the same for ui-router and ngRoute...
		  controller: "loginCtrl",
		  controllerAs : "login",
		  templateUrl: "app/views/login/login.html"
		  
		}).when("/register", {
		  // the rest is the same for ui-router and ngRoute...
		  controller: "registerCtrl",
		  controllerAs : "register",
		  templateUrl: "app/views/register/register.html"
		  
		});
	}
	
})();