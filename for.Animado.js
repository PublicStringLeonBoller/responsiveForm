$(document).ready(function () {
  $("#formsito").hover(function () {
    $("#formsito").animate(
      {
        padding: "3em",
      },
      1000
    );
  });

  $("#formsito").hover(function () {
    $("#titulo").css("color", "black");
  });

  $("#btnEnviar").click(function () {
    $("#formsito").slideUp(1000).slideDown(2000);
  });

  $("#mail").hover(function () {
    $("#mail").animate({ heigth: "300px" }, "slow");
  });
});

var expr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var patron = /^[0-9]+$/;

function sendForm() {
  $(document).ready(function () {
    $("#btnEnviar").click(function () {
      let txtMail = $("#mail").val();
      let txtPass = $("#pass").val();
      let txtUsuario = $("#usuario").val();
      let txtDireccion = $("#direccion").val();
      let txtCiudad = $("#ciudad").val();
      let txtZip = $("#zip").val();
      let chbxTerminos = $("input[type = 'checkbox']:checked");

      if (txtMail === "" || !expr.test(txtMail)) {
        $("#warning1").fadeIn(1500);
        return false;
      } else {
        $("#warning1").fadeOut(2000);
      }

      if (txtPass === "") {
        $("#warning2").fadeIn(1500), 3000;
        return false;
      } else {
        $("#warning2").fadeOut(2000), 2000;
      }

      if (txtUsuario === "") {
        $("#warning3").fadeIn(1500), 3000;
        return false;
      } else {
        $("#warning3").fadeOut(2000), 2000;
      }

      if (txtDireccion == "") {
        $("#warning4").fadeIn(1500), 3000;
        return false;
      } else {
        $("#warning4").fadeOut(2000), 2000;
      }

      if (txtCiudad == "") {
        $("#warning5").fadeIn(1500), 3000;
        return false;
      } else {
        $("#warning5").fadeOut(2000), 2000;
      }

      if (!patron.test(txtZip)) {
        $("#warning7").fadeIn(1500), 3000;
        return false;
      } else {
        $("#warning7").fadeOut(2000), 2000;
      }

      if (chbxTerminos.length == 0) {
        $("#warning8").fadeIn(2000), 3000;
        return false;
      } else {
        $("#warning8").fadeOut(1500), 2000;
      }
      $("#formNico").submit();
    });
  });
}
