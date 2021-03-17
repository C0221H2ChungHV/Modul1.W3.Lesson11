var a,b,result;
a=0;
b=1;
result=b;
for ( var i = 1; i<=20; i++) {
    document.write(result+",");
    result = a+b;
    a=b;
    b= result;
}