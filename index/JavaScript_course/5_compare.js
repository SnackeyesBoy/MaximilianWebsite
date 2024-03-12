//比較運算子： >、=、<=

console.log(3>2);//-->true
console.log(4<1);//-->false
console.log(36.3<=37.5);//-->false
console.log(37.5>=37.5);//-->true
console.log("hello"=="hi");//-->false
console.log(1!=1);//-->false,!= => ! + =

//比較運算子搭配變數方法

let a = 2;
let b = 3;
console.log(a>b);
console.log((a+b)>1)

let c = 4;
let d = 3;
console.log(c==d);

let e = 8;
let f = 5;
console.log(f>=e);
console.log(f!=e);

    
//=、== 差異講解

//= 為賦予值
let g = 1;


//==為比較運算子
let h = 2;
console.log(g=h);
console.log(g!=h);

//==、=== 差異講解
//==會協助轉型
let i = 1;
let j = "1";
console.log(i==j);//-->true

//===嚴謹模式,會比較型別
console.log(i===j);//-->false

//邏輯運算子介紹
//&&-->and ||-->or
//同時滿足條件、滿足其中一個條件
let k = 1;
let l = 2;
let m = true;

console.log(k==1 && l==2);
console.log(k==0 || l==2);

//邏輯運算子增加多條件作法
console.log(k==1 && l==2 && m==true);
console.log(k==0 || l==2 || m==false);



