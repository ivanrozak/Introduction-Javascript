const biodata = () => {
    return console.log("Hello my name is Ivan !");
};

const hobby = ["membaca", "mewarnai"]

// module.exports = biodata;

//cara pertama untuk export module lebih dr 1
// module.expoerts.biodata1 = biodata;
// module.expoerts.hobby = hobby; //yang didepan == gaboleh diganti, yang dibelakang boleh

module.exports = {biodata, hobby};