
var header = document.querySelector('#nav');
var header2 = document.querySelector('#headerLogoMin');
console.log(header);
var doc = document.documentElement || document.scrollingElement;//for safari mozilla
var sticky = 250;
var loader = document.querySelector('#loader');
setTimeout(function () {
    doc.scrollTop = 0;
loader.style.display = 'none';
    window.addEventListener('scroll',function(){
        if(doc.scrollTop > sticky){
            header.classList.add('sticky');
            header2.style.display = 'block';

        }
        else{
            header.classList.remove('sticky');
        }
    });

},2000);
