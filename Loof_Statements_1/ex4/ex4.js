var a,b,result;
a=0;
b=1;
result=b;
for ( var i = 1; i<=20; i++) {
    result = a+b;
    a=b;
    b= result;
    if (result%5==0) {
        document.write(result);
        break;
    }
}
