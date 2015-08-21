app.controller('BingoController', ['$scope', function($scope){


}]);


app.controller('CardController', ['$scope', 'BingoPhrases',function($scope,BingoPhrases) {

}]);


app.controller('NamesController', ['$scope', 'BingoPhrases',function($scope,BingoPhrases) {
	
	$scope.Phrases = BingoPhrases;
	$scope.Click = function(event){
		var index = $(event.target).data('num');
		$scope.Phrases[index].Found = 1;
		$("#cell-"+index).html("X");
	};
}]);

function IsBingo(array){
	var numBingo =0;
	var BoxesInRow = 0;
	for(i= 0; i < 25; i++){
		if(i%5==0){
			BoxesInRow = 0;
		}
		if(array[i].Phrase.Found == 1)
			BoxesInRow ++;
		if(BoxesInRow == 5)
			numBingo++;
	}
	return numBingo > 0;
};