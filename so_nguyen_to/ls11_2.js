
function kiem_tra_snt(n) {
    for (let i = 2; i < n; i++)
         if (n % i == 0) {
            return false;
        }
            return true;
        }
let j = 2;
let count = 0;
while (count <=20) {
    if (kiem_tra_snt(j)) {
        count+=1;
        document.write(j +" ");
    } j++;
}