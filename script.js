$(document).ready(function () {
    $("#registro").show();
    $("#ingreso").hide();
    
    $("#botoninicio").click(function(){
        $("#registro").hide();
        $("#ingreso").show();
    });

    $("#botonregistro").click(function(){
        $("#ingreso").hide();
        $("#registro").show();
    });
    
   /* var correo1;
    var contra1;
    var correos =[]*/

    $("#boton_r").click(function (){
    var nombre1 = $("#nombre_r").val();
    var correo1 = $("#correo_r").val();
    var contra1 = $("#contra_r").val();
    if(correo1!=""&& nombre1!="" && contra1!=""){
    $("#usuario_r").html("¡Usuario creado con éxito!");
}else{
    $("#usuario_r").html("¡Por favor ingresa todos los campos!");
}
    $("#correo_r").val("");
    $("#contra_r").val("");
    $("#nombre_r").val("");

});

   
    $("#boton_i").click(function (){
        $("#ingreso").show();
        $("#registro").hide();
    var correo2 = $("#correo_i").val();
    var contra2 = $("#contra_i").val();
    if(correo2=="" || contra2==""){
        $("#msjerror").html("¡Por favor ingresa todos los campos!");
    }else if (correo2=="juan@hotmail.com" || correo2=="sebastian@hotmail.com" && contra2=="123abc" || contra2=="456def"){
        alert("Accediste correctamente")
    } $("#msjerror").html(
        "¡El ususario o correo ingresado no son correctos!"
      );
      $("#correo_i").val("");
      $("#contra_i").val("");
      
});


























});

