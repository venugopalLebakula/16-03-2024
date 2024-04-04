/*
let a=44;
console.log(typeof a);

let myName="venugopal";
console.log(typeof(myName));
*/

 let iamExist=true;
 console.log(typeof (iamExist));//boolean primitive data type

 let a;
 console.log(typeof(a));//undefined primitive data type
 
 let venu=null;
 console.log(typeof venu);//object non-primitive datatype

 let symbole=Symbol("future tech");
 console.log(typeof symbole);

 //conversions implicit 
 let java="brendon eich inveted javaScript";
 let Script=1995;
 let output="in"+Script+java;
 console.log(output);

 let frontend=["react JS","Angular JS","vue JS","react native"];
 let javaScript="the front end technologies which javascript is used are"+ "  ,";
 let used=javaScript+""+frontend;
 console.log(used);

 //explict mathematic conversions
 let add="55";
 let subtract=59;
 let result=(subtract+ - +add);
  console.log("the result is"+" "+result);
  
  let mul="44";
  let addition="55";
  let result1=+mul+ +addition;
  console.log(result1);

  let multi=Number("44");
  let multi1=2;
  let result2=multi*multi1;
  console.log(result2);
 
  let c=Number("44");
  let d=2;
  let result3=d/c;
  console.log(result3);
 