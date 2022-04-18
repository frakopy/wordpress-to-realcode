
const slider =  document.getElementById('slider')
let index = 1

const span1 = document.getElementById('text1-slider');
const span2 = document.getElementById('text2-slider');

const text1 = 'The largest collection of kitchen'
const text2 = 'furniture and supplies'

const text3 = 'We have everything you may need '
const text4 = 'for your comfort'

const text5 = 'Now you can check if the product '
const text6 = 'fits your interior'

let text =[]


function changeImage() {
    if(index > 3){
        index = 1;
    }else if(index < 1){
        index = 3
    }

    if(index === 1){
        span1.textContent = text1
        span2.textContent = text2
    }else if(index === 2){
        span1.textContent = text3
        span2.textContent = text4
    }else if(index === 3){
        span1.textContent = text5
        span2.textContent = text6
    }

    gsap.fromTo(".slider-imgs", {opacity: 0}, {opacity: 1, duration: 1});
    gsap.fromTo(".text-img",{opacity: 0, y: -100}, {opacity: 1, y: 30, ease:  "sine.in", duration: 1});
    slider.style.backgroundImage=`url(/imgs/imgs_slider/img${index}.jpg)`;
    slider.style.backgroundSize="cover";
    slider.style.backgroundRepeat="no-repeat";
}

slider.addEventListener('click', (e) => {
    const className = e.target.className
    const classLrigth = ["fa-solid fa-arrow-right", "right-arrow"]
    const classLeft = ["left-arrow", "fa-solid fa-arrow-left"]
    if(classLrigth.includes(className)){
        index +=1
        changeImage()
    }else if(classLeft.includes(className)){
        index -=1
        changeImage()
    }
})

