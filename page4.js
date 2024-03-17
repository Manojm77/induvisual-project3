var firebaseConfig = {
      apiKey: "AIzaSyASS-Bbhmsy_lZYPJ1En4OXMMSUTU5kThY",
      authDomain: "kwitter20-d84ec.firebaseapp.com",
      databaseURL: "https://kwitter20-d84ec-default-rtdb.firebaseio.com",
      projectId: "kwitter20-d84ec",
      storageBucket: "kwitter20-d84ec.appspot.com",
      messagingSenderId: "668825030928",
      appId: "1:668825030928:web:202cb814abf63d71a29595",
      measurementId: "G-4WDW6LCQWH"
    };
    firebase.initializeApp(firebaseConfig);
    

    
    function getData() {
      firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          if (childKey !== "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
             name = message_data['name'];
             message = message_data['message'];
             likes = message_data['likes']; 
             name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
             message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
             like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + likes + "' onclick='updateLike(this.id)'>";
             span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span></button><hr>";
             row = name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("output").innerHTML += row;
          }
        });
      });
    }
    
    function send() {
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: localStorage.getItem("user_name"),
        message: msg,
        likes: 0
      });
      document.getElementById("msg").value = "";
    }
    
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("page1.html");
    }
    
    function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      var likesRef = firebase.database().ref(room_name).child(message_id).child('likes');
      likesRef.transaction(function(likes) {
        return likes + 1;
      });
    }