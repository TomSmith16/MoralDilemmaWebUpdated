var dilemmas = ["abandon.png", 	//GAME
				"abandon1.png",
				"baby.png",		//REAL
				"baby1.png",
				"civilian.png",	//REAL
				"civilian1.png",
				"fathers.png",	//GAME
				"fathers1.png",
				"fatman.png",	//REAL
				"fatman1.png",
				"lifeboat.png",	//REAL
				"lifeboat1.png",
				"trolley.png",	//REAL
				"trolley1.png",
				"squadsplit.png",//GAME
				"squadsplit1.png",
				"zombie.png",	//GAME
				"zombie1.png",
				"horde.png",	//GAME
				"horde1.png"]
						
var death = "death.png"

/*				
var characters = ["stickman.png",
				"stickwoman.png",  
				"stickdoctorman.png",
				"stickdoctorwoman.png",
				"stickoldman.png",
				"stickoldwoman.png",
				"stickgirl.png",
				"stickboy.png",
				"stickbaby.png",]
				*/
var characters = [
				"stickmanstranger.png",		//0	
				"stickwomanstranger.png", 	//1
				"stickgirlstranger.png",	//2
				"stickboystranger.png",		//3
				"stickbabystranger.png",	//4
				
				"stickmanfriend.png",		//5
				"stickwomanfriend.png",		//6
				"stickgirlfriend.png",		//7
				"stickboyfriend.png",		//8
				"stickbabyfriend.png",		//9
				
				"stickmannpc.png",			//10
				"stickwomannpc.png", 		//11
				"stickgirlnpc.png",			//12
				"stickboynpc.png",			//13
				"stickbabynpc.png"]			//14

var fatman = [  "fatstickmanstranger.png",
				"fatstickmanfriend.png"];
				
//var results = [int women = 0, int man = 0, int etc etc.]
var shuffledarray = [];
var i = 0;
var game = true;
var charamount;
var surveyfinished = false;
var fingerprint = "";
var aleftoffset = "";
var bleftoffset = "";
var atopoffset = "";
var btopoffset = "";
var fatmanvar = 0; 
		 /*set hover text*/
var charhovertext1 = "";
var charhovertext2 = "";
var rlist;
var relement;
var llist;
var lelement;
var rlistObj = [[]];
var llistObj = [[]];
var rtemp = [];
var ltemp = [];
	
var response = 
{
	"participant" : { 
		/*
		Age
		Gender
		ID
		*/
	},
	
	"responses" : [
		/*
		Dilemma
		Choices
		Choice made
		*/
	],
	
	
	"savedObj" : [
	
	]
};

(function(){


	  // Initialize Firebase
	  var config = {
		apiKey: "AIzaSyC5bz0oEIo19U2rYoR3BqdvQqeF0ucqUGo",
		authDomain: "moral-dilemmas.firebaseapp.com",
		databaseURL: "https://moral-dilemmas.firebaseio.com",
		projectId: "moral-dilemmas",
		storageBucket: "moral-dilemmas.appspot.com",
		messagingSenderId: "915277643505"
	  };
	  firebase.initializeApp(config);


	  
	  //Set database data to text of the object.
 }()) ;




function ChangeOptionA()
{
	document.getElementById("demoA").innerHTML = "Option A Changed";
}
 
//Edit function for people in dilemmas
function RandomNumb()
{
	var x = Math.floor(Math.random() * dilemmas.length);
	var y = Math.floor(Math.random() * dilemmas.length);
	document.optiona.src = dilemmas[x];
	document.optionb.src = dilemmas[y];
	document.getElementById("random").innerHTML = x;
	document.getElementById("random2").innerHTML = y;
	
	
}

function loadSurvey()
{
	//shuffledarray = jsPsych.randomization.repeat(dilemmas, 1);
	
	var client = new ClientJS(); // Create A New Client Object
	fingerprint = client.getFingerprint(); // Calculate Device/Browser Fingerprint
	console.log(fingerprint);
	document.getElementById("identifier").innerHTML = "Unique Identifer: " + fingerprint;
	/*alert(JSON.stringify(shuffledarray));*/
}

