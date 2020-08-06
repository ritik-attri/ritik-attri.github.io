var count=0;
var navlinks=$(".nav-link");
navlinks.attr("class","nav-link");
console.log(navlinks)
function buttontoggler(){
    var button=document.getElementById("puckyoubutton");
    count=count+1;
        if(count<2){
            button.innerHTML="Sorry! That's all you need to know";
        }
        else{
            button.innerHTML="Seriously what more do you need?"
        }
}
function home_changer(){
    var home_button=document.getElementById("home_button");
    console.log(home_button)
    home_button.innerText="This is Home.";
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



