
function addUser() {
  
  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
}

function getday() {
  
  var date = document.getElementById("current_date").value;
  
  localStorage.setItem("date", date);
  
}

function getmonth() {
  
 month = document.getElementById("current month").value

  localStorage.setItem("date", date);
  
  window.location.replace = "page3.html";
}

function starttimer()
{
timer;
ele =document.getElementById(timer)

setTimeout(plus(),86400000);
date= date + 1;
  
setTimeout(add(),1000);

time=document.getElementById("seconds").value
time=time + 1;
  

}

// this needs to be fixed cuz of the errors