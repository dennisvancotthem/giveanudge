const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const opening = document.querySelector('.opening');

function enterSite(){
  document.body.classList.remove('is-loading');
  document.body.classList.add('ready');
  if(opening){
    opening.classList.add('leave');
    setTimeout(()=>opening.remove(),800);
  }
}

if(reduceMotion){
  enterSite();
}else{
  setTimeout(enterSite,3750);
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
