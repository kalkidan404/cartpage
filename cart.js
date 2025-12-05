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
price.textContent="your bill is"+" "+sum+"$";

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
let home=document.createElement("button");
let itemsC=document.createElement("p");
let pricing=document.createElement("p");
let pay=document.createElement("button");



pay.textContent="pay";
pay.classList.add("pay");
document.body.appendChild(pay);

home.textContent="home";
pay.style.backgroundColor="#eed3b7";
home.style.backgroundColor="#eed3b7";


pay.style.position="relative";
pay.style.left="80rem";
pay.style.padding="0 4rem 2.5rem 2rem";
pay.style.borderRadius="0.7rem";
pricing.textContent="your total is"+" "+sum;
heading.appendChild(pay);
heading.appendChild(pricing);
heading.appendChild(itemsC);
heading.appendChild(home);
header.style.display="flex";
header.style.justifyContent="space-between";
heading.style.justifyContent="space-between";
header.appendChild(heading);
images.style.display = "flex";
images.style.flexDirection="row";
images.style.flexWrap="wrap";
images.style.width = "100%";
images.style.overflow = "visible";
heading.style.height="10%";
images.style.backgroundColor = "#f5f5f5";     // light background for body
heading.style.backgroundColor = "#f8f3e8";    // dark header
   // header text color
   home.classList.add("home");
home.addEventListener("mouseenter", () => {
  btn.style.backgroundColor = "#a30b1c";
});
home.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = "#74070e";
});


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
    itemsC.style.position="relative";
    itemsC.style.left="40rem";
    itemsC.style.bottom="8rem";
    pricing.style.position="relative";
    pricing.style.left="40rem";
    pricing.style.bottom="4rem";
    home.style.position="relative";
home.style.padding="0 4rem 2.5rem 2rem";
    home.style.bottom="9rem";
    home.style.left="1rem";
    home.style.borderRadius="0.7rem";
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
