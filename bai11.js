console.log("Đỗ Duy Hưng 20183754 ");

var arr = [
  "Nguyễn Văn An",
  "La Peo La",
  "Nguyễn Thị An",
  "La Peo Minh",
  "Nguyễn Minh An",
  "Kim Me"
];
var dem = 0;
for (i = 0; i<arr.length; i++) {
  if ( arr[i].endsWith(" An")) dem++;
}
console.log(dem);
