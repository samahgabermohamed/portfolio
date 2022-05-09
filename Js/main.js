let nav=document.querySelector(".nav")
 console.log(nav.clientHeight)

let bodyscroll=document.querySelector("html,body")
window.addEventListener("scroll",()=>{
   if(bodyscroll.scrollTop>=100){
       nav.classList.add("onscroll")
   }
   else {
       nav.classList.remove("onscroll")
   }
})



let PORTFOLIO=document.querySelector(".PORTFOLIO")
PORTFOLIO.style.paddingTop=nav.clientHeight+"px"

let navlinks = document.querySelectorAll(".link")
for(let index=0;index<navlinks.length;index++){
    navlinks[index].addEventListener("click",()=>{
        for(let i=0;i<navlinks.length;i++){
            navlinks[i].classList.remove("active")
        }
    navlinks[index].classList.add("active")
    })
}

