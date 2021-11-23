//select elements to manipulate
var pause = document.querySelector("#pause");
var buyTickets = document.querySelectorAll(".buyTickets");
var about = document.getElementById("about");
var faq = document.querySelector("#faq");
var container = document.querySelector("#container");
var form = document.querySelector("form");


//load about page
about.addEventListener("click", loadAboutContent);

//load buy ticket form
for(var i = 0; i < buyTickets.length; i++){
    buyTickets[i].addEventListener("click", loadFormContent);
}

//load FAQ page
faq.addEventListener("click", loadFaqContent);

//pause radio
pause.addEventListener("click", pauseRadio);

//make navbar responsive
// window.addEventListener("load", function(){
//     var radioTitle = document.querySelector("#radioTitle");
//     var rightNavCont = document.querySelector(".right-nav");
//     var leftNavCont = document.querySelector(".left-nav");

//     if (window.innerWidth <= 1475 && window.innerWidth > 1080) { 
//         radioTitle.innerHTML = "<i class=\"fab fa-atlassian\"></i><i class=\"fas fa-compact-disc\"></i>";
//     }

//     if (window.innerWidth <= 1080 && window.innerWidth > 842){
//         radioTitle.innerHTML = "";
//     }  

//     if (window.innerWidth <= 842){
//         rightNavCont.innerHTML = "<i class=\"fas fa-bars\"></i>";    
//     } 

//     if (window.innerWidth > 1475){
//         radioTitle.innerHTML = "<i class=\"fab fa-atlassian\"></i>scension radi<i class=\"fas fa-compact-disc\"></i>";
//     }
// });

// window.addEventListener("resize", function(){
//     var radioTitle = document.querySelector("#radioTitle");
//     var rightNavCont = document.querySelector(".right-nav");
//     var leftNavCont = document.querySelector(".left-nav");

//     if (window.innerWidth <= 1475 && window.innerWidth > 1080) { 
//         radioTitle.innerHTML = "<i class=\"fab fa-atlassian\"></i><i class=\"fas fa-compact-disc\"></i>";
//     } else if (window.innerWidth <= 1080 && window.innerWidth > 842){
//         radioTitle.innerHTML = "";
//     } else if (window.innerWidth <= 842){
//         rightNavCont.innerHTML = "<i class=\"fas fa-bars\"></i>";    
//     } else{
//         radioTitle.innerHTML = "<i class=\"fab fa-atlassian\"></i>scension radi<i class=\"fas fa-compact-disc\"></i>";
//     }
// });



//  <--------FUNCTION DECLARATIONS--------->


//play radio
function playRadio(){
    var radio = document.querySelector("audio");
    var vinyl = document.querySelector(".fa-compact-disc");
        radio.play();
        vinyl.classList.add("fa-spin");
    //pause video if playing    
    var video = document.querySelector("video");
    if(video != null){
        video.pause();
    }
};


//pause radio
function pauseRadio(){
    var radio = document.querySelector("audio");
    var vinyl = document.querySelector(".fa-compact-disc");
        radio.pause();
        vinyl.classList.remove("fa-spin");
};


