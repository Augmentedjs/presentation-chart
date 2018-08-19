const data = [
  {
    "X": "Poodle",
    "Y": 50,
    "style": "red"
  },
  {
    "X": "Yorkie",
    "Y": 15,
    "style": "purple"
  },
  {
    "X": "Dachshund",
    "Y": 20,
    "style": "blue"
  },
  {
    "X": "Labrador",
    "Y": 90,
    "style": "green"
  },
  {
    "X": "Chihuahua",
    "Y": 12,
    "style": "yellow"
  },
  {
    "X": "Corgi",
    "Y": 30,
    "style": "orange"
  }
];

describe('Given Augmented Chart', () => {
	it('is defined', () => {
		expect(Chart.HorizontalBarChartView).to.not.be.undefined;
		expect(Chart.VerticalBarChartView).to.not.be.undefined;
	});

	describe('Given some data and a vertical chart', () => {
		let chart;

		beforeEach(() => {
			chart = new Chart.VerticalBarChartView({
			  "title": "Dogs by average weight",
			  "xTitle": "Breed",
			  "yTitle": "Pounds",
			  "data": data
			});
		});

		afterEach(() => {
			chart.remove();
			chart = null;
		});

    it("can render", async () => {
			const v = await chart.render();
			expect(v).to.not.be.undefined;
		});
	});

	describe('Given some data and a horizontal chart', () => {
		let chart;

		beforeEach(() => {
			chart = new Chart.HorizontalBarChartView({
			  "title": "Dogs by average weight",
			  "xTitle": "Breed",
			  "yTitle": "Pounds",
			  "data": data
			});
		});

		afterEach(() => {
			chart.remove();
			chart = null;
		});

		it("can render", async () => {
			const v = await chart.render();
			expect(v).to.not.be.undefined;
		});
	});

});
