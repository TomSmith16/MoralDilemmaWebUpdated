var dilemmas = ["abandon.png", 	//GAME
				"abandon1.png",
				"baby.png",		//REAL
				"baby1.png",
				"civilian.png",	//REAL
				"civilian1.png",
				"gate.png",	//GAME
				"gate1.png",
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
				
				
				"stickmanfriend.png",		//4
				"stickwomanfriend.png",		//5
				"stickgirlfriend.png",		//6
				"stickboyfriend.png",		//7
				
				
				"stickmannpc.png",			//8
				"stickwomannpc.png", 		//9
				"stickgirlnpc.png",			//10
				"stickboynpc.png",]			//11


var fatman = [  "fatstickmannpc.png",
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
var charactername = "default";
var gamename = "";
var chardesc = "";
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
var mfqrandom = 0;
var mfqresults = [];
var mfqgamesresults = [];
var mfqnumber = 0;
var mfqgamesnumber = 0;
var mfqinputs; 
var mfqgamesinputs; 
var mfqfoundations = [];
var mfqgamefoundations = [];
var resultsshown = false;
var keyshown = false;
var gamebackground = "#E3EBDA";
var realbackground = "#DCE6ED";
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
		apiKey: "AIzaSyAgoycgZYdFJBnzTqS8ZZuBDQfVu6CUpFE",
		authDomain: "moral-dilemmas-char.firebaseapp.com",
		databaseURL: "https://moral-dilemmas-char.firebaseio.com",
		projectId: "moral-dilemmas-char",
		storageBucket: "moral-dilemmas-char.appspot.com",
		messagingSenderId: "146665727993"
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
	
	
	if(i == 0 || i == 6 || i == 14 || i == 16 || i == 18)
	{	
		//document.body.style.background = "url(bg1.png)";
		//document.body.style.backgroundsize = "cover";
		$("body").toggleClass("transparent");
	}
	else
	{	
		//document.body.style.background = "url(bg.png)";
		//document.body.style.backgroundsize = "cover";
		$("body").toggleClass("transparent");

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
		 /*if(i == 6)
			{
				charhovertext1 = "Your hometown";
			}
			*/
		 if(i == 8)
			{
				if(fatmanvar == 0)
				{
					charhovertext1 = "Large man (NPC) = Dead";
					console.log("SRC = " +  imga.src);
				}
				else
				{
					charhovertext1 = "Large man (Friend) = Dead";
					console.log("SRC = " +  imga.src);
				}
			}
			 
		//zombie everyone
			if(i == 16 && runonce == false)
			{

				newElementL(cycle1, "Everyone = Dead");
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
				charhovertext2 = "Everybody = Dead";
			}
			else
			{
				document.getElementById("rtext").innerHTML = "Result:";
			}
			
			//baby everyone
			if(i == 2 && runonce1 == false)
			{
				//Include baby and player
				characterImg = document.getElementById("charaextra0");
				deathImgR(0, characterImg);
				runonce1 = true;
			
				newElementR(cycle1, "Everybody = Dead");
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
			document.getElementById("dilemmainfo1").innerHTML += "Your party are coming towards the end of a quest, to complete the quest you must sacrifice one of your party members. \nWhat would <span><b>" + charactername +"</b></span> do?";
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
			document.getElementById("dilemmainfo1").innerHTML += "You and your team are hiding in the basement from enemy soldiers, a team member will not be quiet and you will be found by the soldiers. \nWhat would <span><b>" + charactername +"</b></span> do?";
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
			document.getElementById("dilemmainfo1").innerHTML += "Your squad have been ordered to navigate undetected across a heated warzone, you see an enemy squad are about to execute civilian(s). \nWhat would <span><b>" + charactername +"</b></span> do? "
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
			document.getElementById("dilemmainfo1").innerHTML += "A horde of zombies have found your party, you are in the control room with the switch that controls the gates, pulling the switch will close the gate as shown. \nWhat would <span><b>" + charactername +"</b></span> choose? "
			charamount = Math.floor((Math.random() * 3)+1);
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
			document.getElementById("dilemmainfo1").innerHTML += "The train is headed towards the people on the track, pushing the character next to you will stop the train. \nWhat would <span><b>" + charactername +"</b></span> do?"
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
			document.getElementById("dilemmainfo1").innerHTML += "Your lifecraft is carrying over capacity and begins to fill with water, all of you will drown. There is an injured character onboard who may die either way. If you throw them overboard, everyone else will be saved. \n What would <span><b>" + charactername +"</b></span> do?"
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
			document.getElementById("dilemmainfo1").innerHTML += "The train is headed towards multiple characters, pulling the lever will switch the track. \n What would <span><b>" + charactername +"</b></span> do? "
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
			document.getElementById("dilemmainfo1").innerHTML += "You have to divide your party for the next chapter of the game, you are one of the stronger members and whoever you don't join will die on the adventure. \n What would <span><b>" + charactername +"</b></span> do? "
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
			document.getElementById("dilemmainfo1").innerHTML += "One of your party has fallen into a deep hole, they need assistance or they will be eaten by zombies. They need assistance but there is not much time. \n What would <span><b>" + charactername +"</b></span> do? "
			charamount = Math.floor((Math.random() * 3)+1);
			charamount1 = 0;
			console.log(i);
		}
		break;
		
		//horde
		case 18:
		{
			document.getElementById("dilemmainfo1").innerHTML += "A horde of zombies is about to catch your party, you can push the individual into the horde to give your party time to escape. What would <span><b>" + charactername +"</b></span> do? "
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

/*
				"stickmanstranger.png",		//0	
				"stickwomanstranger.png", 	//1
				"stickgirlstranger.png",	//2
				"stickboystranger.png",		//3
				
				
				"stickmanfriend.png",		//4
				"stickwomanfriend.png",		//5
				"stickgirlfriend.png",		//6
				"stickboyfriend.png",		//7
				
				
				"stickmannpc.png",			//8
				"stickwomannpc.png", 		//9
				"stickgirlnpc.png",			//10
				"stickboynpc.png",]			//11
*/
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
				x = Math.floor((Math.random() * 2)+4);
			}
			else	//NPC
				x = Math.floor((Math.random() * 2)+8);
			console.log("Abandon: " + x);
			
			
			break;
			
			//Baby
			case 2:
			
			//Friends & NPCs
			x = Math.floor((Math.random() * 8)+4);
			// Include NPCs same method as abandon
			break;
			
			//Civilian
			case 4:
			npcvsfriend = Math.floor(Math.random() * 2)
			if(npcvsfriend == 0)//Human
			{
				x = Math.floor((Math.random() * 2)+4);
			}
			else	//NPC
				x = Math.floor((Math.random() * 2)+8);
				
			
			
			break;
			
			//Gate
			case 6:
				//Friends and NPCs
				x = Math.floor((Math.random()* 8 )+4);
			break;
			
			//Fatman
			case 8:
				
			
			break;
			
			//Lifeboat
			case 10:
				//Friends and NPCS
				x = Math.floor((Math.random() * 8)+4);
			break;
				
			//Trolley
			case 12:
				//Friends and NPCS
				x = Math.floor((Math.random() * 8)+4);
			break;
			
			//Squadsplit
			case 14:
				//Friends and NPCS
				x = Math.floor((Math.random() * 8) + 4);
			break;
			
			//Zombie
			case 16:
				//Friends and NPCs
				x = Math.floor((Math.random() * 8) + 4);
			
			break;
			
			case 18:
			//Friends and NPCs
				 x = Math.floor((Math.random() * 8) + 4);
			break;
			
			default:
			
			break;				
		}
		
		
		return x;
}
/*
				"stickmanstranger.png",		//0	
				"stickwomanstranger.png", 	//1
				"stickgirlstranger.png",	//2
				"stickboystranger.png",		//3
				
				
				"stickmanfriend.png",		//4
				"stickwomanfriend.png",		//5
				"stickgirlfriend.png",		//6
				"stickboyfriend.png",		//7
				
				
				"stickmannpc.png",			//8
				"stickwomannpc.png", 		//9
				"stickgirlnpc.png",			//10
				"stickboynpc.png",]			//11
*/
function characterSrcRight()
{
	switch(i)
		{
			//Abandon
			case 0:

			
			break;
			
			//Baby
			case 2:
			
			//Friends and strangers CHANGE TO NPCS
			y = Math.floor((Math.random() * 8)+4);
			return y;
			
			break;
			
			//Civilian
			case 4:
			//Strangers CHANGE TO NPCS
			
			y = Math.floor((Math.random() * 8)+4);
			return y;
			
			
			break;
			
			//Gate
			case 6:
			//Friends and NPCs
			y = Math.floor((Math.random()* 8)+4);
			return y;
			break;
			
			//Fatman
			case 8:
			//Friends and strangers CHANGE TO NPCS
				y = Math.floor((Math.random() * 8)+4);
				return y;
			
			break;
			
			//Lifeboat
			case 10:
				//Friends and strangers CHANGE TO NPCS
				y = Math.floor((Math.random() * 8)+4);
				return y;
			break;
				
			//Trolley
			case 12:
				//Friends and strangers CHANGE TO NPCS
				y = Math.floor((Math.random() * 8)+4);
				return y;
			break;
			
			//Squadsplit
			case 14:
			//NPC and friends
				y = Math.floor((Math.random() * 8) + 4);
				return y;
			break;
			
			//Zombie
			case 16:
			//NPCs include friends
				y = Math.floor((Math.random() * 8) + 4);
			return y;
			break;
			
			//Horde
			case 18:
				//NPCs and Friends
				 y = Math.floor((Math.random() * 8) + 4);
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
		//if(i == 10)
			//item = item + " (Injured)";
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
				
				//Gate
				case 4:
				{
					imga.style.left = 210 - cycle*30 + "px";
					imga.style.top = "220px";
				}
				break;
				
				//Fathers
				case 6:
				{
					imga.style.left = 90 + cycle*20 + "px";
					imga.style.top = "90px";
					//imga.style.visibility = "hidden";
				}
				break;
				
				//fatman
				case 8:
				{
					imga.style.left = "205px";
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
					imga.style.left = 20 + cycle*25 + "px";
					imga.style.top = "120px";
					
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
				
				//Gate
				case 4:
				{
					imgb.style.left = 330 - cycle1*30 + "px";
					imgb.style.top = "160px";
					imgb.style.height = "60px";
					imgb.style.width = "23px";
				}
				break;
				
				case 6:
				{
					imgb.style.left = "30px";
					imgb.style.top = "220px";
				}
				break;
				
				//fatman
				case 8:
				{
					imgb.style.left = 375 - cycle1*25 + "px";
					imgb.style.top = 310 + "px"
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
					return "Male squad member (Stranger) = Dead";
				}
				
				
				return "Stranger (Man) = Dead"; 
			break;
			
			
			case 1:
								
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Female squad member (Stranger) = Dead";
				}
			
				return "Woman (Stranger) = Dead"; 
			break;
			
			
			case 2:		
				return "Female child (Stranger) = Dead"; 
			break;
			
			
			case 3:
				return "Male child (Stranger) = Dead";
			break;
			
			
			
			
	////////////////////////////FRIENDS
			case 4:
				if(i == 0)
				{
					return "Male Archer (Friend) = Dead";
				}
				
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Male squad member (Friend) = Dead";
				}
							
				//Limit the single side of horde to an online/offline friend as perceived as more preferable choice? Limit the multiple side to online/NPCs?
				if(i == 14 || i == 16 || i == 18)
				{
					return "Male (Friend) = Dead"
				}
				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Male (Friend) = Dead"; 
			break;
			
			
			case 5:
				
				if(i == 0)
				{
					return "Female Archer (Friend) = Dead";
				}
				
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Female squad member (Friend) = Dead";
				}

				if(i == 14 || i == 16 || i == 18)
				{
					return "Female (Friend) = Dead";
				}	
				
				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Female (Friend) = Dead"; 
			
			break;
			 
			case 6:
				
				if(i == 14 || i == 16 || i == 18)
				{
					return "Female child (Friend) = Dead";
				}		
				
				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Female child (Friend) = Dead"; 
			break;
			
			case 7:
			
				
				if(i == 14 || i == 16 || i == 18)
				{
					return "Male child (Friend) = Dead";
				}
				

				//if 16 (zombie), 
				//randomise for stranger online/NPC/real world friend to see differences
				
				return "Male child (Friend) = Dead"; 
			break;
			
	//////////////////////// NPCS
			case 8:
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Male squad member (NPC) = Dead";
				}
				return "Male (NPC) = Dead";
			break;
			
			case 9:
				if(i == 4 && imgref.indexOf("charaextra" + cycle) >= 0)
				{
					return "Female squad member (NPC) = Dead";
				}
				return "Female (NPC) = Dead";
			break;
			
			case 10:
				return "Female child (NPC) = Dead";
			break;
			
			case 11:
				return "Male child (NPC) = Dead";
			break;
			
			
			
			default:
			return "Person = Dead"; 
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
	var character = [charactername, gamename, chardesc];
	var checkednumber = 0;
	var inputElements = document.getElementsByClassName('game');
	var roles = document.getElementById('rolebox').value;
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


	var irlmfqobject = [];
		irlmfqobject[0] = mfqresults;	//INDIVIDUAL QUESTION ANSWERS
		irlmfqobject[1] = mfqfoundations;	//TOTALED SCORES FOR EACH PSYCHOLOGICAL FOUNDATION. 
	
	var vgmfqobject = [];
		vgmfqobject[0] = mfqgamesresults;
		vgmfqobject[1] = mfqgamefoundations;
	
	var participantObj = {
	"userID"	: fingerprint,
	"character" : character,
	"age" 		: document.getElementById('age').value,
	"gender" 	: document.getElementById('gender').value,
	"games"		: checkedValue,
	"roles"		: roles,
	"irl mfq"	: irlmfqobject,
	"vg mfq" 	: vgmfqobject,
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

function addCharactertut()
{
	document.getElementById("dilemmainfochar").innerHTML += "The train is headed towards three people, pulling the lever will switch the track. What would <span><b>" + charactername + "</b></span> do?"
	document.getElementById("charinfo").innerHTML += "Please read each scenario carefully and select your choice.<br><br> Please make a decision based on what <span><b>"+ charactername +"</b></span> would do."
}

function addCharacter()
{
	document.getElementById("chardo").style.textAlign = "center";
	document.getElementById("chardo").innerHTML += "Please make a decision based on what <span><b>" + charactername + "</b></span> would do.<br>"
	document.getElementById("biffname").innerHTML += "This is <span><b>" + charactername + "</b></span>";
}

$(document).ready(function(){

	$("#startsurvey").click(function()
		{
			
			$("#home").fadeOut(500, function(){
					loadSurvey();
					$("#participants").fadeIn();
			});
					
			/*		LOAD MFQ AND SURVEY CHUNK
			if(mfqrandom == 0)
				{		
					$("#home").fadeOut(500, function(){
					$("#mfq").fadeIn();
					});
				}
				else
				{
					$("#home").fadeOut(500, function(){
					$("#mfqgames").fadeIn();
					});
				}
				*/
		});
		
		
		
	$("#begin").click(function()
	{
		//		LOAD MFQ AND SURVEY CHUNK
		
			if(mfqrandom == 0)
				{		
					$("#participants").fadeOut(500, function(){
					$("#mfq").fadeIn();
					});
				}
				else
				{
					$("#participants").fadeOut(500, function(){
					$("#mfqgames").fadeIn();
					});
				}
				
	});		


	$("#charactername").click(function(){
		if($("#characterbox").val().length <= 0 || $("#gamebox").val().length <= 0 || $("#descbox").val().length <= 0 || $("#descbox").val() == "Character Description")
			$("#charerror").fadeIn()
		else
		{
			charactername = $("#characterbox").val()
			gamename = $("#gamebox").val()
			chardesc = $("#descbox").val()
			$("#charerror").fadeOut()
			$("#charactersect").fadeOut()
			addCharactertut()
			$("#dilemmainfochar").fadeIn()
			$("#charinfo").fadeIn()
			$("#choices").fadeIn()
			$("#separator").fadeIn()
			$("#tutconfirm").fadeIn()
			addCharacter()
			
		}
	});
	
	
	
	
	/*
	$("#dilemmainfo1:contains('"+charactername+"')").each(function () {
        var regex = new RegExp(charactername,'gi');
        $(this).html($(this).text().replace(regex, "<span class='red'>"+charactername+"</span>"));
		});
	*/
	
	
	
	/*Tutorial confirm button*/
	$("#tutconfirm").click(function(){
		if($("#characterbox").val().length <= 0)
			$("#charerror").fadeIn()
		else if($(".selected").length <= 0)
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
					$("#confirm").hide();
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
							$("#confirm").show();
					});
					
				}
				else 	//SURVEY ENDED
			
				{
				alert("Thank you for finishing this section of the survey!");
				surveyfinished = true;
				saveChoice();//SAVE LAST CHOICE
				//Completesurvey() to save participant data
				$("#survey").fadeOut(500, function() {
					//Load MFQ after survey
					//if surveyfinished & mfqrandom = 1
					
					//LOAD THANKS SCREEN.
					
					
					
						if(mfqrandom == 1)
						{
							
							//document.body.style.background = "url(bg.png)";
							document.body.scrollTop = 0; // For Safari
							document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
							$("#mfq").css("background-color", realbackground);
							$("#mfq").fadeIn();

						}
						else
						{
							
							//document.body.style.background = "url(bg1.png)";
							document.body.scrollTop = 0; // For Safari
							document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
							$("#mfqgames").css("background-color", gamebackground);
							$("#mfqgames").fadeIn();
							//$("#participants").fadeIn()
						}
					})
					
					
				/*Load end of survey screen*/
				}
			}	
		}
		
	});
	
	////MFQ BUTTONS	
	$(".mfqentry").keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 53) return false;
    });
	
	$("#mfqnext").click(function() {
			
			
			$("#mfqrelevance").fadeOut(500, function(){
				document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0;
			$("#mfqagreement").fadeIn();
			});
		
	});
	
	$("#mfqprevious").click(function() {
		
			
			$("#mfqagreement").fadeOut(500, function(){
				document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0;
			$("#mfqrelevance").fadeIn();
		
		});
		
	});
	
	
