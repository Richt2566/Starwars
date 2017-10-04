var ewokObj = {
	hp: 118,
	attack: 9,
	counterAttack: 8,
	isactive: false,
	defense: false
};

var wormObj = {
	hp: 106,
	attack: 8,
	counterAttack: 6,
	isactive: false,
	defense: false
};

var chewyObj = {
	hp: 118,
	attack: 9,
	counterAttack: 8,
	isactive: false,
	defense: false
};

var jarjarObj = {
	hp: 100,
	attack: 11,
	counterAttack: 1,
	isactive: false,
	defense: false
};

var attackCounter = 0;

$(document).ready(function(){

 // to choose character
$("#ewok1").on("click", function(){
	$("#ewok1").fadeTo("fast", .50);
    //$("ewok1").animate({left: '550px'});
	$("#worm1").fadeTo("fast", .50);
	$("#chewy1").fadeTo("fast", .50);
	$("#jarjar1").fadeTo("fast", .50);
	$("#worm2").fadeTo("fast", .50);
	$("#chewy2").fadeTo("fast", .50);
	$("#jarjar2").fadeTo("fast", .50);
	$("#ewok3").fadeTo("fast", .50);
	ewokObj.isactive = true;
});

$("#worm1").on("click", function(){
	$("#ewok1").fadeTo("fast", .50);
	$("#worm1").fadeTo("fast", .50);
	$("#chewy1").fadeTo("fast", .50);
	$("#jarjar1").fadeTo("fast", .50);
	$("#ewok2").fadeTo("fast", .50);
	$("#chewy2").fadeTo("fast", .50);
	$("#jarjar2").fadeTo("fast", .50);
	$("#worm3").fadeTo("fast", .50);
	wormObj.isactive = true;
});

$("#chewy1").on("click", function(){
	$("#ewok1").fadeTo("fast", .50);
	$("#worm1").fadeTo("fast", .50);
	$("#chewy1").fadeTo("fast", .50);
	$("#jarjar1").fadeTo("fast", .50);
	$("#ewok2").fadeTo("fast", .50);
	$("#worm2").fadeTo("fast", .50);
	$("#jarjar2").fadeTo("fast", .50);
	$("#chewy3").fadeTo("fast", .50);
	chewyObj.isactive = true;
});

$("#jarjar1").on("click", function(){
	$("#ewok1").fadeTo("fast", .50);
	$("#worm1").fadeTo("fast", .50);
	$("#chewy1").fadeTo("fast", .50);
	$("#jarjar1").fadeTo("fast", .50);
	$("#ewok2").fadeTo("fast", .50);
	$("#chewy2").fadeTo("fast", .50);
	$("#worm2").fadeTo("fast", .50);
	$("#jarjar3").fadeTo("fast", .50);
	jarjarObj.isactive = true;
});

// to choose opponenet
$("#ewok3").on("click", function(){
	$("#ewok3").fadeTo("fast", .50);
	$("#worm3").fadeTo("fast", .50);
	$("#chewy3").fadeTo("fast", .50);
	$("#jarjar3").fadeTo("fast", .50);
	$("#worm4").fadeTo("fast", .50);
	$("#chewy4").fadeTo("fast", .50);
	$("#jarjar4").fadeTo("fast", .50);
	$("#ewok4").fadeTo("fast", 100);
	ewokObj.defense = true;
});

$("#worm3").on("click", function(){
	$("#ewok3").fadeTo("fast", .50);
	$("#worm3").fadeTo("fast", .50);
	$("#chewy3").fadeTo("fast", .50);
	$("#jarjar3").fadeTo("fast", .50);
	$("#ewok4").fadeTo("fast", .50);
	$("#chewy4").fadeTo("fast", .50);
	$("#jarjar4").fadeTo("fast", .50);
	wormObj.defense = true;
});

$("#chewy3").on("click", function(){
	$("#ewok3").fadeTo("fast", .50);
	$("#worm3").fadeTo("fast", .50);
	$("#chewy3").fadeTo("fast", .50);
	$("#jarjar3").fadeTo("fast", .50);
	$("#worm4").fadeTo("fast", .50);
	$("#ewok4").fadeTo("fast", .50);
	$("#jarjar4").fadeTo("fast", .50);
	chewyObj.defense = true;
});

$("#jarjar3").on("click", function(){
	$("#ewok3").fadeTo("fast", .50);
	$("#worm3").fadeTo("fast", .50);
	$("#chewy3").fadeTo("fast", .50);
	$("#jarjar3").fadeTo("fast", .50);
	$("#worm4").fadeTo("fast", .50);
	$("#chewy4").fadeTo("fast", .50);
	$("#ewok4").fadeTo("fast", .50);
	jarjarObj.defense = true;
});

// what happens when attack button is clicked


$("#attackbutton").on("click", function(){

		//ewok vs wormguy
	if (ewokObj.isactive && wormObj.defense) {
		
		// attack counter goes up by 1
		attackCounter++

		// counter attack goes up by one
		wormObj.counterAttack++

		// variable - attack doubles
		var result1 = ewokObj.attack * attackCounter;

		//opponent hp goes down 
		var outcome1 = wormObj.hp - result1 * attackCounter;

		// your character hp goes down 
		var outcome2 = ewokObj.hp - (wormObj.counterAttack * attackCounter);

		console.log("ewok attack # is: " + result1);
		console.log("worms hp is " + outcome1);
		console.log("ewok hp is " + outcome2);
		console.log("worm attack is " + wormObj.counterAttack)

		//prints on screen your hp
		$("#userhp").text(outcome2);
		//prints on screen opponent hp
		$("#enemyhp").text(outcome1)

		//check if your hp is zero
		if (outcome2 <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#ewok2").remove();
		}

		//check if opponent hp is zero
		else if (outcome1 <= 0) {
			$("#comment1").text("You defeated worm guy.")
			console.log("you win");
			$("#worm4").remove();
			wormObj.defense = false;
			$("#chewy3").fadeTo("fast", 100)

		// reset 

		}
	}

	// ewok vs chewy
	else if (ewokObj.isactive && chewyObj.defense) {
		attackCounter++
		chewyObj.counterAttack++
		var result1 = ewokObj.attack + attackCounter;
		var outcome1 = chewyObj.hp - (result1 * attackCounter);
		var outcome2 = ewokObj.hp - (chewyObj.counterAttack * attackCounter);
		console.log("ewok attack is " + result1);
		console.log(" chewy hp is " + outcome1);
		console.log(" ewok hp is " + outcome2);
		console.log("worm attack is " + chewyObj.counterAttack)
		$("#userhp").text(outcome2);
		$("#enemyhp").text(outcome1)

		if (outcome2 <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#ewok2").remove();
		}
		else if (outcome1 <= 0) {
			$("#comment1").text("You defeated chewy.")
			console.log("you win");
			$("#chewy4").remove();
			chewyObj.defense = false;
		}
	}
	// ewok vs jarjar
	else if (ewokObj.isactive && jarjarObj.defense) {
		attackCounter++
		jarjarObj.counterAttack++
		var result1 = ewokObj.attack // + attackCounter;
		var outcome1 = jarjarObj.hp - (result1 * attackCounter);
		var outcome2 = ewokObj.hp - (jarjarObj.counterAttack * attackCounter);
		console.log(" ewok attack is " + result1 * attackCounter);
		console.log(" jarjar hp is " + outcome1);
		console.log(" ewok hp is " + outcome2);
		console.log("jarjar attack is " + jarjarObj.counterAttack)
		$("#userhp").text(outcome2);
		$("#enemyhp").text(outcome1)

		if (outcome2 <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#ewok2").remove();
		}
		else if (outcome1 <= 0) {
			$("#comment1").text("You defeated Jar jar.")
			console.log("you win");
			$("#jarjar4").remove();
			jarjarObj.defense = false;
		}
	}
	// // worm vs ewok
	if (wormObj.isactive && ewokObj.defense) {
		console.log(" ewok hp is " + ewokObj.hp);
		console.log(" worm hp is " + wormObj.hp);
		attackCounter++
		ewokObj.counterAttack++
		var result2 = wormObj.attack * attackCounter;
		var outcome4 = ewokObj.hp - (result2 * attackCounter);
		var outcome3 = wormObj.hp - (ewokObj.counterAttack + attackCounter);
		console.log(" ewok hp is " + outcome4);
		console.log(" worm hp is " + outcome3);
		console.log(" worm attack is " + result2);
		
		console.log("ewok attack is " + ewokObj.counterAttack)
		$("#userhp").text(outcome3);
		$("#enemyhp").text(outcome4)

		if (outcome3 <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#worm2").remove();
		}
		else if (outcome4 <= 0) {
			$("#comment1").text("You defeated Ewok.")
			console.log("you win");
			$("#ewok4").remove();
			ewokObj.defense = false;
		}
	}
	// // worm vs chewy
	if (wormObj.isactive && chewyObj.defense) {
		console.log(" chewy hp is " + chewyObj.hp);
		console.log(" worm hp is " + wormObj.hp);
		attackCounter++
		chewyObj.counterAttack++
		var resulta = wormObj.attack + attackCounter;
		var outcomea = chewyObj.hp - (resulta * attackCounter);
		var outcomeb = wormObj.hp - (chewyObj.counterAttack * attackCounter);
		console.log(" worm attack is " + resulta);
		
		console.log("worm attack is " + wormObj.counterAttack)
		$("#userhp").text(outcomeb);
		$("#enemyhp").text(outcomea)

		if (outcomeb <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#worm2").remove();

		}
		else if (outcomea <= 0) {
			$("#comment1").text("You defeated chewy.")
			console.log("you win");
			$("#chewy4").remove();
			chewyObj.defense = false;
		}
	}
	// // worm vs jarjar
	if (wormObj.isactive && jarjarObj.defense) {
		console.log(" jarjar hp is " + jarjarObj.hp);
		console.log(" worm hp is " + wormObj.hp);
		attackCounter++
		jarjarObj.counterAttack++
		var resultc = wormObj.attack + attackCounter;
		var outcomed = jarjarObj.hp - (resultc * attackCounter);
		var outcomee = wormObj.hp - (jarjarObj.counterAttack * attackCounter);
		console.log(" jarjar hp is " + outcomed);
		console.log(" worm hp is " + outcomee);
		console.log(" worm attack is " + resultc);
		console.log("jarjar attack is " + wormObj.counterAttack)

		$("#userhp").text(outcomee);
		$("#enemyhp").text(outcomed)

		if (outcomee <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#worm2").remove();
		}
		else if (outcomed <= 0) {
			$("#comment1").text("You defeated jar jar.")
			console.log("you win");
			$("#jarjar4").remove();
			jarjarObj.defense = false;
		}
	}
	// chewy vs ewok
	if (chewyObj.isactive && ewokObj.defense) {
		attackCounter++
		ewokObj.counterAttack++
		var resultf = chewyObj.attack + attackCounter;
		var outcomeg = ewokObj.hp - (resultf * attackCounter);
		var outcomeh = chewyObj.hp - (ewokObj.counterAttack * attackCounter);
		console.log(" chewy attack is " + resultf);
		console.log(" ewok hp is " + outcomeg);
		console.log(" chewy hp is " + outcomeh);
		console.log("chewy attack is " + chewyObj.counterAttack)
		$("#userhp").text(outcomeh);
		$("#enemyhp").text(outcomeg)

		if (outcomeh <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#chewy2").remove();
		}
		else if (outcomeg <= 0) {
			$("#comment1").text("You defeated ewok.")
			console.log("you win");
			$("#ewok4").remove();
			ewokObj.defense = false;
		}
	}
	// chewy vs worm
	if (chewyObj.isactive && wormObj.defense) {
		attackCounter++
		wormObj.counterAttack++
		var resulti = chewyObj.attack + attackCounter;
		var outcomej = wormObj.hp - (resulti * attackCounter);
		var outcomek = chewyObj.hp - (wormObj.counterAttack * attackCounter);
		console.log(" worm attack is " + resulti);
		console.log(" chewy hp is " + outcomej);
		console.log(" worm hp is " + outcomek);
		console.log("worm attack is " + chewyObj.counterAttack)
		$("#userhp").text(outcomek);
		$("#enemyhp").text(outcomej)

		if (outcomek <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#chewy2").remove();
		}
		else if (outcomej <= 0) {
			$("#comment1").text("You defeated worm.")
			console.log("you win");
			$("#worm4").remove();
			wormObj.defense = false;
		}
	}
	//chewy vs jarjar
	if (chewyObj.isactive && jarjarObj.defense) {
		attackCounter++
		jarjarObj.counterAttack++
		var resultl = chewyObj.attack + attackCounter;
		var outcomem = jarjarObj.hp - (resultl * attackCounter);
		var outcomeo = chewyObj.hp - (jarjarObj.counterAttack * attackCounter);
		console.log(" worm attack is " + resultl);
		console.log(" jarjar hp is " + outcomem);
		console.log(" chewy hp is " + outcomeo);
		console.log("worm attack is " + chewyObj.counterAttack)
		$("#userhp").text(outcomeo);
		$("#enemyhp").text(outcomem)

		if (outcomeo <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#chewy2").remove();
		}
		else if (outcomem <= 0) {
			$("#comment1").text("You defeated jar jar.")
			console.log("you win");
			$("#jarjar4").remove();
			jarjarObj.defense = false;
		}
	}
	//jar jar vs ewok
	if (jarjarObj.isactive && ewokObj.defense) {
		attackCounter++
		ewokObj.counterAttack++
		var resultp = jarjarObj.attack + attackCounter;
		var outcomeq = ewokObj.hp - (resultp * attackCounter);
		var outcomer = jarjarObj.hp - (ewokObj.counterAttack * attackCounter);
		console.log(" jarjar attack is " + resultp);
		console.log(" ewok hp is " + outcomeq);
		console.log(" jarjar hp is " + outcomer);
		console.log("ewok attack is " + ewokObj.counterAttack)
		$("#userhp").text(outcomer);
		$("#enemyhp").text(outcomeq)

		if (outcomer <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#jarjar2").remove();
		}
		else if (outcomeq <= 0) {
			$("#comment1").text("You defeated ewok.")
			console.log("you win");
			$("#ewok4").remove();
			ewokObj.defense = false;
		}
	}
	// jarjar vs worm needs work
	if (jarjarObj.isactive && wormObj.defense) {
		attackCounter++
		wormObj.counterAttack++
		var results = jarjarObj.attack + attackCounter;
		var outcomet = wormObj.hp - (results * attackCounter);
		var outcomeu = jarjarObj.hp - (wormObj.counterAttack * attackCounter);
		console.log(" jar attack is " + results);
		console.log(" worm hp is " + outcomet);
		console.log(" jar hp is " + outcomeu);
		console.log("worm attack is " + wormObj.counterAttack)
		$("#userhp").text(outcomeu);
		$("#enemyhp").text(outcomet)

		if (outcomeu <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#jarjar2").remove();
		}
		else if (outcomet <= 0) {
			$("#comment1").text("You defeated worm.")
			console.log("you win");
			$("#worm4").remove();
			wormObj.defense = false;
		}
	}
	//jarjar vs chewy
	if (jarjarObj.isactive && chewyObj.defense) {
		attackCounter++
		chewyObj.counterAttack++
		var resultv = jarjarObj.attack + attackCounter;
		var outcomex = chewyObj.hp - (resultv * attackCounter);
		var outcomey = jarjarObj.hp - (chewyObj.counterAttack * attackCounter);
		console.log(" jar attack is " + resultv);
		console.log(" chewy hp is " + outcomex);
		console.log(" jar hp is " + outcomey);
		console.log("chewy attack is " + chewyObj.counterAttack)
		$("#userhp").text(outcomey);
		$("#enemyhp").text(outcomex)

		if (outcomey <= 0) {
			$("#comment1").text("You Lose.");
			console.log("lose");
			$("#jarjar2").remove();
		}
		else if (outcomex <= 0) {
			$("#comment1").text("You defeated chewy.")
			console.log("you win");
			$("#jarjar4").remove();
			chewyObj.defense = false;
		}
	}

});
});

