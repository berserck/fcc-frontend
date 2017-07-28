'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

describe(" Tests for basic/title-case-a-sentence", function () {
    var titleCase = require('../../basic/title-case-a-sentence').titleCase;

    it('titleCase("I\'m a little tea pot") should return a string.', function () {
        expect(_typeof(titleCase("I'm a little tea pot"))).toBe('string');
    });

    it('titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot".', function () {
        expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
    });

    it('titleCase("sHoRt AnD sToUt") should return "Short And Stout".', function () {
        expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
    });

    it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".', function () {
        expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe("Here Is My Handle Here Is My Spout");
    });
});
//# sourceMappingURL=title-case-a-sentence-spec.js.map