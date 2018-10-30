module.exports = {
    deepEquality: function (obj1, obj2) {
        if (typeof obj1 != "object") {
            throw 'obj1 not of object type';
        }
        if (typeof obj2 != "object") {
            throw 'obj2 not of object type';
        }
        let obj1PropNames = Object.getOwnPropertyNames(obj1);
        let obj2PropNames = Object.getOwnPropertyNames(obj2);
        if (obj1PropNames.length != obj2PropNames.length) {
            return false;
        }
        for (var i = 0; i < obj1PropNames.length; i++) {
            var property = obj1PropNames[i];

            if (obj1[property] !== obj2[property]) {
                return false;
            }
        }
        return true;
    },

    uniqueElements: function (arr) {
        if (Array.isArray(arr) == false) {
            throw 'arr not of array type';
        }
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr2.includes(arr[i])) {
                return false;
            } else {
                arr2.push(arr[i]);
            }
        }
        return true;
    },

    countOfEachCharacterInString: function (str) {
        if (typeof str != "string") {
            throw 'str not of string type';
        }
        var i = 0;
        var charMap = {};
        while (i < str.length) {
            if (charMap[str.charAt(i)] == undefined) {
                charMap[str.charAt(i)] = 0;
            }
            charMap[str.charAt(i)]++;
            i++;
        }
        return charMap;
    }
};
