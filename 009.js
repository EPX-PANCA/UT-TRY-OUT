const data_JSON = [
    "Jakarta",
    "Aceh",
    "Malang",
    "Medan",
    "Bontang",
    "Jogja",
    "Jakarta",
    "Bandung",
    "Malang",
    "Solo",
    "Palembang",
    "Bandung"
];
let tidakGanda = [...new Set(data_JSON)];
console.log(tidakGanda);