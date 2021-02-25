import Chart from 'react-apexcharts';
import { Component } from 'react';
class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="chart">
          <Chart
            options={this.props.plotOptions}
            series={[44, 55, 41, 17, 15]}
            height={this.props.height}
            type="donut"
            width={this.props.width}
          />
        </div>
      </div>
    );
  }
}
export default Charts;
