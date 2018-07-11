import ChartView from "augmented-next-chart.js";
import Data from "./data.js";

const dogChart = new ChartView({
  "title": "Dogs by average weight",
  "xTitle": "Breed",
  "yTitle": "Pounds",
  "data": Data
});

dogChart.render();
console.log("Rendering Chart");
