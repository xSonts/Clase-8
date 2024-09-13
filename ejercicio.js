const evaluarMenor = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
  
    num1 < num2 && num1 < num3
      ? (document.getElementById(
          "resultado"
        ).innerText = `El número menor es ${num1}`)
      : num2 < num1 && num2 < num3
      ? (document.getElementById(
          "resultado"
        ).innerText = `El número menor es ${num2}`)
      : (document.getElementById(
          "resultado"
        ).innerText = `El número menor es ${num3}`);
  
    num1 == num2 || num1 == num3
      ? (document.getElementById(
          "repetido"
        ).innerText = `Se repite el número ${num1}`)
      : num2 == num1 || num2 == num3
      ? (document.getElementById(
          "repetido"
        ).innerText = `Se repite el número ${num2}`)
      : num3 == num1 || num3 == num2
      ? (document.getElementById(
          "repetido"
        ).innerText = `Se repite el número ${num3}`)
      : (document.getElementById("repetido").innerText = `No se repiten números`);
  };