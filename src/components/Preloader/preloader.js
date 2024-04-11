export const deleteLoader = () => {
    const body = document.body
    const loaderCtr = document.querySelector('.preloader')
    const hiddenElements = [
        document.querySelector('header'),
        // document.querySelector('.preloader-img'),
        document.querySelector('.chat'),
        document.querySelector('main'),
        document.querySelector('footer')
    ]
    
    if(loaderCtr.childElementCount > 0){
        
        loaderCtr.classList.add('animate-pulse')
        
        setTimeout(() => {
            loaderCtr.classList.remove('w-screen', 'h-screen', 'fixed', 'top-0', 'z-30', 'grid', 'place-items-center', 'bkg-main-black', 'ov-hidden', 'animate-pulse')
            loaderCtr.classList.add('hidden')
            body.classList.remove('overflow-hidden')
        }, 300)
        hiddenElements.forEach(e => { return e?.classList.remove('hidden') })
        
        const arr =  [...loaderCtr.childNodes]
        
        arr.forEach(element => {
            return element.remove()
        })
    }
}