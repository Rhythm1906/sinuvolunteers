console.log("Rhythm")


// ------------------------------------ALL DATATYPES------------------------------//


const num = 123
const str = "lmao"
const bool = true
const BadaNum = 111111111111111111111111111111111111111111111111111111
const no = null                                                                 //obj
const kuch_nhi = undefined                                                      //undef 
const sym = Symbol("123")

const lst = [1,3,5]                                                             // obj
const dict = { "1A":"first" , true:"second" , "c":"third" }                     // obj
const func = function() { 2+4 }                                                 // obj function

// console.table([num,str,bool,BadaNum,no,kuch_nhi,sym,lst,dict,func])


// ---------------------------------STACK VS HEAP-------------------------------//


let num1 = 123
let num2 = num1
num2 = 111
console.log(num1,num2)
                                            //stack only provides a copy of the value
let num3 = num4 = "lmao";
num3 = 456
console.log(num3,num4)

let d1 = { "name":"Rhythm" , team:"SodaTech" , "LOR?":"no" }
let d2 = d1
d1["LOR?"] = "yes"
console.log(d1,d2)                          //heap provides the original value/reference

