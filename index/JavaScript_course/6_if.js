//if
let todayDegrees = 14;

let isWearJacket = 15 >= todayDegrees;

console.log(isWearJacket);


//if & else Ex.1
if(15>=todayDegrees){
    console.log('Max is wearing the jacket.');
    console.log('Max is ready to go out.');
}else{
    console.log('Beacuse weather is too hot,Max does not wear the jacket.');
}


//if & else Ex.2
let wallet  = 130;
// console.log(wallet>=110); 測試出來是否符合預設值
if (wallet>=110){
    console.log('Going to eat beaf noodle.');
}else{
    console.log('Eating dinner at home.');
}

//if & else if & else Ex.1
if (wallet>=110){
    console.log('Going to eat the beaf noodle.');
}else if(wallet>=80){
    console.log('Going to the night market for steak.');

}else if(wallet>=35){
    console.log('Going to eat the french fries');
}
else{
    console.log('Do not have enough money.Eating the dinner at home.');
}

//if & else if & else Ex.2
let todayWeather = '毛毛雨';

if(todayWeather=='沒有下雨'){
    console.log('不帶雨具');
}
else if(todayWeather=='毛毛雨'){
    console.log('帶輕便雨衣');
}
else if(todayWeather=='普通雨'){
    console.log('帶折疊傘');
}
else if(todayWeather=='豪雨'){
    console.log('代長傘');
}

//if 包 if

// if 包if 的練習
// 腰圍指數測量
// 男生腰圍大於 90 為過胖
// 女生腰圍大於 80 為過胖
// 1.判斷是男生還是女生
// 2.如果是男生，還得判斷他的腰圍
// 3.如果是女生，還得判斷他的腰圍


let sex ="male";
let cm = "88";

if(sex=="male"){
    //console.log("男生");
    if(cm>=90){
        console.log("男生體型過胖");
    }
    else{
        console.log("男生體型正常")
    }
    
}
else if(sex=="woman"){
    // console.log("女生");

    if(cm>=80){
        console.log("女生體型過胖");
    }
    else{
        console.log("女生體型正常")
    }
}
else{
    console.log("資料錯誤");
}
