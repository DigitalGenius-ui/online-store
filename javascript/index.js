// variables 

const input = document.querySelector(".input");
const icon = document.querySelector(".fa-search");
const search = document.querySelector(".search");
const second = document.querySelector(".second")
const span = document.querySelector(".second span");

const times = '<i class="fas fa-times"></i>';
const icon_search = '<i class="fas fa-search"></i>';

input.addEventListener("click", ()=>{
    input.classList.add("active");
    search.classList.add("active");
    second.classList.add("active");
    span.innerHTML = times;
});

span.addEventListener("click", ()=>{
    input.classList.remove("active");
    search.classList.remove("active");
    second.classList.remove("active");
    icon.classList.remove("active");
    span.innerHTML = icon_search;
})

// toggle 

const toggle = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".list");

let down = false;

toggle.addEventListener("click", ()=>{
    if(!down){
        toggle.classList.add('open');
        overlay.classList.add('open');
        menu.classList.add('open');
        down = true;
    }else{
        toggle.classList.remove('open');
        overlay.classList.remove('open');
        menu.classList.remove('open');
        down = false;
    }
})

// glide slideranimation
//header part
 if (document.querySelector('#slider')) {
            var item_length = document.querySelectorAll('.glide__slide').length - 1;
            let glide = new Glide('#slider', {
                type: 'carousel1',
                startAt: 0,
                perView: 1,
                // autoplay: 3000,
                hoverpause: true,
                rewind:false
            });
        glide.mount();
        }

// slick slider animation
//card part

$('.discount-card').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// the card dom part 

 const items = [
{
    id: 1,
    price : "14$",
    title: "WATCHES",
    image : "./images/Mask Group (3).png"
},
{
    id: 2,
    price : "14$",
    title : "FORMAL CHOICE",
    image : "./images/Mask Group.png"
},
{
    id: 3,
    price: "14$",
    title : "CASUAL FOR MEN",
    image : "./images/Mask Group (7).png"
},
{
    id: 4,
    price : "14$",
    title  : "FORMAL ",
    image : "./images/Mask Group (6).png"
},
{
    id: 5,
    price : "14$",
    title  : "CASUAL BEAUTY ",
    image : "./images/Mask Group (5).png"
},
{
    id: 6,
    price : "14$",
    title  : "FOOTWARES",
    image : "./images/Mask Group (4).png"
},
{
    id: 7,
    price : "14$",
    title  : "PARTY BEAUTY ",
    image : "./images/Mask Group (2).png"
},
{
    id: 8,
    price : "14$",
    title  : "WOMEN IN FORMAL",
    image : "./images/Mask Group (1).png"
},
{
    id: 9,
    price: "14$",
    title : "KID’S FOORWARE",
    image : "./images/KIDS FOOTWARE.png"
},
{
    id: 10,
    price : "14$",
    title  : "INFANTS",
    image : "./images/KIDS 3.png"
},
{
    id: 11,
    price : "14$",
    title : "BOYS TRENDING",
    image : "./images/KIDS 2.png"
},
{
    id: 12,
    price : "14$",
    title : "GIRLS FASHON",
    image : "./images/KIDS 1.png"
}
]
const style = document.querySelector(".style-cards")

window.addEventListener("DOMContentLoaded", ()=>{
    products();
})

function products(){
   const menu = items.map( product =>{
       return(
          `<div class="card">
                <div class="cards-image">
                    <img src="${product.image}" alt="">
                </div>
                <h1>${product.title}</h1>
                <div class="to-card">
                    <a href="#" class="btn">OPEN PRODUCT LIST</a>
                </div>
            </div>
        </div>`  
       );
    })
    style.innerHTML = menu.join(' ')
}

// watch brand slider 

$('.watch-brand').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
