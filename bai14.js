console.log("Đỗ Duy Hưng 20183754 ");

var s1="1111100000";
var arr1 = s1.split('');
var arr = [];
var temp=0;
for(i=0; i<arr1.length-1; i++) { 
  temp = arr1[i];
  arr1[i] = arr1[i+1];
  arr1[i+1] = temp;
  arr.push(arr1.join(''));
}
console.log(arr);
