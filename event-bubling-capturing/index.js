console.log("start");
/**********Event Bubbling*********/
//event bubbling (propogates event down to up)
/**if we clicked child div then it prints(
 child clicked
 parent clicked
 Grandparent clicked
    ) */
/**if we clicked parent div then it prints(
 parent clicked
 Grandparent clicked
    ) */
/**if we clicked grandparent div then it prints(
 Grandparent clicked
    ) */
/*document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
});

document.querySelector("#parent")
.addEventListener('click',(e)=>{
    console.log("parent clicked");
 //   e.stopPropagation();//it stop event propogation
});

document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child clicked");
});*/

/**********Event Capturing*********/

//event capturing (propogates event up to down)
// It has higher priority then Event Bubbling
/**if we clicked Grandparent div then it prints(
 Grandparent clicked
    ) */
/**if we clicked parent div then it prints(
 Grandparent clicked
parent clicked
 
    ) */
/**if we clicked child div then it prints(
 Grandparent clicked
 parent clicked
 child clicked
    ) */
document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
},true);

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("parent clicked");
},true);

document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child clicked");
},true);