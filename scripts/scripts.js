window.onload = ()=>{
    displayMenu();
    selectHeightTable();
    selectAverageTable();
    selectLengthTable();
    selectElevationTable();
    closeMenu();
}

function displayMenu(){
    const surfaceBtn = document.getElementById('surface-wrapper');
    const subMenu = document.getElementById('sub-menu');
    surfaceBtn.addEventListener('click', ()=>{
        if(subMenu.style.display == 'none'){
            subMenu.style.display = 'block';
        }else{
            subMenu.style.display = 'none'
        }   
    })
}

function closeMenu(){
    const subMenu = document.getElementById('sub-menu');
    subMenu.addEventListener('mouseleave', ()=>{
        subMenu.style.display = 'none'
    })
}

function selectHeightTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('height-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSnxz1u28dW94Mt6dhFRzg2aWUlZ6RYcHeUq2IFu4igu6mQ0RCpTLldqrB6KINYrg/pubhtml?widget=true&amp;headers=false'
    })
}

function selectAverageTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('gradient-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS7TNX14zSk4_bGCN1gvsbbOZ9wJLvS4JwWMRWC6_ypkOmgfmP_j8U_RLkqCJJRtg/pubhtml?widget=true&amp;headers=false'
    })
}

function selectLengthTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('length-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vRiCjCZDW977WCXPDywnhpoKbUqWO7TRqyKY7o9mVA7zeULpUUT8MhbaFCL_c3NZw/pubhtml?widget=true&amp;headers=false'
    })
}

function selectElevationTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('elevation-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vT9ZbPbKs0rQm9xWpoN67Xek0A_4-WiclgO-Rwlgqts59j6HGEIGDvvBh21PKJQEw/pubhtml?widget=true&amp;headers=false'
    })
}