
// var pwovebJSONUrl="https://cloudinary.com/console/media_library#/dialog/raw/upload/provebkreyol_dvlskq.json";

// $.getJSON(pwovebJSONUrl).done(function(pwoveb) {
//   alert(JSON.stringify(pwoveb));
// })


/*
https://cloudinary.com/console/media_library#/dialog/raw/upload/provebkreyol_dvlskq.json
*/
var pwoveb=[
"Bat chen an. Tann mèt li",
"Zonbi goute sèl, li pa mande rete",
"Baton ki bat chen blan an. Se li ki bat chen nwa a",
"Dan pouri toujou gen fòs sou bannann mi",
"Mache prese pa domi san soupe",
"Le ou wè vye zo nan chimen, konnen li te gen chè sou li yon jou",
"Se pa lè yon moun ap neye, pou-w montre-l naje",
"Abitan pa mize lavil.",
"Bourik chaje pa kanpe.",
"Byen konte, mal kalkile.",
"Jwèt se jwèt, kròchèt pa landann.",
"Le-w pa gen manman ou tete grann.",
"Se nan chemen jennen ou kinbe chwal malen.",
"Tout bèt jennen mode.",
"Gen twou nan manch.",
"Gran nèg se leta.",
"Si pa gen sitirè pa ka gen vòl",
"Kochon manje santiman-l nan po bannan-n",
"Pito dlo-a tonbe, klabas la pa kraze",
"Santi bon koute chè.",
 "Bèf di li pral sal savann, se ke-l li sal.",
"Bèf ki gen ke long, pa janbe dife.",
"Bèf pa janm di savann mèsi.",
"Bèf pou wa, savann pou wa, ya demele yo.",
"Bondye pouse mouch pou bèf san ke.",
"Ou kouche sou po bèf la, wap pale-l mal.",
"Kochon manje santiman-l nan po bannan-n.",
"Pito dlo-a tonbe, kalbas la pa kraze.",
"Santi bon koute chè.",
"Bèl cheve pa lajan.",
"Fe wè pa dire.",
"Kòfrefò pa swiv kòbya.",
"Larouze fè banda tout tan solèy poko leve.",
"Matla te di plis pase sa, epi li kite payas monte-l.",
"Bat chen-an tan mèt li.",
"Jou fèy tonbe nan dlo se pa jou-a li pouri.",
"Lè-w manje pitit tig, ou pa domi di.",
"Sa nèg fè nèg Bondye ri.",
"Teke mab la jis li kase.",
"Bèl parol pa vle di verite pou sa.",
"Bonjou-l pa la verite.",
"De je kontre manti kaba.",
"Rayi chen di dan-l blanch.",
"Abitid se vis.",
"Gen twou nan manch.",
"Tout moun gen yon gren zannon kay zofèv",
"Zonbi ki goute sèl, pa mande rete."
];



/*
var tablecontainer=document.createElement('div');
var tableau=document.createElement('table');

tablecontainer.appendChild(tableau);

for(var i=0;i<pwoveb.length;i++)
 {
   var td=document.createElement('td');
   td.appendChild(pwoveb[i]);
   tableau.appendChild(td);
 }*/

 window.fbAsyncInit = function() {
     FB.init({
       appId      : '138965350070415',
       xfbml      : true,
       version    : 'v2.10'
     });
     FB.AppEvents.logPageView();
   };

   (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

 function fb_post(){
     alert("click!");
     login();
     getinfo();
     post();
 }


$(document).ready(function(){


$("#share-facebook").click(function(){
    alert('fb button clicked');

    function login(){
    FB.login(function(response){
      if(response.status==="connected")
      {
        alert("Connected");
      }
      else if(response.status==="not_authorized"){
    	alert("not authorized");
      }
      else{
        alert("Other behavior");
      }

    },{scope:'publish_actions'});


    }


    $("#share-facebook").click(function(){
        alert("button clicked!");
    });

    function getinfo(){
        FB.api('me','GET',{fields:'firstname,lastname,name,id'},function (response){
            alert(response);
        });
    }

    function post(){
        FB.api('me/feed','post',{message:'my first status..'},function(response){
            alert(JSON.stringify(response));
        });
    }
})

//===========================
 $("body").addClass("animated jello");

 $("#mini-titre p span").html(pwoveb.length-5);

var idPwoveb=Math.floor(Math.random()*pwoveb.length);

$("#quote p").html('"'+pwoveb[idPwoveb]+'"');
$("#new-quote-button").click(function(){
  idPwoveb=Math.floor(Math.random()*pwoveb.length);
  $("#quote p").html('"'+pwoveb[idPwoveb]+'"');
  $("#quote p").addClass("animated lightSpeedIn");

  $('#quote p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function (){
    $("#quote p").removeClass("animated lightSpeedIn");
  });

//map anime button twitter a pou endike moun nan fol tweet
  $("#share-twitter").addClass("animated bounce");

  $('#share-twitter').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function (){
    $("#share-twitter").removeClass("animated bounce");
  });

});

$("#share-twitterlink").click(function(){
var	textToTweet=pwoveb[idPwoveb]+" #inivekreyol #kreyolpale #kreyolkonpran\nPATAJE PWOVEB PAW:www.inivekreyol.com";
	 var twtLink = 'https://twitter.com/home?status='+encodeURIComponent(textToTweet);
    $(this).attr("href", twtLink);

  // window.open(twtLink,'_blank');
})

})
