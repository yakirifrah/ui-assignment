import { Chart } from '../components/organsims';

const dataDonutChart = {
  chartOptions: {
    pie: {
      donut: {
        labels: {
          name: {
            show: true,
            color: `#8492AF`,
            fontFamily: `"Roboto-Bold","AdobeInvisFont"",MyriadPro-Regular"`,
            fontSize: '36px',
            formatter: function (val = 1560) {
              return val;
            },
          },
          value: {
            show: true,
            fontSize: `20px`,
            lineHeight: '14px',
            color: '#8492af',
            fontWeight: '300',
            formatter: function (val = `Sales`) {
              return val;
            },
          },
        },
        legend: {
          position: 'right',
          offsetY: 60,
        },
      },
    },
  },
};

export { dataDonutChart };
