// ===============================================================================
// DATA
// Below data will hold all of the survey results.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendArray = [{
        name: "Ahmed",
        photo: "https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "May",
        photo: "https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            2,
            4,
            2
        ]
    }
];

// export the array which makes it accessible to other files using require
module.exports = friendArray;