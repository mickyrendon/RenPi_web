// callback
export const toggleGallery = (buttonId) => {
    // gallery container child nodes / portfolio cards
    const childNodes = document.getElementById('proyects-gallery').children;
    // location path
    let newId = buttonId.split(' ').join('-');
    location.hash = `portafolio/${newId}`;
    // iterating over the child nodes
    for (let i = 0; i < childNodes.length; i++) {
        // getting the first child of the child node
        const firstChild = childNodes[i].firstElementChild;
        // getting the parent of the first child
        const parent = childNodes[i];
        
        // if the first child exists
        if (firstChild) {
            // getting the tag of the first child / card project tag
            const tag = firstChild.innerText.trim().split(' ').join('-');
            // if the tag is different from the button id and the button id is not 'todas'
            if (tag !== newId && newId !== 'Todas-las-Categorías') {
                // hide the parent / project card
                parent.classList.add('hidden');
            } else {
                // show the parent / project card
                parent.classList.remove('hidden');
            }
        }
    }
}