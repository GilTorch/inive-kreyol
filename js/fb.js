alert("I am loaded!");  
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
    FB.api('me','GET'{fields:'firstname,lastname,name,id'},function (response){
        alert(response);
    })
}

function post(){
    FB.api('me/feed','post',{message:'my first status..'},function(response){
        alert(JSON.stringify(response));
    });
}