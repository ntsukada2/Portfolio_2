/*show hide menu section*/

const arrow = document.getElementById("arrow");
const menuContent = document.getElementById("menu-items");
console.log(menuContent)
let menuCss = window.getComputedStyle(menuContent,null)
let menuDisplay = menuCss.getPropertyValue("display")
arrow.addEventListener('click', ()=>{
    if (menuDisplay === 'none') {
        menuContent.style.setProperty("display",'flex');
        menuDisplay = 'flex';
        arrow.innerHTML = '<';
    } else {
        menuContent.style.setProperty("display",'none');
        menuDisplay = 'none';
        arrow.innerHTML = '>'
    }
})