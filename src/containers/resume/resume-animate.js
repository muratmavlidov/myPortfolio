import { TimelineLite } from "gsap";


function animateResume() {

  const resumePage = document.querySelector('.resume-page');
  const resumeAvatar = document.querySelector('.resume-avatar');
  const lines = document.querySelectorAll('.resume-page hr');
  const educationBlocks = document.querySelectorAll('.education-block');
  const descrText = document.querySelectorAll('.descr-text');
  const tl = new TimelineLite();

  tl
    .from(resumePage, .5, { opacity: 0 })
    .from(resumeAvatar, 1, { opacity: 0, rotationY: 180 }, 0)
    .from(lines, 1, { opacity: 0, width: 0 })
    .from(descrText, .5, { x: '-100px', opacity: 0 }, .5)
    .staggerFrom(educationBlocks, 1, { opacity: 0, height: 0, x: '-20px' }, .3, .3)

}


export {animateResume};