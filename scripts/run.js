//Declare the Namespace
(function(){
//declare namespace and public functions
  namespace("BlueSpeed.Bingo");
//Get a refrence to the app;
	$App = BlueSpeed.Bingo.App;

	$App.controller("BoardController",['$scope', 'BingoCard',Board]);

 	$App.controller('NamesController', ['$scope', 'BingoCard',List]);

function List($scope,$BingoCard) {
//Scope
$scope.Card = $BingoCard;
$scope.Click = function(event){
	var index = $(event.target).data('num');
	$scope.Card[index].Found = 1;
	$("#cell-"+index).html("X");
};
}

function Cell($scope,$BingoCard, $cell){
	$scope.Cell = $BingoCard[$cell];
};

function Board($scope, $BingoCard){


//Create the cell controller
	$scope.Cell = function(){
		var cell = 1; //Get the cell
		return $controller('Cell', {$scope: $scope.$new() ,$BingoCard,cell}).constructor;
	};
};

})();
