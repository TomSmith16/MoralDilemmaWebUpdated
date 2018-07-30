(function(){

  // Initialize Firebase
	  var config = {
		apiKey: "AIzaSyBX29ZQYu6TW8zSZ5o-0nzdZq34LGVfBEw",
		authDomain: "testfirebase-fd7fa.firebaseapp.com",
		databaseURL: "https://testfirebase-fd7fa.firebaseio.com",
		projectId: "testfirebase-fd7fa",
		storageBucket: "testfirebase-fd7fa.appspot.com",
		messagingSenderId: "983379949774"
	  };
	  firebase.initializeApp(config);
	  
	  
	  //Display realtime database info between html and firebase
	  /*
	  const preObject = document.getElementById('object');
	  
	  const dbRefObject = firebase.database().ref().child('object');
	  
	  dbRefObject.on('value', snap => {preObject.innerText = JSON.stringify(snap.val(), null, 3);
	  });*/
	  
	  //Set database data to text of the object.
	  firebase.database().ref('object').set({
		  name: document.getElementById('object').innerText,
		  age: "45",
		  hobbies: "basketball",
		  
	  });
 }()) ;