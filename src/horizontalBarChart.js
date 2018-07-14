import Augmented from "augmentedjs-next-presentation";
import css from "./styles/horizontal.css";

const buildBars = (data) => {
	let bars = "";
	if (!data) {
		return "";
	}
	if (data) {
		const l = data.length;
		let i = 0;

		for (i = 0; i < l; i++) {
			const value = data[i].X;
			const style = (data[i].style) ? ` ${data[i].style}` : "";
			bars += `
				<tr>
					<td>
						${data[i].Y}
					</td>
					<td>
						<div class="bar${style}" style="width: ${value}%">
							<p>${value}</p>
						</div>
					</td>
				</tr>
			`;
		}
	}
	return bars;
};

const buildLabelColumn = (start, title, end) => {
	const label = `
		<td class="label">
			<p class="top">${end}</p>
			<p class="text">${title}</p>
			<p class="bottom">${start}</p>
		</td>
	`;
	return label;
};

const DEFAULT_TAG = "table";

class HorizontalBarChartView extends Augmented.Presentation.Colleague {
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
      const e = Augmented.Presentation.Dom.selector(this.el);
      if (e) {
				this.template = `
					<caption>${this.title}</caption>
					<tbody>
						${buildBars(this.data)}
					</tbody>
					<tfoot>
						<tr>
							<th class="label text">${this.xTitle}</th>
							<th>
								
							</th>
						</tr>
					<thead>
				`;

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