//process and display form
function processForm(){
    //prevent default action for submit input
    event.preventDefault();
    //select form
    var form = document.querySelector("form");
    //create new form data object
    var formData = new FormData(form)

    //capture form input values
    var firstName = formData.get("first");
    var lastName = formData.get("last");
    var dateOfB = formData.get("dOB");
    var email = formData.get("email");
    var telNum = formData.get("tel");
    var ticketType = formData.get("ticketType");
    var numTickets = formData.get("numTickets");

     //generate random ticket number
    var ticketNum = Math.floor(10000000 + Math.random() * 90000000);

    if (ticketType == 750){
        var access = "Regular"; 
    } else{
        var access = "VIP";
    }

    //calculate ticket buyer's age
    var birthYear = Number(dateOfB.substring(0,4));
    var birthMonth = Number(dateOfB.substring(5,7));
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();

    if ((month - birthMonth) >= 0){
        var age = year - birthYear
    } else{
        var age = year - birthYear - 1
    }

    //if ticket buyers age is less than 18, do not display ticket preview, else display ticket preview 
    if (age < 18){
        container.innerHTML = "<div id=\"ticket\"><p style=\"font-size: 35px;\">You are too young to attend ascension music festival, try again next year.</p><p><i class=\"fas fa-sad-tear\"></i></p></div>";
    } else {
        container.innerHTML = "<div id=\"ticket\"><h1><i class=\"fab fa-atlassian\"></i>scension festival 2021 ticket</h1><h4 style=\"font-weight: 8px\">(Ticket preview - Make payment to receive official ticket/s)</h4><p style=\"text-align: left;margin-left: 100px;\"><strong>TICKET ID :</strong><span style=\"position: relative;left: 40px\">#" + ticketNum + "</span></p><p style=\"text-align: left;margin-left: 100px;\"><strong>NAME :</strong><span style=\"position: relative;left: 73px\">" + firstName + " " + lastName + "</span></p><p style=\"text-align: left;margin-left: 100px;\"><strong>AGE :</strong><span style=\"position: relative;left: 88px\">" + age + "</span></p><p style=\"text-align: left;margin-left: 100px;\"><strong>CONTACT :</strong><span style=\"position: relative;left: 45px\">" + telNum + "</span></p><p style=\"text-align: left;margin-left: 100px;\"><strong>TICKET TYPE :</strong><span style=\"position: relative;left: 15px\">" + access + "</span></p><p style=\"text-align: left;margin-left: 100px;\"><strong>PRICE :</strong><span style=\"position: relative;left: 73px\">R" + ticketType + "</span></p><img id=\"ticketIMG\" src=\"./Assets/Images/mfDOOM.png\"></div>";
    }   
};


//display answer to faq question 1
function displAnswer1(){
    quest1 = document.querySelector(".quest1");
    quest1.innerHTML = "<p style=\"display: inline-block; width: 90%;\">Contact our call center at 031 674 5809 and speak to one of our agents who will talk you through the refund process.</p>";
};


//display answer to faq question 2
function displAnswer2(){
    quest2 = document.querySelector(".quest2");
    quest2.innerHTML = "<p style=\"display: inline-block; width: 90%;\">No it will not due to the current world-wide Covid-19 pandemic.</p>";
};


//display answer to faq question 3
function displAnswer3(){
    quest3 = document.querySelector(".quest3");
    quest3.innerHTML = "<p style=\"display: inline-block; width: 90%;\">No, we will be bringing a new lineup to you, which can be seen on the about page.</p>";
};


//display answer to faq question 4
function displAnswer4(){
    quest4 = document.querySelector(".quest4");
    quest4.innerHTML = "<p style=\"display: inline-block; width: 90%;\">Yes, as you will need to show your ticket upon entry to Ascension festival.</p>";
};


//load form
function loadFormContent(){
    //create new xhr object
    var xhr = new XMLHttpRequest();

    //establish connection
    xhr.open("GET", "ticketForm.txt", true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            container.innerHTML = this.responseText;
        } else {
            console.log("error");
        }
    }

    //send request
    xhr.send();
};


//load about page
function loadAboutContent(){
    //create new xhr object
    var xhr = new XMLHttpRequest();

    //establish connection
    xhr.open("GET", "about.txt", true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            container.innerHTML = this.responseText;
        } else {
            console.log("error");
        }
    }

    //send request
    xhr.send();
};


//load faq page
function loadFaqContent(){
    //create new xhr object
    var xhr = new XMLHttpRequest();

    //establish connection
    xhr.open("GET", "faq.txt", true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            container.innerHTML = this.responseText;
        } else {
            console.log("error");
        }
    }

    //send request
    xhr.send();
};
    
    

   
