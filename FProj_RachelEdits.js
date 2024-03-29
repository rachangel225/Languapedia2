var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
     else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



function translateThis(){

  var text = document.getElementById("translate").value;
  var query = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190724T184317Z.51d2ebbd65041ccb.a5b00361d90de26de1863bb0f53747718f06b9c9&text=" + text + "&lang=zh";
  query = query.replace(/ /g, '%20');

  var translationRequest= new XMLHttpRequest();
  translationRequest.open("GET", query, false);

  translationRequest.send();

  if(translationRequest.readyState != 4 || translationRequest.status != 200 || translationRequest.responseText ==='')
  {
    window.console.error('Request had an error');
    return;
  }

  var translationInfo = JSON.parse(translationRequest.responseText);

  var translated = translationInfo.text[0];

  var person = ("Chinese translation: " + translate);
  if (person != null) {
    document.getElementById("demo").innerHTML = "Chinese translation: " + translated ;
  }
}


function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab contents
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
