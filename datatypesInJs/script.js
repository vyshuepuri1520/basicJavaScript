// var num = 1; 
// console.log("value of num is :" +num);

// var str = "vyshnavi";
// console.log("name : " + str);
// var bool = true;
// console.log("boolean : " + bool);
// var numarr = [2,3,4,5,6,7]
// console.log("array : " + numarr);
// var multi = [1,"sai",4,"omi",3,true,3.56];
// console.log("multiplie elements: " + multi);
// var multidarr = [10,20,30,["sai",1,2]];
// console.log(multidarr);
// var hours = 20;
// if(hours<12){
//     console.log("Good Morning!");
// }
// else if(hours > 12 && hours < 16)
// {
//     console.log("Good afternoon")
// }
// else if(hours > 16 && hours <19)
// {
//     console.log("Good Evening")
// }
// else
// {
//     console.log("Good Night!")
// }
// var num = 13;

// var num = prompt("Enter integer value to check for the even or odd")
// console.log(num);
// if(num%2 ==0)
// {
//     console.log("It is a even number")
//     alert(num + "is even");
// }
// else
// {
//     console.log("It is a odd number");
//     alert(num + "is odd");
// }
var num = prompt("Enter the number: ");
num = parseInt(num);
console.log(num);
switch(num){
    case 1: console.log("Sunday");
            break;
    case 2: console.log("Monday");
            break;
    case "3": console.log("Tuesday");
            break;
    case "4": console.log("wednesday");
            break;
    case "5": console.log("Thursday");
            break;
    case "6": console.log("Friday");
            break;
    case "7": console.log("saturday");
            break;
    default:console.log("Invalid input")
        alert("Enter valid number")
            break;
}
// var num = prompt("Enter any digit");
// var i = 1;
// var count = 0;
// do{
//     console.log("Hello");
//     count++;
// }while(count < num );
// while(i <= 10 )
// {
//     console.log(num+"*"+i+ "=" + num*i);
//     i++;
// }
// for(i=1;i<=10;i++)
// {
//     console.log(num+"*"+i+ "=" + num*i);
// }
// var arr=[1 ,4 ,6 ,7 ,2];
// var str = "";
// var num = arr.length;
// var i = 0;
// for(i = 0;i < num;i++)
// {
//     str+=(arr[i]+" ");
// }
// console.log(str);
// for(var n of arr)
// {
//     console.log(n);
// }