let c=true;
console.log("data type of c",typeof c);
let d=Number.MAX_SAFE_INTEGER;
console.log("max limit of number",d);
console.log(d+1);
console.log(d+2);
console.log(d+5);
let a=BigInt(1000);
console.log(a)
let b=BigInt(1000n);
let e=a+b;
console.log(e);
let x;
console.log(typeof x);
let y=null;
console.log(typeof y);
let h=Symbol();
let h1=Symbol();
console.log("compare",h===h1);