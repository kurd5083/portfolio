let anchorLinks = document.querySelectorAll('.anchor-links');
let scrolling = document.querySelectorAll('.scrolling');

for(let i = 0; i < anchorLinks.length; i++){
    anchorLinks[i].addEventListener('click', function(){
        let elementPosition = scrolling[i].getBoundingClientRect().top
        elementPosition = elementPosition - 100;
        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    })
}
