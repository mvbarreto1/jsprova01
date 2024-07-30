function calcularMediaPonderada(n1, n2, n3, p1, p2, p3) {
    const somaPesosNotas = (n1 * p1) + (n2 * p2) + (n3 * p3);
   const somaPesos = p1 + p2 + p3;
   const media = somaPesosNotas / somaPesos;
   return media;
}

    const nota1 = 7.5;
    const nota2 = 8.0;
    const nota3 = 6.5;
    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 1;

    const media = calcularMediaPonderada(nota1, nota2, nota3, peso1, peso2, peso3);

    console.log("A média ponderada é:", media);