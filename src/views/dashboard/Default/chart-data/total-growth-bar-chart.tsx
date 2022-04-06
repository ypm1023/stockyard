// ==============================|| DASHBOARD - TOTAL GROWTH BAR CHART ||============================== //
import { Props } from 'react-apexcharts';

const chartData: Props = {
    height: 480,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['2022-04-01', '2022-04-02', '2022-04-03', '2022-04-04', '2022-04-05', '2022-04-06', '2022-04-07']
        },
        legend: {
            show: true,
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: '停靠报警',
            data: [35, 125, 35, 35, 35, 80, 35]
        },
        {
            name: '偷运报警',
            data: [35, 15, 15, 35, 65, 40, 80]
        },
        {
            name: '人员违规报警',
            data: [35, 145, 35, 35, 20, 105, 100]
        }
    ]
};
export default chartData;
