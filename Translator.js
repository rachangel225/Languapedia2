function translateThis(){

  var text = document.getElementById("translate").value;
  var query = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190724T184317Z.51d2ebbd65041ccb.a5b00361d90de26de1863bb0f53747718f06b9c9&text=" + text + "&lang=zh";
  query = query.replace(/ /g, '%20');

  var translationRequest= new XMLHttpRequest();
  translationRequest.open("GET", query, false);

  translationRequest.send();

  if(translationRequest.readyState != 4 || translationRequest.status != 200 || translationRequest.responseText ===''){
    window.console.error('Request had an error');
    return;
  }

  var translationInfo = JSON.parse(translationRequest.responseText);

  var translated = translationInfo.text[0];

  var person = (translated);
  if (person != null) {
    document.getElementById("demo").innerHTML = "Chinese translation: " + translated ;
  }
}
