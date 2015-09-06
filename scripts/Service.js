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
	    var _card = [];
	    var _phrases = $phrases.list;
	    var _log = $log;
	    //public functions
      this.GetCard = function(){
        if(_card != [])
          generateCard()
        return _card;
      };
      //private functions
	    function generateCard(){
        for(i =0; i < 25;i++){
			         addToCardAt(i);
		      }
	    };

      function getPhrase(index, phrase, found){
        if(typeof found === 'undefined' || !isInteger(found))
			     found = 0;
        return {"Found":found,"Index":index,"Phrase": phrase};
      };

	function getRandomPhrase(){
		var index = Math.floor(Math.random() * (_phrases.length));
		var p = _phrases[index];
			_phrases.splice(index,1);
		return  getPhrase(i,p);
	};

	function addToCardAt(index, phrase){
		if(i==12)
			_card[index] = getPhrase(i,"Free Space", 1);
		else
			_card[index] = getRandomPhrase();
	};

	function isInteger(value){
  	if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return true;
  	} else {
      return false;
  	}
	};
};
})();
