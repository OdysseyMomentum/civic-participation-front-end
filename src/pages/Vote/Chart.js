import React from 'react'
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: props.series,
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: props.labels,
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'right',
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '14px',
                    fontWeight: 400,
                    inverseOrder: false,
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        useSeriesColors: true
                    },
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 10,
                        radius: 12,
                        offsetX: 50,
                        offsetY: 50
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 10
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>
        );
    }
}

export default ApexChart;