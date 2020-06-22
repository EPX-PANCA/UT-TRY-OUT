const obj= [
    { "id": 1, "name": "Udin", "age": 12 },
    { "id": 2, "name": "Reane", "age": 51 },
    { "id": 3, "name": "Budi", "age": 34 },
    { "id": 4, "name": "Agus", "age": 16 },
    { "id": 5, "name": "Sari", "age": 19 },
    { "id": 6, "name": "Ririn", "age": 20 },
    { "id": 7, "name": "Dessy", "age": 23 }
  ];


function cari(umur_) {
    const umur = umur_;

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].age <= umur) {
            console.log(obj[i].name);

        }
    }
}

cari(21); //mencari orang yang berusia di bawah 21 tahun

