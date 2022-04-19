//given a string check if its palindrome or not considering only alphanumeric characters.

const checkPalindrome = (string) => {

    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

console.log(checkPalindrome("cowoc"));