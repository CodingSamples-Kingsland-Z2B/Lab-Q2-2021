const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}



/* 
    Your tests will be supplied with a function named 'rgbToHexColor()', which takes three arguments. 
    It should meet the following requirements:
    •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
    •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
    •	Return undefined if any of the input parameters are of invalid type or not in the expected range
 */

//make descripes for the categories you come up with
//good category ideas are things like inputs, positive matches, negative matches, validation
describe("Should take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255], returns undefined if any of the input parameters are invalid",function(){
    it("returns undefined when an invalid red number is entered",function(){
        assert.equal(rgbToHexColor(-2,3,4),undefined);
    });
    it("returns undefined when an invalid blue number is entered",function(){
        assert.equal(rgbToHexColor(4,3,-2),undefined);
    });
    it("returns undefined when an invalid green number is entered",function(){
        assert.equal(rgbToHexColor(3,-2,4),undefined);
    });
    it("returns undefined when the red input is not a number",function(){
        assert.equal(rgbToHexColor("20",3,4),undefined);
    });
    it("returns undefined when the blue input is not a number",function(){
        assert.equal(rgbToHexColor(4,3,"20"),undefined);
    });
    it("returns undefined when the green input is not a number",function(){
        assert.equal(rgbToHexColor(3,"20",4),undefined);
    });
});
describe("Should return the same color in hexadecimal format as a string (e.g. '#FF9EAA')",function(){
    it("Red hex should be red",function(){
        assert.equal(rgbToHexColor(230, 40, 40),"#E62828");
    });
    it("Blue hex should be blue",function(){
        assert.equal(rgbToHexColor(40, 230, 65),"#28E641");
    });
    it("Green hex should be green",function(){
        assert.equal(rgbToHexColor(53, 40, 230),"#3528E6");
    });
});