function nextDilemma()
{
	
	if(i == 0)
	{	
		document.body.style.background = 'url(bg.jpg)';
	}
	

	var x = 0;
	var y = 0;
	//charamount = Math.floor(Math.random() * 6);
	//charamount1 = Math.floor(Math.random() * 6);
	document.getElementById("a").src = dilemmas[i];
	document.getElementById("b").src = dilemmas[i+1];
	

	// Initial Character Set up
	//Fix the character limits
	
	characterSetUp();
	
	////////////Random amount of character generation Do this tomorrow, cant seem to append the img element to the dilemma div
	//console.log(charamount);
	//console.log(charamount1);
	var runonce = false;
	/*A LEFT*/
	for(var cycle = 0; cycle <= charamount; cycle++)
	{

	
	//Character src
		x = Math.floor(Math.random() * characters.length);
		x = characterSrcLeft();
		
	//Character generator
		var imga = document.createElement("img");
		imga.setAttribute("src", characters[x]);
		imga.setAttribute("id" , "charaextra" + cycle);
		imga.setAttribute("position", "absolute");
		
		//Repositioning characters for dilemma
		repositionCharLeft(imga, cycle);
		
	   

		imga.setAttribute("width", "27px");
		imga.setAttribute("height", "74px");
		console.log(imga);
		document.getElementById("dilemmar").appendChild(imga);
		var imga1 = imga.cloneNode(true);
		document.getElementById("dilemmal").appendChild(imga1);	
			
			
			
	//Function for finding the death image position
		var characterImg = document.getElementById("charaextra" + cycle);
		deathImgL(cycle, characterImg);
		
		
		//Left side character hover text
		charhovertext1 = characterText(x, imga, cycle)
		
		/*
		if(i == 4)
			{
				document.getElementById("ltext").innerHTML = "(Potentially) Dead:";
			}
			else
			{
				document.getElementById("ltext").innerHTML = "Dead:";
			}
			*/
		 if(i == 6)
			{
				charhovertext1 = "Your hometown";
			}

		 if(i == 8)
			{
				if(fatmanvar == 0)
				{
					charhovertext1 = "Fat man (Stranger)";
					console.log("SRC = " +  imga.src);
				}
				else
				{
					charhovertext1 = "Fat man (Friend)";
					console.log("SRC = " +  imga.src);
				}
			}
			 
		//zombie everyone
			if(i == 16 && runonce == false)
			{

				newElementL(cycle1, "Everyone");
				runonce = true;
				//skip = true;
			}
			
			if(runonce == false)
			{
				newElementL(cycle, charhovertext1);
			}

		
	/*End of A*/	
	}
	//console.log(llistObj);

	var runonce1 = false;
	/*B RIGHT */
	//Character Generator
		for(var cycle1 = 0; cycle1 <= charamount1; cycle1++)
		{
			y = Math.floor(Math.random() * characters.length);
			if (x == y)
			{
				y = Math.floor(Math.random() * characters.length);
			}
			
			y = characterSrcRight();
			
			var imgb = document.createElement("img");
			imgb.setAttribute("src", characters[y]);
			imgb.setAttribute("id" , "charbextra" + cycle1);
			imgb.setAttribute("position", "absolute");
			
			//Repositioning characters for dilemma
			repositionCharRight(imgb, cycle1);
			

			imgb.setAttribute("width", "27px");
			imgb.setAttribute("height", "74px");
			document.getElementById("dilemmar").appendChild(imgb);
			var imgb1 = imgb.cloneNode(true);
			document.getElementById("dilemmal").appendChild(imgb1);
			
			
			
		//Function for finding the death image position
			var characterImg = document.getElementById("charbextra" + cycle1);
			deathImgR(cycle1, characterImg);
		
			
			
			
			
			charhovertext2 = characterText(y, imgb, cycle1);
			
			//Check the dilemma type and adjust text for specific scenarios i.e. abandon and father.
			if(i == 0)
			{
				document.getElementById("rtext").innerHTML = "Result:";
				charhovertext2 = "Quest Failed";
			}
			else if(i == 10)
			{
				charhovertext2 = "Everybody";
			}
			else
			{
				document.getElementById("rtext").innerHTML = "Dead:";
			}
			
			//baby everyone
			if(i == 2 && runonce1 == false)
			{
				//Include baby and player
				characterImg = document.getElementById("charaextra0");
				deathImgR(0, characterImg);
				runonce1 = true;
			
				newElementR(cycle1, "Everyone");
				//skip = true;
			}
			
			//zombie everyone
			if(i == 16 && runonce1 == false)
			{
				//Include baby and player
				characterImg = document.getElementById("charbextra0");
				deathImgL(0, characterImg);
				runonce = true;
				
				//newElementL(cycle1, charhovertext2);
				
				//skip = true;
			}
			
			
			
			if(runonce1 == false)
			{				
			newElementR(cycle1, charhovertext2);
			}
				
				
		}
	/*End of B*/
	
	
	i = i + 2;
	
	//console.log(rlistObj);

	
	
}

