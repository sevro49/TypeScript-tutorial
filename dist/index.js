"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
//# sourceMappingURL=index.js.map