document.write("<table>");
for (let i = 1; i <= 7; i++) {
    document.write("<tr>")
    for (let j = 1; j<= 21;j++)
    {
        if (i == 1 || i == 7 || j==1 || j==21 ) {
            document.write("<tr>")
            document.write("<td>");
            document.write("*");
            document.write("</td>");
            document.write("</tr>")
        } else {
            document.write("<td>");
            document.write(" ");
            document.write("</td>");
        }
    }
}