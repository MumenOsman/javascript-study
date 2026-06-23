function getFirstElement(arr) {
    return arr[0];
}

function getLastElement(arr) {
    return arr[arr.length - 1];
}

function getElementByIndex(arr, index) {
    if (arr.length <= 0)  {
        return undefined;
    }
    
    return arr[index];
}


