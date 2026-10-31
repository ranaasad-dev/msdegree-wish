const developerProfile = window.DEVELOPER_PROFILE;

const copy={en:{musicPlay:'Play music',musicPause:'Pause music',musicLoading:'Loading…',musicError:'Music could not play. Please try again.',bs:'BS Mathematics',bsBody:'The foundation of your academic journey.',eyebrow:'A milestone worth celebrating',headline:'Congratulations,<br><em>Api Sawera.</em>',intro:'An MS in Data Science. A new chapter in research. And so many reasons to be proud of you.',open:'A message for you ↗',celebrate:'Let’s celebrate ✧',strip:'THE NEXT CHAPTER: PhD',journeyLabel:'Your story, still unfolding',journey:'One achievement. New horizons.',ms:'MS Data Science · 2024–2026',msBody:'A moment to celebrate your hard work, dedication and the knowledge you have earned.',completed:'Degree completed',phd:'The PhD journey begins',phdBody:'May this new chapter bring meaningful discoveries, inspiring questions and opportunities to grow.',beginning:'A new beginning',just:'Just for you',waiting:'A little note, with a lot of love and pride.',reveal:'Open your message ♡',dear:'Dear Api Sawera,',p1:'Congratulations on completing your MS in Data Science and beginning your PhD journey. Your hard work, dedication and love of learning make this achievement truly special.',p2:'May Allah bless your knowledge, make this new path easier for you and grant you success at every step. May your research benefit others and bring you lasting fulfilment.',p3:'We are so proud of you. May you keep moving forward with confidence, happiness and the support of those who love you.',closing:'With love, prayers and pride,'},ur:{musicPlay:'موسیقی چلائیں',musicPause:'موسیقی روکیں',musicLoading:'انتظار کریں…',musicError:'موسیقی نہیں چل سکی۔ دوبارہ کوشش کریں۔',bs:'ریاضی میں بی ایس',bsBody:'آپ کے تعلیمی سفر کی بنیاد۔',eyebrow:'آپ کی کامیابی، ہماری خوشی',headline:'بہت مبارک ہو،<br><em>آپی سویرا!</em>',intro:'ڈیٹا سائنس میں ایم ایس مکمل کرنے اور پی ایچ ڈی کے نئے سفر کا آغاز کرنے پر آپ کو دل سے مبارک باد۔ ہمیں آپ پر فخر ہے۔',open:'آپ کے لیے ایک پیغام ↗',celebrate:'آئیے، خوشی منائیں ✧',strip:'اگلا مرحلہ: پی ایچ ڈی',journeyLabel:'علم کا سفر جاری ہے',journey:'ایک کامیابی، نئے امکانات',ms:'ڈیٹا سائنس میں ایم ایس (۲۰۲۴ تا ۲۰۲۶)',msBody:'یہ آپ کی محنت، لگن اور حاصل کیے گئے علم کی خوشی منانے کا موقع ہے۔',completed:'ڈگری مکمل',phd:'پی ایچ ڈی کے سفر کا آغاز',phdBody:'دعا ہے کہ یہ نیا سفر آپ کے لیے بامقصد تحقیق، نئے علم اور ترقی کے مواقع لے کر آئے۔',beginning:'ایک نئی شروعات',just:'صرف آپ کے لیے',waiting:'محبت، دعاؤں اور فخر سے بھرا ایک چھوٹا سا پیغام۔',reveal:'اپنا پیغام کھولیں ♡',dear:'پیاری آپی سویرا،',p1:'ڈیٹا سائنس میں ایم ایس کی ڈگری مکمل کرنے اور پی ایچ ڈی کے نئے سفر کا آغاز کرنے پر آپ کو دل کی گہرائیوں سے مبارک باد۔ آپ کی محنت، لگن اور علم سے محبت نے اس کامیابی کو بہت خاص بنا دیا ہے۔',p2:'اللہ تعالیٰ آپ کے علم میں برکت عطا فرمائے، اس نئے سفر میں آپ کے لیے آسانیاں پیدا فرمائے اور ہر قدم پر آپ کو کامیابی نصیب فرمائے۔ دعا ہے کہ آپ کی تحقیق دوسروں کے لیے فائدہ مند ہو اور آپ کے لیے دلی اطمینان کا باعث بنے۔',p3:'ہمیں آپ پر بہت فخر ہے۔ آپ ہمیشہ اعتماد، خوشی اور اپنوں کی محبت کے ساتھ آگے بڑھتی رہیں۔',closing:'بہت سی محبت، دعاؤں اور فخر کے ساتھ،'}};
let language='en';let theme='dark';try{language=localStorage.getItem('sawera-language')==='ur'?'ur':'en';theme=localStorage.getItem('sawera-theme')==='light'?'light':'dark'}catch{}const audio=document.getElementById('background-music');const musicButton=document.getElementById('music-toggle');let musicLoading=false;let musicFailed=false;audio.volume=0.3;
function renderMusic(){const playing=!audio.paused;const label=copy[language][musicLoading?'musicLoading':playing?'musicPause':'musicPlay'];document.getElementById('music-label').textContent=label;musicButton.setAttribute('aria-label',label);musicButton.setAttribute('aria-pressed',String(playing));musicButton.disabled=musicLoading;document.getElementById('music-error').textContent=musicFailed?copy[language].musicError:'';document.getElementById('music-error').dir=language==='ur'?'rtl':'ltr';}
musicButton.addEventListener('click',async()=>{musicFailed=false;if(!audio.paused){audio.pause();return;}musicLoading=true;renderMusic();try{await audio.play()}catch{musicFailed=true}finally{musicLoading=false;renderMusic()}});audio.addEventListener('play',renderMusic);audio.addEventListener('pause',renderMusic);audio.addEventListener('error',()=>{musicFailed=true;musicLoading=false;renderMusic()});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');function persist(){try{localStorage.setItem('sawera-language',language);localStorage.setItem('sawera-theme',theme)}catch{}}function render(){document.documentElement.lang=language;document.documentElement.dataset.theme=theme;document.querySelectorAll('[data-key]').forEach(el=>{const key=el.dataset.key;if(key==='headline')el.innerHTML=copy[language][key];else el.textContent=copy[language][key];el.dir=language==='ur'?'rtl':'ltr'});document.getElementById('lang').textContent=language==='en'?'اردو':'English';document.getElementById('lang').setAttribute('aria-label',language==='en'?'Switch to Urdu':'Switch to English');document.getElementById('theme').textContent=theme==='dark'?(language==='en'?'☀ Light':'☀ روشن موڈ'):(language==='en'?'☾ Dark':'☾ تاریک موڈ');document.getElementById('theme').setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');renderMusic();renderDeveloper();document.querySelector('meta[name=theme-color]').setAttribute('content',theme==='dark'?'#21141e':'#fff8f3');persist()}document.getElementById('lang').onclick=()=>{language=language==='en'?'ur':'en';render()};document.getElementById('theme').onclick=()=>{theme=theme==='dark'?'light':'dark';render()};function celebrate(){if(reduced.matches||document.querySelectorAll('.confetti').length>0)return;for(let i=0;i<65;i++){let e=document.createElement('i');e.className='confetti';e.style.cssText=`left:${Math.random()*100}%;background:${['#e6b6a4','#cf8ea9','#f5dcaa'][i%3]};animation-delay:${Math.random()*.65}s;--drift:${Math.random()*180-90}px`;document.body.append(e);setTimeout(()=>e.remove(),4300)}}function reveal(){document.getElementById('teaser').hidden=true;document.getElementById('letter').hidden=false;document.getElementById('open').setAttribute('aria-expanded','true');document.getElementById('reveal').setAttribute('aria-expanded','true');celebrate()}document.getElementById('open').onclick=reveal;document.getElementById('reveal').onclick=reveal;document.getElementById('celebrate').onclick=celebrate;render();setTimeout(celebrate,650);

