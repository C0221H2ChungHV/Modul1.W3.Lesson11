function test(num) {
    if (num % 7 == 0) {
        return true;
    } return false;
}

let count = 0;
let n = 30;
let j = 0;
let tong = 0;
while (count <= n) {
    if (test(j)) {
        count++;
        tong += j;
    }
    j++;
}
document.write(tong);