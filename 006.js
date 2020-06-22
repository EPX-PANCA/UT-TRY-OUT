function faktorialRekursif(x) {

    if (x === 0) {
        return 1;
    }
    return x * faktorialRekursif(x - 1);

}
const nilai = 4 ; 
console.log( "Hasil Faktorial dari angka "+ nilai + " adalah : "+ + faktorialRekursif(nilai));