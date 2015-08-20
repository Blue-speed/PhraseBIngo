var app = angular.module('BINGO',[]);

app.factory('BingoPhrases',['$log',function($log){
	var list = [];
					var array = AllPhrases.list;
					var length = array.length;
					//$log.debug(data);
						for(i =0; i < 25;i++){
							var index = Math.floor(Math.random() * (length));
							list[i] =  {"Found":0,"Index":i,"Phrase":array[index]};
						}
	
	
	return list;
}]);