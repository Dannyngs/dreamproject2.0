(function() {
  'use strict';

  angular
    .module('dreamproject20')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$http,SocketService,UserService,$translate,CoreService) {
   
      
    
      var startday = new Date().setFullYear(2012,9,1); 
      
      var nowdate=(new Date()-startday)/1000/60/60/24; 
      $scope.runningDate=nowdate.toFixed(0);
      $scope.lang='En';
      $scope.dataPanelOpened=false;
      $scope.loginOpened=false;
     // $scope.username='test123';
     // $scope.password='123123';
     
      $scope.loginmsg='APP_LOGIN';
      
     
     
   
   

      
    
    
      
      CoreService.getMatches($translate.use())
                .then(function(list){
         $scope.list=list;
         
      },
                      function(error){
          alert(error);
      });

     
   
      
      
      

      $scope.getit=function(race){
          
          
          
        
          
          $scope.resultsShown=false;
          $scope.resultText='APP_ANALYZING';
          
        if(UserService.isLoggedIn()){
        
              $scope.dataPanelOpened=true;
          }else{$scope.loginOpened=true;
               return;
               }
        
          
          $scope.home=race.home;
          $scope.away=race.away;
          $scope.time=race.time;
         $scope.labels = [$scope.home,$scope.away];
          $scope.data = [0,0];
          $scope.odds_max_dt = [0,0];$scope.odds_avg_dt = [0,0];$scope.odds_min_dt = [0,0];
          
          
          async.parallel([
                function(callback){
               
                   $http({
                  method: 'POST',
                  url: 'http://football-back-dev.ap-southeast-1.elasticbeanstalk.com/api/scores',
                data:{url:'http://score.nowscore.com/odds/match.aspx?id='+race.id}
                }).then(
             function successCallback(rs) {
             
             var response=rs.data;
             console.log(response.name)
            
             $scope.game_name = response.name
    		$scope.bet_names = Object.keys(response.data)
    		$scope.data = response.data

            
            
            
            
           
            //******************Start Calculating  Result********************/
    		// disable SNAI and William
    		for( var i=0; i<18; i++ ) {
    			$scope.data[$scope.bet_names[3]][i] = 0
    			$scope.data[$scope.bet_names[5]][i] = 0
    		}

    		///// time
    		var start = new Date().getTime()
    		/////

    		var map = {
    			A: -1,
    			B: 0,
    			C: 1,
    			D: 2,
    			E: 3,
    			F: 4,
    			G: 5,
    			H: 6,
    			I: 7,
    			J: 8,
    			K: 9,
    			L: 10,
    			M: 11
    		}

    		// $scope.bet_names.forEach(function(name) {
    		// 	console.log(name,'@H', $scope.data[name][map.H])
    		// })

    		var alpha = function(row) {
    			var a = row[map.H] + row[map.I]/2
    			console.log('alpha', a)
    			return a
    		}

    		var bravo = function(row) {
    			return row[map.J] + row[map.I]/2
    		}

    		var charlie = function(row) {
    			return row[map.K] + row[map.L]/2
    		}

    		var delta = function(row) {
    			return row[map.M] + row[map.L]/2
    		}

    		var echo = function(row) {
    			var d1 = row[map.H]*row[map.I],
    				d2 = row[map.I]*row[map.J],
    				d3 = row[map.H]*row[map.J]
    			var result = (row[map.H]*row[map.I]*row[map.J]*100)/(d1+d2+d3) || 0
    			return result
    		}

    		var foxtrot = function(row) {
    			return echo(row)/row[map.H] || 0
    		}

    		var golf = function(row) {
    			return echo(row)/row[map.I] || 0
    		}

    		var hotel = function(row) {
    			return echo(row)/row[map.J] || 0
    		}

    		var india = function(row) {
    			var d1 = row[map.K]*row[map.L],
    				d2 = row[map.L]*row[map.M],
    				d3 = row[map.K]*row[map.M]
    			return (row[map.K]*row[map.L]*row[map.M]*100)/(d1+d2+d3) || 0
    		}

    		var juliet = function(row) {
    			return india(row)/row[map.K] || 0
    		}

    		var kilo = function(row){
  		 	return india(row)/row[map.L] || 0
  		}

    		var lima = function(row) {
    			return india(row)/row[map.M] || 0
    		}

    		var mike = function(row) {
    			return (golf(row)+hotel(row)-foxtrot(row))*(row[map.H]-1)
    		}

    		var november = function(row) {
    			return (golf(row)+hotel(row)-foxtrot(row))*(row[map.I]-1)
    		}

    		var oscar = function(row) {
  			return (golf(row)+hotel(row)-foxtrot(row))*(row[map.J]-1)
    		}

    		var papa = function(row) {
    			return (kilo(row)+lima(row)-juliet(row))*(row[map.K]-1)
    		}

    		var quebec = function(row) {
    			return (kilo(row)+lima(row)-juliet(row))*(row[map.L]-1)
    		}

    		var romeo = function(row) {
    			return (kilo(row)+lima(row)-juliet(row))*(row[map.M]-1)
    		}

    		////

    		var sumFoxtrot = 0
    		$scope.bet_names.forEach(function(name, i) {
    			var f = foxtrot($scope.data[name])
    			if (i<9) {
    				sumFoxtrot += f
    			}
    		})

    		var sumJuliet = 0
    		$scope.bet_names.forEach(function(name, i) {
    			var j = juliet($scope.data[name])
    			if (i<9) {
    				sumJuliet += j
    			}
    		})

    		var sumGolf = 0
    		$scope.bet_names.forEach(function(name, i) {
    			var g = golf($scope.data[name])
    			if (i<9) {
    				sumGolf += g
    			}
    		})

    		var sumKilo = 0
    		$scope.bet_names.forEach(function(name, i) {
    			var k = kilo($scope.data[name])
    			if (i<9) {
    				sumKilo += k
    			}
    		})

  		var sumHotel = 0
  	    $scope.bet_names.forEach(function(name, i) {
  	    	var h = hotel($scope.data[name])
  	    	if (i<9) {
  	    		sumHotel += h
  	    	}
  	    })

  		var sumLima = 0
  	    $scope.bet_names.forEach(function(name, i) {
  	    	var l = lima($scope.data[name])
  	    	if (i<9) {
  	    		sumLima += l
  	    	}
  	    })

    		var sierra = function() {  			
    			var s = (sumFoxtrot/7 + sumJuliet/7)/2
    			return s
    		}

    		var tango = function() {
    			var t = (sumGolf/7 + sumKilo/7)/2
    			return t
    		}

    		var uniform = function() {
    			return (sumHotel/7 + sumLima/7)/2
    		}

  		var sumMike = 0
  	    $scope.bet_names.forEach(function(name, i) {	    	
  	    	var m = mike($scope.data[name])
  	    	if (i<9) {
  	    		sumMike += m
  	    	}
  	    })

  		var sumNovember = 0
  	    $scope.bet_names.forEach(function(name, i) {
  		    var n = november($scope.data[name])
  		    if (i<9) {
  		    	sumNovember += n
  		    }
  		})

  		var sumOscar = 0
  		$scope.bet_names.forEach(function(name, i) {
  		    var o = oscar($scope.data[name])
  		    if (i<9) {
  		    	sumOscar += o
  		    }
  		})

  		var sumPapa = 0
  		$scope.bet_names.forEach(function(name, i) {
  		    var p = papa($scope.data[name])
  		    if (i<9) {
  		    	sumPapa += p
  		    }
  		})

  		var sumQuebec = 0
  		$scope.bet_names.forEach(function(name, i) {
  		    var q = quebec($scope.data[name])
  		    if (i<9) {
  		    	sumQuebec += q
  		    }
  		})

  		var sumRomeo = 0
  		$scope.bet_names.forEach(function(name, i) {
  		    var r = romeo($scope.data[name])
  		    if (i<9) {
  		    	sumRomeo += r
  		    }
  		})

    		var aile = function() {
    			return sumMike/7
    		}

     		var sword = function() {
    			return sumNovember/7
    		}

    		var launcher = function() {
    			return sumOscar/7
    		}

    		var forbidden = function() {
    			return sumPapa/7
    		}

    		var calamity = function() {
    			return sumQuebec/7
    		}

    		var raider = function() {
    			return sumRomeo/7
    		}

    		var freedom = function() {
    			return aile()-forbidden()
    		}

    		var justice = function() {
    			return sword() - calamity()
    		}

    		var destiny = function() {
    			return launcher() - raider()
    		}

    		var impulse = function() {
    			return sierra()/freedom()
    		}

    		var force = function() {
    			return tango()/justice()
    		}

    		var blast = function() {
    			return uniform()/destiny()
    		}

    		var zaku = function() {
    			return force()/impulse()
    		}

    		var gundam = function() {
    			return force()/blast()
    		}

    		var victor = function() {
    			return impulse()/blast()
    		}

    		var whiskey = function() {
    			return impulse()/force()
    		}

    		var heero = function() {
    			return victor() + whiskey()
    		}

    		var duo = function() {
    			return zaku() + gundam()
    		}

    		var xray = function() {
    			return blast()/force()
    		}

    		var yankee = function() {
    			return blast()/impulse()
    		}

    		var trowa = function() {
    			return xray() + yankee()
    		}

    		var quatre = function() {
    			return heero() - duo()
    		}

    		var wufei = function() {
    			return trowa() - duo()
    		}  		

    		$scope.heero = heero()
    		$scope.duo = duo()
    		$scope.trowa = trowa()
    		$scope.quatre = quatre()
    		$scope.wufei = wufei()
    		
    		console.log('Heero', heero())
    		console.log('Duo', duo())
    		console.log('Trowa', trowa())
    		console.log('Quatre', quatre())
    		console.log('Wufei', wufei())

    		var end = new Date().getTime()
    		console.log('Took %s milliseconds', String(end-start))


        /*
         *
         * NOTE:
         * Row 1 = heero and trowa
         * Row 2 = quatre and wufei
         *
         *
         */

        // STEP 1 LOGIC
        // first row must have 2 positive number
        $scope.condition_1 = $scope.heero > 0 && $scope.trowa > 0 ? 'YES' : 'NO'
        //second row must have only 1 negative number
        $scope.condition_2 = ($scope.quatre < 0 && $scope.wufei > 0) || ($scope.quatre > 0 && $scope.wufei < 0) ? 'YES' : 'NO'


        // don't buy by default
        $scope.condition_negative = "DON'T BUY"
          

        //STEP 2 LOGIC
        // if the negative number is equal or less than -1, bet the opposite team
        if ($scope.quatre <= -1 ) $scope.condition_negative = 'AWAY'
        if ($scope.wufei <= -1 ) $scope.condition_negative = 'HOME'

        // if the negative number is between -1 and 0, bet the home team
        if ($scope.quatre > -1 && $scope.quatre < 0 ) $scope.condition_negative = 'HOME'
        if ($scope.wufei > -1 && $scope.wufei < 0 ) $scope.condition_negative = 'AWAY'


        $scope.min = Math.min($scope.quatre, $scope.wufei)
      
        $scope.sign = $scope.min < -1 ? '<' : '>'

        //if STEP 1 busts, then don't buy
        if ($scope.condition_1 == 'NO' || $scope.condition_2 == 'NO') $scope.condition_negative = "DON'T BUY"

                       console.log('teslk1;'+$scope.condition_negative)

         callback(null,1)
             
             
        
             
                  }, 
                        function errorCallback(response) {
                     $scope.data = [0,0]; 
                    $scope.resultText="APP_NO_DATA";
                    
                  });
                  
              },
                function(callback){
          $http({
                  method: 'GET',
                  url: 'http://football-back-dev.ap-southeast-1.elasticbeanstalk.com'
                }).then(
              function successCallback(rs){
              
                            var data=rs.data;
                            var max = data.max;
                            var max_ins=data.max_ins;
                            var min =data.min;
                            var min_ins =data.min_ins;
                            var avg = data.avg;
                            var avg_ins = data.avg_ins;
                            
              
                  if($translate.use()=='english'){
                         $scope.odds_max_lb = ["主胜率", "和率", "客胜率", "返还率"];
                  $scope.series_max = ['初盘最高值', '即时最高值'];
                       $scope.odds_min_lb = ["主胜率", "和率", "客胜率", "返还率"];
                  $scope.series_min = ['初盘最低值', '即时最低值'];  
                         $scope.odds_avg_lb = ["主胜率", "和率", "客胜率", "返还率"];
                  $scope.series_avg = ['初盘平均值', '即时平均值'];
                      
                  }else
                    {
                        $scope.odds_max_lb = ["主胜率", "和率", "客胜率", "返还率"];
                  $scope.series_max = ['初盘最高值', '即时最高值'];
                       $scope.odds_min_lb = ["主胜率", "和率", "客胜率", "返还率"];
                  $scope.series_min = ['初盘最低值', '即时最低值'];  
                         $scope.odds_avg_lb = ["主胜率", "和率", "客胜率", "返还率"];
                  $scope.series_avg = ['初盘平均值', '即时平均值'];
                    }
                  
                  $scope.odds_max_dt = [
                                [max[3],max[4],max[5],max[6]],
                                [max_ins[3],max_ins[4],max_ins[5],max_ins[6]]
                            ];
                  
                 
                  $scope.odds_min_dt = [
                                [min[3],min[4],min[5],min[6]],
                                [min_ins[3],min_ins[4],min_ins[5],min_ins[6]]
                            ];
                  
                 
                  $scope.odds_avg_dt = [
                                [avg[3],avg[4],avg[5],avg[6]],
                                [avg_ins[3],avg_ins[4],avg_ins[5],avg_ins[6]]
                            ];
                  
                  
                  
                  
                  
                                  console.log('task2 done;')
                                    callback(null,2)
              
              
                    },
              function errorCallback(response){});
       
                     
       
                }],
                function(error,results){
                console.log('resulting;'+$scope.condition_negative)
                  //***Output Result***//
             switch($scope.condition_negative)
                 {
                     case 'HOME':
                         {
                             Math.seedrandom($scope.home);
                                var homeRate = Math.random() * (100-51)+51;
                                var awayRate=100-homeRate;
                                $scope.data = [homeRate.toFixed(2),awayRate.toFixed(2)];
                           
                              $scope.resultsShown = true;
                            
                             $scope.recTeam=$scope.home;
                              $scope.resultText="RECONMMENDED";
                                                          

                                break;
                         }
                     case 'AWAY':
                         {
                              Math.seedrandom($scope.away);
                                var away = Math.random() * (100-51)+51;
                                var home=100-away;
                                $scope.data = [home.toFixed(2),away.toFixed(2)];
                                $scope.resultsShown = true;
                                  $scope.recTeam=$scope.away;
                                $scope.resultText="RECONMMENDED";

                                
                                break;
                         }
                     case "DON'T BUY":
                         {
                              $scope.resultText="APP_NOTBUY";
                              $scope.data = [0,0];
                               break;
                         }
                         
                         
                 }
             
                
            });
          
          
        
                 
         

          
          
  }

      
      
      
      
      
      
      
      
      
      
      
      
      $scope.closeDataPanel=function(){
         $scope.dataPanelOpened=false;
 
      }
      
      $scope.closeLoginPanel=function(){
          
         $scope.loginOpened=false;
          
 
      }
      
      $scope.openLoginPanel=function(){
          
           $scope.loginOpened=true;
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        SocketService.logoutfailed(function(res){

                toastr.error(res)
            })
        SocketService.logoutok(function(res){

                    UserService.logout()
                    console.log('log out ok!')
                  // $location.path('/login')
                   // toastr.success("Good Bye! ", allowHtml: true})
            })
        SocketService.loginfailed(function(res){
            console.log(res)
            
            $scope.loginmsg=res.msg=='Incorrect login infomation'?'APP_LOGIN_FAILED':res.msg;
            
                       $scope.$apply()


            })
        SocketService.loginok(function(res){
                    console.log('login ok')
                    UserService.login(res)
                    $scope.loginOpened=false;
            $scope.$apply()
                    
            })
        $scope.UserLogout = function() {

         SocketService.emit('logout',SocketService.id)



 	}
        $scope.UserLogin = function(u,p) {
        $scope.loginmsg='APP_LOGGING_IN';
       SocketService.emit("login",{ username: u, password: p })

                   
                             
        
       
    
    
    
    
    
    
    }
       
        $scope.changeLanguage = function () {
                $scope.lang=$translate.use()=='english'?'En':'中';
                $translate.use($translate.use()=='english'?'chinese':'english');
            
              CoreService.getMatches($translate.use())
                .then(function(list){
                  $scope.list=list;
         
      },
                      function(error){
          alert(error);
      });

           
        };
        $scope.getCurLang = function(){
             return $translate.use();
        };

      
      
      
      
      
      
      
      
      
      
      
  }
    
    
    
    
    
    
    
})();