function characterSetUp()
{
	document.getElementById("dilemmainfo1").innerHTML = "<b> Situation: </b>";
	
	
	switch(i)
	{
		//abandon
		case 0:
		{
			//change the text from "Archer" to "Character of your best friend" etc.
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "Your party are coming towards the end of a quest, to complete the quest you must sacrifice one of your party members. \nWhat do you do?"
			charamount = 0;
			charamount1 = 0;
			
			//set charamount1 to 0
			//add Failed Quest to rlist
			//draw death symbol
			//Limit character drawing to man and woman
			console.log(i);
		}
		break;
		
		//baby
		case 2:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "You and members of your town are hiding in the basement from invading soldiers, your baby is coughing uncontrollably and you will be found by the soldiers. \nWhat do you do?"
			//Baby
			charamount = 0;
			
			//Everyone
			charamount1 = Math.floor((Math.random() * 3)+1);
			//specify the baby to be drawn
			//everyone else dies, add self to list
		
			console.log(i);
		}
		break;
		
		//civilian
		case 4:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "Your squad have been ordered to navigate undetected across a heated warzone, you see enemy soldiers are about to execute civilian(s). \nWhat do you do? "
			charamount = Math.floor(Math.random() * 4);
			charamount1 = Math.floor(Math.random() * 2)
			//exclude kids from side with army
			
			
			
			console.log(i);
		}
		break;
		
		//fathers
		case 6:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "The villain has captured you, they want you to choose, sacrifice someone close to you, or your hometown. \nWhich do you choose? "
			charamount = 0;
			charamount1 = 0;
			//limit charamount to 1
			//charamount1 to entirely different image
			//Create list element for the entire town/population in question
			
			console.log(i);
		}
		break;
		
		//fatmans
		case 8:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "The train is headed towards the people on the track, pushing the fat man will stop the train. \nWhat do you do?"
			//Limit charamount to 1,
			charamount = 0;
			//charamount1 to 3-5
			charamount1 = Math.floor((Math.random() * 3)+3);
			
			
			console.log(i);
		}
		break;
		
		//lifeboat
		case 10:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "Your lifecraft is carrying over capacity and begins to fill with water, all of you will drown. There is an injured person onboard who may die either way. If you throw them overboard, everyone else will be saved. \n What do you do?"
			//set charamount to 1
			charamount = 0;
			charamount1 = 0;
			//Set charamount to one injured passenger
			//set charamount1 to everyone
			//charamount1 = 0/1
			
			console.log(i);
		}
		break;
		
		//trolley
		case 12:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "The train is headed towards multiple people, pulling the lever will switch the track. \n What do you do? "
			//set charamount to 1-3
			charamount = 0;
			//set charamount1 to 4-5
			charamount1 = Math.floor((Math.random() * 3)+1);
			console.log(i);
		}
		break;
		
		//squadsplit
		case 14:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "You have to divide your party for the next chapter of the game, you are one of the stronger members and whoever you don't join will die on the adventure. \n What do you do? "
			charamount = Math.floor((Math.random() * 3));
			charamount1 = Math.floor((Math.random() * 3) +2);
			//Set charamount to 1-2 & close friends
			//Set charamount1 to 3-5 & strangers online 
			console.log(i);
		}
		break;
		
		//zombie
		case 16:
		{
			//Info
			document.getElementById("dilemmainfo1").innerHTML += "One of your party has fallen into a deep hole, they need assistance or they will be eaten by zombies. They need assistance but there is not much time. \n What do you do? "
			charamount = Math.floor((Math.random() * 3)+1);
			charamount1 = 0;
			console.log(i);
		}
		break;
		
		//horde
		case 18:
		{
			document.getElementById("dilemmainfo1").innerHTML += "A horde of zombies is about to catch your party, you can push the individual into the horde to give your party time to escape. What do you do? "
			charamount = 0;
			//charamount1 to 3-5
			charamount1 = Math.floor((Math.random() * 3)+3);
			
		}
		//case 18, teammate won't be quiet (baby)
		
		default: 
		{
			console.log(i);
		}
		break;
		
		
	}
}

