import { TimelineLite } from "gsap";

export default function animateLinks() {
  const links = document.querySelectorAll('.nav-link');

  const tl = new TimelineLite();


  tl.staggerFrom(links, .5, {
    opacity: 0,
    transform: 'translateY(-10px)'
  }, .2)
}