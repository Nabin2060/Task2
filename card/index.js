
const allCards=document.querySelectorAll(".cards-scroll .card");
const headerHeight=70;
const baseWidth=60;

if(allCards.length){
    allCards.forEach(card=>{
        const width=baseWidth+(card.dataset.index*5);
        card.style.width=width+"px";
        card.style.height=width+"px";
        card.style.left=(window.innerWidth-width)/2+"px";
        card.style.top=(window.innerHeight-headerHeight-width)/2+"px";
    });
}