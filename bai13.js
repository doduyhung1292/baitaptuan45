console.log("Đỗ Duy Hưng 20183754 ");

var arr = [
  "Nguyễn Văn An",
  "La Peo La",
  "Nguyễn Thị An",
  "La Peo Minh",
  "Nguyễn Minh Hường",
  "Kim Hoa"
];
var dem = 0;
for (i = 0; i<arr.length; i++) {
  if ( arr[i].startsWith("H", arr[i].lastIndexOf(" ")+1)) dem++;
}
console.log(dem);
