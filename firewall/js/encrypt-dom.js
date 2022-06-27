function decrypt_document(str, key) {
    var count = 0, arr = [];
    for (var i = 0; i < str.length; i += 2) {
        arr[count++] = '%' + ('0' + (parseInt(str.substr(i, 2), 16) ^ key[i / 2 % 32]).toString(16)).toUpperCase().slice(-2);
    }
    return decodeURIComponent(arr.join(''));
}
