var app = angular.module('BINGO',[]);

app.factory('BingoPhrases',['$log',function($log){
	var list = [];
					var array = AllPhrases.list;
						for(i =0; i < 24;i++){
							var index = Math.floor(Math.random() * (array.length));
							list[i] =  {"Found":0,"Index":i,"Phrase":array[index]};
							array.splice(index,1);
						}
	
	
	return list;
}]);