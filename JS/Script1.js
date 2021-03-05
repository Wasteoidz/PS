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