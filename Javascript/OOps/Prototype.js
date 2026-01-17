
let computer  = {
    cpu : 12
}
let lenovo = {
    screen : "hd",
    __proto__:computer
}
let tom_hardware = {};
console.log(`lenovo `, lenovo.__proto__); //computer  [Object: null prototype] {}
let genericCar = { tyres: 4 };

let tesla = {
driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));