function characterSrcLeft()
{
	
	
	//console.log(game);
	switch(i)
		{
			//Abandon
			case 0:
			npcvsfriend = Math.floor(Math.random() * 2)
			if(npcvsfriend == 0)//Human
			{
				x = Math.floor((Math.random() * 2)+5);
			}
			else	//NPC
				x = Math.floor((Math.random() * 2)+10);
			console.log("Abandon: " + x);
			
			
			break;
			
			//Baby
			case 2:
			strangervsfriend = Math.floor(Math.random() * 2)
			if(strangervsfriend == 0)//Stranger
			{
				x = 4
			}
			else	//Friend
				x = 9
			
			
			break;
			
			//Civilian
			case 4:
				//Friend
				x = Math.floor((Math.random() * 2)+5);
			
			
			break;
			
			//Fathers
			case 6:
			
			break;
			
			//Fatman
			case 8:
				
			
			break;
			
			//Lifeboat
			case 10:
				x = Math.floor(Math.random() * 10);
			break;
				
			//Trolley
			case 12:
				x = Math.floor(Math.random() * 10);
			break;
			
			//Squadsplit
			case 14:
			//Offline friend
				x = Math.floor((Math.random() * 5) + 5);
			break;
			
			//Zombie
			case 16:
				x = Math.floor((Math.random() * 10) + 5);
			
			break;
			
			case 18:
				 x = Math.floor((Math.random() * 10) + 5);
			break;
			
			default:
			
			break;				
		}
		
		
		return x;
}

function characterSrcRight()
{
	switch(i)
		{
			//Abandon
			case 0:

			
			break;
			
			//Baby
			case 2:
			
			y = Math.floor(Math.random() * 10);
			return y;
			
			break;
			
			//Civilian
			case 4:

			y = Math.floor(Math.random() * 5);
			return y;
			
			
			break;
			
			//Fathers
			case 6:
			return y;
			break;
			
			//Fatman
			case 8:
				y = Math.floor(Math.random() * 10);
				return y;
			
			break;
			
			//Lifeboat
			case 10:
				y = Math.floor(Math.random() * 10);
				return y;
			break;
				
			//Trolley
			case 12:
				y = Math.floor(Math.random() * 10);
				return y;
			break;
			
			//Squadsplit
			case 14:
			//NPC friend
				y = Math.floor((Math.random() * 5) + 10);
				return y;
			break;
			
			//Zombie
			case 16:
			//Solo person
				y = Math.floor((Math.random() * 10) + 5);
			return y;
			break;
			
			//Horde
			case 18:
				 y = Math.floor((Math.random() * 10) + 5);
				 return y;
			break;
			
			default:
			return y;
			break;				
		}
		
		
		
	
	//Case 8: x = Math.floor(Math.random() * 10);
	
	//case 12: x = Math.floor(Math.random() * 10);
	
	//case 14: //Offline friend x = Math.floor((Math.random() * 5) + 10);
	
	//case 16: x = Math.floor((Math.random() * 10) + 5);
}

function newElementL(cycle, item)
{
		ltemp.push(item);
			
		llist = document.getElementById("llist");
		lelement = document.createElement("li");
		if(i == 10)
			item = item + " (Injured)";
		lelement.appendChild(document.createTextNode(item));
		lelement.setAttribute("id", "llist" + cycle);
		llist.appendChild(lelement.cloneNode(true));
}

