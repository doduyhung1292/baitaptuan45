console.log("Đỗ Duy Hưng 20183754 ");

var arr = [
  "abc",
  "abel",
  "eoeak",
  "e",
  "ew"
];
var arr2 = [];
for (i = 0; i<arr.length; i++) {
  arr2[i] = arr[i].length;
}
arr2.sort((a, b) => {return b-a;})
console.log(arr2[0]);
