// 使用 ECharts 创建一个基本的柱状图
var myChart = echarts.init(document.getElementById('myChart'));
  
var option = {
  title: {
    text: '示例图表'
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [5, 20, 36, 10, 10],
    type: 'bar'
  }]
};

myChart.setOption(option);