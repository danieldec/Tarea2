$(document).ready(function(){
  var nombreF, emailF,passwordF;

  $("#btnEnviar").click(function (){
    var nomF = document.getElementById('nombre').value;
    var emailF= document.getElementById('email').value;
    var password=$("#password").val();
    var password2=$("#password2").val();
    if (nomF===""&&emailF===""&&password===""&&password2==="") {
      alert("Por favor ingresa los datos")
      return
    }
    if(password==password2){
      alert("Registro Exitoso");
      nombreF=localStorage.setItem("nombreLE",nomF);
      emailF=localStorage.setItem("emailLE",emailF);
      passwordF=localStorage.setItem("passwordLE",password);
      window.location.href="index.html";
    }else if(password!=password2){
      alert("Registro no Exitoso");
      window.location.href="signup.html";
    }
  });
  $("#btnIngresar").click(function(){
    var n=$("#nombreLogin").val();
    var p=$("#passwordLogin").val();
    if(n==localStorage.getItem("nombreLE") && p==localStorage.getItem("passwordLE")){
      alert("Bienvenid@ " + n) ;
      window.location.href="pagina.html"
    }else{
      alert("usuario no registrado");
    }
  });
  $("#tituloH1").append('Bienvenid@ ' + localStorage.getItem("nombreLE"));
});
