module.exports = {

    volumeOfRectangularPrism: function (length, width, height) {
        if ((typeof length !== "number") || (isNaN(length)) || (length < 0)) {
            throw `length is not a number or it is negative`;
        }
        if ((typeof width !== "number") || (isNaN(width)) || (width < 0)) {
            throw `width is not a number or it is negative`;
        }
        if ((typeof height !== "number") || (isNaN(height)) || (height < 0)) {
            throw `height is not a number or it is negative`;
        }
        return length * width * height;
    },

    surfaceAreaOfRectangularPrism: function (length, width, height) {
        if ((typeof length !== "number") || (isNaN(length)) || (length < 0)) {
            throw `length is not a number or it is negative`;
        }
        if ((typeof width !== "number") || (isNaN(width)) || (width < 0)) {
            throw `width is not a number or it is negative`;
        }
        if ((typeof height !== "number") || (isNaN(height)) || (height < 0)) {
            throw `height is not a number or it is negative`;
        }
        return 2 * (length * height + height * width + width * length);
    },

    volumeOfSphere: function (radius) {
        if ((typeof radius !== "number") || (isNaN(radius)) || (radius < 0)) {
            throw `radius is not a number or it is negative`;
        }

        return 4 * Math.PI * Math.pow(radius, 3) / 3;
    },

    surfaceAreaOfSphere: function (radius) {
        if ((typeof radius !== "number") || (isNaN(radius)) || (radius < 0)) {
            throw `radius is not a number or it is negative`;
        }

        return 4 * Math.PI * Math.pow(radius, 2);
    }
};
