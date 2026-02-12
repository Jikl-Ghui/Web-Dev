/*se strict";

alert( 'I\'m JavaScript' );

let name = "John";
let admin = name;

alert(admin);

const OUR_PLANET_NAME = "Earth";
let currentUser;

askForName= prompt("What is your name?", "your name");
alert(`Your name is ${askForName}`);

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12*/


/*let result = prompt('What is the \"official\" name of JavaScript?', '');

(result == "ECMAScript") ? alert("Right") : alert("You don't know? ECMAScript!");

let number = prompt('Write a number','');

(number > 0) ? alert(1) : (number<0) ? alert(-1) : alert(0);*/

/*let res = (a+b<4) ? 'Below' : 'Over'

let message = (login == 'Employee') ? 
    'Hello' : (login == 'Director') ? 
    'Greetings' : (login == '') ?
    'No login' : '';*/

/*age = prompt('Age','');
let res = (age >=14 && age<=90)
alert(res);*/

/*if (age >!14 && age <!90);
if (age <14 || age>90);*/

/*checking = prompt('Who\'s there?','')
if(checking === 'Admin') {
    password = prompt('Password', '')
    if(password==="TheMaster") alert('Welcome!')
        else if(password === '' || password===null) alert('Canceled')
        else alert('Wrong password');
    }
    else if(checking === '' || checking === null) alert('Canceled')
    else alert('I don\'t know you');*/

/*for (i=2;i<=10;i++){
    if(i%2==0) alert(i);
}*/

/*let i=0;
while(i<3){
    alert(`number ${i}`);
    i++;
}*/
/*let ask;
do{ask = prompt("Input a number greater than 100",'')
} while(ask<100)*/

/*let interval = prompt("Enter number n",2);
nextPrime:
for(i=2; i<=interval;i++) {
    for(j=2;j<i;j++){
        if(i%j==0) continue nextPrime;
    }
    alert(i);
}*/

/*f(browser == 'Edge') {alert("You've got the Edge!");} 
    else if (browser == 'Chrome'
            || browser == 'Firefox'
            || browser == 'Safari'
            || browser == 'Opera') {alert( 'Okay we support these browsers too' );} 
    else {alert( 'We hope that this page looks ok!' );}*/

/*let a = +prompt('a?', '');
switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
}*/

/*function checkAge(age) {
    return (age>18) ? true : confirm("Did your parents allow you?");
}

function checkAge(age) {
    return (age>18) || confirm("Did your parents allow you?");
}*/

/*function min(a,b){
    return (a<b) ? a : b;
}*/

/*function pow(a,b){
    let res=a;
    for(i=1;i<b;i++){
        res*=a;
    }
    return res;
}*/

/*function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);*/


