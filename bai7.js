console.log("Đỗ Duy Hưng 20183754 ");

var str = "ab2cd3ef34gh";
var arr = str.split('');
var arr2  = [];
for (i = 0; i<arr.length; i++) { 
    if (arr[i] == "0" || arr[i] == "1" || arr[i] == "2" || arr[i] == "3" || arr[i] == "4" || arr[i] == "5" || arr[i] == "6" || arr[i] == "7" || arr[i] == "8" || arr[i] == "9" ) {arr2[i] = "$"} else {arr2[i] = arr[i];}
}
var str2 = arr2.join('');
console.log(str2);
