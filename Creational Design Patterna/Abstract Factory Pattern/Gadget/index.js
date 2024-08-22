const createGadget = require("./gadgetFactory.js");

const myLaptop = createGadget("Laptop", {
    ram: 32,
    ssd: 256,
    name: "Muhammad's laptop"
});

const myTablet = createGadget("Tablet", {
    ram: 8,
    hdd: 128,
    name: "Muhammad's tablet",
    network: "5G LTE"
});

const myPhone = createGadget("Phone", {
    ram: 8,
    hdd: 128,
    name: "Muhammad's Phone",
    network: "5G LTE"
});

const myRadio = createGadget("Radio", {
    name: "Muhammad's Radio",
    network: "FM"
});

console.log(myLaptop);
console.log(myTablet);
console.log(myPhone);
console.log(myRadio);
