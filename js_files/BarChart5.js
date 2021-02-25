import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        name: "Loan Purpose",
        nameLocation: 'center',
        nameGap: 45,
        data: ["Living expenses", "Education, Healthcare & Insurance", 
        "Product Shopping", "Service Purchase", "Business Invesment", "Other"],
        axisTick: false,
        axisLabel: {
            interval: 0,
            width: 120,
            overflow: "break"
        }
    },
    yAxis: [
        {
            type: 'value',
            name: "Number of Applications",
            nameLocation: 'center',
            nameGap: 50,
            nameTextStyle: {
                fontSize: 14,
                fontFamily: "calibri"
            }
        }
    ],
    
    series: [{
        data: [93, 96, 59, 49, 91, {
            value: 46,
            itemStyle: {
                color: "#28363D"
            }
        }],
        type: 'bar',
        stack: 'noApplications',
        label: {
            show: true,
            position: 'top'
        },
        color: "#6d9197"
    }]
};

option && myChart.setOption(option);
