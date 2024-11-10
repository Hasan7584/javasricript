var sum=0;
for(let num=1;num<=500;num++){
    if(num%3==0 && num%5==0){  
      sum=sum+num;
}  
}
console.log(sum)

// var num=1;
// var sum =0;
// while(num<=500){
//     if(num%3==0 && num%5==0){
//         sum=sum+num;
//     }
//     num++
// }
// console.log(sum)