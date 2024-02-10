/* Clickable functionality for the project section */

const sectArray = ['club','tea','bakery'];
const varArray=[]
const titleArray = [];
const contentArray= [];
const title = 'title';
const content = 'content';

/* find all of the  ids for the content and title, add them to an array of objects */

function varCreator(item) {
    let elemTitle = document.getElementById(`${item}-${title}`);
    let elemContent = document.getElementById(`${item}-${content}`);
    console.log(elemContent)
    let cssObj = window.getComputedStyle(elemContent, null);
    let cssDisplay = cssObj.getPropertyValue("display");
    varArray.push({
                title: elemTitle,
                content: elemContent,
                display: cssDisplay})
    
}
sectArray.forEach(varCreator)

/* for each title key value pair, add event listener to check what display is set to, and then toggle: */
for (const elem of varArray) {
    elem.title.addEventListener('click', ()=> {
        if (elem.display === 'none') {
            elem.content.style.setProperty("display",'block');
            elem.display = 'block';
        } else {
            elem.content.style.setProperty("display",'none')
            elem.display = 'none';
        }
    })
}
