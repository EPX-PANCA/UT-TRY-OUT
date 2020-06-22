function grade(nilaiInput) {
    const nilai = nilaiInput;

    if (nilai >= 90) {
        console.log('A');
    } else if (nilai >= 80 && nilai <= 89) {
        console.log('B');
    } else if (nilai >= 70 && nilai <= 79) {
        console.log('C');
    } else if (nilai >= 60 && nilai <= 69) {
        console.log('D');
    } else if (nilai < 59) {
        console.log('E');
    }
}
//Ganti parameter nilaiInput Input saja  untuk cek nilai
grade(60);
grade(80);