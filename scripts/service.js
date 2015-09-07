//Declare the Namespace
(function(){
  //declare namespace and public functions
  namespace("BlueSpeed.Bingo.Service");
  //Import namespaces
  $App = BlueSpeed.Bingo.App;
  $Constants = BlueSpeed.Bingo.Constants;

  $App.service('BingoCard',['$log',function($log){
	   return new BingoCard($log, $Constants.GetPhrases()).GetCard();
   }]);

   function BingoCard($log, $phrases){
	    //private vars
	    var _card =  new Card();
	    var _phrases = $phrases.list;
	    var _log = $log;
      generateCard();
	    //public functions
      this.GetCard = function(){
        if(!_card.IsDefined())
          generateCard()
        return _card;
      };
      //private functions
	    function generateCard(){
        for(row = 0;row < 5; row++)
          for(col =0; col < 5;col++)
			       addToCardAt(row,col);
	    };

      function getPhrase(row,col, phrase, found){
        if(typeof found === 'undefined' || !isInteger(found))
			     found = 0;
        return {"Found":found,"Row":row,"Column":col,"Phrase": phrase};
      };

	function getRandomPhrase(row,col){
		var index = Math.floor(Math.random() * (_phrases.length));
		var p = _phrases[index];
			_phrases.splice(index,1);
		return  getPhrase(row,col,p,0);
	};

	function addToCardAt(row,col){
		if(isCenterCell(row,col))
			_card.Set(row,col,getPhrase(row,col,"Free Space", 1));
		else
			_card.Set(row,col,getRandomPhrase(row,col));
	};

  function isCenterCell(row,col){
      return row==2 && col == 2;
  }

	function isInteger(value){
  	if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return true;
  	} else {
      return false;
  	}
	};
};

Card = function(){
  var _array = [[]];
  var _header = "BINGO".split('');

  this.Header = _header;
  this.AsArray = _array;

  this.GetHeader = function(column){
    if(typeof column === 'undefined' || !isInteger(column))
      return _header;
    return _header[column];
  };
  this.Get =function(row,column){
    return _array[column][row];
  };
  this.Set = function(row,column,value){
    createRowIfNull(column);
    _array[column][row] = value;
  };
  this.GetColumn = function(column){
    return _array[column];
  };
  this.IsDefined = function(){
    return _array !== 'undefined';
  };
  this.IsCellBingo = function(row,col){
    if(typeof col == 'undefined' || typeof row == 'undefined')
      return false;
    if(col == row && isDiaginalBingo())
      return true;
    if ((col == 5-row || row == 5-col) && isReverseDiaginalBingo())
      return true;
    if(isColumnBingo(col) || isRowBingo(row))
      return true;
    return false;
  };
  function createRowIfNull(col){
    if(_array[col] == 'undefined' || !_array[col])
      _array[col] = [];
  };
  function isColumnBingo(col){
    for(i =0;i < 5;i++)
      if(_array[col][i].Found == 0)
        return false;
    return true;
  };
  function isRowBingo(row){
    for(i =0;i < 5;i++)
      if(_array[i][row].Found == 0)
        return false;
    return true;
  };
  function isDiaginalBingo(){
    for(i=0;i<5;i++)
      if(_array[i][i].Found == 0)
        return false;
    return true;
  };
  function isReverseDiaginalBingo(){
    for(i=0;i<5;i++)
      if(_array[i][4-i].Found == 0)
        return false;
    return true;
  };
};
})();
