let a=0;
let b=1;
let result = a+b;
let tong = 0;
for (var i = 1; i<=20; i++) {
    result = a+b;
    a=b;
    b= result;
    tong+=result;
} document.write(tong);