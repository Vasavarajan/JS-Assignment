const curtime = document.getElementById('time').innerHTML=time;
        function clock(){
            let date = new Date();
            let time = date.toLocaleTimeString();
            curtime.innerHTML = time;
        }
        setInterval(clock,1000);

let head = document.getElementById('head');
const name = prompt("Enter your name");
head.innerText += `${"\n"} Welcome JS Rowdie "${name}"😎`; 

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

