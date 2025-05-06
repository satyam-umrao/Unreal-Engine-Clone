function showepic(){
    const width = window.innerWidth; 

    if (width > 719) {
        const drag = document.querySelector('.epic-hover');
        drag.style.display = 'flex';
    } else {
        const drag = document.querySelector('.sidebar');
        drag.style.display = 'flex';
    }
    const drag2 = document.querySelector('.epic');
    drag2.style.display = 'none';
    const drag3 = document.querySelector('.epic-2');
    drag3.style.display = 'flex';
}

function hideepic(){
    const width = window.innerWidth;

    if (width > 719) {
        const drag = document.querySelector('.epic-hover');
        drag.style.display = 'none';
    } else {
        const drag = document.querySelector('.sidebar');
        drag.style.display = 'none';
    }
    const drag2 = document.querySelector('.epic');
    drag2.style.display = 'flex';
    const drag3 = document.querySelector('.epic-2');
    drag3.style.display = 'none';

}

function showmore(){
    const show1 = document.querySelector( '.grid-item-2')
    show1.style.display = "flex"
    const show2 = document.querySelector('.show-more-1')
    show2.style.display = "none"
    const show3 = document.querySelector('.show-more-2') 
    show3.style.display = "flex"
    const show4 = document.querySelector('.grid-container')
    show4.style.height = "200%"
    

}

function showless(){
     const show1 = document.querySelector( '.grid-item-2')
    show1.style.display = "none"
    const show2 = document.querySelector('.show-more-1')
    show2.style.display = "flex"
    const show3 = document.querySelector('.show-more-2')
    show3.style.display = "none"
    // const show4 = document.querySelector('.grid-container')
    // show4.style.height = "636px"
}