function newElementR(cycle1, item)
{
		rtemp.push(item);
		rlist = document.getElementById("rlist"); 
		relement = newListElement(); 
		relement.appendChild(document.createTextNode(item));
		relement.setAttribute("id", "rlist" + cycle1);
		rlist.appendChild(relement.cloneNode(true));
}

function deathImgL(cycle, characterImg)
{
			var aleftoffset = getStyle(characterImg, "left");
			var atopoffset = getStyle(characterImg, "top");
			aleftoffset = aleftoffset.slice(0, -2)
			atopoffset = atopoffset.slice(0, -2);
			aleftoffset = parseInt(aleftoffset);
			atopoffset = parseInt(atopoffset);
			
			
			
			var deatha = document.createElement("img");
			deatha.setAttribute("id", "deatha" + cycle);
			deatha.setAttribute("src", death);
			/*death icon*/
			deatha.style.display = "inline";
			deatha.style.left = (aleftoffset + 3) + "px";
			deatha.style.top = (atopoffset - 30) + "px";

			document.getElementById("dilemmal").appendChild(deatha);
			
}

function deathImgR(cycle1, characterImg)
{
			var btopoffset = getStyle(characterImg, "top");
			var bleftoffset = getStyle(characterImg, "left");
			bleftoffset = bleftoffset.slice(0, -2);
			btopoffset = btopoffset.slice(0, -2);
			bleftoffset = parseInt(bleftoffset);
			btopoffset = parseInt(btopoffset);
			
			var deathb = document.createElement("img");
			deathb.setAttribute("id", "deathb" + cycle1);
			deathb.setAttribute("src", death);
			/*death icon*/
			deathb.style.display = "inline";
			deathb.style.left = (bleftoffset + 3) + "px";
			deathb.style.top = (btopoffset - 30) + "px"; 
			
			document.getElementById("dilemmar").appendChild(deathb);
}


function repositionCharLeft(imga, cycle)
{
	
	
		switch(i)
			{
				//Abandon
				case 0:
				{
					imga.style.left = 200 + "px";
					imga.style.top = "165px";
					
				}
				break;
				
				//Baby
				case 2:
				{
					imga.style.left = 175 + "px";
					imga.style.top = 285 + "px";
				}
				break;
				
				
				case 4:
				{
					imga.style.left = 210 - cycle*30 + "px";
					imga.style.top = "220px";
				}
				break;
				
				//Fathers
				case 6:
				{
					imga.style.left = "50%";
					imga.style.top = "250px";
					imga.style.visibility = "hidden";
				}
				break;
				
				case 8:
				{
					imga.style.left = "190px";
					imga.style.top = "120px";
					fatmanvar = Math.floor(Math.random() * 2);
					imga.src = fatman[fatmanvar];
				}
				break;
				
				//Lifeboat
				case 10:
				{
					imga.style.left = "255px";
					imga.style.top = "175px";
					
				}
				break;
				
				//Trolley
				case 12:
				{
					imga.style.left = "85px";
					imga.style.top = "300px";
					
				}
				break;
				
				//squadsplit
				case 14:
				{
					imga.style.left = 110 - cycle*30 + "px";
					imga.style.top = "290px";
					
				}
				break;
				
				//zombie
				case 16:
				{
					imga.style.left = 30 + cycle*30 + "px";
					imga.style.top = 150 + cycle * 10 + "px";
					
				}
				break;
				
				//horde
				case 18:
				{
					imga.style.left = "160px";
					imga.style.top = "90px";
					
				}
				break;
				
				default:
				{
					imga.style.left = 20 + cycle*30 + "px";
					imga.style.top = "190px";
				}
				break;
			}
}


