const scuberDriverList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (a) => {
    let newArray1 = a.slice(0,2);
    return newArray1;
}

const returnLastTwoDrivers = (b) => {
    let newArray2 = b.slice(b.length - 2);
    return newArray2;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(c) {
    return (fare) => fare * c;
}

const fareDoubler = fare => (createFareMultiplier(2))(fare);

const fareTripler = fare => (createFareMultiplier(3))(fare);

function selectDifferentDrivers(d, e) {
    if (e === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(d);
    } else return returnLastTwoDrivers(d);
}

console.log(selectDifferentDrivers(scuberDriverList, returnFirstTwoDrivers));