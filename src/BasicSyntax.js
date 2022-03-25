const numbersMatching = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
]);

export function romanToInteger(str) {
    let result = 0;

    [...str].forEach((e, i) => i + 1 < str.length && numbersMatching.get(e) < numbersMatching.get(str[i + 1])
        ? result -= numbersMatching.get(e)
        : result += numbersMatching.get(e))

    return result;
}
