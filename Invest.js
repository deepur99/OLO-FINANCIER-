var chartData = [
    {
        "date": "2021-01-01",
        "distance": 227,
        "townName": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "Currency": 408
    },
    {
        "date": "2021-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "Currency": 482
    },
    {
        "date": "2021-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "Currency": 562
    },
    {
        "date": "2021-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "Currency": 379
    },
    {
        "date": "2021-01-05",
        "distance": 480,
        "townName": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "Currency": 501
    },
    {
        "date": "2021-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "Currency": 443
    },
    {
        "date": "2021-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "Currency": 405
    },
    {
        "date": "2021-01-08",
        "distance": 238,
        "townName": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "Currency": 309
    },
    {
        "date": "2021-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "Currency": 287
    },
    {
        "date": "2021-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "Currency": 485
    },
    {
        "date": "2021-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "Currency": 890
    },
    {
        "date": "2021-01-12",
        "distance": 534,
        "townName": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "Currency": 810
    },
    {
        "date": "2021-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "Currency": 670,
        "latitude": 40.75,
        "alpha":0.4
    },
    {
        "date": "2021-01-14",
        "latitude": 36.1,
        "Currency": 470,
        "townName": "Las Vegas",
        "bulletClass": "lastBullet"
    },
    {
        "date": "2021-01-15"
    },
    {
        "date": "2021-01-16"
    },
    {
        "date": "2021-01-17"
    },
    {
        "date": "2021-01-18"
    },
    {
        "date": "2021-01-19"
    }
];
var chart = AmCharts.makeChart("chartdiv", {
  type: "serial",
  theme: "dark",
  dataDateFormat: "YYYY-MM-DD",
  dataProvider: chartData,

  addClassNames: true,
  startCurrency: 1,
  color: "#FFFFFF",
  marginLeft: 0,

  categoryField: "date",
  categoryAxis: {
    parseDates: true,
    minPeriod: "DD",
    autoGridCount: false,
    gridCount: 50,
    gridAlpha: 0.1,
    gridColor: "#FFFFFF",
    axisColor: "#555555",
    dateFormats: [{
        period: 'DD',
        format: 'DD'
    }, {
        period: 'WW',
        format: 'MMM DD'
    }, {
        period: 'MM',
        format: 'MMM'
    }, {
        period: 'YYYY',
        format: 'YYYY'
    }]
  },

  valueAxes: [{
    id: "a1",
    title: "Currency In $",
    gridAlpha: 0,
    axisAlpha: 0
  },{
    id: "a2",
    position: "right",
    gridAlpha: 0,
    axisAlpha: 0,
    labelsEnabled: false
  },{
    id: "a3",
    title: "Currency",
    position: "right",
    gridAlpha: 0,
    axisAlpha: 0,
    inside: true,
    Currency: "$",
    
  }],
  graphs: [{
    id: "g1",
    valueField:  "distance",
    title:  "Gold",
    type:  "column",
    fillAlphas:  0.9,
    valueAxis:  "a1",
    balloonText:  " $ [[value]] ",
    legendValueText:  " $ [[value]] ",
    legendPeriodValueText:  "Total: $ [[value.sum]] ",
    lineColor:  "#263138",
    alphaField:  "alpha",
  },{
    id: "g2",
    valueField: "latitude",
    classNameField: "bulletClass",
    title: "Crypto Currency",
    type: "line",
    valueAxis: "a2",
    lineColor: "#786c56",
    lineThickness: 1,
    legendValueText: " $ [[value]]",
    legendPeriodValueText:  "Total: $ [[value.sum]] ",
    descriptionField: "townName",
    bullet: "round",
    bulletSizeField: "townSize",
    bulletBorderColor: "#786c56",
    bulletBorderAlpha: 1,
    bulletBorderThickness: 2,
    bulletColor: "#000000",
    labelText: "[[townName2]]",
    labelPosition: "right",
    balloonText: "$ [[value]]",
    showBalloon: true,
    animationPlayed: true,
  },{
    id: "g3",
    title: "Silver",
    valueField: "Currency",
    type: "line",
    valueAxis: "a3",
    lineColor: "#ff5755",
    balloonText: " $ [[value]]",
    lineThickness: 1,
    legendValueText: " $ [[value]]",
    legendPeriodValueText:  "Total: $ [[value.sum]] ",
    bullet: "square",
    bulletBorderColor: "#ff5755",
    bulletBorderThickness: 1,
    bulletBorderAlpha: 1,
    dashLengthField: "dashLength",
    animationPlayed: true
  }],

  chartCursor: {
    zoomable: false,
    categoryBalloonDateFormat: "DD",
    cursorAlpha: 0,
    valueBalloonsEnabled: false
  },
  legend: {
    bulletType: "round",
    equalWidths: false,
    valueWidth: 120,
    useGraphSettings: true,
    color: "#FFFFFF"
  }
});