function lovecalc() {
    let n = Math.random() * 100;
    n = Math.floor(n) + 1;
    let a = prompt("what is your name?");
    let b = prompt("what is your crush's name?");
   

    if (a.length < 1 || b.length < 1) {
        alert("One or both of the names are missing! Please fill them out correctly");
    } else if (n < 20) {
        alert(a + " + " + b + " is a " + n + "% match!");
        alert("There is ls little to no love, do not persue this unless you want your heart broke!");
        
    } else if (n < 40) {
        alert(a + " + " + b + " is a " + n + "% match!");
        alert("your love is fading, try new things to rekindle the love flame!");
        
    } else if (n < 60) {
        alert(a + " + " + b + " is a " + n + "% match!");
        alert("Love is blossoming, make that extra effort to make it blooming!");
        
    } else if (n < 80) {
        alert(a + " + " + b + " is a " + n + "% match!");
        alert("Sparks and lightning fly when you connect, this is pure love and passion!");
        
    } else if (n < 100) {
        alert(a + " + " + b + " is a " + n + "% match!");
        alert("You have found your true soulmate, arrange a marrige because this is the one for you!");        
    } 
    
}


function cunt() {
    document.querySelector("body").innerHTML = `<h1> Danny is a cunt!</h1>
                                                <h2> i would like to dedicate this section to my love/hate relationship with Danny</h2>
                                                <p>Oh Daniel, the damage you do makes me happy, but when you talk it makes me sad <br>
                                                   We play games to forget our lives, only pushing time forward until the sweet release that is death </p>
    `;    
}

function chevelle() {
    document.querySelector("body").innerHTML = `<h1>YOU CANT BAN ME HERE CHEV! </h1>
                                                <h2>Dear diary today he deleted my chat again</h2>
                                                <p>this no longer makes me sad, but i keeps the wound open.
                                                   I'm counting the minutes til Vick streams again, because atleast there i am safe!</p> 
                    `;
}