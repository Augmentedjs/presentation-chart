import { Colleague } from "presentation-mediator";
import Dom from "presentation-dom";
import CSS from "./styles/chart.css";
import verticalCSS from "./styles/vertical.css";

const buildBars = (data) => {
	let bars = "";
	if (!data) {
		return "";
	}
	if (data) {
		const l = data.length;
		let i = 0;

		for (i = 0; i < l; i++) {
			const style = (data[i].style) ? ` ${data[i].style}` : "";
			bars += `
				<td>
					<div class="bar${style}" style="height: ${data[i].Y}%">
						<p>${data[i].Y}</p>
					</div>
				</td>
			`;
		}
	}
	return bars;
},
buildXLabels = data => {
	let labels = "";
	if (!data) {
		return "";
	}
	if (data) {
		const l = data.length;
		let i = 0;

		for (i = 0; i < l; i++) {
			const value = data[i].X;
			labels += `
				<th>
					${value}
				</th>
			`;
		}
	}
	return labels;
},
DEFAULT_TAG = "table",
buildTemplate = (title, data, xTitle, yTitle, yStart, yEnd) => {
	return `
		<caption>${title}</caption>
		<tbody>
			<tr>
				<td class="label">
					<p class="top">${yEnd}</p>
					<p class="text">${yTitle}</p>
					<p class="bottom">${yStart}</p>
				</td>
				${buildBars(data)}
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th class="label text">${xTitle}</th>
				${buildXLabels(data)}
			</tr>
		<thead>
	`;
};

/**
 * Vertial Bar Chart
 * @extends Colleague
 * @param {object} options Options passed
 * @example
 * const chart = new VerticalBarChartView({
 *  "title": "Dogs by Breed",
 *  "xTitle": "Weight",
 *  "yTitle": "Breed",
 *  "xStart": 0,
 *  "xEnd": 100,
 *  "yStart": 0,
 *  "yEnd": 100,
 *  "data": [{
 *	  "X": 12,
 *    "Y": "Poodle",
 *	  "style": "blue"
 *  }]
 * });
 * * supported 'styles' = red, purple, yellow, blue, black, orange, green
 */
class VerticalBarChartView extends Colleague {
	constructor(options) {
		if (!options) {
			options = {};
		}
		if (!options.name) {
			options.name = DEFAULT_TAG;
		}
		options.tagName = DEFAULT_TAG;

		if (!options.style) {
			options.style = "barChart vertical";
		} else {
			options.style = `barChart vertical ${options.style}`;
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
				this.template = buildTemplate(this.title, this.data, this.xTitle, this.yTitle, this.yStart, this.yEnd);

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
export default VerticalBarChartView;
