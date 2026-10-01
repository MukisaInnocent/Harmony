document.getElementById('yr').textContent=new Date().getFullYear();
var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){
  e.preventDefault();
  var t='Name: '+f.n.value+'\nCompany: '+f.c.value+'\nInterest: '+f.i.value+'\n\n'+f.m.value;
  var ok=document.getElementById('ok');
  ok.textContent='Thank you, '+f.n.value+'. Your message is ready to send. ';
  var a=document.createElement('a');
  a.href='https://wa.me/256702773448?text='+encodeURIComponent(t);
  a.target='_blank';a.rel='noopener';a.textContent='Send via WhatsApp';
  a.style.textDecoration='underline';ok.appendChild(a);
});}
