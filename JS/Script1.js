function lovecalc() {
    let n = Math.random() * 100;
    n = Math.floor(n) + 1;
    let a = prompt("what is your name?")
    let b = prompt("what is your crush's name?")
    alert(a + " + " + b + " is a " + n + "% match!")

    if (n < 20) {
        alert("There is ls little to no love, do not persue this unless you want your heart broke!");
    } else if (n < 40) {
        alert("your love is fading, try new things to rekindle the love flame!");
    } else if (n < 60) {
        alert("Love is blossoming, make that extra effort to make it blooming!");
    } else if (n < 80) {
        alert("Sparks and lightning fly when you connect, this is pure love and passion!");
    } else if (n < 100) {
        alert("You have found your true soulmate, arrange a marrige because this is the one for you!");
    }
}