function repositionCharRight(imgb, cycle1)
{
	switch(i)
			{
				case 0:
				{
					imgb.style.left = 320 - cycle1*30 + "px";
					imgb.style.top = "60px";
					imgb.style.visibility = "hidden";
					console.log(i);
				}
				break;
				
				case 2:
				{
					imgb.style.left = 50 + cycle1*90 + "px";
					imgb.style.top = 285 + "px";
				}
				break;
				
				case 4:
				{
					imgb.style.left = 330 - cycle1*30 + "px";
					imgb.style.top = "160px";
					imgb.style.height = "55px";
					imgb.style.width = "18px";
				}
				break;
				
				case 6:
				{
					imgb.style.left = "240px";
					imgb.style.top = "90px";
				}
				break;
				
				case 8:
				{
					imgb.style.left = 360 - cycle1*25 + "px";
					imgb.style.top = 255 - cycle1*15 + "px";
				}
				break;
				
				//lifeboat
				case 10:
				{
					imgb.style.left = "195px"
					imgb.style.top = "295px"
					imgb.style.visibility = "hidden";					
				}
				break;
				
				//Trolley
				case 12:
				{
					imgb.style.left = 305 + cycle1*25 + "px";
					imgb.style.top = "300px";
				}
				break;
				
				//squadsplit
				case 14:
				{
					imgb.style.left = 270 + cycle1*30 + "px";
					imgb.style.top = "290px";
				}
				break;
				
				//zombie
				case 16:
				{
					imgb.style.left = "220px";
					imgb.style.top = "300px";
				}
				break;
				
				//horde
				case 18:
				{
					imgb.style.left = 190 - cycle1*25 + "px";
					imgb.style.top = "255px";
				}
				break;
				
				default:
				{
				imgb.style.left = 390 - cycle1*30 + "px";
				imgb.style.top = "190px";	
				}
				break;
			}
}

function characterText(srcy, img, cycle)
{
	
	
				
				
			var vidgamechar = Math.floor((Math.random() * 3));
			var imgref = img.id;
			console.log(imgref.indexOf("charaextra" + cycle));
	//Right side character hover text
			
			
			switch(srcy)
			{
	/////////////////////////////////STRANGERS
			case 0:
			
				
				
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Squad member (Male stranger)";
				}
				
				
				return "Stranger (Man)"; 
			break;
			
			
			case 1:
								
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Squad member (Female stranger)";
				}
			
				return "Stranger (Woman)"; 
			break;
			
			
			case 2:		
				return "Stranger (Girl)"; 
			break;
			
			
			case 3:
				return "Stranger (Boy)";
			break;
			
			
			case 4:
				return "Stranger (Baby)"; 
			break;
			
			
	////////////////////////////FRIENDS
			case 5:
				if(i == 0)
				{
					return "Archer (Male friend)";
				}
				
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Squad member (Male friend)";
				}
							
				//Limit the single side of horde to an online/offline friend as perceived as more preferable choice? Limit the multiple side to online/NPCs?
				if(i == 14 || i == 16 || i == 18)
				{
					return "Offline friend (Male)"
				}
				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Friend (Male)"; 
			break;
			
			
			case 6:
				
				if(i == 0)
				{
					return "Archer (Female friend)";
				}
				
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Squad member (Female friend)";
				}

				if(i == 14 || i == 16 || i == 18)
				{
					return "Offline friend (Female)";
				}	
				
				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Friend (Female)"; 
			
			break;
			 
			case 7:
				
				if(i == 14 || i == 16 || i == 18)
				{
					return "Offline friend (Girl child)";
				}		
				
				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Friend (Girl child)"; 
			break;
			
			case 8:
			
				
				if(i == 14 || i == 16 || i == 18)
				{
					return "Offline friend (Boy child)";
				}
				

				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Friend (Boy child)"; 
			break;
			
			case 9:
				return "Friend (Baby)";
					//Include baby as a player? Doubt it
			break;
	//////////////////////// NPCS
			case 10:
				return "NPC (Male)";
			break;
			
			case 11:
				return "NPC (Female)";
			break;
			
			case 12:
				return "NPC (Girl child)";
			break;
			
			case 13:
				return "NPC (Boy child)";
			break;
			
			case 14:
				return "NPC (Baby)";
			break;
			
			
			default:
			return "Person"; 
			break;
			}
			
}



function newListElement()
{
	return document.createElement("li");
}

/*https://robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element/*/
function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}


