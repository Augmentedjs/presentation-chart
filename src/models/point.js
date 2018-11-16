import { Model } from "presentation-models";

class Point extends Model {
  constructor(options) {
    super(options);
    if (options.x) {
      this.set("X", x);
    };
    if (options.y) {
      this.set("Y", x);
    };
    if (options.style) {
      this.set("style", style);
    };
  };

  get x() {
    return this.get("X");
  };

  get y() {
    return this.get("Y");
  };

  get style() {
    return this.get("style");
  };

  static create(x, y, style) {
    return new Point(x, y, style);
  };
};

export default Point;
