console.log("start");
let counter =0;
const getData = () =>{
    //calls an API and gets Data
    console.log("Fetching Data...", counter++);
}


//its improved function limit calling of getData function on window resize

const throttle = function(fn, limit){
    let flag = true;
    return function(){
        let context= this,
        args= arguments;
        if(flag){
            getData.apply(context,args)
        flag=false;
        setTimeout(()=>{
            flag=true;
        }, limit);
    }
    }
}

const betterFunction = throttle(getData, 500);

window.addEventListener("resize",betterFunction);
//window.addEventListener("resize",getData);