function saveChoice()
{
	
	console.log(document.getElementById('left').getAttribute("class"));
	
	
	var selected = [];
	if(document.getElementById('left').className == "selected")
	{
		console.log("Left has been selected");
			for (var o = 0; o < ltemp.length; o++)
		{
			selected[o] = ltemp[o];
			console.log(selected[o]);
		}
		
	}
	else
	{
	
		console.log("Right has been selected");
		for (var o = 0; o < rtemp.length; o++)
		{
			selected[o] = rtemp[o];
			console.log(selected[o]);
		}
		
	}
	
	
	//save response obj
	var responseObj = {
		dilemma: dilemmas[i-2],
		characterL: [],
		characterR: [],
		outcome: selected,
		/*Could save character chosen to die rather than saved
		/*saved: character under selected class*/

	}
	/*
	rlistObj[i-1] = [];
	for (var o = 0; o < rtemp.length; o++)
	{
		rlistObj[i-1][o] = "";
		console.log(rlistObj[i-1][o]);
	}
	llistObj[i-1] = [];
	for (var o = 0; o < ltemp.length; o++)
	{
		llistObj[i-1][o] = "";
		console.log(llistObj[i-1][o]);
	}
	*/
	
	//Empty the existing array
	for (var o = 0; o < rtemp.length; o++)
	{
		responseObj.characterR[o] = "";
	}
	for (o = 0; o < ltemp.length; o++)
	{
		responseObj.characterL[o] = "";
	}
	
	for (o = 0; o < rtemp.length; o++)
	{
		responseObj.characterR[o] = [];
		//rlistObj[i-1][o] = rtemp[o];
		//console.log(rlistObj[i-1][o]);
		responseObj.characterR[o] = rtemp[o];
	}
	
	for (o = 0; o < ltemp.length; o++)
	{
		responseObj.characterL[o] = [];
		//llistObj[i-1][o] = ltemp[o];
		//console.log(llistObj[i-1][o]);
		responseObj.characterL[o] = ltemp[o];
	}
	
	
	
	console.log(responseObj);
	response.responses.push(responseObj);
	console.log(response.responses);
	
	
	rtemp.length = 0;
	ltemp.length = 0;

	
	
	
}


function completeSurvey()
{
	var checkedValue = []; 
	var checkednumber = 0;
	var inputElements = document.getElementsByClassName('game');
	for(var i=0; inputElements[i]; ++i)
	{
      if(inputElements[i].checked){
           checkedValue[checkednumber] = inputElements[i].value;
		   console.log(checkedValue[checkednumber]);
		   checkednumber++;

		}
		
	}
	if(document.getElementById("otherbox").value != "")
	{
		checkedValue[checkednumber] = document.getElementById("otherbox").value;
	}


			
	
	var participantObj = {
	"userID"	: fingerprint,
	"age" 		: document.getElementById('age').value,
	"gender" 	: document.getElementById('gender').value,
	"games"		: checkedValue,
	}
	 

	response.participant = participantObj;
	console.log(response);
	firebase.database().ref('users').push(response);
	
	
	/*
	firebase.database().ref('users').push({
		userID: fingerprint,
		age: age,
		gender: gender,
		dilemmas: dilemmas,
	});
	*/
}



$(document).ready(function(){

	/*Tutorial confirm button*/
	$("#tutconfirm").click(function(){
		if($(".selected").length <= 0)
			$("#tuterror").fadeIn()
		else
		{
			if($("#tutleft").hasClass("selected"))
			{
				$("#tutleft").removeClass("selected");
			}
			else
			{
				$("#tutright").removeClass("selected");
			}

			$("#main").fadeOut();
			$("#loading").fadeIn(3000);
			/*Shuffle survey images*/
			loadSurvey();
			nextDilemma();
			$("#loading").fadeOut(500, function(){
				$("#survey").fadeIn();
			});
			
			
		}  
    });
	
	/*Confirm button*/
	
	$("#confirm").click(function(){
		
		if($(".selected").length <= 0)
			$("#error").fadeIn()
		else
		{
			$("#error").fadeOut()
		
			
		/*If survey is not over, load new dilemma*/
			if(surveyfinished == false)
			{
				if(i < dilemmas.length)
				{  
					
					
					rlist.innerHTML = "";
					llist.innerHTML = "";
					$('#dilemmal img:not(:first-child)').remove();
					$('#dilemmar img:not(:first-child)').remove();
					$("#confirm").fadeOut(500);
					$("#a").fadeOut(1000);
					$("#b").fadeOut(1000, function(){
					
						
					/*
						Function Load next dilemma
					*/	saveChoice();
						nextDilemma();
						
						
							if($("#left").hasClass("selected"))
							{
								$("#left").removeClass("selected");
							}
							else
							{
								$("#right").removeClass("selected");
							}
						
							$("#a").fadeIn(1000);
							$("#b").fadeIn(1000);
							$("#confirm").fadeIn();
					});
					
				}
				else
				{
				alert("Survey finished!");
				surveyfinished = true;
				saveChoice();
				
				$("#survey").fadeOut(500, function() {
					$("#participants").fadeIn()
					})
				/*Load end of survey screen*/
				}
			}	
		}
		
	});
	
	
	
	/*Complete survey*/
	$("#complete").click(function() {
		
			completeSurvey();
			$("#form").fadeOut();
			$("#complete").fadeOut();
	});
	
});

