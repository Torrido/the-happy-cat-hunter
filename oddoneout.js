
function picSlot (n){
return Math.floor (Math.random()*n) 
}
var body = document.body

function makeCard (index) {
var card = document.createElement("div");
card.className = "js-card card-unknown";
card.dataset.index = index;
return card
}

function attachCard (card) {
	body.appendChild (card)
}

var numCards = 24;
var cards = [];
var points = 0
function count() {
         points += 1;
         document.getElementById( "qty" ).value = points;
}

for (var i = 0; i < numCards; i++){
	var card = makeCard(i);
	cards.push (card);
	attachCard(card);
}

 var correct = picSlot(numCards);
 console.log(correct);
 
 function addBadCardClass (element) {
	 element.classList.remove("card-unknown");
	 element.classList.add("card-bad")
 }
 function addGoodCardClass (element) {
	 element.classList.remove("card-unknown");
	 element.classList.add("card-good")
 }
 

 
 body.onclick = function (evt){
	if(!evt.target.classList.contains("js-card")) {
		return
	}
	var card = evt.target
    var index = parseInt(card.dataset.index, 10);
    var isCorrect = index === correct;
	if (isCorrect){
		addGoodCardClass(card);
		 if (points < (numCards/2)) {
			 alert("Nice! You found the happy cat, and it only took " + points + " angry ones. Play again?");
			 location.reload();
		 } else {
			 alert("Wow mate, that took forever. The " + points + " angry cats you bothered are going to be waiting for you at home. Play again?");
			 location.reload();
		 }
		 
	} else {
		addBadCardClass(card);
        count(); 
    };
		}
		
	
 


 
 