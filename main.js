let buttons = document.querySelector('.buttons');
let spans = buttons.querySelectorAll('.item');
window.onload = ()=>{
    buttons.onclick = (element)=>{
        let ele = element.target;
        spans.forEach(span=>{
            span.classList.remove('active');
        })
        ele.classList.add('active');
        const images = document.querySelectorAll('.image');
        const attri = ele.getAttribute('data-name');
        images.forEach(img=>{
            const attri5 = img.querySelector('img').getAttribute('data-name');
            if(attri == 'All'){
                img.style.display = 'block';
            }
            else if(attri5 == attri){
                img.style.display = 'block';
            } else{
                img.style.display = 'none';
            }
        });
    }
};
const imageGallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
imageGallery.onclick = (igallery)=>{
    const srcimg = igallery.target.src;
    if(srcimg != undefined){
        overlay.style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.img img').src = srcimg;
        document.querySelector('.cat_close span').textContent =  igallery.target.getAttribute('data-name');
    }
}
document.querySelector('.icon').onclick = ()=>{
    overlay.style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';
}