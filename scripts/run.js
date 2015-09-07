//Declare the Namespace
(function(){
//declare namespace and public functions
  namespace("BlueSpeed.Bingo");
//Get a refrence to the app;
	$App = BlueSpeed.Bingo.App;

	$App.controller("BoardController",['$scope', '$timeout',Board]);

	$App.controller('NamesController', ['$scope',List]);

	$App.controller('BingoController', ['$scope', 'BingoCard',Game]);

function List($scope) {
$scope.Click = function(event){
	var row = $(event.target).data('row');
	var col = $(event.target).data('col');
	$scope.Card.Get(row,col).Found = 1;
	$scope.TestBingo(row,col);
};
}

function Board($scope){
};

function Game($scope,$BingoCard){
	$scope.Card = $BingoCard;
	$scope.IsBingo = false;
	$scope.TestBingo = function(row,col){
		if(!$scope.IsBingo)
			$scope.IsBingo = $scope.Card.IsCellBingo(row,col);
	};
};

})();
