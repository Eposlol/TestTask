// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



// //   window.onscroll = function() {myFunction()};

  
// // const myFunction = () =>  {
// //     const secondBlock = document.getElementById('block__2')
// //     let elDistanceToTop = window.pageYOffset + secondBlock.getBoundingClientRect().top
// //     //  let y = wrapper.scrollTop;
// //     console.log(elDistanceToTop)
// //     console.log(secondBlock.scrollTop)
// //     // astronaut.style.top = 400 - y + "px";
// //   }


// //   window.onload = function() {
// //     const parallax = document.getElementById('block__1');
// //     const astronaut = document.getElementById('astronaut');
// //     if (astronaut) {
        
// //         const forAstronaut = 180;
// //         const speed = 0.05;
// //         let positionY = 0;
// //         let coordYprocent = 0;

// //         function setMosueParralaxStyle() {
// //             const distY = coordYprocent - positionY;
// //             positionY = positionY + (distY * speed);

// //             astronaut.style.cssText = `transform: translate(${positionY/forAstronaut});`;
// //             requestAnimationFrame(setMosueParralaxStyle)
// //         }
// //         setMosueParralaxStyle()
// //         parallax.addEventListener("mousemove", function(e) {
// //             const parallaxHeight = parallax.offsetHeight;
// //             const coordY = e.pageY - parallaxHeight/2;

// //             coordYprocent = coordY / parallaxHeight * 100;
// //         }); 
// //     }
// //   }

// function handleMarquee(){
//     const marquee = document.querySelectorAll('.ticker__container');
//     let speed = 4;
//     let lastScrollPos = 0;
//     let timer;
    
//     marquee.forEach(function(el){
//         const container = el.querySelector('.ticker-left');
//         const content = el.querySelector('.ticker-left > *');
//         //Get total width
//         const  elWidth = content.offsetWidth;
        
        
//         //Duplicate content
//         let clone = content.cloneNode(true);
//         container.appendChild(clone);
        
//         let progress = 1;
//         function loop(){
//             progress = progress-speed;
//             if(progress <= elWidth*-1) {progress=0;}
//             container.style.transform = 'translateX(' + progress + 'px)';
//             container.style.transform += 'skewX(' + speed*0.3 + 'deg)';
            
//             window.requestAnimationFrame(loop);
//         }
//         loop();
//     });

//     marquee.forEach(function(el){
//         const container = el.querySelector('.ticker-right');
//         const content = el.querySelector('.ticker-right > *');
//         //Get total width
//         const  elWidth = content.offsetWidth;
        
        
//         //Duplicate content
//         let clone = content.cloneNode(true);
//         container.appendChild(clone);
        
//         let progress = 1;
//         function loop(){
//             progress = progress + speed;
//             if(progress <= elWidth*-1) {progress=0;}
//             container.style.transform = 'translateX(' + progress + 'px)';
//             container.style.transform += 'skewX(' + speed*0.3 + 'deg)';
            
//             window.requestAnimationFrame(loop);
//         }
//         loop();
//     });
    
//     // window.addEventListener('scroll', function(){
//     //     const maxScrollValue = 12;
//     //     const newScrollPos = window.scrollY;
//     //     let scrollValue = newScrollPos - lastScrollPos;
        
        
//     //     if( scrollValue > maxScrollValue ) scrollValue = maxScrollValue;
//     // else if( scrollValue < -maxScrollValue ) scrollValue = -maxScrollValue;
        
//     //     speed = scrollValue;
        
//     //     clearTimeout(timer);
//     // timer = setTimeout(handleSpeedClear, 10);
//     // });
    
//     function handleSpeedClear(){
//         speed = 4;
//     }
// };

// handleMarquee();