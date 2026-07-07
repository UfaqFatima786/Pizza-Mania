const offerButtons=document.querySelectorAll(".offer-btn");

offerButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.innerHTML="✔ Claimed";

button.style.background="#28a745";

setTimeout(()=>{

button.innerHTML="Order Now";

button.style.background="#d62828";

},2000);

});

});

const offerCards=document.querySelectorAll(".offer-card");
offerCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/15;
const y=e.offsetY/15;

card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0deg) rotateY(0deg)";

});

});

const reviews = document.querySelectorAll(".review-card");

let currentReview = 0;

function showReview(index){

    reviews.forEach((review)=>{

        review.classList.remove("active");

    });

    reviews[index].classList.add("active");

}

setInterval(()=>{

    currentReview++;

    if(currentReview >= reviews.length){

        currentReview = 0;

    }

    showReview(currentReview);

},3000);


reviews.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

        card.style.transition=".4s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});