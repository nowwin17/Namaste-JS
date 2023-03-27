console.log("start");
let counter =0;
const getData = () =>{
    //calls an API and gets Data
    console.log("Fetching Data...", counter++);
}

//only call getData method when difference between two press key event greater or equal 300 ms

const debounce = function(d){
    let timer;
    return function(){
        let context= this,
        args= arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            //getData.apply(context,args)
            getData();
        },d);
       // console.log(timer);
    }
}

const betterFunction = debounce(300);