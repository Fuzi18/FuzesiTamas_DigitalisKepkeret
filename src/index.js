import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function kep(){
  let link = document.getElementById("url").value;
  document.getElementById("kep").src = link;

}
function szelesseg() {
  let szelesseg = document.getElementById("szelesseg").value;
  document.getElementById("kep").style.width = szelsseg + "px";
}
function vastagsag() {
  let vastag = document.getElementById("vastagsag").value;
  document.getElementById("kep").style.borderWidth = vastag + "px";
  console.log(vastag);
  
}
function szin() { 
  let szinek = document.getElementById("szin").value;
  document.getElementById("kep").style.borderColor = szinek;
}

function klikk() {
  
}
document.getElementById("url").addEventListener('change', kep);
document.getElementById("szelesseg").addEventListener('change', szelesseg);
document.getElementById("vastagsag").addEventListener('change', vastagsag);
document.getElementById("szin").addEventListener('input', szin);


