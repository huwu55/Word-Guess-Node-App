// Letter constructor
function Letter(l){
	this.l = l;
	this.guessed = false;
	this.returnChar = function(){
		if(this.l === " ") return " ";
		return this.guessed ? this.l : '_';
	};
	this.updateGuessedChar = function(c){
		if(c === this.l)	this.guessed = true;
	};
}

module.exports = Letter;