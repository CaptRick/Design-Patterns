const Laptop = require("./laptop");
const Tablet = require("./tablet");
const Other = require("./other");

const gadget = { Laptop, Tablet };

const createGadget = function (type, attributes) {
    const gadgetType = gadget[type] || Other;
    return new gadgetType(attributes);
}

module.exports = createGadget;