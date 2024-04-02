export const menuEvent = (e) => {
    const body = document.body
    const menuM = document.querySelector('.menu-mobile')
    const menuBtn = document.querySelector('#menu-mobile-btn')
    
    // seleccionando el btn
    e.target.id === ('menu-mobile-btn')
    ?(
        body.classList.toggle('overflow-hidden'),
        menuM.classList.toggle('hidden'),
        e.target.classList.toggle('menu-btn--down'),
        e.target.classList.toggle('menu-btn')
    ): e.target.tagName === 'A'
    ?(
        body.classList.toggle('overflow-hidden'),
        menuM.classList.toggle('hidden'),
        menuBtn.classList.remove('menu-btn--down'),
        menuBtn.classList.add('menu-btn')
    ): console.log('no funciona la lista' + e.target.tagName)

    e.stopPropagation()
}