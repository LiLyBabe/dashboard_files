import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: function () {
            var list = [];
            for (var i = 1; i <= 31; i++) {
                list.push(i + ' Jan');
            }
            return list;
        }(),
        axisTick: false
    },
    yAxis: [
        {
            type: 'value',
            name: "Number of Applications",
            nameLocation: 'center',
            min: 0,
            max: 30,
            interval: 6,
            nameGap: 50,
            nameTextStyle: {
                fontSize: 14,
                fontFamily: "calibri"
            }
        }, 
        {
            type: 'value',
            name: "Application Accumulation",
            nameLocation: 'center',
            nameGap: 50,
            min: 0,
            max: 500,
            interval: 100,
            nameTextStyle: {
                fontSize: 14,
                fontFamily: "calibri"
            }
        }
    ],
    
    series: [{
        data: [16, '-', 3, '-', 3, '-', 21, '-', 5, '-', 6, '-', 14, '-', 23, '-', 16, 
        '-', 7, '-', 28, '-', 23, '-', 18, '-', 6, '-', 3, '-', 8],
        type: 'bar',
        stack: 'noApplications',
        label: {
            show: true,
            position: 'top'
        },
        barWidth: '80%',
        color: "#ED553B"
    }, {
        data: ['-', 19, '-', 28, '-', 1, '-', 25, '-', 11, '-', 13, '-', 9, '-', 23, '-', 
        5, '-', 29, '-', 17, '-', 3, '-', 5, '-', 26, '-', 28, '-'],
        type: 'bar',
        stack: 'noApplications',
        label: {
            show: true,
            position: 'top'
        },
        barWidth: '80%',
        color: "#20639B"
    },
    {
        name: "Application Accumulation",
        type: "line",
        yAxisIndex: 1,
        data: [16, 35, 38, 66, 69, 70, 91, 116, 121, 132, 138, 151, 165, 174, 
        197, 220, 236, 241, 248, 277, 305, 322, 345, 348, 366, 371, 377, 403, 
        406, 434, 442],
        color: "#F6D55C"
    }]
};

option && myChart.setOption(option);
