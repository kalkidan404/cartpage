let buy=document.querySelectorAll(".buy");
let array=[];
let cart=document.querySelector(".cart");
let container=document.querySelector(".container");
let sum=0;
let price=document.querySelector(".price");
let count=0;
let rid;

buy.forEach((bttn )=> {bttn.addEventListener("click",()=>{
    count++;
    let text = bttn.innerText; // "Buy for 4$"
let bill = Number(text.match(/\d+/)[0]); // "4"
    const parentDiv = bttn.parentElement;
    // clone the div so we can append it later without removing from original
    const clonedDiv = parentDiv.cloneNode(true);
clonedDiv.dataset.price = bill;

    array.push(clonedDiv);
  
sum+=bill;
price.textContent="your bill is"+" "+sum;
if (count==1){
    cart.textContent=count+" "+"item";
}else{cart.textContent=count+" "+"items";}


})
    
});
let header=document.querySelector(".header");
let images=document.querySelector(".images");
cart.addEventListener("click",()=>{
    header.innerHTML="";
    images.innerHTML="";
let heading=document.createElement("div");
heading.style.height="10vh";
heading.style.weight="100vw";

let itemsC=document.createElement("p");
let pricing=document.createElement("p");
let pay=document.createElement("button");
let home=document.createElement("button");
pay.textContent="pay";
home.textContent="home";
pricing.textContent="your total is"+" "+sum;
heading.appendChild(pay);
heading.appendChild(pricing);
heading.appendChild(itemsC);
heading.appendChild(home);

heading.style.justifyContent="space-between";
header.appendChild(heading);
images.style.display = "flex";
images.style.flexDirection="row";
images.style.flexWrap="wrap";
images.style.width = "100%";
images.style.overflow = "visible";


array.forEach((div) => {
    div.style.display = "flex";
    div.style.flexDirection = "column"; // image on top, button under
    div.style.alignItems = "center"; 
  const rid = document.createElement("button");
    rid.textContent="remove";
    rid.classList.add("remove");
    rid.style.backgroundColor="aqua";
    div.appendChild(rid);
 
    images.appendChild(div);
    
    itemsC.textContent="you have"+" "+count+" "+"items";
    
    rid.addEventListener("click", () => {
    div.remove();
    --count;
    sum -= Number(div.dataset.price); 
    pricing.textContent="your total is"+" "+sum;
    itemsC.textContent="you have"+" "+count+" "+"items";
    
});
home.addEventListener("click",()=>{
    window.location.href="index.html";
})

})})
