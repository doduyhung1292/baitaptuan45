console.log("Đỗ Duy Hưng 20183754 ");

var str = "abcdefgh";
var arr = str.split('');
var arr2  = [];
for (i = arr.length-1; i>=0; i--) { 
    arr2[arr.length-1 - i] = arr[i];
}
var str2 = arr2.join('');
console.log(str2);
