let monney1=parseFloat(prompt("nhap so tien ban dau"));
let monney2=0;
let i = parseFloat(prompt("nhap lai suat 1 ky"));
let n = parseFloat(prompt("nhap so ky vay"));
let tienlai=0;
let laithang=0;
let j=0;
for (j=1; j<=n; j++) {
    monney2=monney1*((1+i)**j);
    tienlai = monney2-monney1;
} document.write(tienlai+ " ");