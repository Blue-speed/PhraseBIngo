app.controller('BingoController', ['$scope', function($scope){


}]);


app.controller('CardController', ['$scope', 'BingoPhrases',function($scope,BingoPhrases) {

}]);


app.controller('NamesController', ['$scope', 'BingoPhrases',function($scope,BingoPhrases) {
	
	$scope.Phrases = BingoPhrases;
	$scope.Click = function(event){
		var index = $(event.target).data('num');
		$scope.Phrases[index].Found = 1;
		$("#Name-"+index).addClass("Found");
		$("#cell-"+index).html("X");
	};
}]);