//GAME MFQ BUTTONS
	$(".mfqgameentry").keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 53) return false;
    });
	
	$("#mfqgamesnext").click(function() {
			
			$("#mfqgamesrelevance").fadeOut(500, function(){
				document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0;
			$("#mfqgamesagreement").fadeIn();
			});
		//}
	});
	
	$("#mfqgamesprevious").click(function() {
		
		$("#mfqgamesagreement").fadeOut(500, function(){
			document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0;
		$("#mfqgamesrelevance").fadeIn();
		
		});
		
	});
	
	
//MFQ CONFIRM
	$("#mfqconfirm").click(function() {
		
		var count = 32;
		//var radios = [];
		var checked = [];
		var j = 0;
		//radios = document.getElementsByClassName('radios');
		checked = [];
		
		$(".radios:checked").each(function() {
			checked.push(parseInt(($(this).val())));
			console.log($(this).val());
		});
		
		if(checked.length !== count)
		{
			alert("Be sure you've filled in each answer!");
		}
		else
		{
	
					//MFQ RESULTS
					/*mfqresults = [];
					mfqnumber = 0;
					
					//FOR EVERY INDIVIDUAL SCORE FROM THE MFQ
					mfqinputs = document.getElementsByClassName('mfqentry');
					for(var i=0; mfqinputs[i]; ++i)
					{
						//Adds every individual MFQ input to an array for firebase, could change to Harm/Care foundations instead?
						mfqresults[mfqnumber] = Number(mfqinputs[i].value);
						mfqresults[mfqnumber];
						console.log(mfqresults[mfqnumber]);
						mfqnumber++;
						
					}
					*/
					//
					var harmcare = (checked[0] + checked[6] + checked[11] + checked[16] + checked[22] + checked[27])
					var fairrecip = (checked[1] + checked[7] + checked[12] + checked[17] + checked[23] + checked[28])
					var grouployal = (checked[2] + checked[8] + checked[13] + checked[18] + checked[24] + checked[29])
					var authrespect = (checked[3] + checked[9] + checked[14] + checked[19] + checked[25] + checked[30])
					var puresanc =(checked[4] + checked[10] + checked[15] + checked[20] + checked[26] + checked[31])
					
					
					//document.getElementById("harmcare").value = harmcare;
					//document.getElementById("fairrecip").value = fairrecip;
					//document.getElementById("grouployal").value = grouployal;
					//document.getElementById("authrespect").value = authrespect;
					//document.getElementById("puresanc").value = puresanc;

					mfqfoundations[0] = harmcare;
					mfqfoundations[1] = fairrecip;
					mfqfoundations[2] = grouployal;
					mfqfoundations[3] = authrespect;
					mfqfoundations[4] = puresanc;
					
				
				var emptyrelevance = $("#mfqrelevance").find("input").filter(function() {
					return this.value === "";
				});
				
				var emptyagree = $("#mfqagreement").find("input").filter(function() {
					return this.value === "";
				});
				
				
				if(emptyagree.length || emptyrelevance.length) {
					//At least one input is empty
					alert("Be sure you've filled in each answer!");
				}
				else
				{
				
					
					if(mfqrandom == 0)
					{
						
						$("#mfq").fadeOut(500, function(){
						$("#main").fadeIn();
						});
					}
					else
					{
						completeSurvey();
						alert("You have finished the survey, your results have now been submitted!");
						$("#mfq").fadeOut(500, function(){
						$("#thanks").fadeIn();
						});
					}
				}
			}
	});
	
	
