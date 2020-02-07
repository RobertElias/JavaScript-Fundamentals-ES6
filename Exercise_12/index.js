//Reverse a number
function reverse_a_number(num){
   num = num  + "";
   return num.split("").reverse().join(""); 
}

console.log(reverse_a_number(230011));
console.log(reverse_a_number(0865));