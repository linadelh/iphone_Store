
let yellow = document.getElementById("yellow");
let black = document.getElementById("black");
let red = document.getElementById("red");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let mainphone = document.getElementById("main")
let container = document.querySelectorAll(".container");


black.addEventListener("click" , function(){
    mainphone.src ="img/2.png" ; 
      container.forEach((item)=>
       item.style.background ="#2e2e2eff");
});

yellow.addEventListener("click" , function(){
    mainphone.src ="img/0.png" ; 
     container.forEach((item)=>
       item.style.background ="#000");
    
});
purple.addEventListener("click" , function(){
    mainphone.src ="img/1.png" ; 
       container.forEach((item)=>
       item.style.background ="#247eC8");
    
});
pink.addEventListener("click" , function(){
    mainphone.src ="img/3.png" ; 
      container.forEach((item)=>
       item.style.background ="#d7c4d1ff");
});

red.addEventListener("click" , function(){
    mainphone.src ="img/4.png" ; 
      container.forEach((item)=>
       item.style.background ="#c82525");
});


   const boutonPanier = document.getElementById('panier');
    const panierDiv = document.getElementById('mon-panier');

    boutonPanier.addEventListener('click', function(e) {
        panierDiv.style.display = panierDiv.style.display === 'block' ? 'none' : 'block';
    });


    
    let btn = document.querySelectorAll(".ajouter-panier");
    let product = [] ; 

    btn.forEach((button)=>{
    button.addEventListener("click" , function(e){
       
        const card = e.target.closest(".card");

        const nom = card.querySelector(".phone-name").textContent;

        const imgsrc = card.querySelector("img").getAttribute('src');
        const promoElement = card.querySelector('.promo');
          let prix ; 
           if(promoElement){
            prix = promoElement.textContent ; 
           }else{
            const price = card.querySelector(".price").textContent; 
            prix = price ; 
           }
         console.log("Nom:", nom);
         console.log("Image:", imgsrc);
         console.log("Prix:", prix);

         const icon = card.querySelector(".ajouter-panier i");
         icon.classList.remove("fa-cart-shopping");
         icon.classList.add("fa-circle-check");
             
             
           console.log("Nom cliqué :", nom);
         if ( ! product.includes(nom)){
          product.push(nom);
          ajouterpanier(nom , imgsrc , prix);
         }



       }) ;
    });


    function ajouterpanier(name, src, price) {

    const panierDiv = document.getElementById("mon-panier");
     const produitUL = document.createElement("ul");

    const liImage = document.createElement("li");
    liImage.innerHTML = `<img src="${src}" class="imago" />`;

    const liName = document.createElement("li");
    liName.innerHTML = `<p class="nameof">${name}</p>`;

    const liPrice = document.createElement("li");
    liPrice.innerHTML = `<p class="priceof">${price}</p>`;

   const liClose = document.createElement("li");
   liClose.innerHTML = `<i class="fa-solid fa-xmark fermer-panier" style="cursor: pointer;"></i>`;



    produitUL.appendChild(liImage);
    produitUL.appendChild(liName);
    produitUL.appendChild(liPrice);
    produitUL.appendChild(liClose);

    panierDiv.appendChild(produitUL);
}


    
   document.getElementById("mon-panier").addEventListener("click", function(e) {
  if (e.target.classList.contains("fermer-panier")) {
    const ul = e.target.closest("ul");
    if (ul) ul.remove();
  }
});


