import { TimelineLite, TweenLite } from "gsap";


function animateSiteProjects() {

  const cards = document.querySelectorAll('.card-site');

  const tl = new TimelineLite();

  tl.staggerFrom(cards, .5, {
    opacity: 0,
    y: 15,
    x: -15
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


export {animateSiteProjects};