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

document.addEventListener('DOMContentLoaded',()=>{const p=document.getElementById('gan-local-player'),s=document.getElementById('gan-local-source'),t=document.getElementById('gan-local-title'),cs=document.querySelectorAll('.video-select-card[data-video-src]');if(!p||!s)return;cs.forEach(c=>c.addEventListener('click',()=>{s.src=c.dataset.videoSrc;p.load();p.play().catch(()=>{});if(t)t.textContent=c.dataset.videoTitle;cs.forEach(x=>x.classList.remove('is-active'));c.classList.add('is-active');p.scrollIntoView({behavior:'smooth',block:'center'})}))});
