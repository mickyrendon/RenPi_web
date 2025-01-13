
//getting the button id 
export const toggleGallery = (categoryId) => {
    //gallery container child nodes / portfolio cards
    const childNodes = document.getElementById('proyects-gallery').childNodes;
    let list = [];

    console.log(childNodes.length);
    // iterating over the child nodes
    for (let i = 0; i < childNodes.length; i++) {
        // getting the first child of the child node
        const firstChild = childNodes[i].firstElementChild;
        // getting the parent of the first child
        const parent = childNodes[i]
        
        // if the first child exists
        if (firstChild) {
            // getting the tag of the first child / card proyect tag
            let tag = firstChild.innerText;
            // if the tag is different from the button id
            if (tag !== categoryId) {
                // hide the parent / proyect card
                parent.classList.toggle('hidden');
            // if the tag is equal to the button id 'todas'
            }else if (categoryId === 'todas') {
                // show all the cards
                parent.classList.remove('hidden');
            }
            list.push(tag);
        }
    }
    
    // return {buttons, title, content, imgAlt, bkgImage, iconImage}

}