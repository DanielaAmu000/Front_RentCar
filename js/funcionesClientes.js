//GET, POST , PUT Y DELETE

function getClientes(){
    $.ajax({
        url:"http://192.18.129.4:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postClientes(){
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://192.18.129.4:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el cliente");
            window.location.reload();
        }
    });

}

function putClientes(idBotonActualizar){


    if ($("#email").val().length==0 || $("#password").val().length==0 ||
     $("#name").val().length==0 || $("#age").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los datos");
    }else{

    let cajas = {
        idClient:idBotonActualizar,
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://192.18.129.4:8080/api/Client/update",
        type:"PUT",
        datatype:"JSON",
        contentType: "application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente el cliente");
            window.location.reload();
        }
    });
}

}
function deleteClientes(idBoton){
    Swal.fire({
        title: 'Estás seguro de borrar el cliente?',
        text: "se borrará definitivamente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado',
            'El cliente se ha borrado correctamente.',
            'exitoso'
            
          )
          let myData={
            id:idBoton
        };
        $.ajax({
            url:"http://192.18.129.4:8080/api/Client/"+idBoton,
            type:"DELETE",
            datatype:"JSON",
            data:JSON.stringify(myData),
            contentType: "application/json",
            success:function(respuesta){
                //alert("se ha borrado correctamente el cliente")
                window.location.reload();
            }
    
        });
        }
      })
    
}


////////////////////////////////////////
function pintarRespuesta(items){
    let myTable= '<table class="table-auto w-full text-left whitespace-no-wrap">';
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].password+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='putClientes("+items[i].idClient+")'class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Actualizar </button> " ;
        myTable+="<td> <button onclick='deleteClientes("+items[i].idClient+")'class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}

