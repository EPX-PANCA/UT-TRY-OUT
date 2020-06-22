function oddEven(inputNilai) {
    let input = inputNilai;
    let hasil = input % 2;
    if (hasil === 0) {
        console.log('Genap');
    } else {
        console.log('Ganjil');
    }
}

oddEven(6); //Ganti parameter InputNilai untuk cek ganjil genap
oddEven(1);