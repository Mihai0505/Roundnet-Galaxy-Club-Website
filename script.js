function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function myFunction2() {
    var x = document.getElementById("contact");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function updateTimer() {
    future = Date.parse("apr 26, 2023 00:09:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);

document.addEventListener("DOMContentLoaded", function(){
  document.body.addEventListener("touchstart", playVideo);
  function playVideo() {
      const video = document.getElementById('myVideo');
      if(video.playing) {
      } else {
          video.play();
      }
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }//else{ entry.target.classList.remove('show'); }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show2');
    }//else{ entry.target.classList.remove('show'); }
  });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show3');
    }else{ entry.target.classList.remove('show3'); }
  });
});

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer3.observe(el));


window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      document.querySelector(".popup").style.display = "block";
    },
    0
  )
});

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

function progres(x) {
  if (x !== 0 && document.querySelectorAll(".softprogress").length > 0 && document.querySelectorAll(".softprogress [code-softprogress]").length > 0) {
    document.querySelectorAll(".softprogress [code-softprogress]").forEach((el) => runsoftprogress(el));
  }else if(x === 0){
    document.querySelectorAll(".softprogress [code-softprogress]").forEach((el) => caca(el));
      
  }};

function runsoftprogress(el) {
  el.className = "run-softprogress";
  el.setAttribute("style",`--run-softprogress:${el.getAttribute("code-softprogress")}%;`
  );}

  function caca(el) {
      el.className = "run-softprogress2";
    }