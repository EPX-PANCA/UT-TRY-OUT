const panjangArray = 100;
//generate 100 array acak
const deretAngka = Array
    .from(Array(panjangArray))
    .map(x => Math.floor(Math.random() * 100));

console.log('Nilai Array acak : ' + deretAngka);

function max(deret) {
    const Max = Math
        .max
        .apply(null, deret);
    console.log(Max);
}

function min(deret) {
    const Min = Math
        .min
        .apply(null, deret);
    console.log(Min);
}

function average(deret) {
    let totalAngka = 0;
    let average;
    for (let i = 0; i < deret.length; i++) {
        average = (totalAngka += deret[i]) / deret.length;
    };

    console.log(average);
}

console.log('\n');
max(deretAngka);
min(deretAngka);
average(deretAngka);
