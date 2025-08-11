
let yellow = document.getElementById("yellow");
let black = document.getElementById("black");
let red = document.getElementById("red");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let mainphone = document.getElementById("main")
let container = document.querySelectorAll(".container");



let product = JSON.parse(localStorage.getItem('panierProducts')) || [];

function saveCart() {
    localStorage.setItem('panierProducts', JSON.stringify(product));
}

function saveSelectedColor(color, imagePath, backgroundColor) {
    const colorData = {
        color: color,
        imagePath: imagePath,
        backgroundColor: backgroundColor
    };
    localStorage.setItem('selectedColor', JSON.stringify(colorData));
}

function loadSelectedColor() {
    const savedColor = JSON.parse(localStorage.getItem('selectedColor'));
    if (savedColor) {
        mainphone.src = savedColor.imagePath;
        container.forEach((item) => {
            item.style.background = savedColor.backgroundColor;
        });
    }
}

function loadCart() {
    const productDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    
    product.forEach(productName => {
        if (productDetails[productName]) {
            ajouterpanier(productName, productDetails[productName].src, productDetails[productName].price);
            
            const cards = document.querySelectorAll(".card");
            cards.forEach((card) => {
                const productNameElement = card.querySelector(".phone-name");
                if (productNameElement && productNameElement.textContent === productName) {
                    const icon = card.querySelector(".ajouter-panier i");
                    icon.classList.remove("fa-cart-shopping");
                    icon.classList.add("fa-circle-check");
                }
            });
        }
    });
}




black.addEventListener("click" , function(){
    mainphone.src ="img/2.png" ; 
      container.forEach((item)=>
       item.style.background ="#2e2e2eff");
      saveSelectedColor('black', 'img/2.png', '#2e2e2eff');
});

yellow.addEventListener("click" , function(){
    mainphone.src ="img/0.png" ; 
     container.forEach((item)=>
       item.style.background ="#000");
      saveSelectedColor('yellow', 'img/0.png', '#000');
    
});
purple.addEventListener("click" , function(){
    mainphone.src ="img/1.png" ; 
       container.forEach((item)=>
       item.style.background ="#247eC8");
       saveSelectedColor('purple', 'img/1.png', '#247eC8');
    
});
pink.addEventListener("click" , function(){
    mainphone.src ="img/3.png" ; 
      container.forEach((item)=>
       item.style.background ="#d7c4d1ff");
      saveSelectedColor('pink', 'img/3.png', '#d7c4d1ff');
});

