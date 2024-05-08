
const lightMain="#4B0082";
const darkMain="#66FCF1";

const cfUrl = ' https://codeforces.com/api/user.info?handles=ifti.k.hoq&checkHistoricHandles=true';
const lcUrl = 'https://leetcode-stats-api.herokuapp.com/ifti_k_hoq';

let cfr =""
fetch(cfUrl)
.then(response => {
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
   return response.json();
 })
  .then(data => {
   const userRatingData = data;
   document.getElementById("cfMaxRating").innerHTML = userRatingData.result[0].maxRating;
   document.getElementById("cfMaxRank").innerHTML = userRatingData.result[0].maxRank;
})

  fetch(lcUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const userRatingData = data;
    document.getElementById("lcTotalSolve").innerHTML = userRatingData.totalSolved;
    document.getElementById("lcranking").innerHTML = userRatingData.ranking;
  })

function curseranimation(){
   var crsr = document.querySelector(".cursor")
   var main = document.querySelector("body")
   document.addEventListener("mousemove", function (dets) {
       // crsr.style.left = dets.x + 1+"px"
       // crsr.style.top = dets.y + 1+"px"
       gsap.to(crsr, {
           x: dets.x,
           y: dets.y,
           duration: 0.8,
           ease: "back.out(2)"
   
       })
   })
}

curseranimation()

function darkmode() {

   const inputEl = document.querySelector(".input");

   const bodyEl = document.querySelector("main");

   inputEl.checked = JSON.parse(localStorage.getItem("mode"));
   

   function updateBody() {
      if (inputEl.checked) {
         bodyEl.style.background = "#0D0E0E";
         bodyEl.style.color = "#c0c0c6";
         document.querySelector(".cursor").style.background = darkMain;
         document.querySelector(".impText").style.color = "#fff";
         // // document.querySelector(".frontsocial").style.color = darkMain;
         // document.querySelector(".highlight").style.color = darkMain
         // document.querySelector(".h2").style.color = darkMain
         // document.querySelector(".name").style.color = darkMain
         // document.querySelector(".lineee").style.background = darkMain
         document.querySelector(".btn").style.border = "3px solid #45A29E"
         document.querySelector(".overwrite").style.zIndex = 1;
         // $("btn").toggleClass("hello");
         document.querySelector(".btn1").style.opacity=0;

         document.querySelector(".btn2").style.opacity=1;
         document.querySelector(".btn2").style.zIndex=1;

         var elements = document.getElementsByTagName('i');

         for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = darkMain;
         }

         const linee = document.getElementsByClassName('col');

         for (const div of linee) {
             div.style.backgroundColor = darkMain;
             div.style.color = 'black';
         }

         const t = document.getElementsByClassName('tcol');

         for (const div of t) {
             div.style.color = '#66FCF1';
         }
         
         // for (var i = 0; i < skill.length; i++) {
         //    skill[i].style.color = darkMain;
         // }

      } else {
         bodyEl.style.background = "#c0c0c6";
         bodyEl.style.color = "#4E4E50"
         document.querySelector(".cursor").style.background = lightMain;
         // document.querySelector(".contact-front").style.color = lightMain;
         document.querySelector(".impText").style.color = "#000"
         // document.querySelector(".highlight").style.color = lightMain
         // document.querySelector(".h2").style.color = lightMain
         // document.querySelector(".name").style.color = lightMain
         // document.querySelector(".lineee").style.background = lightMain
         document.querySelector(".btn").style.border = "3px solid #8A2BE2"
         document.querySelector(".overwrite").style.zIndex = -1;
         document.querySelector(".btn1").style.opacity=1;
         document.querySelector(".btn2").style.opacity=0;
         document.querySelector(".btn2").style.zIndex=-1;

         var elements = document.getElementsByTagName('i');

         for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = lightMain;
         }

         const linee = document.getElementsByClassName('col');

         for (const div of linee) {
             div.style.backgroundColor = lightMain;
             div.style.color = 'white';
         }

         const t = document.getElementsByClassName('tcol');

         for (const div of t) {
             div.style.color = lightMain;
         }

      }
   }
   updateBody();
   inputEl.addEventListener("input", () => {
      updateBody();
      updateLocalStorage();
   });

   function updateLocalStorage() {
      localStorage.setItem("mode", JSON.stringify(inputEl.checked));
   }

}

darkmode()

function page1animation() {
   var page1left = document.querySelector(".page1 .left")
   var page1right = document.querySelector("page1 .right")
   tl = gsap.timeline()
   tl.from(".page1 .left", {
      x: 100,
      opacity: 0,
      duration: 1,
   })
   tl.from(".page1 .right .line", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5
   }, "new")
   gsap.from(".spline", {
      opacity: 0,
      duration: 1,
      stagger: 0.5
   },)
}

page1animation()

function btnanimation() {

   const btnEl = document.querySelector(".btn");

   btnEl.addEventListener("mouseover", (event) => {
      const x = event.pageX - btnEl.offsetLeft;
      const y = event.pageY - btnEl.offsetTop;
      btnEl.style.setProperty("--xPos", x + "px");
      btnEl.style.setProperty("--yPos", y + "px");
   });
   document.querySelector(".btn").addEventListener("mouseenter", function () {
      document.querySelector(".btn span").style.color = "#fff"
   })
   document.querySelector(".btn").addEventListener("mouseleave", function () {
      document.querySelector(".btn span").style.color = "#000"
   })

}

btnanimation()

var tl2 = gsap.timeline({
   scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 50%",
      end: "top 0%",
      scrub: 3
   }
})

