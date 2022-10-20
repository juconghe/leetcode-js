/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    const secretTable = Object.create(null);
    const cowedTable = Object.create(null);
    let cow = 0;
    let bull = 0;
    for(let i = 0; i < secret.length; i += 1) {
        const current = secret[i];
        if (!secretTable[current]) {
           secretTable[current] = 0;
        }
        secretTable[current] += 1;
    }
    for (let i = 0; i < guess.length; i += 1) {
        const current = guess[i];
        if (secretTable[current] !== undefined) {
          if (current === secret[i]) {
            bull += 1;
            if (secretTable[current] <= 0) {
                cow -= 1;
            }
          } else if (secretTable[current] > 0) {
            cow += 1;
          }
          secretTable[current] -= 1;
        }
    }
    return `${bull}A${cow}B`;
};

console.log(getHint('1122', '1222'))