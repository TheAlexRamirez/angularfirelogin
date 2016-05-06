(function(){
	'use strict'
	
	angular
		.module("todoapp")
		.controller("homeCtrl",homeCtrl);
	
	homeCtrl.$inject = ['currentAuth','Auth','$firebaseArray'];
	function homeCtrl(currentAuth,Auth,$firebaseArray){
		var home = this;
		home.userLoggedIn = currentAuth;
	   
		if(home.userLoggedIn){
			var ref = new Firebase("https://batch8test.firebaseio.com/"+home.userLoggedIn.uid);
			home.items = $firebaseArray(ref);
		}
		
			
		home.addItem = function(){
			if(home.text != null){
				home.items.$add({
					text : home.text
				});
				home.text = '';
			}
			
		}
		
		home.removeItem = function(item){
			home.items.$remove(item);
		}
		
					  
	
		
		
		
	}
	
})();