let homeEl=document.getElementById("home");
let guestEl=document.getElementById("guest");
let homeScore=0;
let guestScore=0;

function addOneHome(){
    homeScore += 1;
    if(homeScore>99){
        homeScore=0;
        homeEl.textContent=homeScore;
    }else{
        homeEl.textContent = homeScore;
    }
}

function addTwoHome(){
    homeScore += 2;
    if(homeScore>99){
        homeScore=0;
        homeEl.textContent=homeScore;
    }else{
        homeEl.textContent = homeScore;
    }
}

function addThreeHome(){
    homeScore += 3;
    if(homeScore>99){
        homeScore=0;
        homeEl.textContent=homeScore;
    }else{
        homeEl.textContent = homeScore;
    }
}

function addOneGuest(){
    guestScore += 1;
    if(guestScore>99){
        guestScore=0;
        guestEl.textContent=guestScore;
    }else{
        guestEl.textContent = guestScore;
    }
}

function addTwoGuest(){
    guestScore += 2;
    if(guestScore>99){
        guestScore=0;
        guestEl.textContent=guestScore;
    }else{
        guestEl.textContent = guestScore;
    }
}

function addThreeGuest(){
    guestScore += 3;
    if(guestScore>99){
        guestScore=0;
        guestEl.textContent=guestScore;
    }else{
        guestEl.textContent = guestScore;
    }
}

function reset(){
    homeScore=0;
    guestScore=0;
    guestEl.textContent=guestScore;
    homeEl.textContent=homeScore;
}