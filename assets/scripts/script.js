    console.log('Hello world!');

var swiper = new Swiper(".slider-banner", {
    navigation: {
        nextEl: ".banner .arrow_right",
        prevEl: ".banner .arrow_left",
    },
});

const toggleProductsTabs = () => {

    let tabs = document.querySelectorAll('.products__tabs .tab')
    let grids = document.querySelectorAll('.products__grid')

    console.log(tabs);
    tabs.forEach((tab, index) => (

        tab.addEventListener('click', () => {
            console.log('hil');

            tabs.forEach( (tab_2) => {
                tab_2.classList.remove('active');
            })

            grids.forEach( (grid_2) => {
                grid_2.classList.remove('active');
            })


            tab.classList.add('active');
            grids[index].classList.add('active')
        })

    ))

}

toggleProductsTabs();