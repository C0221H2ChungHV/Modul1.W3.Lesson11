let n = parseInt(prompt("nhap vao so nguyen duong n"));
if (n==0) {
    document.write(+n+"!=1");
} else {
    let i = 1;
    let giai_thua = 1;
    for (i = 1; i <= n; i++) {
        giai_thua = giai_thua * i;
    }
    ;
    document.write(+n + "!=" + giai_thua);
}
