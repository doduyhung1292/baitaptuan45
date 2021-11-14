console.log("Đỗ Duy Hưng 20183754 ");

var str = "aoeabceorabc";

var dem = 0;
for (i = 0; i<str.length; i++) {
  if(str[i] == "a" && str[i+1] == "b" && str[i+2] == "c") {dem++;}
}

console.log(dem);
