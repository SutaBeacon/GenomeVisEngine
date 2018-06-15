import Plot from './Plot/index.js';
var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
// customize the color
const color = {
  'GBM': 'rgb(50, 71, 166)',
  'OV': 'rgb(50, 71, 166)'
}
new Plot.chart(canvas, {
  bgColor: 0xf2f2f2
}).boxplot({
  fileUrl: '/dist/boxplot/boxplot.txt',
  fileType: 'tsv'
}, {
  barWidth: 24,
  contentSize: {
    w: 800,
    h: 600
  },
  style: {
    fill: function (key) {
      return 'rgb(50, 71, 166)'
      // return color(key)
    },
    stroke: function (key) {
      return 'rgb(50, 71, 166)'
      // return color(key)
    },
    opacity: 0.6
  },
  zoom: true,
  legends: {
    x: 'cancer',
    xOffset: 38,
    y: 'Cytolytic.Activity',
    yOffset: 45,
    fontSize: 16
  },
  outlierTips: function (key, d) {
    return [{
      title: 'X',
      value: key
    }, {
      title: 'value',
      value: d.value
    }, {
      title: 'Histo Subtype',
      value: d.HistoSubtype
    }]
  },
  boxTips: function (key, quartile) {
    return [{
        title: 'X',
        value: key
      },
      {
        title: 'Upper quartile',
        value: quartile[2]
      }, {
        title: 'Median',
        value: quartile[1]
      }, {
        title: 'Lower quartile',
        value: quartile[0]
      }
    ]
  }
})