// Letter constructor
function Letter(l){
	this.l = l;
	this.guessed = false;
	if (this.l === " ")	this.guessed = true;
	this.returnChar = function(){
		if(this.l === " ") return " ";
		return this.guessed ? this.l : '_';
	};
	this.updateGuessedChar = function(c){
		var updated = false;
		if(c === this.l || c.toUpperCase() === this.l || c.toLowerCase() === this.l)	{
			if (!this.guessed)	updated = true;
			this.guessed = true;
		}
		return updated;
	};
}

module.exports = Letter;