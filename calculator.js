document.getElementById("herons").addEventListener('submit', (event) => {
    event.preventDefault();
    const numA = Number(document.getElementById("a").value);
    const numB = Number(document.getElementById("b").value);
    const numC = Number(document.getElementById("c").value);

    console.log(numA, numB, numC);

    document.getElementById("res").value = (numA + numB + numC);
})