angular.module('starter.services', [])

.factory('LoginService', ['$q', function($q) {

	var user = "Smit Gujarathi";
	var sideMenuVisibility = false;
	var newUser = false;
//	 var observerCallbacks = [];

	  //register an observer
//	  this.registerObserverCallback = function(callback){
//	    observerCallbacks.push(callback);
//	  };
//
//	  //call this when you know sideMenuVisibility has been changed
//	  var notifyObservers = function(){
//	    angular.forEach(observerCallbacks, function(callback){
//	      callback();
//	    });
//	  };
	
	 return {
	        loginUser: function(name, pw) {
	            var deferred = $q.defer();
	            var promise = deferred.promise;
	 
	            if (name == 'user@gmail.com' && pw == 'secret') {
	                deferred.resolve('Welcome ' + name + '!');
	            } else {
	                deferred.reject('Wrong credentials.');
	            }
	            promise.success = function(fn) {
	                promise.then(fn);
	                return promise;
	            }
	            promise.error = function(fn) {
	                promise.then(null, fn);
	                return promise;
	            }
	            return promise;
	        },
	        getUserName :function(){
	        	return user;
	        },
	        setSideMenuVisibility:function(value){
	        	sideMenuVisibility = value;
//	        	 angular.forEach(observerCallbacks, function(callback){
//	    		      callback();
//	    	  });
	        },
	        getSideMenuVisibility:function(){
	        	return sideMenuVisibility;
	        },
	        setNewUser : function(value) {
	        	newUser = value;
	        },
	        getNewUser: function() {
	        	return newUser;
	        }
//	        ,
//	        registerObserverCallback : function(callback){
//	    	    observerCallbacks.push(callback);
//	    	  },
//	    	  notifyObservers : function(){
//	    		    angular.forEach(observerCallbacks, function(callback){
//	    		      callback();
//	    	  });
//	    	  }
	    }
	}]);