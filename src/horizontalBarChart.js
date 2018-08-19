import { Colleague } from "presentation-mediator";
import Dom from "presentation-dom";
import CSS from "./styles/chart.css";
import horizontalCSS from "./styles/horizontal.css";

const buildBars = (data) => {
	if (!data) {
		return "";
	}
	const l = data.length;
	let i = 0,
	bars = "";

	for (i = 0; i < l; i++) {
		const style = (data[i].style) ? ` ${data[i].style}` : "";
		bars += `
			<tr>
				<td>
					${data[i].Y}
				</td>
				<td>
					<div class="bar${style}" style="width: ${data[i].X}%">
						<p>${data[i].X}</p>
					</div>
				</td>
			</tr>
		`;
	}
	return bars;
},
DEFAULT_TAG = "table",
buildTemplate = (title, data, xTitle, yTitle, xStart, xEnd) => {
	return `
		<caption>${title}</caption>
		<tbody>
			${buildBars(data)}
		</tbody>
		<tfoot>
			<tr>
				<td class="label">
					${yTitle}
				</td>
				<td class="label">
					<p class="left">${xStart}</p>
					<p class="text">${xTitle}</p>
					<p class="right">${xEnd}</p>
				</td>
			</tr>
		<thead>
	`;
};

/**
 * Horizonal Bar Chart
 * @extends Colleague
 * @param {object} options Options passed
 * @example
 * const chart = new HorizontalBarChartView({
 *  "title": "Dogs by Breed",
 *  "xTitle": "Dog",
 *  "yTitle": "Weight",
 *  "xStart": 0,
 *  "xEnd": 100,
 *  "yStart": 0,
 *  "yEnd": 100,
 *  "data": [{
 *	  "X": "Poodle",
 *	  "Y": 12,
 *	  "style": "red"
 *  }]
 * });
 * * supported 'styles' = red, purple, yellow, blue, black, orange, green
 */
class HorizontalBarChartView extends Colleague {
	constructor(options) {
		if (!options) {
			options = {};
		}
		if (!options.name) {
			options.name = DEFAULT_TAG;
		}
		options.tagName = DEFAULT_TAG;

		if (!options.style) {
			options.style = "barChart horizontal";
		} else {
			options.style = `barChart horizontal ${options.style}`;
		}

		super(options);
		if (options.title) {
			this.title = options.title;
		} else {
			this.title = "Untitled";
		}
		if (options.xTitle) {
			this.xTitle = options.xTitle;
		} else {
			this.xTitle = "X";
		}
		if (options.yTitle) {
			this.yTitle = options.yTitle;
		} else {
			this.yTitle = "Y";
		}
		if (options.xStart) {
			this.xStart = options.xStart;
		} else {
			this.xStart = 0;
		}
		if (options.xEnd) {
			this.xEnd = options.xEnd;
		} else {
			this.xEnd = 100;
		}
		if (options.yStart) {
			this.yStart = options.yStart;
		} else {
			this.yStart = 0;
		}
		if (options.yEnd) {
			this.yEnd = options.yEnd;
		} else {
			this.yEnd = 100;
		}
		if (options.data) {
			this.data = options.data;
		} else {
			this.data = [];
		}
	};

	render() {
    if (this.el) {
      const e = Dom.selector(this.el);
      if (e) {
				const styles = this._style.split(" ");
				let i = 0;
				const l = styles.length;
				for (i = 0; i < l; i++) {
					e.classList.add(styles[i]);
				}
				this.template = buildTemplate(this.title, this.data, this.xTitle, this.yTitle, this.xStart, this.xEnd);

        e.setAttribute(`data-${this.name}`, "chart");
        e.innerHTML = this.template;
      }
      this.delegateEvents();
    }
    return this;
	};

	remove() {
		return super.remove();
	};
};
export default HorizontalBarChartView;