//MFQ GAMES CONFIRM
	$("#mfqgamesconfirm").click(function() {
			
		var count = 32;
		//var radios = [];
		var checkedgames = [];
		var j = 0;
		//radios = document.getElementsByClassName('radios');
		checkedgames = [];
		//may need to change class to radiosg if still counts the first mfq 
		$(".radiosg:checked").each(function() {
			checkedgames.push(parseInt(($(this).val())));
			console.log($(this).val());
		});
		
		if(checkedgames.length !== count)
		{
			alert("Be sure you've filled in each answer!");
		}
		else
		{
	
					//MFQ RESULTS
					/*mfqresults = [];
					mfqnumber = 0;
					
					//FOR EVERY INDIVIDUAL SCORE FROM THE MFQ
					mfqinputs = document.getElementsByClassName('mfqentry');
					for(var i=0; mfqinputs[i]; ++i)
					{
						//Adds every individual MFQ input to an array for firebase, could change to Harm/Care foundations instead?
						mfqresults[mfqnumber] = Number(mfqinputs[i].value);
						mfqresults[mfqnumber];
						console.log(mfqresults[mfqnumber]);
						mfqnumber++;
						
					}
					*/
					//
				var gameharmcare = (checkedgames[0] + checkedgames[6] + checkedgames[11] + checkedgames[16] + checkedgames[22] + checkedgames[27])
				var gamefairrecip = (checkedgames[1] + checkedgames[7] + checkedgames[12] + checkedgames[17] + checkedgames[23] + checkedgames[28])
				var gamegrouployal = (checkedgames[2] + checkedgames[8] + checkedgames[13] + checkedgames[18] + checkedgames[24] + checkedgames[29])
				var gameauthrespect = (checkedgames[3] + checkedgames[9] + checkedgames[14] + checkedgames[19] + checkedgames[25] + checkedgames[30])
				var gamepuresanc =(checkedgames[4] + checkedgames[10] + checkedgames[15] + checkedgames[20] + checkedgames[26] + checkedgames[31])
				
				console.log("Gameharmcare:" + gameharmcare);
				
				//document.getElementById("gameharmcare").value = gameharmcare;
				//document.getElementById("gamefairrecip").value = gamefairrecip;
				//document.getElementById("gamegrouployal").value = gamegrouployal;
				//document.getElementById("gameauthrespect").value = gameauthrespect;
				//document.getElementById("gamepuresanc").value = gamepuresanc;

				mfqgamefoundations[0] = gameharmcare;
				mfqgamefoundations[1] = gamefairrecip;
				mfqgamefoundations[2] = gamegrouployal;
				mfqgamefoundations[3] = gameauthrespect;
				mfqgamefoundations[4] = gamepuresanc;
				
			
			var emptyrelevance = $("#mfqgamesrelevance").find("input").filter(function() {
				return this.value === "";
			});
			
			var emptyagree = $("#mfqgamesagreement").find("input").filter(function() {
				return this.value === "";
			});
			
			
			if(emptyagree.length || emptyrelevance.length) {
				//At least one input is empty
				alert("Be sure you've filled in each answer!");
			}
			else
			{
			
				if(mfqrandom == 1)
				{
					
					$("#mfqgames").fadeOut(500, function(){
					$("#main").fadeIn();
					});
				}
				else
				{
					completeSurvey();
					$("#mfqgames").fadeOut(500, function(){
					$("#thanks").fadeIn();
					});
				}
			}
			}
	});
	
	/*
	$("#showmfq").click(function(){
		
		if(!resultsshown)
		{
			$("#showmfq").text("Hide Moral Foundations Results");
			resultsshown = !resultsshown;
			$("#mfqresults").fadeIn();
			$("#mfqgameresults").fadeIn();
		}
		else
		{
			$("#showmfq").text("Show Moral Foundations Results");
			resultsshown = !resultsshown
			$("#mfqresults").fadeOut();
			$("#mfqgameresults").fadeOut();
		}
		
	});
	*/
	$("#showkey").click(function(){
		
		if(!keyshown)
		{
			$("#showkey").text("Hide Key");
			keyshown = !keyshown;
			$("#keydiv").fadeIn();
		
		}
		else
		{
			$("#showkey").text("Show Key");
			keyshown = !keyshown;
			$("#keydiv").fadeOut();
			
		}
		
	});
	
	/*Complete survey*/
	$("#complete").click(function() {
		
			completeSurvey();
			$("#formp").fadeOut();
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
	//MFQ Randomiser
	//mfqrandom = Math.floor((Math.random() * 2));
	mfqrandom = 1;
	console.log("MFQ: " + mfqrandom);
	if(mfqrandom == 0)
	{
		
		document.getElementById("mfq").style.backgroundColor = realbackground;
		//document.body.style.background = "url(bg.png)";
		//document.getElementById("mfq").style.display = "block";
		document.getElementById("main").style.display = "none";
	}
	else		//Load video games survey at start
	{
		document.getElementById("mfqgames").style.backgroundColor = gamebackground;
		//document.getElementById("mfqgames").style.display = "block";
		document.getElementById("main").style.display = "none";
	}
	
	var dilemma = 12;
	var dilemma1 = 13;
	/*Math.floor(Math.random() * dilemmas.length);*/
	var dilemmaa = document.optiona
	var dilemmab = document.optionb
	dilemmaa.src = dilemmas[dilemma];
	dilemmab.src = dilemmas[dilemma1];
	
	

		
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


