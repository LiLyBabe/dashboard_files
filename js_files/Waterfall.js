import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Profit Chart',
        subtext: 'For 6M Loans'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            
            type: 'line'        
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Expense', 'Income']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: function () {
            var list = ["Principal Repayment", "Funding Repayment", "Risk Premium", 
            "Interest Income", "Interest Expense", "Fee Income", "Fee Expense", 
            "Investment", "Loan Recovery"];
            return list;
        }()
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Base',
            type: 'bar',
            stack: 'profit6',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 6013, 6013, 8170, 7924, 7924, 10591, 1246, 1246]
        },
        {
            name: 'Income',
            type: 'bar',
            stack: 'profit6',
            itemStyle: {
                barBorderColor: 'rgba(231,194,125,1)',
                color: 'rgba(231,194,125,1)'
            },
            label: {
                show: true,
                position: 'top'
            },
            data: [13115, '-', 2157, 725, '-', 4072, '-', '-', 557]
        },
        {
            name: 'Expense',
            type: 'bar',
            stack: 'profit6',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', 7102, '-', '-', 246, '-', 1405, 9345, '-']
        }
    ]
};

option && myChart.setOption(option);
