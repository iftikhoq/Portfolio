function darktoggle() {
    var element = document.body;
    element.classList.toggle("dark-body");

    var divElement = document.querySelector('.name');
    divElement.classList.toggle('dark-name');


    var divElement = document.querySelector('.line');
    divElement.classList.toggle('dark-line');

    
    var iconElements = document.querySelectorAll('.contact .frontsocial');

    iconElements.forEach(function(icon) {
            if (icon.style.color === 'white') {
                icon.style.color = ''; 
            } else {
                icon.style.color = 'white';
            }
    });

    var divElement = document.querySelector('.title');
    divElement.classList.toggle('dark-title');

    var divElement = document.querySelector('.imptext');
    divElement.classList.toggle('dark-imptext');

    var divElement = document.querySelector('.desc');
    divElement.classList.toggle('dark-desc');
    
    var high = document.querySelector('.highlight');
    high.forEach(function(h) {
        h.classList.toggle('dark-highlight');
    });

  

   

  }