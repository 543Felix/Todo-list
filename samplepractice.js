// const c =[1,3,4,5,6,7,8,9]
// const n = c.length
// const total = n*(n+1)/2
// console.log(total);
// let missingNumber;
// for(let i=0;i<c.length;i++){
// missingNumber = total-c[i]
// }
// console.log(missingNumber);

function missingNumber(arr){
  const n= arr.length+1
  let total = (n*(n+1))/2
  
  for(let i =0;i<arr.length;i++){
    total -= arr[i]
  }
  console.log(total);
}
const c =[1,2,3,4,5,7,8,9]
missingNumber(c)