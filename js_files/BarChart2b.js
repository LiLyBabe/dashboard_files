import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: function () {
            var list = [];
            for (var i = 0; i <= 23; i++) {
                list.push(i + 'h');
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
            max: 55,
            interval: 5,
            nameGap: 50,
            nameTextStyle: {
                fontSize: 14,
                fontFamily: "calibri"
            }
        }
    ],
    
    series: [{
        data: [13, '-', 20, '-', 40, '-', 4, '-', 7, '-', 13, '-', 13, '-', 6, '-', 6, 
        '-', 34, '-', 52, '-', 33, '-'],
        type: 'bar',
        stack: 'noApplications',
        label: {
            show: true,
            position: 'top'
        },
        barWidth: '80%',
        color: "#F67e7d"
    }, {
        data: ['-', 18, '-', 50, '-', 13, '-', 7, '-', 13, '-', 14, '-', 9, '-', 8, '-', 
        4, '-', 36, '-', 53, '-', 49],
        type: 'bar',
        stack: 'noApplications',
        label: {
            show: true,
            position: 'top'
        },
        barWidth: '80%',
        color: "#621940"
    },
    ]
};

option && myChart.setOption(option);
