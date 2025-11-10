
document.documentElement.classList.remove('no-js');
AOS.init({ once:true, duration:700, easing:'ease-out' });
lucide.createIcons();

// Theme Toggle (persist in localStorage)
const key='theme:dhanzz';
const toggle=document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem(key);
if(saved==='dark' || (!saved && prefersDark)){ document.documentElement.dataset.theme='dark'; }
if(saved==='light'){ document.documentElement.dataset.theme='light'; }

toggle?.addEventListener('click', () => {
  const cur = document.documentElement.dataset.theme;
  const next = cur==='dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem(key,next);
});

// Update year
document.getElementById('year').textContent = new Date().getFullYear();


// Parallax Leviathan
const levi = document.querySelector('.hero__art img');
window.addEventListener('scroll', ()=>{
  let offset = window.scrollY * 0.08;
  if(levi) levi.style.transform = `translateY(${offset}px) scale(1)`;
});


// WORD SPLIT REVEAL
document.querySelectorAll('[data-split]').forEach(el=>{
  let words = el.innerText.trim().split(' ');
  el.innerHTML = words.map(w=>`<span>${w}</span>`).join(' ');
  let spans = el.querySelectorAll('span');
  setTimeout(()=>{
    spans.forEach((s,i)=>{
      setTimeout(()=> s.classList.add('show'), i * 120);
    });
  }, 600);
});


// Welcome Gate logic
(function(){
  try{
    const gateSeen = sessionStorage.getItem('gate:seen');
    const gate = document.getElementById('welcome-gate');
    const startBtn = document.getElementById('wg-start');
    if(!gateSeen && gate){
      document.documentElement.dataset.gate = 'open';
      startBtn?.addEventListener('click', () => {
        sessionStorage.setItem('gate:seen','1');
        gate.classList.add('ready');
        document.documentElement.dataset.gate = '';
        setTimeout(()=> gate.remove(), 900);
      });
    }else{
      gate?.remove();
    }
  }catch(e){ console.warn(e); }
})();
