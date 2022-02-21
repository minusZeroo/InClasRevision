//Function declaration and arrow functions

// function calculateAge1(birthYear) {
//     return 2022 - birthYear;
// }
// console.log(calculateAge1(1992));
//
// //using arrow function/notation
// calculateAge2 = birthYear => 2022 - birthYear;
// console.log(calculateAge2(1992));
//
// //more parameters
// yearsToRetire = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirmentAge = 65 - age;
//     return `${firstName} retires in ${retirmentAge} years`;
// }
// console.log(yearsToRetire(1992, 'Paul'));

function smallerPieces(fruit) {
    return fruit * 8;
}
function blender(apples, oranges) {
    const applePieces = smallerPieces(apples);
    const orangePieces = smallerPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and
                    ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(blender(4, 5))






