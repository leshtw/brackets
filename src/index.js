module.exports = function check(str, bracketsConfig) {
    if (str.length % 2)
        return false;

    for (let i = 1; i < str.length; i++) {
        let chCurr = str[i],
            chPrev = str[i - 1];

        for (let config of bracketsConfig) {
            if (chPrev === config[0] && chCurr === config[1])
                return check(str.slice(0, i - 1) + str.slice(i + 1), bracketsConfig);
        }
    }

    return !str.length;
};