// Developer popup. Personal details are configured only in developer-config.js.
function renderDeveloper(){
  const d=developerProfile; const l=d.labels[language];
  const dialog=document.getElementById('developer-dialog');
  dialog.dir=language==='ur'?'rtl':'ltr';
  document.getElementById('developer-footer-brand').textContent=d.brand;
  document.getElementById('developer-open').setAttribute('aria-label',l.about);
  document.getElementById('developer-name').textContent=d.name[language];
  document.getElementById('developer-brand').textContent=d.brand;
  document.getElementById('developer-intro').textContent=d.introduction[language];
  document.getElementById('developer-about').textContent=l.about;
  document.getElementById('developer-close').textContent=l.close;
  document.getElementById('developer-socials').setAttribute('aria-label',l.about);
  for(const key of ['portfolio','linkedin','github']){
    const link=document.getElementById('developer-'+key);
    link.href=d.links[key];link.textContent=l[key];
  }
  const whatsapp=document.getElementById('developer-whatsapp');
  const number=String(d.whatsapp).replace(/\D/g,'');
  whatsapp.hidden=!number;
  if(number)whatsapp.href='https://wa.me/'+number;
  whatsapp.textContent=l.whatsapp;
  const email=document.getElementById('developer-email');
  email.href='mailto:'+d.email;email.textContent=d.email;email.setAttribute('aria-label',l.email+': '+d.email);
}
const developerDialog=document.getElementById('developer-dialog');
let previousBodyOverflow='';
document.getElementById('developer-open').addEventListener('click',()=>{
  if(developerDialog.open)return;
  previousBodyOverflow=document.body.style.overflow;
  developerDialog.showModal();document.body.style.overflow='hidden';
});
document.getElementById('developer-close').addEventListener('click',()=>developerDialog.close());
developerDialog.addEventListener('close',()=>{document.body.style.overflow=previousBodyOverflow;document.getElementById('developer-open').focus({preventScroll:true})});
developerDialog.addEventListener('click',event=>{
  if(event.target!==developerDialog)return;
  const r=developerDialog.getBoundingClientRect();
  if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)developerDialog.close();
});
// Keep keyboard navigation inside the open modal, including in embedded previews.
developerDialog.addEventListener('keydown',event=>{
  if(event.key!=='Tab')return;
  const items=Array.from(developerDialog.querySelectorAll('button:not([disabled]),a[href]')).filter(el=>!el.hidden);
  const first=items[0],last=items[items.length-1],active=developerDialog.ownerDocument.activeElement;
  if(event.shiftKey&&active===first){event.preventDefault();last.focus()}
  else if(!event.shiftKey&&active===last){event.preventDefault();first.focus()}
});
