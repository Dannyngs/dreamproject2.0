(function() {
  'use strict';

  angular
    .module('dreamproject20', ['ui.router', 'ui.bootstrap', 'toastr','chart.js','ipCookie','pascalprecht.translate'])
  .factory('SocketService',  function() {
      var socket = io.connect('http://football-back-dev.ap-southeast-1.elasticbeanstalk.com/')


        socket.on("connection",function(){

            console.log('connected to the server')
        })

        return {
            emit:function(name,data){
                socket.emit(name,data)
            },
            loginok:function(callball){
                 socket.on('loginok',callball)
            },
            loginfailed:function(callball){
                socket.on('loginfailed',callball)
            },
            logoutok:function(callball){
                 socket.on('logoutok',callball)
            },
            logoutfailed:function(callball){
                socket.on('logoutfailed',callball)
            }


        };
	})
      .factory('UserService', ['$rootScope', 'ipCookie', function($rootScope, ipCookie) {



        return {

			get: function() {
				var user = $rootScope.current_user
                    return user
			},
			login: function(user) {
				console.log('*LOGGED IN ***')
                $rootScope.current_user=user
				ipCookie('current_user', user.username)


			},
			logout: function() {
				console.log('*LOGGED OUT ***')
               $rootScope.current_user=null
               ipCookie.remove('current_user')



			},
			isLoggedIn: function() {
                
                return $rootScope.current_user||false
			}
		}

	}]);

})();
