import { Collection } from "presentation-models";

import Point from "../models/point.js";

class ChartData extends Collection {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.model = Point;
    super(options);
  };
};

export default ChartData;
