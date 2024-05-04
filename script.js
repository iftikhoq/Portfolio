
// var i = document.querySelectorall(".left .contact-front i");   

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
         bodyEl.style.background = "#000";
         bodyEl.style.color = "#c0c0c6";
         document.querySelector(".impText").style.color = "#fff";
         document.querySelector(".highlight").style.color = "#66FCF1"
         document.querySelector(".h2").style.color = "#66FCF1"
         document.querySelector(".name").style.color = "#66FCF1"
         document.querySelector(".lineee").style.background = "#45A29E"
         document.querySelector(".btn").style.border = "3px solid #45A29E"
         document.querySelector(".overwrite").style.zIndex = 1;
         
      //    i.forEach(function(i) {
      //       i.style.color = "#45A29E";
            
      //   });
      } else {
         bodyEl.style.background = "#c0c0c6";
         bodyEl.style.color = "#4E4E50"
         document.querySelector(".impText").style.color = "#000"
         document.querySelector(".highlight").style.color = "#4B0082"
         document.querySelector(".h2").style.color = "#4B0082"
         document.querySelector(".name").style.color = "#4B0082"
         document.querySelector(".lineee").style.background = "#4B0082"
         document.querySelector(".btn").style.border = "3px solid #8A2BE2"
         document.querySelector(".overwrite").style.zIndex = -1;
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
