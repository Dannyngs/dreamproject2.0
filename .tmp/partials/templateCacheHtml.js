angular.module("dreamproject20").run(["$templateCache", function($templateCache) {$templateCache.put("app/dataPanel.html","<div ng-class=\"{\'is-visible\':dataPanelOpened}\" class=\"subscribe-popup col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12\"><a ng-click=\"closeDataPanel()\" class=\"close-button hide-subscribe\"><i class=\"icon fa fa-close\"></i></a><div class=\"content col-xs-12\"><h4>{{home}} - {{away}}</h4>{{myname}}<h5 style=\"color:#e71d36;padding:20px;\" translate=\"{{resultText}}\" translate-value-team=\"{{recTeam}}\"></h5><div class=\"dataPanel\" ng-show=\"resultsShown\"><div class=\"col-lg-5 col-lg-offset-1\"><canvas id=\"doughnut\" class=\"chart chart-doughnut\" chart-data=\"data\" chart-labels=\"labels\" chart-legend=\"true\"></canvas></div><div class=\"visible-xs\" style=\"color:gray\">{{morse_code}}</div><div class=\"col-lg-5\"><canvas id=\"line\" chart-colours=\"line1_color\" class=\"chart chart-line\" chart-data=\"odds_max_dt\" chart-labels=\"odds_max_lb\" chart-legend=\"true\" chart-series=\"series_max\"></canvas><div class=\"whitefont\" ng-hide=\"moreData\" translate=\"MOREDATA\"></div></div><div class=\"hidden-xs\" style=\"color:gray\">{{morse_code}}</div><div class=\"col-lg-5 col-lg-offset-1 no-pad\"><canvas id=\"line\" chart-colours=\"line2_color\" class=\"chart chart-line\" chart-data=\"odds_min_dt\" chart-labels=\"odds_min_lb\" chart-legend=\"true\" chart-series=\"series_min\"></canvas></div><div class=\"col-lg-5 no-pad\"><canvas id=\"line\" chart-colours=\"line3_color\" class=\"chart chart-line\" chart-data=\"odds_avg_dt\" chart-labels=\"odds_avg_lb\" chart-legend=\"true\" chart-series=\"series_avg\"></canvas></div></div></div></div>");
$templateCache.put("app/loginPanel.html","<div ng-class=\"{\'is-visible\':loginOpened}\" class=\"subscribe-popup col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12\"><a ng-click=\"closeLoginPanel()\" class=\"close-button hide-subscribe\"><i class=\"icon fa fa-close\"></i></a><div class=\"content col-xs-12\"><h4>Dream Project</h4><p class=\"desc mrg-top-sm\">{{loginmsg|translate}}</p><div class=\"subscribe-form-container col-xs-12 no-pad\"><form class=\"subscribe-form\"><div class=\"col-xs-12 no-pad\"><div class=\"input-container\"><input id=\"\" ng-model=\"username\" type=\"text\" name=\"EMAIL\" autocomplete=\"off\" class=\"subscribe-email\" placeholder=\"ID\" value=\"footballadmin\"><div class=\"input-border-bottom\"></div></div><div class=\"input-container\"><input id=\"\" ng-model=\"password\" type=\"password\" name=\"EMAIL\" autocomplete=\"off\" class=\"subscribe-email\" placeholder=\"Password\" value=\"123123\"><div class=\"input-border-bottom\"></div></div><div class=\"col-xs-12 notif-container no-pad\"><div class=\"form-notif\"></div></div><div class=\"button-container col-xs-12 no-pad\"><button type=\"button\" ng-click=\"UserLogin(username,password)\" class=\"button button-green button-full\">Log in</button></div></div></form></div></div></div>");
$templateCache.put("app/css/AjaxLoader.html","<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\"><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL /template/avec/css/AjaxLoader.gif was not found on this server.</p><p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p></body></html>");
$templateCache.put("app/css/mCSB_buttons.html","<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\"><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL /template/avec/css/mCSB_buttons.png was not found on this server.</p><p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p></body></html>");
$templateCache.put("app/fonts/glyphicons-halflings-regular.html","<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\"><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL /template/avec/fonts/glyphicons-halflings-regular.woff2 was not found on this server.</p><p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p></body></html>");}]);