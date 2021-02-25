import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get('https://lilybabe.github.io/dashboard_files/applications.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                emphasis: {
                    focus: 'adjacency'
                },
                lineStyle: {
                    color: 'gradient',
                    curveness: 0.5
                }
            }
        ]
    });
});

option && myChart.setOption(option);
