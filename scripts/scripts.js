window.onload = ()=>{
    displayMenu();
}

function displayMenu(){
    const surfaceBtn = document.getElementById('surface-wrapper');
    surfaceBtn.addEventListener('click', ()=>{
        const subMenu = document.getElementById('sub-menu');
        if(subMenu.style.display == 'none'){
            subMenu.style.display = 'block';
        }else{
            subMenu.style.display = 'none'
        }   
    })
}

function selectHeightTable (){
    const tableFrame = document.getElementById('table-frame');
    const heightBtn = document.getElementById('height-option');

    heightBtn.addEventListener('click', ()=>{
    
    })
}