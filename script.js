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