red.addEventListener("click" , function(){
    mainphone.src ="img/4.png" ; 
      container.forEach((item)=>
       item.style.background ="#c82525");
      saveSelectedColor('red', 'img/4.png', '#c82525');
});


    const boutonPanier = document.getElementById('panier');
    const panierDiv = document.getElementById('mon-panier');

    boutonPanier.addEventListener('click', function(e) {
        panierDiv.style.display = panierDiv.style.display === 'block' ? 'none' : 'block';
    });

   panierDiv.addEventListener("click" , function(e){
       e.stopPropagation();
   });

   
   document.addEventListener("click" , function(e){


    if (!panierDiv.contains(e.target) && !boutonPanier.contains(e.target)){
      panierDiv.style.display="none"; 
    }
   }
  )

    
    let btn = document.querySelectorAll(".ajouter-panier");

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
          saveCart(); 
         }



       }) ;
    });


    function ajouterpanier(name, src, price) {

    const panierDiv = document.getElementById("mon-panier");
     const produitUL = document.createElement("ul");

     produitUL.setAttribute("data-nom", name);


    const liImage = document.createElement("li");
    liImage.innerHTML = `<img src="${src}" class="imago" />`;

    const liName = document.createElement("li");
    liName.innerHTML = `<p class="nameof">${name}</p>`;

    const liPrice = document.createElement("li");
    liPrice.innerHTML = `<p class="priceof">${price}</p>`;

   const liClose = document.createElement("li");
   liClose.innerHTML = `<i class="fa-solid fa-xmark fermer-panier" style="cursor: pointer;"></i>`;

   const libuy = document.createElement("li");
   libuy.innerHTML =`<i class="fa-solid fa-credit-card acheter" style="cursor:pointer;"></i>`;

    produitUL.setAttribute("data-nom" , name); 
   
    produitUL.appendChild(liImage);
    produitUL.appendChild(liName);
    produitUL.appendChild(liPrice);
    produitUL.appendChild(liClose);
    produitUL.appendChild(libuy);

    panierDiv.appendChild(produitUL);
    
    const productDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    productDetails[name] = { src, price };
     localStorage.setItem('productDetails', JSON.stringify(productDetails));

}


    
  const sup = document.getElementById("mon-panier");

 sup.addEventListener("click", function(e) {
    if (e.target.classList.contains("fermer-panier")) {
        const ul = e.target.closest("ul");
        if (ul) {
            const nom = ul.getAttribute("data-nom");
            const card = document.querySelectorAll(".card");
            card.forEach((car) => {
                const productname = car.querySelector(".phone-name") ;
                   if (!productname) return;
                const nomduproduit = productname.textContent;
                if (nom === nomduproduit) {
                    const icon = car.querySelector(".ajouter-panier i");
                    icon.classList.remove("fa-circle-check");
                    icon.classList.add("fa-cart-shopping");
                }
                 const index = product.indexOf(nom);
         if (index > -1) {
    product.splice(index, 1);
    saveCart();
    
    const productDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    delete productDetails[nom];
    localStorage.setItem('productDetails', JSON.stringify(productDetails));
}
            });
            ul.remove();
        }
    }
});


const tel = document.querySelector(".appeller");
const call = document.querySelectorAll(".call");

call.forEach((cal)=>{
  cal.addEventListener("click" , function(){
     tel.style.display = tel.style.display === "none" ? "block":"none"
  })
})


 

  const el1 = document.querySelector(".fa-viber");
  const el2 = document.querySelector(".fa-whatsapp");
  const el3 = document.querySelector(".fa-phone");

document.addEventListener("click", function(e) {
  const clickedOutside = ![...call].some((cal) => cal.contains(e.target));
  if (clickedOutside && tel.style.display === "block" && !(el1.contains(e.target))  && !(el2.contains(e.target))  && !(el3.contains(e.target)) ) {
    tel.style.display = "none";
  }
});


  // <div class="appeller"> 
  //                       <h1>Veuillez nous contacter ici</h1>
  //                       <div class="contact-icons">
  //                              <i class="fa-brands fa-viber"></i>
  //                              <i class="fa-brands fa-whatsapp"></i>
  //                              <i class="fa-solid fa-phone"></i>
  //                       </div>
  //                   </div>

const rating = document.querySelectorAll(".rating-option");


let selectedrating = parseInt(localStorage.getItem('selectedRating')) || 0;
rating.forEach((option)=> {

  option.addEventListener("click" , function(){
    selectedrating = option.getAttribute("data-value");
        localStorage.setItem('selectedRating', selectedrating.toString()); 
      rating.forEach((click)=>{
        click.classList.toggle('selected' , click.getAttribute("data-value")<=selectedrating);
      })
})
})

// const text = document.getElementsByTagName("textarea") ; 
const submit = document.querySelector(".submit-btn");
// const feed = document.querySelector(".feedback-container");
const thanks = document.querySelector(".thank-you");
const form = document.querySelector(".form")


submit.addEventListener("click" , function(){
  if(selectedrating === 0){
   alert("veuillez mettre un avis") ;
   return
  }
   localStorage.setItem('feedbackSubmitted', 'true');

  form.style.display = "none";
  thanks.style.display = "block";
  thanks.style.animation = "none";
  void thanks.offsetWidth; 
  thanks.style.animation = "fadeInZoom 0.5s ease forwards";
});



