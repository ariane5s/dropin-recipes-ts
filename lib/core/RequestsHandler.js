"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DROPinAPI_1 = require("./DROPinAPI");
function RequestsHandler(recipe, collection) {
    return {
        getOne(params) {
            return DROPinAPI_1.DROPinAPI.getOneLine(recipe, collection, params);
        }
    };
}
exports.RequestsHandler = RequestsHandler;
