(function() {
  'use strict';

  angular
    .module('dreamproject20', ['ui.router', 'ui.bootstrap', 'toastr','chart.js','ipCookie','pascalprecht.translate','afkl.lazyImage'])
  .factory('SocketService',  function() {
      var socket = io.connect('http://dreamprojet2back-env.ap-northeast-1.elasticbeanstalk.com/')
//var socket = io.connect('http://localhost/')

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
        console.log(user)
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

	}])
  .factory('CoreService',function($q){

      return {
          getMatches:function(curlang){
            var deferred = $q.defer();
            var promise = deferred.promise;

               //Get Matches List
              require(['http://score.nowscore.com/data/bf.js?1456213905000','http://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.0/seedrandom.min.js'],
                      function ($) {


                  var raceList =Array();
                  if(curlang=='chinese')
                  {
               for(var i=0;i<A.length;i++)
    {

        var race={id:A[i][0],home:A[i][5].replace("<font color=#880000>(中)</font>", ""),away:A[i][8],time:A[i][10],league:B[A[i][1]][2]}
          raceList.push(race);
        }

           }
                  else
                  {
              for(var i=0;i<A.length;i++)
    {

        var race={id:A[i][0],home:A[i][6].replace("<font color=#880000>(中)</font>", ""),away:A[i][9],time:A[i][10],league:B[A[i][1]][3]}
          raceList.push(race);
        }

           }

               deferred.resolve(raceList);




          },function(err){deferred.reject(err)});





              return promise;


      }//end getMatches

      }//end CoreService

    })//Old Method to get race data
  .directive('lazy', function($timeout) {
              return {
                restrict: 'C',
                link: function (scope, elm, attrs) {
                    $timeout(function() { $(elm).lazyload() }, 0);
                }
              }
            })
            .factory('authInterceptor', function ($rootScope, $q, $window,UserService) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if (UserService.get()) {
        config.headers.token = UserService.get().token;
      }
      return config;
    }
  }

});;


  })();
