function traerReporteStatus(){
    $.ajax({
        url:"http://192.18.129.4:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaStatus(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaStatus(items){
    console.log(items);
    let myTable="<table>";
 
        myTable+="<tr>";
        myTable+="<td>"+items.completed+"</td>";
        myTable+="<td>"+items.cancelled+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}


function traerReporteFechas(){
    const dateOne = $('#startDate').val()
    const dateTwo = $('#devolutionDate').val()
    console.log(dateOne, dateTwo)
    $.ajax({
        url:"http://192.18.129.4:8080/api/Reservation/report-dates/" + dateOne + "/" + dateTwo,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaFechas(respuesta);
        }

    });
}
function pintarRespuestaFechas(items){
    console.log(items);
       //console.log(items.gama);
       let myTable="<table>";
    
       myTable+="<tr>";
       myTable+="<td>Id</td>";
       myTable+="<td>Fecha</td>";
       //myTable+="<td>Año</td>";
       myTable+="<td>Status</td>";
   "</tr>";
       
       
       
       
       
       for(i=0;i<items.length;i++){
           myTable+="<tr>";
           myTable+="<td>"+items[i].idReservation + "</td>";
           myTable+="<td>"+items[i].startDate + "</td>";
           myTable+="<td>"+items[i].devolutionDate + "</td>";
           myTable+="<td>"+items[i].status + "</td>";
          // myTable+="<td>"+items[i].gama.name+ "</td>";
         
           myTable+="</tr>";
       }
       myTable+="</table>";
       $("#resultado2").html(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://192.18.129.4:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaClientes(respuesta);
        }

    });
}

function pintarRespuestaClientes(items){
    console.log(items);
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].client.name + "</td>";
        myTable+="<td>"+items[i].total + "</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}
