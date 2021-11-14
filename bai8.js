console.log("Đỗ Duy Hưng 20183754 ");

var str = "abc xyaz aoe ekz eoa aoe dkz aoe";
var str2 = "aoe";

var i = 0, dem = 0;
while (i < str.length) {
  if (!str.indexOf(str2, i)) {console.log("not found"); break;} else { dem++;}
  i = str.indexOf(str2, i)+str2.length;

} 
console.log(dem);
