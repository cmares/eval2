
function imprimirConsola()
  {
    var num1 = document.getElementById("InputRojo").value;
    var num2 = document.getElementById("txt2").value;
    console.log(num1 + "," + num2);
  }

function operacion()
  {
    var num1 = document.getElementById("InputRojo").value;
    var num2 = document.getElementById("txt2").value;
    var opcion = document.getElementById("operador").value;
    if (opcion == 1) {
      document.getElementById("res").value = (parseInt(num1) + parseInt(num2));
    }
    else if ( opcion == 2)
    {
      document.getElementById("res").value = (parseInt(num1) - parseInt(num2));
    }
    else if ( opcion == 3)
    {
      document.getElementById("res").value = (parseInt(num1) * parseInt(num2));
    }
    else
    {
      document.getElementById("res").value = (parseInt(num1) / parseInt(num2));
    }

    localStorage.setItem("Resultado", document.getElementById("res").value);
    document.getElementById("storage").value = localStorage.getItem("Resultado");
  }