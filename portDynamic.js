 
 let header=document.querySelector("header");
 header.classList.toggle('sticky',window.scrollY>100)
 const menuIcon=document.querySelector('#menu-icon');
 const navbar=document.querySelector('.navbar');
 const link=document.querySelectorAll(".link");
 menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
 });
 
 link.forEach((lin)=>{
     lin.addEventListener("click",()=>{
       navbar.classList.remove('active');
       menuIcon.classList.remove('bx-x');
 
     })
 })
 






