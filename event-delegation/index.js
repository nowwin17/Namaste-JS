console.log("start");
document.querySelector("#category")
.addEventListener('click',(e)=>{
    console.log(e);//event object
    console.log(e.target);//gives child element
    console.log(e.target.id);//gives id of child element
    console.log("Category Parent click");
    console.log(e.target.tagName)
    if(e.target.tagName == 'LI'){
        console.log("DO whatever you want");
    }
});
document.querySelector("#form")
.addEventListener('click',(e)=>{
    if(e.target.dataset.uppercase != undefined){ //check if anyelement has that dataset "uppercase"
        e.target.value = e.target.value.toUpperCase();//change input value to uppercase
    }
});