function translateThis()
{

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
  if (person != null) 
    {
    document.getElementById("demo").innerHTML = "Chinese translation: " + translated ;
    }
}

<<<<<<< HEAD
=======
// Wrap every letter in a spa


// function tabOpen(evt, cityName) {
//   // Hide all elements with class="tabcontent" by default */
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//
//   // Remove the background color of all tablinks/buttons
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace("active", "");
//   }
//
//   // Show the specific tab content
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += "active";


>>>>>>> withTabcontent

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

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();








$(document).ready(function(){

  $('#quiz-submit').on('click', function(){
    //alert("yo");
    var score = 0;

    // Loop through each question
    $('.question').each(function(){
      // hide quiz msg
      $('.quiz-msg', this).remove();

      // find correct option
      var correct = $(this).find(':checked[data-correct]').length;
      //console.log(correct);

      // check if correct or not
      if( correct == 1){
        // correct!
        // add 1 point to the score
        score++;
        var msgHTML = '<div class="quiz-msg correct">Correct!</div>';
        $(this).append(msgHTML);
      }else{
        // incorrect!
        //alert("incorrect!");
        var msgHTML = '<div class="quiz-msg incorrect">Incorrect!</div>';
        $(this).append(msgHTML);
      }

    });

    // Output score
    $('#score').text(score);


  });

}); // end document ready
