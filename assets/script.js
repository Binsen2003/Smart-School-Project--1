const title1=document.querySelector('.title')
const title2=document.querySelector('.nav-links')
const title3=document.querySelectorAll('.dropdown')
const toparrow=document.querySelector('.arrow')
window.addEventListener('scroll',()=>{
    const scrollheight=window.pageYOffset
    // console.log(scrollheight)
    if(scrollheight>600){
        title1.classList.add('color')
        title2.classList.add('color1')
        title3.forEach((element) => {
            element.classList.add('color2')
        });
        toparrow.classList.add('sh')
    }else{
        title1.classList.remove('color')
        title2.classList.remove('color1')
        title3.forEach((element) => {
            element.classList.remove('color2')
        });
        toparrow.classList.remove('sh')
    }
})