function verif(){
    np=document.getElementById("np").value;
    cin=document.getElementById("cin").value;
    tel=document.getElementById("tel").value;
    ema=document.getElementById("ema").value;
    s=document.getElementsByName("R1");
    m=document.getElementById("m");
    j1=document.getElementById("3");
    j2=document.getElementById("5");
    if(!majus(np)||np=="") {alert("que des lettres majuscules svp");return false;}
    if(!numerique(cin,8)||cin==""){alert("verifier cin");return false;}
    if(!numerique(tel,8)||tel.substr(0,2)!='98'){alert("tel de 8 chiffres et commence par 98 svp");return false;}
    if(!mail(ema)||ema==""){alert("email incorrect");return false;}
    if(s[0].checked==false&&s[1].checked==false){alert("Feminin ou Masculin");return false;}
    if (m.selectedIndex==0) {alert("SVP choisir un module");return false;}
    if(j1.checked==false&&j2.checked==false||j1.checked==true&&j2.checked==true) {alert("choisir une  duree");return false;}
}
function majus(t) {
    l=t.length;
    ok=true;
    for(i=0;i<l;i++) {
        if (t.charAt(i)<"A"||t.charAt(i) >"Z") ok=false;}   
    return ok; 
}
function numerique(t,x){
    ok=true;
     if(isNaN(t)||t.length!=x) ok=false;
     return ok;
}
function mail(t){
    ok=true;
     if (t.indexOf('@')==-1)ok=false; 
     return ok;}


     