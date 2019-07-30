import { TimelineLite } from "gsap";


function animateContact() {
  const contactPage = document.querySelector('.contact-body');
  const icons = document.querySelectorAll('.item-content i');
  const line = document.querySelector('.hr');
  const contactAvatar = document.querySelector('.contact-avatar');

  const tl = new TimelineLite();

  tl
    .from(contactPage, .5, { opacity: 0 })
    .from(line, .7, { width: 0, y: -10, opacity: 0 })
    .from(contactAvatar, 1, {
      opacity: 0,
      rotation: -180,
      rotationY: 180,
      borderRadius: '50%'
    }, .2)
    .staggerFrom(icons, .6, { opacity: 0, x: -15 }, .3, .3)
}


export {animateContact};