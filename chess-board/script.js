
var chessTable=document.write("<table width=500 height=500 border =1>");
for (var i=0;i<8;i++){

    document.write('<tr>')
    
    if (i%2==0){
    for (var j=0;j<8;j++){

        if ((i+j)%2==0){
            document.write("<td bgcolor='white'></td>")

        }

        else{
            document.write("<td bgcolor='black'></td>")

        }



        

    }
    document.write("</tr>") 

}



else {

    for (var j=0;j<8;j++){

        if ((i+j)%2!=0){
            document.write("<td bgcolor='black'></td>")

        }

        else{
            document.write("<td bgcolor='white'></td>")

        }



        

    }

    document.write("</tr>")


}






}

document.write("</table>")




