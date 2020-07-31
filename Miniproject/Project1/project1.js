function genQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randNum];
}


var quotes = [ "\"Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.\"<br><br>-  A. P. J. Abdul Kalam ", "\"Either I will find a way, or I will make one.\"<br><br> - Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br><br>- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"<br><br>- C.S Lewis", "\"If you can dream it, you can do it.\"<br><br>- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"<br><br>- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br><br>- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br><br>- Bruce Lee",];
