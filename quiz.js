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




$(document).ready(function(){

  $('#quiz-submit2').on('click', function(){
    //alert("yo");
    var score2 = 0;

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
        score2++;
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
    $('#score2').text(score2);


  });

}); // end document ready








$(document).ready(function(){

  $('#quiz-submit3').on('click', function(){
    //alert("yo");
    var score3 = 0;

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
        score3++;
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
    $('#score3').text(score3);


  });

}); // end document ready
