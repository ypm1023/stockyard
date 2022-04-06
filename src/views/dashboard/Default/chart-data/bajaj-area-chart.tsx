// ==============================|| DASHBOARD - BAJAJ AREA CHART ||============================== //
import { Props } from 'react-apexcharts';

const chartData: Props = {
    type: 'area',
    height: 95,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => '次数 '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [200, 300, 190, 290, 500, 700, 200]
        }
    ]
};

export default chartData;
