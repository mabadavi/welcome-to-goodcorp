

  $( document ).ready(function() {
      console.log( "ready!" );
      var name = $('#name')
      var audio = document.querySelector('audio');

      $( "div" ).each(function() {
        $( this ).hide();
      });

      $( "#container" ).show();
      $( "#first" ).show();
      $( "#welcome" ).hide();
      $( "#health" ).show();
      $( ".health-box" ).show();
      $( ".health-bar-red" ).show();
      $( ".health-bar-blue" ).show();
      $( ".health-bar" ).show();
      $( ".health-bar-text" ).show();


      $("#ButtonOne").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
          var name = $('#name').val();
          $('#bizname').text(name);
          // console.log(volume);
          // audio.volume = 0;

        });

        $( "#container" ).show();
        $( "#second" ).show();
        $( "#welcome" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();


      });
      $("#ButtonTwo").click(function() {
        playSound();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#third" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });

      $("#ButtonThree").click(function() {
        raiseVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fourth" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
        // console.log(volume);
        // audio.volume = 1;

      });
      $("#ButtonFour").click(function() {
        raiseVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifth" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });
      $("#ButtonFourStop").click(function() {
        lowerVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fourthStop" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });
      $("#ButtonFourStop1").click(function() {
        lowerVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifth" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });
      $("#ButtonFourStop2").click(function() {
        stopVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fourthStopComplaint1" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });

      $("#ButtonFive").click(function() {
        raiseVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });
        $( "#container" ).show();
        $( "#sixth" ).show();
        $("#title").text("Senior Manager");
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });
      $("#ButtonFiveStop").click(function() {
        lowerVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifthStop" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });

      $("#ButtonFiveStop1").click(function() {
        lowerVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#sixth" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });

      $("#ButtonFiveStop2").click(function() {
        stopVolume();

        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifthStopComplaint1" ).show();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });
      $("#ButtonSix").click(function() {
        raiseVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#seventh" ).show();
        $("#title").text("Senior Manager");
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();

      });
      $("#ButtonSixStop").click(function() {
        lowerVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#sixthStop" ).show();
        $("#title").text("Senior Manager");
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();

      });
      $("#ButtonSixStop1").click(function() {
        lowerVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#seventh" ).show();
        $("#title").text("Senior Manager");
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();

      });
      $("#ButtonSixStop2").click(function() {
        stopVolume();
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#sixthStopComplaint1" ).show();
        $("#title").text("Senior Manager");
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();

      });

      $(".restart").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#first" ).show();
        $( "#welcome" ).hide();
        $( "#health" ).show();
        $( ".health-box" ).show();
        $( ".health-bar-red" ).show();
        $( ".health-bar-blue" ).show();
        $( ".health-bar" ).show();
        $( ".health-bar-text" ).show();
      });





  var maxHealth = 400,
  curHealth = maxHealth;
$('.total').html(maxHealth + "/" + maxHealth);
$(".health-bar-text").html("100%");
$(".health-bar").css({
  "width": "100%"
});
$(".add-damage").click(function() {
  if (curHealth == 0) {
    $('.message-box').html("Is this the end??");
  } else {
    var damage = Math.floor((Math.random() * 100) + 50);
    $(".health-bar-red, .health-bar").stop();
    curHealth = curHealth - damage;
    if (curHealth < 0) {
      curHealth = 0;
      restart();
    } else {
      $('.message-box').html("You took " + damage + " points of damage!");
    }
    applyChange(curHealth);
  }
});
$(".add-heal").click(function() {
  if (curHealth == maxHealth) {
    $('.message-box').html("You are already at full health");
  } else {
    var heal = Math.floor((Math.random() * 100) + 5);
    $(".health-bar-red, .health-bar-blue, .health-bar").stop();
    curHealth = curHealth + heal;
    if (curHealth > maxHealth) {
      curHealth = maxHealth;
      $('.message-box').html("You're at full health");
    } else if (curHealth == 0) {
      $('.message-box').html("Miraculously! You regained your health by " + heal + " points and get back on to your feet!");
    } else {
      $('.message-box').html("You regained your health by " + heal + " points!");
    }
    applyChange(curHealth);
  }
});

function applyChange(curHealth) {
  var a = curHealth * (100 / maxHealth);
  $(".health-bar-text").html(Math.round(a) + "%");
  $(".health-bar-red").animate({
    'width': a + "%"
  }, 700);
  $(".health-bar").animate({
    'width': a + "%"
  }, 500);
  $(".health-bar-blue").animate({
    'width': a + "%"
  }, 300);
  $('.total').html(curHealth + "/" + maxHealth);
}

function restart() {
  //Was going to have a game over/restart function here.
  $('.health-bar-red, .health-bar');
  $('.message-box').html("You've been knocked down! Thing's are looking bad.");
}

var sound = document.getElementById("audio");


  function playSound() {
      sound.play();
      sound.volume = 0.4;
    }


  function raiseVolume() {
    // var volInc = .2;
    sound.volume += 0.15;
  }

  function lowerVolume() {
    // var volDec = .2;
    sound.volume -= 0.2;
  }

  function stopVolume() {
    // var volDec = .2;
    sound.volume = 0;
  }
});
