(function(){
	'use strict'
	
	angular
		.module('todoapp')
		.factory("Auth", AuthService);
	
	AuthService.$inject = ['$firebaseAuth'];
	function AuthService($firebaseAuth){
		var ref = new Firebase("https://batch8test.firebaseio.com");
		return $firebaseAuth(ref);
	}


})();