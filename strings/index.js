/**Find the vowels */

const findVowels = str =>{
    console.log(str)
    let count=0;
    const vowels = ['a','e','i','o','u'];
    console.log(str.toLowerCase());
    for(let char of str.toLowerCase() ){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(findVowels('asteir'));