//GET, POST , PUT Y DELETE

function getReservaciones(){
    $.ajax({
        url:"http://192.18.129.4:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postReservaciones(){
    let cajas = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        car:{idCar: +$("#select-car").val()},
        client:{idClient: +$("#select-client").val()},
    };
    console.log(cajas);
    
    $.ajax({
        url:"http://192.18.129.4:8080/api/Reservation/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el mensaje");
            window.location.reload();
        }
    });

}

function putReservaciones(idBotonActualizar){
console.log(idBotonActualizar);


//if ($("#startDate") ==null || $("#devolutionDate").devolutionDate==0 || $("status")){
    alert("Todos los campos son obligatorios para actualizar los datos");
//}else{

let cajas = {
    idReservation:idBotonActualizar,
    status:$("#status").val(),
    //description:$("#description").val()
};

$.ajax({
    url:"http://192.18.129.4:8080/api/Reservation/update",
    type:"PUT",
    datatype:"JSON",
    contentType: "application/json",
    data: JSON.stringify(cajas),
    success:function(respuesta){
        alert("se actualizo correctamente la reservacion");
        window.location.reload();
    }
});

}
function deleteReservaciones(idBoton){
    let myData={
        id:idBoton
    };
    $.ajax({
        url:"http://192.18.129.4:8080/api/Reservation/"+idBoton,
        type:"DELETE",
        datatype:"JSON",
        data:JSON.stringify(myData),
        contentType: "application/json",
        success:function(respuesta){
           
            window.location.reload();
        }

    });
}


/////////////////////////////////////

function getReservaciones_Car(){
    $.ajax({
        url:"http://192.18.129.4:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            let $select =$("#select-car");
            $.each(respuesta, function (id,name) {
                $select.append('<option value='+name.idCar+'>'+name.name+'</option>');
                //console.log(name);
            });
        }

    });

}

function getReservaciones_Client(){
    $.ajax({
        url:"http://192.18.129.4:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            let $select =$("#select-client");
            $.each(respuesta, function (id,name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
                //console.log(name);
            });
        }

    });

}

////////////////////////////////////////
function pintarRespuesta(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].startDate+"</td>";
        myTable+="<td>"+items[i].devolutionDate+"</td>";
        myTable+="<td>"+items[i].status+"</td>";
        myTable+="<td>"+items[i].car.name+"</td>";
        myTable+="<td>"+items[i].car.brand+"</td>";
        myTable+="<td>"+items[i].client.name+"</td>";
        myTable+="<td>"+items[i].client.email+"</td>";
        myTable+="<td> <button onclick='deleteReservaciones("+items[i].idReservation+")'class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg')'> Borrar </button> " ;
        myTable+="<td> <button onclick='putReservaciones("+items[i].idReservation+")'class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg')'> Actualizar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}