const cart = document.querySelector(".achete-container");
let currentproduct = null;
panierDiv.addEventListener("click" , function(e){
    if(e.target.classList.contains("acheter")){
         const ul = e.target.closest("ul");
         if(ul){
         currentproduct = ul.getAttribute("data-nom");
         }
         cart.style.display = cart.style.display === "none" ? "flex" : "none" ; 
    }
});


document.addEventListener("click", function(e) {
  if (!cart.contains(e.target)) {
    if (getComputedStyle(cart).display !== "none") {
      cart.style.display = "none";
    }
  }
});



const envoyer = document.getElementById("btn");
const merci = document.querySelector(".thanks");
const thanku = document.querySelector(".thanks i");

envoyer.addEventListener("click" , function(e){
    const emailuser = document.getElementById("emailuser");
    const phoneuser = document.getElementById("phoneuser"); 
    
    if (emailuser.value ==="" && phoneuser.value ===""){
      alert("Please enter your information this is a required field");
    }else{
      const contactInfo = {
    email: emailuser.value,
    phone: phoneuser.value,
    timestamp: new Date().toISOString()
};

const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
if (currentproduct) {
    const order = {
        product: currentproduct,
        contact: contactInfo,
        date: new Date().toISOString()
    };
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

localStorage.setItem('lastContactInfo', JSON.stringify(contactInfo));
      if (currentproduct){
        const ul = document.querySelector(`ul[data-nom="${currentproduct}"]`);
        if(ul){
          const produit = document.querySelectorAll(".card");
          produit.forEach((pro)=>{
             const product = pro.querySelector(".phone-name");
             if(!product)return;
             const nameofproduct = product.textContent ; 
             if (nameofproduct === currentproduct){
               const icon = pro.querySelector(".ajouter-panier i");
               icon.classList.remove("fa-circle-check");
               icon.classList.add("fa-cart-shopping");
             }
          })

          const index = product.indexOf(currentproduct);
                if (index > -1) {
                    product.splice(index, 1);
                    saveCart();
                    
                    const productDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
                    delete productDetails[currentproduct];
                    localStorage.setItem('productDetails', JSON.stringify(productDetails));
                }
          ul.remove();
        }
        currentproduct = null; 
      }
   cart.style.display = cart.style.display === "none" ? "flex" : "none" ;  
   merci.style.display = merci.style.display === "flex" ? "none":"flex" ; 
    }
});

document.addEventListener("click" , function(e){
  if(thanku.contains(e.target)){
     if (getComputedStyle(merci).display !== "none") {
      merci.style.display = "none";
    }
  }
})

// const sup = document.getElementById("mon-panier");

//  sup.addEventListener("click", function(e) {
//     if (e.target.classList.contains("fermer-panier")) {
//         const ul = e.target.closest("ul");
//         if (ul) {
//             const nom = ul.getAttribute("data-nom");
//             const card = document.querySelectorAll(".card");
//             card.forEach((car) => {
//                 const productname = car.querySelector(".phone-name") ;
//                    if (!productname) return;
//                 const nomduproduit = productname.textContent;
//                 if (nom === nomduproduit) {
//                     const icon = car.querySelector(".ajouter-panier i");
//                     icon.classList.remove("fa-circle-check");
//                     icon.classList.add("fa-cart-shopping");
//                 }
//             });
//             ul.remove();
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    loadSelectedColor();
    loadCart();
    
    // Charger la notation
    if (selectedrating > 0) {
        const rating = document.querySelectorAll(".rating-option");
        rating.forEach((click) => {
            click.classList.toggle('selected', parseInt(click.getAttribute("data-value")) <= selectedrating);
        });
    }
    
    // Charger les infos de contact
    const savedContact = JSON.parse(localStorage.getItem('lastContactInfo'));
    if (savedContact) {
        const emailuser = document.getElementById("emailuser");
        const phoneuser = document.getElementById("phoneuser");
        
        if (emailuser) emailuser.value = savedContact.email || '';
        if (phoneuser) phoneuser.value = savedContact.phone || '';
    }

      if (localStorage.getItem('feedbackSubmitted') === 'true') {
    form.style.display = "none";
    thanks.style.display = "block";
  }
});
