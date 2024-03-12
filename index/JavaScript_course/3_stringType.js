//            字串型別

//宣告字串流程
//單雙引號皆可

let a = 'hello';
let b = "你好嗎？";
console.log(f,g);

//字串相加

let c = 'hello'+'你好嗎？';
console.log(c);

let friendName = 'Tom';
let content = '你好嗎？';

console.log(friendName+' '+content);//' ' 一個空白為半形空白，兩個為全形空白

//typeof 瞭解當前變數型別
console.log(typeof content);//-->string
console.log(typeof a);//-->string

//數字與字串相加
let myName = 'Tom';
let myAge = 18;
console.log(myName+myAge);
let myNmaeTotal = myName+myAge;
console.log(typeof myNmaeTotal);//-->sting myAge轉型為字串
console.log("hi I am"+myName+'I am'+myAge+'years old this year.');

//NaN 產生時機
let wrongTotal = myAge*myName; 
console.log(wrongTotal);//-->NaN
console.log(typeof wrongTotal);//-->number

let age2 = "30";//-->string
let age3 = parseInt("30")//-->number
let wrongText = parseInt('Hello');//-->NaN
console.log(wrongText);//-->NaN

//字串處理實用方法
let d = 'Mark';
d.length;//-->4  可以知道內容長度，其中也包含空格
d.trim();//濾掉空格

//變數記憶體指向講解
let myEmail = ' Tom ';
let nameLength = myEmail.length;
let updateEmail = myEmail.trim();//指向賦予值

console.log(myEmail);
console.log(updateEmail);
console.log(nameLength);

//樣版字面值教學
let myName2 = 'Tom';
let myAge2 = 18;
let content2 = `Hello! I am${myName2},I am ${myAge2}years old this year.`;
console.log(content2);//--> Hello! I am Tom,I am 18 years old this year.





