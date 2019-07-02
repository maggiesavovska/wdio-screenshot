"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingRect;
function getBoundingRect(elem) {
    var boundingRect = elem.getBoundingClientRect();
    console.log('in bounding rect');
    console.log(boundingRect);
    return [{
      top: boundingRect.top,
      right: boundingRect.right,
      bottom: boundingRect.bottom,
      left: boundingRect.left
    }];
}
