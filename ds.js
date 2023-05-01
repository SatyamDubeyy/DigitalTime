let id=(document.getElementsByTagName("p"))['0']


const tset=()=>{
    let d=new Date();
id.innerText=d;
}

console.log(id.innerText);
setInterval(tset,1000)

document.addEventListener("click", myFunction);

function myFunction() {
  id.innerHTML = "Created By Navneet Sinha";
}