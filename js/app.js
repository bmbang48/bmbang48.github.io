$(document).ready(function () {
  $(".hamburger").click(function (e) {
    e.preventDefault();
    // $('.navigasi').toggleClass('hide');
    $(".navigasi").slideToggle("fast");
  });
  $("#about").hide();
  $("#about").slideDown("slow");
  $(".intro").hide();
  $(".img-framework").hide();
  $(".contact").hide();
  $(".recent").hide();

  // $('.intro').each(function(i){
  //     setTimeout(function(){
  //         $('.intro').eq(i).show('blind');
  //     },1000*(i+1))
  // })
  console.log($(".intro"));

  $(".list-none .list-skill").hide();
  $(".portfolio").hide();
});

$(window).on("load", function () {
  $(".intro").each(function (i) {
    setTimeout(function () {
      $(".intro").eq(i).show("blind");
    }, 1000 * (i + 1));
  });
  $(".portfolio").each(function (i) {
    setTimeout(function () {
      $(".portfolio").eq(i).show("fade");
    }, 1000 * (i + 1));
  });
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  if (wScroll >= $("#skill").offset().top - 400) {
    $(".list-none .list-skill").each(function (i) {
      setTimeout(function () {
        $(".list-none .list-skill").eq(i).show("slide");
        // console.log('anjay')
      }, 400 * (i + 1));
    });
  }
  if (wScroll >= $("#recent").offset().top - 800) {
    $(".recent").each(function (i) {
      setTimeout(function () {
        $(".recent").eq(i).show("slide");
        // console.log('anjay')
      }, 500 * (i + 1));
    });
  }
  if (wScroll >= $("#recent").offset().top - 900) {
    $(".img-framework").show("bounce");
  }
});

$("#btn-about").click(function () {
  $("html , body").animate(
    {
      scrollTop: $("#about").offset().top,
    },
    1250,
    "easeInOutExpo"
  );
});
$("#btn-skill").click(function () {
  $("html , body").animate(
    {
      scrollTop: $("#skill").offset().top,
    },
    1250,
    "easeInOutExpo"
  );
});
$("#btn-recent").click(function () {
  $("html , body").animate(
    {
      scrollTop: $("#recent").offset().top,
    },
    1250,
    "easeInOutExpo"
  );
});
$("#btn-contact").click(function () {
  $("html , body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    1250,
    "easeInOutExpo"
  );
});

$("form").on("submit", function (e) {
  e.preventDefault();
  const name = $("#name").val();
  const subject = $("#subject").val();
  const inputSubject = subject.replace(/ /g, "%20");
  const valMessage = $("#message").val();
  const message = `Halo saya ${name}, ${valMessage}`;
  const inputMessage = message.replace(/ /gi, "%20");
  $(".send").attr(
    "href",
    `mailto:naninunet46@gmail.com?subject=${inputSubject}&body=${inputMessage}`
  );
});
$("#message").on("keyup", function () {
  // e.preventDefault();
  const name = $("#name").val();
  const subject = $("#subject").val();
  const inputSubject = subject.replace(/ /g, "%20");
  const valMessage = $("#message").val();
  const message = `Halo saya ${name}, ${valMessage}`;
  const inputMessage = message.replace(/ /g, "%20");
  $(".send").attr(
    "href",
    `mailto:naninunet46@gmail.com?subject=${inputSubject}&body=${inputMessage}%20`
  );
  console.log($(".send"));
});
