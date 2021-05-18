const typedOutputFollows = (value) => {
    if (value > 999 && value < 1000000) {
        const strValue = (value/1000).toString();
        for (let i = 0; i < strValue.length; i++) {
            if (strValue[i] === '.' && strValue[i+1] === '0') {
                return (value/1000).toFixed() + 'k';
            }
        }
        return (value/1000).toFixed(1) + 'k';
    }
    if (value > 999999 && value < 1000000000) {
        const strValue = (value/1000000).toString();
        for (let i = 0; i < strValue.length; i++) {
            if (strValue[i] === '.' && strValue[i+1] === '0') {
                return (value/1000000).toFixed() + 'k';
            }
        }
        return (value/1000000).toFixed(1) + 'M';
    }
    return value;
}

export default typedOutputFollows;