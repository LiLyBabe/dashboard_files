import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: false
    },
    yAxis: {
        type: 'value',
        name: "Number of applications",
        nameLocation: 'center',
        nameGap: 50,
        nameTextStyle: {
            fontSize: 14,
            fontFamily: "calibri"
        }
    },

    series: [{
        data: [{
            value: 120,
            itemStyle: {
                color: '#EFE8BA'
            }
        }, {
            value: 200,
            itemStyle: {
                color: '#D0B990'
            }
        }, {
            value: 150,
            itemStyle: {
                color: '#B1876B'
            }
        }, {
            value: 80,
            itemStyle: {
                color: '#92574B'
            }
        }, {
            value: 70,
            itemStyle: {
                color: '#733136'
            }
        }, {
            value: 110,
            itemStyle: {
                color: '#541C2D'
            }
        }, {
            value: 130,
            itemStyle: {
                color: '#350D23'
            }
        }],
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        barWidth: '80%'
    }]
};

option && myChart.setOption(option);
