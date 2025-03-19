document.getElementById("herons").addEventListener('submit', (event) => {
    event.preventDefault();

    const sideA = Number(document.getElementById("a").value);
    const sideB = Number(document.getElementById("b").value);
    const sideC = Number(document.getElementById("c").value);

    const area = Number((0.25 * Math.sqrt(4 * (sideA ** 2) * (sideB ** 2) - (sideA ** 2 + sideB ** 2 - sideC ** 2) ** 2)).toFixed(5));

    console.log(sideA, sideB, sideC, area)

    document.getElementById("resH").value = (area);
})


document.getElementById("ambig").addEventListener('submit', (event) => {
    event.preventDefault();

    const angA = Number(document.getElementById("angA").value);
    const sideA = Number(document.getElementById("sideA").value);
    const sideB = Number(document.getElementById("sideB").value);

    const height = Number((sideB * Math.sin(angA * (Math.PI / 180))).toFixed(10));

    let result = "no triangle";

    console.log(angA, sideA, sideB, height)

    if (sideA != "" && sideB != "" && angA != "")

        if (angA >= 90) {

            if (sideA <= sideB) {
                result = "no triangle";
            }

        } else {

            if (sideA < height) {
                result = "no triangle";
            } else if (sideA == height) {
                result = "right triangle";
            } else if (sideA > sideB) {
                result = "one triangle";
            } else if (sideA > height && sideA < sideB) {
                result = "two triangles (ambiguous case)";
            }

        }

    document.getElementById("resA").value = (result);
})



document.getElementById("newt").addEventListener('submit', (event) => {
    event.preventDefault();

    function getFOfX(x) {
        return 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
    }

    function getFPrimeOfX(x) {
        return 24 * x ** 3 - 39 * x ** 2 - 36 * x + 7;
    }

    const guess = Number(document.getElementById("guess").value);

    let prevAprox = guess;
    let aprox = prevAprox - (getFOfX(prevAprox)/getFPrimeOfX(prevAprox));
    let permutations = 0;

    console.log(prevAprox, aprox, guess);

    while (Math.abs(aprox-prevAprox) >= 0.0001) {
        permutations++;
        prevAprox = aprox;
        aprox = prevAprox - (getFOfX(prevAprox)/getFPrimeOfX(prevAprox));
    }

    document.getElementById("resPerms").value = (permutations);
    document.getElementById("resN").value = (aprox);
})



document.getElementById("pofunc").addEventListener('submit', (event) => {
    event.preventDefault();
    
    const coefficients = document.getElementById("coeff").value.split(" ").map(Number);
    const exponents = document.getElementById("expo").value.split(" ").map(Number);
    const xValue = Number(document.getElementById("xVal").value);

    let resultFunction = "f(x)=";
    let resultEvaluation = null;

    for (let i = 0 ; i < coefficients.length ; i++) {
        

        /*
        Case 1: 0 coeff => no terms

        cont

        Case 1: first coeff => null
        Case 2: positive => +
        Case 3: negative => -
        
        cont

        Case 1: expo 0 => null
        Case 2: expo 1 => x
        Case 3: expo > 1 => x^expo

        */

        if (coefficients[i] != 0) {
            
            if (i != 0) {

                if (coefficients[i] > 0) {
                    resultFunction = `${resultFunction}+`;
                }

            }

        }


        // if (coefficients[i] == 1) {
        //     resultFunction = `${resultFunction}+x^${exponents[i]}`;
        // } else if (coefficients[i] == -1) {
        //     resultFunction = `${resultFunction}-x^${exponents[i]}`;
        // } else if (coefficients[i] >= 0 && i > 0) {
        //     resultFunction = `${resultFunction}+${coefficients[i]}x^${exponents[i]}`;
        // } else {
        //     resultFunction = `${resultFunction}${coefficients[i]}x^${exponents[i]}`;
        // }

        resultEvaluation += coefficients[i] * xValue ** exponents[i];
    }

    document.getElementById("resFunc").value = (resultFunction);
    document.getElementById("resEval").value = (resultEvaluation);
})