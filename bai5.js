console.log("Đỗ Duy Hưng 20183754 ");

var str = "01010111101";
var arr = str.split('');
for (i = 0 ;i< arr.length; i++) { 
  if(arr[i]==0) arr[i]=2;
  else arr[i]=0;
}
for (i = 0 ;i< arr.length; i++) { 
  if(arr[i]==2) arr[i]=1;
}
var str2 = arr.join('');
console.log(str2);
