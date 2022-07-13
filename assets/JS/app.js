let sliderPics= [

    'assets/Photos/image1.jpg',
    'assets/Photos/image2.jpg',
    'assets/Photos/image3.png'
]
let slideNum = 0

let img = document.querySelector('.slider-img img')
img.src = sliderPics[slideNum]

let next = document.querySelector('.next')
let previous = document.querySelector('.previous')

next.addEventListener('click' , ()=>{
    slideNum++;
   
        if(slideNum > sliderPics.length - 1) {
            slideNum = 0
        }
        img.src = sliderPics[slideNum];
        
})
previous.addEventListener('click',()=>{
    slideNum--;
   
    if (slideNum===-1) {
        slideNum = sliderPics.length-1

    }
    
    img.src = sliderPics[slideNum];
})
let dots = document.querySelectorAll('.slider-dots i')
for(let dot of dots){
    dot.addEventListener('click',()=>{
        let active = document.querySelector('.active')
        active.classList.remove('active')
        dot.classList.add('active')
       let dotId =  dot.getAttribute('id')
        if (dotId==1 ) {
            img.src=sliderPics[0]
        }
        if (dotId==2 ) {
            img.src=sliderPics[1]
        }
        if (dotId==3) {
            img.src=sliderPics[2]
        }
    })
}
function AutoPlay(){
    slideNum++;
   
    if(slideNum > sliderPics.length - 1) {
        slideNum = 0
    }
    img.src = sliderPics[slideNum];
}
setInterval(() => {
    AutoPlay()
}, 1500);

