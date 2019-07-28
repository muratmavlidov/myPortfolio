import { TimelineLite } from "gsap";


function animateLanding() {
  const landingGrid = document.querySelector('.landing-grid');
  const avatarImg = document.querySelector('.avatar-img');
  const hr = document.querySelector('.hr');
  const bannerText = document.querySelector('.banner-text');
  const socialLinks = document.querySelectorAll('.social-links a');



  const lt = new TimelineLite();

  lt
    .from(landingGrid, .5, { opacity: 0 })
    .from(bannerText, .5, { height: 0 }, '-=.5')
    .from(socialLinks, 1, { opacity: 0, rotationY: 180 })
    .from(avatarImg, .5, { opacity: 0 }, .2)
    .from(hr, 1, { width: 0 }, '-=.8')

}


export {animateLanding};