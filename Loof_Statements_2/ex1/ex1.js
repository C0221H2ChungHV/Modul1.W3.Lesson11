let a = 0;
let b = 1;
let result = a+b;
for (i=2; i<=100; i++) {
    result = a +b;
    a=b;
    b=result;
    document.write(result+" ");
}