$('.game').on('change', function() {
	   if($('.game:checked').length > 3) {
		   this.checked = false;
	   }
	});






function TutLoad()
{
	
	var dilemma = 12;
	var dilemma1 = 13;
	/*Math.floor(Math.random() * dilemmas.length);*/
	var dilemmaa = document.optiona
	var dilemmab = document.optionb
	dilemmaa.src = dilemmas[dilemma];
	dilemmab.src = dilemmas[dilemma1];
	
	

		document.getElementById("dilemmainfo").innerHTML += "The train is headed towards three people, pulling the lever will switch the track."
	/*Tutorial image positioning, hard coded.*/
		document.getElementById("tutplayera").style.top = "310px";
		document.getElementById("tutplayera").style.left = "80px";
		document.getElementById("tutplayerb").style.top = "310px";
		document.getElementById("tutplayerb").style.left = "80px";
		document.getElementById("resulta").style.top = "310px";
		document.getElementById("resulta1").style.top = "310px";
		document.getElementById("resulta2").style.top = "310px";
		document.getElementById("resulta").style.left = "325px";
		document.getElementById("resulta1").style.left = "350px";
		document.getElementById("resulta2").style.left = "375px";
		document.getElementById("resultb").style.top = "310px"
		document.getElementById("resultb1").style.top = "310px"
		document.getElementById("resultb2").style.top = "310px"
		document.getElementById("resultb").style.left = "325px";
		document.getElementById("resultb1").style.left = "350px";
		document.getElementById("resultb2").style.left = "375px";
		document.getElementById("deatha").style.top = "277px";
		document.getElementById("deathb").style.top = "277px";
		document.getElementById("deathbt1").style.top = "277px";
		document.getElementById("deathbt2").style.top = "277px";
		document.getElementById("deathbt1").style.left = "350px";
		document.getElementById("deathbt2").style.left = "375px";
	 
}



//Mouse over for casualty count?
function OnMouseOver()
{
	document.getElementById("confirm").style.cursor = "pointer";
	document.getElementById("confirm").style.color = "grey";
}

function OnMouseOut()
{
	document.getElementById("confirm").style.color = "white";
}



//Selection
function classChangea()
{
	if(document.getElementById('left').className == "")
	{
		document.getElementById('left').className = "selected";
		document.getElementById('right').className = "";
		console.log(document.getElementById('left').className);
	}
	else
	{
		document.getElementById('left').className = "";
	}
}

function classChangeb()
{
	if(document.getElementById('right').className == "")
	{
		document.getElementById('right').className = "selected";
		document.getElementById('left').className = "";
		console.log(document.getElementById('right').className);
	}
	else
	{
		document.getElementById('right').className = "";
	}
}

function tutclassChangea()
{
	if(document.getElementById('tutleft').className == "")
	{
	document.getElementById('tutleft').className = "selected";
	document.getElementById('tutright').className = "";
	}
	else
	{
		document.getElementById('tutleft').className = "";
	}

}

function tutclassChangeb()
{
	if(document.getElementById('tutright').className == "")
	{
	document.getElementById('tutright').className = "selected";
	document.getElementById('tutleft').className = "";
	}
	else
	{
		document.getElementById('tutright').className = "";
	}
}

function Confirm()
{
	var selected = document.getElementsByClassName("selected");
	alert("You have selected " + selected[0].innerText);
}


