function play() {
    let num1 = parseInt(prompt("nhap vao gioi han duoi"));
    let num2 = parseInt(prompt("nhap vao gioi han tren"));
    console.log(num1)
    console.log(num2)
    let randomnum = (Math.floor(Math.random() * (num2 - num1 + 1)) + num1);
    console.log(randomnum)
    let chosenum = 0;
    do {
        chosenum = parseInt(prompt("nhap vao so ban doan"));
        if (randomnum == chosenum) {
            alert("You win");
        } else if (randomnum > chosenum) {
            alert('so ban chon be hon');
        } else {
            alert('so ban chon lon hon')
        }
    }
    while (chosenum != randomnum);
}