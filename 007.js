function reverse(kata) {
    const awal = kata;
    let reverse = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        reverse = reverse + awal[i];
    }

    console.log(reverse);
}
reverse('try out UT');