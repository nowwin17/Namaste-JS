/**Call Method*/
function testCallMethod(arg1, arg2){
   console.log(this.num, arg1, arg2);
 }
 var obj = { num: 100 };
 testCallMethod.call(obj, 10, 20);
/**Apply Method */
function testApplyMethod(...arg){
   console.log(this.num, arg);
 }
 var obj = { num: 100 };
 testApplyMethod.apply(obj, [10, 20,30]);
 /**Bind Method */
 function testBindMethod(arg){
   console.log(this.num, arg);
 }
 var obj = { num: 100 };
 let bindedFn= test.bind(obj,"arguments");
 bindedFn();