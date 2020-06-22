function palindrome(kata) {

    var r = kata
        .replace(/[^A-Z0-9]/ig, "")
        .toLowerCase();
    var cekPalindrome = r
        .split('')
        .reverse()
        .join('');

    if (r === cekPalindrome) {
        console.log('true');
    } else {
        console.log('false');
    }
}

palindrome('Cigar? Toss it in a can. It is so tragic');
palindrome("I did, did I?");
palindrome("Red rum, sir, is murder");
palindrome("Eva, can I see bees in a cave?");
palindrome("Hello World");