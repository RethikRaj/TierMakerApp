const addTierBtn = document.getElementById("add-tier-name-btn");
const addImageUrlBtn = document.getElementById("add-image-url-btn");
let currentDraggedItem = null;

addTierBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    const tierName = document.getElementById("tier-name");

    if(tierName.value === ''){
        alert("Enter a valid tier name");
        return;
    }

    createTierContainer(tierName.value);

    tierName.value = '';
})

addImageUrlBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    const imageUrl = document.getElementById("image-url");

    if(imageUrl.value === ''){
        alert("Enter a valid image url");
        return;
    }

    addImageToNonTier(imageUrl.value);
});

function createTierContainer(tierName){
    const tierContainer = document.createElement('div');
    tierContainer.classList.add('tier-container');

    const tierHeadingDiv = document.createElement('div');
    tierHeadingDiv.classList.add('tier-heading-div');

    const tierHeading = document.createElement('h2');
    tierHeading.textContent = tierName;
    tierHeading.classList.add('tier-heading');

    tierHeadingDiv.appendChild(tierHeading);

    const tierItemsDiv = document.createElement('div');
    tierItemsDiv.classList.add('tier-items');

    setupEventListenerForTierItems(tierItemsDiv);

    tierContainer.appendChild(tierHeadingDiv);
    tierContainer.appendChild(tierItemsDiv);

    const tierSection = document.getElementById('tier-section');
    tierSection.appendChild(tierContainer);
}

function addImageToNonTier(imageUrl){
    const nonTierItemDiv = document.createElement('div');
    nonTierItemDiv.classList.add('non-tier-item');
    nonTierItemDiv.setAttribute('draggable','true');
    
    // Adding event Listeners to nonTierItemDiv
    setupEventListenerForNonTier(nonTierItemDiv);

    const nonTierImg = document.createElement('img');
    nonTierImg.src = imageUrl;

    nonTierItemDiv.appendChild(nonTierImg);

    const nonTierSection = document.getElementById('non-tier-section');

    nonTierSection.appendChild(nonTierItemDiv);
}

function setupEventListenerForNonTier(nonTierItemDiv){
    // add dragstart event
    nonTierItemDiv.addEventListener('dragstart',(event)=>{
        console.log("dragged");
        // event.target gives img since that is the one we are dragging 
        console.log(event.target.parentNode);
        currentDraggedItem = event.target.parentNode;

    })

    nonTierItemDiv.addEventListener('dblclick',(event)=>{
        console.log("Double Clicked");
    })
}

function setupEventListenerForTierItems(tierItemsDiv){
    tierItemsDiv.addEventListener('dragover',(event)=>{
        event.preventDefault();
    })

    tierItemsDiv.addEventListener('drop',(event)=>{
        event.preventDefault();
        console.log('dropped');

        tierItemsDiv.appendChild(currentDraggedItem);
    })
}





