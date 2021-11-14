console.log("Đỗ Duy Hưng 20183754 ");

var str = "abcdefgh";
var arr = str.split('');
var i =3, j = 4;
var temp = arr[i];
arr[i] = arr[j]; arr[j] = temp;
var str2 = arr.join('');
console.log(str2);
