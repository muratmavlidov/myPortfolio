import { TimelineLite, TweenLite } from "gsap";


function animateSpaProjects() {

  const cards = document.querySelectorAll('.card-spa');

  const tl = new TimelineLite();

  tl.staggerFrom(cards, 1, {
    opacity: 0,
    rotationY: 180
  }, .3)

  cards.forEach((i) => {
    i.addEventListener('mouseover', () => {
      TweenLite.to(i, .5, {
       y: 10 
      })
    });

    i.addEventListener('mouseout', () => {
      TweenLite.to(i, .5, {
       y: 0
      })
    });
  });


}


export {animateSpaProjects};