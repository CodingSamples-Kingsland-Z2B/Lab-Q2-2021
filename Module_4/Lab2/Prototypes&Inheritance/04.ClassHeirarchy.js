function main() {
	class Figure {
		constructor(units = "cm") {
			this.units = units;
		}
		changeUnits(unit) {
			this.units = unit;
		}
	}

	class Circle extends Figure {
		constructor(radius, units) {
			super(units);
			if (units != undefined || units != "cm") {
				if (units == "mm") {
					radius *= 10;
				} else if (units == "m") {
					radius /= 100;
				}
			}
			this.radius = radius;
		}

		get area() {
			return Math.PI * this.radius * this.radius;
		}

		toString() {
			return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
		}

		changeUnits(unit) {
			if (unit == "m") {
				if (this.units == "cm") {
					this.radius /= 100;
				} else if (this.units == "mm") {
					this.radius /= 1000;
				}
			} else if (unit == "cm") {
				if (this.units == "m") {
					this.radius *= 100;
				} else if (this.units == "mm") {
					this.radius /= 10;
				}
			} else if (unit == "mm") {
				if (this.units == "cm") {
					this.radius *= 10;
				} else if (this.units == "m") {
					this.radius *= 1000;
				}
			}
			this.units = unit;
		}
	}

	class Rectangle extends Figure {
		constructor(width, height, units) {
			super(units);
			if (units != undefined || units != "cm") {
				if (units == "mm") {
					width *= 10;
					height *= 10;
				} else if (units == "m") {
					width /= 100;
					height /= 100;
				}
			}
			this.width = width;
			this.height = height;
		}

		get area() {
			return this.width * this.height;
		}

		toString() {
			return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
		}

		changeUnits(unit) {
			if (this.units == "m") {
				if (unit == "cm") {
					this.width *= 100;
					this.height *= 100;
				} else if (unit == "mm") {
					this.width *= 1000;
					this.height *= 1000;
				}
			} else if (this.units == "cm") {
				if (unit == "m") {
					this.width /= 100;
					this.height /= 100;
				} else if (unit == "mm") {
					this.width *= 10;
					this.height *= 10;
				}
			} else if (this.units == "mm") {
				if (unit == "cm") {
					this.width /= 10;
					this.height /= 10;
				} else if (unit == "m") {
					this.width /= 1000;
					this.height /= 1000;
				}
			}
			this.units = unit;
		}
	}

	return {
		Figure,
		Circle,
		Rectangle,
	};
}

let m = main();
let c = new m.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new m.Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
