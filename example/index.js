import ChartView from "../dist/augmented-next-chart.js";
import Data from "./data.js";
import css from "./styles/extra.css";

const dogChart = new ChartView({
  "title": "Dogs by average weight",
  "xTitle": "Breed",
  "yTitle": "Pounds",
  "data": Data
});

dogChart.render();
console.log("Rendering Chart");
