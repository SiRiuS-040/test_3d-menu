const burger = document.querySelector('.navigation__burger')
const container = document.querySelector('.container')

const screenArr = document.querySelectorAll('.screen')




document.addEventListener('click', function (evt) {

    if (evt.target && evt.target.closest('.navigation__burger')) {
        console.log('клик на бургер');
        container.classList.toggle('active')
    }
})

function setBg(id) {
    let bg = document.getElementById(id)

    screenArr.forEach(screen => {

        screen.style.display = 'none';
    });

    bg.style.display = 'block'
    // bg.classList.add('change')


}

function changeBg() {
    let linkArr = document.querySelectorAll('.back-navigation__link');

    linkArr.forEach(link => {

        link.addEventListener('mouseenter', function (e) {
            e.preventDefault();
            setBg(e.target.dataset.link)
        })

        link.addEventListener('click', function (e) {
            e.preventDefault();
            // setBg(e.target.dataset.link)

            container.classList.toggle('active')
        })
    });

    screenArr.forEach(screen => {
        screen.style.display = 'none';
        screenArr[0].style.display = 'block';
    });

}

changeBg()