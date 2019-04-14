const spreadArray = (amount, array) => {
    if (amount === 1 || !array.length) return array;
    let spreadedArray = Array.apply(null, new Array(amount)).map(() => []);
    for(let i = 0; i < array.length; i++) {
      spreadedArray[i % spreadedArray.length].push(array[i]);
    }
    return spreadedArray;
}

export default spreadArray;