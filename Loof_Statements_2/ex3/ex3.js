document.write("<table>");
let i=0;
let k=0;
for (i=1; i<=5; i++) {
    document.write('<tr>');
    for (k=1; k<=i; k++) {
        document.write("<td>");
        document.write('*');
        document.write("</td>");
    }
}
document.write("</table>");