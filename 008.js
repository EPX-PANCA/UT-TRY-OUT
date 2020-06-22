const jmlInput = prompt('Masukkan Jumlah data angka yang akan di input');
let hasil = 0;
for (let i = 1; i <= jmlInput; i++) {
    let data = prompt('Masukkan data ke ' + i);
    hasil += parseInt(data);
}

alert("Jumlah seluruh data yang diinputkan adalah : " + hasil);
//saya debugging pakai chrome