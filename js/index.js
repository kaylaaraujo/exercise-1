function init(){

   words0=['Crazy','Loving','Serious','Funny'];
   words1=['Dancing','Swift','Dapper','Vicious','Rolling','Jumping','Drooling','Limping'];
   words2=['Magician','Nomad','Octopus','Peanut','Quail','Raisin','Scout','Tiger','Umbrella','Vampire','Witch','Xylophone','Yak','Zambonie'];

   df=document.forms[0];
   df.reset();

df[3].onclick=function() {

   rnd0=Math.floor(Math.random()*words0.length);
   rnd1=Math.floor(Math.random()*words1.length);
   rnd2=Math.floor(Math.random()*words2.length);

   df[0].value=words0[rnd0];
   df[1].value=words1[rnd1];
   df[2].value=words2[rnd2];
  }
 }
   window.addEventListener?
   window.addEventListener('load',init,false):
   window.attachEvent('onload',init);