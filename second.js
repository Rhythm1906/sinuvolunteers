console.log("Rhythm")


// ---------------------- DATATYPE AND TYPE CONVERSION ------------------- //


let num = 12.5
console.log("1)",typeof num)             //JS me int ya float nhi hota

console.log("2)",typeof Number("abc"))   //Datatype = number
console.log("3)",Number("abc"))          //NaN
console.log("4)",typeof NaN)             //Datatype of NotANumber is....number???

let n1 = "NaN"
console.log("5)",typeof n1)      //string...duh

console.log("6)",Boolean("LoL"))
console.log("7)", Boolean("") , Boolean(null) , Boolean(undefined))            //anything non-empty is true

console.log("8)", String(Boolean("something")))      //"true" ki ek string ho jaegi


// ------------------------------ OPERATORS ----------------------------- //


console.log("9)","1" + 2 + 2) 
console.log("10)",1 + 2 + "2")
console.log("11)",1 + "2" + 2)            //......what the hell happened here

// apparently if both operands are num then addition hoga, agar koi ek str hua to concatenation

let a = 5
let x = a++
console.log("12)",a,x)

let b = 10
let y = ++b
console.log("13)",b,y)       

/*
hmmmmm mtlb ki post se khud ki value update hoti hai but jaha assign kiya, usme update nhi hogi
but post se khud ki value update hoti hai and jaha assign karoge, uski value bhi update hogi

arthat ki a++ me pehle assigning the value phir updating itself
and ++a me pehle updating phir assigning
*/

console.log("14)", null > 0)     //converted null to 0
console.log("15)", null == 0)    // equality check kar raha hai
console.log("16)", null >= 0)    // > < >= <= etc are for comparision and == is for equality

console.log("17)", undefined >= 0)       //apprently undefined converts to NaN isliye it gives false to any comparison except !=

console.log("18)", "10" === 10)     //checking both value and datatype
