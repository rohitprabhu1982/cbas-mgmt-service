(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-components-admin-module~resource-resource-module"],{

/***/ "./node_modules/ag-grid-enterprise/chartsModule.js":
/*!*********************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/chartsModule.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartService_1 = __webpack_require__(/*! ./dist/lib/chartAdaptor/chartService */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartService.js");
var chartTranslator_1 = __webpack_require__(/*! ./dist/lib/chartAdaptor/chartComp/chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
exports.ChartsModule = {
    moduleName: "chartsModule" /* ChartsModule */,
    enterpriseBeans: [
        chartService_1.ChartService, chartTranslator_1.ChartTranslator
    ],
    enterpriseComponents: []
};
ag_grid_community_1.Grid.addModule([exports.ChartsModule]);


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var cartesianChart_1 = __webpack_require__(/*! ../../charts/chart/cartesianChart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/cartesianChart.js");
var polarChart_1 = __webpack_require__(/*! ../../charts/chart/polarChart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/polarChart.js");
var lineSeries_1 = __webpack_require__(/*! ../../charts/chart/series/lineSeries */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/lineSeries.js");
var scatterSeries_1 = __webpack_require__(/*! ../../charts/chart/series/scatterSeries */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/scatterSeries.js");
var barSeries_1 = __webpack_require__(/*! ../../charts/chart/series/barSeries */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/barSeries.js");
var areaSeries_1 = __webpack_require__(/*! ../../charts/chart/series/areaSeries */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/areaSeries.js");
var pieSeries_1 = __webpack_require__(/*! ../../charts/chart/series/pieSeries */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/pieSeries.js");
var dropShadow_1 = __webpack_require__(/*! ../../charts/scene/dropShadow */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/dropShadow.js");
var categoryAxis_1 = __webpack_require__(/*! ../../charts/chart/axis/categoryAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/categoryAxis.js");
var numberAxis_1 = __webpack_require__(/*! ../../charts/chart/axis/numberAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/numberAxis.js");
var padding_1 = __webpack_require__(/*! ../../charts/util/padding */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js");
var caption_1 = __webpack_require__(/*! ../../charts/caption */ "./node_modules/ag-grid-enterprise/dist/lib/charts/caption.js");
var groupedCategoryAxis_1 = __webpack_require__(/*! ../../charts/chart/axis/groupedCategoryAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/groupedCategoryAxis.js");
var groupedCategoryChart_1 = __webpack_require__(/*! ../../charts/chart/groupedCategoryChart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/groupedCategoryChart.js");
var ChartBuilder = /** @class */ (function () {
    function ChartBuilder() {
    }
    ChartBuilder.createCartesianChart = function (options) {
        var chart = new cartesianChart_1.CartesianChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initCartesianChart(chart, options);
    };
    ChartBuilder.createGroupedColumnChart = function (options) {
        var chart = new groupedCategoryChart_1.GroupedCategoryChart({
            document: options.document,
            xAxis: ChartBuilder.createGroupedAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initGroupedCategoryChart(chart, options, 'bar');
    };
    ChartBuilder.createGroupedBarChart = function (options) {
        var chart = new groupedCategoryChart_1.GroupedCategoryChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.yAxis),
            yAxis: ChartBuilder.createGroupedAxis(options.xAxis)
        });
        chart.layout = cartesianChart_1.CartesianChartLayout.Horizontal;
        return ChartBuilder.initGroupedCategoryChart(chart, options, 'bar');
    };
    ChartBuilder.createGroupedLineChart = function (options) {
        var chart = new groupedCategoryChart_1.GroupedCategoryChart({
            document: options.document,
            xAxis: ChartBuilder.createGroupedAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initGroupedCategoryChart(chart, options, 'line');
    };
    ChartBuilder.createGroupedAreaChart = function (options) {
        var chart = new groupedCategoryChart_1.GroupedCategoryChart({
            document: options.document,
            xAxis: ChartBuilder.createGroupedAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initGroupedCategoryChart(chart, options, 'area');
    };
    ChartBuilder.createBarChart = function (options) {
        var chart = new cartesianChart_1.CartesianChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.yAxis),
            yAxis: ChartBuilder.createAxis(options.xAxis)
        });
        chart.layout = cartesianChart_1.CartesianChartLayout.Horizontal;
        return ChartBuilder.initCartesianChart(chart, options, 'bar');
    };
    ChartBuilder.createColumnChart = function (options) {
        var chart = new cartesianChart_1.CartesianChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initCartesianChart(chart, options, 'bar');
    };
    ChartBuilder.createLineChart = function (options) {
        var chart = new cartesianChart_1.CartesianChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initCartesianChart(chart, options, 'line');
    };
    ChartBuilder.createScatterChart = function (options) {
        var chart = new cartesianChart_1.CartesianChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initCartesianChart(chart, options, 'scatter');
    };
    ChartBuilder.createAreaChart = function (options) {
        var chart = new cartesianChart_1.CartesianChart({
            document: options.document,
            xAxis: ChartBuilder.createAxis(options.xAxis),
            yAxis: ChartBuilder.createAxis(options.yAxis)
        });
        return ChartBuilder.initCartesianChart(chart, options, 'area');
    };
    ChartBuilder.createPolarChart = function (options) {
        var chart = new polarChart_1.PolarChart();
        return ChartBuilder.initPolarChart(chart, options);
    };
    ChartBuilder.createDoughnutChart = function (options) {
        var chart = new polarChart_1.PolarChart();
        return ChartBuilder.initPolarChart(chart, options);
    };
    ChartBuilder.createPieChart = function (options) {
        var chart = new polarChart_1.PolarChart();
        return ChartBuilder.initPolarChart(chart, options, 'pie');
    };
    ChartBuilder.createLineSeries = function (options) {
        return new lineSeries_1.LineSeries();
    };
    ChartBuilder.createScatterSeries = function (options) {
        return new scatterSeries_1.ScatterSeries();
    };
    ChartBuilder.createSeries = function (options, type) {
        switch (type || options && options.type) {
            case 'line':
                return ChartBuilder.initLineSeries(new lineSeries_1.LineSeries(), options);
            case 'scatter':
                return ChartBuilder.initScatterSeries(new scatterSeries_1.ScatterSeries(), options);
            case 'bar':
                return ChartBuilder.initBarSeries(new barSeries_1.BarSeries(), options);
            case 'area':
                return ChartBuilder.initAreaSeries(new areaSeries_1.AreaSeries(), options);
            case 'pie':
                return ChartBuilder.initPieSeries(new pieSeries_1.PieSeries(), options);
            default:
                return null;
        }
    };
    ChartBuilder.initChart = function (chart, options, seriesType) {
        if (options.parent !== undefined) {
            chart.parent = options.parent;
        }
        if (options.width !== undefined) {
            chart.width = options.width;
        }
        if (options.height !== undefined) {
            chart.height = options.height;
        }
        if (options.title) {
            chart.title = ChartBuilder.createChartTitle(options.title);
        }
        if (options.subtitle) {
            chart.subtitle = ChartBuilder.createChartSubtitle(options.subtitle);
        }
        if (options.series !== undefined) {
            var seriesConfigs = options.series;
            var seriesInstances = [];
            for (var i = 0, n = seriesConfigs.length; i < n; i++) {
                var seriesInstance = ChartBuilder.createSeries(seriesConfigs[i], seriesType);
                if (seriesInstance) {
                    seriesInstances.push(seriesInstance);
                }
            }
            chart.series = seriesInstances;
        }
        if (options.padding !== undefined) {
            chart.padding = new padding_1.Padding(options.padding.top, options.padding.right, options.padding.bottom, options.padding.left);
        }
        if (options.background !== undefined) {
            if (options.background.fill !== undefined) {
                chart.background.fill = options.background.fill;
            }
            if (options.background.visible !== undefined) {
                chart.background.visible = options.background.visible;
            }
        }
        if (options.legendPosition !== undefined) {
            chart.legendPosition = options.legendPosition;
        }
        if (options.legendPadding !== undefined) {
            chart.legendPadding = options.legendPadding;
        }
        if (options.legend !== undefined) {
            ChartBuilder.initLegend(chart.legend, options.legend);
        }
        if (options.data !== undefined) {
            chart.data = options.data;
        }
        if (options.tooltipClass !== undefined) {
            chart.tooltipClass = options.tooltipClass;
        }
        return chart;
    };
    ChartBuilder.initCartesianChart = function (chart, options, seriesType) {
        ChartBuilder.initChart(chart, options, seriesType);
        return chart;
    };
    ChartBuilder.initGroupedCategoryChart = function (chart, options, seriesType) {
        ChartBuilder.initChart(chart, options, seriesType);
        return chart;
    };
    ChartBuilder.initPolarChart = function (chart, options, seriesType) {
        ChartBuilder.initChart(chart, options, seriesType);
        return chart;
    };
    ChartBuilder.initSeries = function (series, options) {
        if (options.visible !== undefined) {
            series.visible = options.visible;
        }
        if (options.showInLegend !== undefined) {
            series.showInLegend = options.showInLegend;
        }
        if (options.tooltipEnabled !== undefined) {
            series.tooltipEnabled = options.tooltipEnabled;
        }
        if (options.data !== undefined) {
            series.data = options.data;
        }
        return series;
    };
    ChartBuilder.initLineSeries = function (series, options) {
        ChartBuilder.initSeries(series, options);
        if (options.title !== undefined) {
            series.title = options.title;
        }
        if (options.xField !== undefined) {
            series.xField = options.xField;
        }
        if (options.yField !== undefined) {
            series.yField = options.yField;
        }
        if (options.fill !== undefined) {
            series.fill = options.fill;
        }
        if (options.stroke !== undefined) {
            series.stroke = options.stroke;
        }
        if (options.strokeWidth !== undefined) {
            series.strokeWidth = options.strokeWidth;
        }
        if (options.highlightStyle !== undefined) {
            series.highlightStyle = options.highlightStyle;
        }
        if (options.marker !== undefined) {
            series.marker = options.marker;
        }
        if (options.markerSize !== undefined) {
            series.markerSize = options.markerSize;
        }
        if (options.markerStrokeWidth !== undefined) {
            series.markerStrokeWidth = options.markerStrokeWidth;
        }
        if (options.tooltipRenderer !== undefined) {
            series.tooltipRenderer = options.tooltipRenderer;
        }
        return series;
    };
    ChartBuilder.initScatterSeries = function (series, options) {
        ChartBuilder.initSeries(series, options);
        if (options.title !== undefined) {
            series.title = options.title;
        }
        if (options.xField !== undefined) {
            series.xField = options.xField;
        }
        if (options.yField !== undefined) {
            series.yField = options.yField;
        }
        if (options.radiusField !== undefined) {
            series.radiusField = options.radiusField;
        }
        if (options.xFieldName !== undefined) {
            series.xFieldName = options.xFieldName;
        }
        if (options.yFieldName !== undefined) {
            series.yFieldName = options.yFieldName;
        }
        if (options.radiusFieldName !== undefined) {
            series.radiusFieldName = options.radiusFieldName;
        }
        if (options.fill !== undefined) {
            series.fill = options.fill;
        }
        if (options.stroke !== undefined) {
            series.stroke = options.stroke;
        }
        if (options.fillOpacity !== undefined) {
            series.fillOpacity = options.fillOpacity;
        }
        if (options.strokeOpacity !== undefined) {
            series.strokeOpacity = options.strokeOpacity;
        }
        if (options.highlightStyle !== undefined) {
            series.highlightStyle = options.highlightStyle;
        }
        if (options.markerSize !== undefined) {
            series.markerSize = options.markerSize;
        }
        if (options.minMarkerSize !== undefined) {
            series.minMarkerSize = options.minMarkerSize;
        }
        if (options.markerStrokeWidth !== undefined) {
            series.markerStrokeWidth = options.markerStrokeWidth;
        }
        if (options.tooltipRenderer !== undefined) {
            series.tooltipRenderer = options.tooltipRenderer;
        }
        return series;
    };
    ChartBuilder.initBarSeries = function (series, options) {
        ChartBuilder.initSeries(series, options);
        if (options.xField !== undefined) {
            series.xField = options.xField;
        }
        if (options.yFields !== undefined) {
            series.yFields = options.yFields;
        }
        if (options.yFieldNames !== undefined) {
            series.yFieldNames = options.yFieldNames;
        }
        if (options.grouped !== undefined) {
            series.grouped = options.grouped;
        }
        if (options.normalizedTo !== undefined) {
            series.normalizedTo = options.normalizedTo;
        }
        if (options.fills !== undefined) {
            series.fills = options.fills;
        }
        if (options.strokes !== undefined) {
            series.strokes = options.strokes;
        }
        if (options.fillOpacity !== undefined) {
            series.fillOpacity = options.fillOpacity;
        }
        if (options.strokeOpacity !== undefined) {
            series.strokeOpacity = options.strokeOpacity;
        }
        if (options.strokeWidth !== undefined) {
            series.strokeWidth = options.strokeWidth;
        }
        if (options.highlightStyle !== undefined) {
            series.highlightStyle = options.highlightStyle;
        }
        if (options.labelEnabled !== undefined) {
            series.labelEnabled = options.labelEnabled;
        }
        if (options.labelFontStyle !== undefined) {
            series.labelFontStyle = options.labelFontStyle;
        }
        if (options.labelFontWeight !== undefined) {
            series.labelFontWeight = options.labelFontWeight;
        }
        if (options.labelFontSize !== undefined) {
            series.labelFontSize = options.labelFontSize;
        }
        if (options.labelFontFamily !== undefined) {
            series.labelFontFamily = options.labelFontFamily;
        }
        if (options.labelFormatter !== undefined) {
            series.labelFormatter = options.labelFormatter;
        }
        if (options.tooltipRenderer !== undefined) {
            series.tooltipRenderer = options.tooltipRenderer;
        }
        if (options.shadow !== undefined) {
            series.shadow = ChartBuilder.createDropShadow(options.shadow);
        }
        return series;
    };
    ChartBuilder.initAreaSeries = function (series, options) {
        ChartBuilder.initSeries(series, options);
        if (options.xField !== undefined) {
            series.xField = options.xField;
        }
        if (options.yFields !== undefined) {
            series.yFields = options.yFields;
        }
        if (options.yFieldNames !== undefined) {
            series.yFieldNames = options.yFieldNames;
        }
        if (options.normalizedTo !== undefined) {
            series.normalizedTo = options.normalizedTo;
        }
        if (options.fills !== undefined) {
            series.fills = options.fills;
        }
        if (options.strokes !== undefined) {
            series.strokes = options.strokes;
        }
        if (options.fillOpacity !== undefined) {
            series.fillOpacity = options.fillOpacity;
        }
        if (options.strokeOpacity !== undefined) {
            series.strokeOpacity = options.strokeOpacity;
        }
        if (options.strokeWidth !== undefined) {
            series.strokeWidth = options.strokeWidth;
        }
        if (options.highlightStyle !== undefined) {
            series.highlightStyle = options.highlightStyle;
        }
        if (options.marker !== undefined) {
            series.marker = options.marker;
        }
        if (options.markerSize !== undefined) {
            series.markerSize = options.markerSize;
        }
        if (options.markerStrokeWidth !== undefined) {
            series.markerStrokeWidth = options.markerStrokeWidth;
        }
        if (options.tooltipRenderer !== undefined) {
            series.tooltipRenderer = options.tooltipRenderer;
        }
        if (options.shadow !== undefined) {
            series.shadow = ChartBuilder.createDropShadow(options.shadow);
        }
        return series;
    };
    ChartBuilder.initPieSeries = function (series, options) {
        ChartBuilder.initSeries(series, options);
        if (options.title !== undefined) {
            series.title = ChartBuilder.createPieTitle(options.title);
        }
        if (options.calloutColors !== undefined) {
            series.calloutColors = options.calloutColors;
        }
        if (options.calloutStrokeWidth !== undefined) {
            series.calloutStrokeWidth = options.calloutStrokeWidth;
        }
        if (options.calloutLength !== undefined) {
            series.calloutLength = options.calloutLength;
        }
        if (options.calloutLength !== undefined) {
            series.calloutLength = options.calloutLength;
        }
        if (options.labelFontStyle !== undefined) {
            series.labelFontStyle = options.labelFontStyle;
        }
        if (options.labelFontWeight !== undefined) {
            series.labelFontWeight = options.labelFontWeight;
        }
        if (options.labelFontSize !== undefined) {
            series.labelFontSize = options.labelFontSize;
        }
        if (options.labelFontFamily !== undefined) {
            series.labelFontFamily = options.labelFontFamily;
        }
        if (options.labelColor !== undefined) {
            series.labelColor = options.labelColor;
        }
        if (options.labelMinAngle !== undefined) {
            series.labelMinAngle = options.labelMinAngle;
        }
        if (options.angleField !== undefined) {
            series.angleField = options.angleField;
        }
        if (options.radiusField !== undefined) {
            series.radiusField = options.radiusField;
        }
        if (options.labelField !== undefined) {
            series.labelField = options.labelField;
        }
        if (options.labelEnabled !== undefined) {
            series.labelEnabled = options.labelEnabled;
        }
        if (options.fills !== undefined) {
            series.fills = options.fills;
        }
        if (options.strokes !== undefined) {
            series.strokes = options.strokes;
        }
        if (options.fillOpacity !== undefined) {
            series.fillOpacity = options.fillOpacity;
        }
        if (options.strokeOpacity !== undefined) {
            series.strokeOpacity = options.strokeOpacity;
        }
        if (options.highlightStyle !== undefined) {
            series.highlightStyle = options.highlightStyle;
        }
        if (options.rotation !== undefined) {
            series.rotation = options.rotation;
        }
        if (options.outerRadiusOffset !== undefined) {
            series.outerRadiusOffset = options.outerRadiusOffset;
        }
        if (options.innerRadiusOffset !== undefined) {
            series.innerRadiusOffset = options.innerRadiusOffset;
        }
        if (options.strokeWidth !== undefined) {
            series.strokeWidth = options.strokeWidth;
        }
        if (options.shadow !== undefined) {
            series.shadow = ChartBuilder.createDropShadow(options.shadow);
        }
        if (options.tooltipRenderer !== undefined) {
            series.tooltipRenderer = options.tooltipRenderer;
        }
        return series;
    };
    ChartBuilder.initLegend = function (legend, options) {
        if (options.enabled !== undefined) {
            legend.enabled = options.enabled;
        }
        if (options.markerStrokeWidth !== undefined) {
            legend.markerStrokeWidth = options.markerStrokeWidth;
        }
        if (options.markerSize !== undefined) {
            legend.markerSize = options.markerSize;
        }
        if (options.markerPadding !== undefined) {
            legend.markerPadding = options.markerPadding;
        }
        if (options.itemPaddingX !== undefined) {
            legend.itemPaddingX = options.itemPaddingX;
        }
        if (options.itemPaddingY !== undefined) {
            legend.itemPaddingY = options.itemPaddingY;
        }
        if (options.labelFontStyle !== undefined) {
            legend.labelFontStyle = options.labelFontStyle;
        }
        if (options.labelFontWeight !== undefined) {
            legend.labelFontWeight = options.labelFontWeight;
        }
        if (options.labelFontSize !== undefined) {
            legend.labelFontSize = options.labelFontSize;
        }
        if (options.labelFontFamily !== undefined) {
            legend.labelFontFamily = options.labelFontFamily;
        }
        if (options.labelColor !== undefined) {
            legend.labelColor = options.labelColor;
        }
    };
    ChartBuilder.createAxisTitle = function (options) {
        options = Object.create(options);
        if (options.text === undefined) {
            options.text = 'Title';
        }
        if (options.fontWeight === undefined) {
            options.fontWeight = 'bold';
        }
        if (options.fontSize === undefined) {
            options.fontSize = 16;
        }
        if (options.fontFamily === undefined) {
            options.fontFamily = 'Verdana, sans-serif';
        }
        return ChartBuilder.createCaption(options);
    };
    ChartBuilder.createChartTitle = function (options) {
        options = Object.create(options);
        if (options.text === undefined) {
            options.text = 'Title';
        }
        if (options.fontWeight === undefined) {
            options.fontWeight = 'bold';
        }
        if (options.fontSize === undefined) {
            options.fontSize = 16;
        }
        if (options.fontFamily === undefined) {
            options.fontFamily = 'Verdana, sans-serif';
        }
        return ChartBuilder.createCaption(options);
    };
    ChartBuilder.createChartSubtitle = function (options) {
        options = Object.create(options);
        if (options.text === undefined) {
            options.text = 'Subtitle';
        }
        if (options.fontWeight === undefined) {
            options.fontWeight = 'bold';
        }
        if (options.fontSize === undefined) {
            options.fontSize = 12;
        }
        if (options.fontFamily === undefined) {
            options.fontFamily = 'Verdana, sans-serif';
        }
        return ChartBuilder.createCaption(options);
    };
    ChartBuilder.createPieTitle = function (options) {
        options = Object.create(options);
        if (options.fontWeight === undefined) {
            options.fontWeight = 'bold';
        }
        if (options.fontSize === undefined) {
            options.fontSize = 12;
        }
        if (options.fontFamily === undefined) {
            options.fontFamily = 'Verdana, sans-serif';
        }
        return ChartBuilder.createCaption(options);
    };
    ChartBuilder.createCaption = function (options) {
        var caption = new caption_1.Caption();
        if (options.text !== undefined) {
            caption.text = options.text;
        }
        if (options.fontStyle !== undefined) {
            caption.fontStyle = options.fontStyle;
        }
        if (options.fontWeight !== undefined) {
            caption.fontWeight = options.fontWeight;
        }
        if (options.fontSize !== undefined) {
            caption.fontSize = options.fontSize;
        }
        if (options.fontFamily !== undefined) {
            caption.fontFamily = options.fontFamily;
        }
        if (options.color !== undefined) {
            caption.color = options.color;
        }
        if (options.enabled !== undefined) {
            caption.enabled = options.enabled;
        }
        return caption;
    };
    ChartBuilder.createDropShadow = function (options) {
        if (options === void 0) { options = {}; }
        return new dropShadow_1.DropShadow(options);
    };
    ChartBuilder.createAxis = function (options) {
        var axis = undefined;
        switch (options.type) {
            case 'category':
                axis = new categoryAxis_1.CategoryAxis();
                break;
            case 'number':
                axis = new numberAxis_1.NumberAxis();
                break;
        }
        if (!axis) {
            throw new Error('Unknown axis type.');
        }
        for (var name_1 in options) {
            if (name_1 === 'type') {
                continue;
            }
            if (name_1 === 'title' && options.title) {
                axis.title = ChartBuilder.createAxisTitle(options.title);
                continue;
            }
            var value = options[name_1];
            if (value !== undefined) {
                axis[name_1] = value;
            }
        }
        return axis;
    };
    ChartBuilder.createGroupedAxis = function (options) {
        var axis = new groupedCategoryAxis_1.GroupedCategoryAxis();
        if (!axis) {
            throw new Error('Unknown axis type.');
        }
        for (var name_2 in options) {
            if (name_2 === 'type') {
                continue;
            }
            if (name_2 === 'title' && options.title) {
                axis.title = ChartBuilder.createAxisTitle(options.title);
                continue;
            }
            var value = options[name_2];
            if (value !== undefined) {
                axis[name_2] = value;
            }
        }
        return axis;
    };
    return ChartBuilder;
}());
exports.ChartBuilder = ChartBuilder;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartController.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartController.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var rangeController_1 = __webpack_require__(/*! ../../rangeController */ "./node_modules/ag-grid-enterprise/dist/lib/rangeController.js");
var chartModel_1 = __webpack_require__(/*! ./chartModel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js");
var ChartController = /** @class */ (function (_super) {
    __extends(ChartController, _super);
    function ChartController(chartModel) {
        var _this = _super.call(this) || this;
        _this.model = chartModel;
        return _this;
    }
    ChartController.prototype.init = function () {
        var _this = this;
        this.updateForGridChange();
        this.addDestroyableEventListener(this.eventService, ag_grid_community_1.Events.EVENT_CHART_RANGE_SELECTION_CHANGED, function (event) {
            if (event.id && event.id === _this.model.getChartId()) {
                _this.updateForGridChange();
            }
        });
        this.addDestroyableEventListener(this.eventService, ag_grid_community_1.Events.EVENT_COLUMN_MOVED, this.updateForGridChange.bind(this));
        this.addDestroyableEventListener(this.eventService, ag_grid_community_1.Events.EVENT_COLUMN_PINNED, this.updateForGridChange.bind(this));
        this.addDestroyableEventListener(this.eventService, ag_grid_community_1.Events.EVENT_MODEL_UPDATED, this.updateForGridChange.bind(this));
        this.addDestroyableEventListener(this.eventService, ag_grid_community_1.Events.EVENT_CELL_VALUE_CHANGED, this.updateForGridChange.bind(this));
        this.addDestroyableEventListener(this.eventService, ag_grid_community_1.Events.EVENT_COLUMN_VISIBLE, this.updateForGridChange.bind(this));
    };
    ChartController.prototype.updateForGridChange = function () {
        // don't update chart if chart is detached from grid data
        if (this.model.isDetached()) {
            return;
        }
        // update the model with changes to the cell ranges from the grid before updating the column state
        this.model.updateCellRanges();
        this.model.resetColumnState();
        this.model.updateData();
        // updates ranges with raising a new EVENT_CHART_RANGE_SELECTION_CHANGED
        this.setChartRange();
        this.raiseChartUpdatedEvent();
    };
    ChartController.prototype.updateForMenuChange = function (updatedCol) {
        // update the column state before updating the cell ranges to be sent to the grid
        this.model.updateColumnState(updatedCol);
        this.model.updateCellRanges(updatedCol);
        this.model.updateData();
        // updates ranges with raising a new EVENT_CHART_RANGE_SELECTION_CHANGED
        this.setChartRange();
        this.raiseChartUpdatedEvent();
    };
    ChartController.prototype.getChartType = function () {
        return this.model.getChartType();
    };
    ChartController.prototype.isPivotChart = function () {
        return this.model.isPivotChart();
    };
    ChartController.prototype.getActivePalette = function () {
        return this.model.getActivePalette();
    };
    ChartController.prototype.getPalettes = function () {
        return this.model.getPalettes();
    };
    ChartController.prototype.setChartType = function (chartType) {
        this.model.setChartType(chartType);
        this.raiseChartUpdatedEvent();
    };
    ChartController.prototype.setChartWithPalette = function (chartType, palette) {
        this.model.setChartType(chartType);
        this.model.setActivePalette(palette);
        this.raiseChartUpdatedEvent();
    };
    ChartController.prototype.getColStateForMenu = function () {
        return { dimensionCols: this.model.getDimensionColState(), valueCols: this.model.getValueColState() };
    };
    ChartController.prototype.isDefaultCategorySelected = function () {
        var selectedDimension = this.model.getSelectedDimension().colId;
        return selectedDimension && selectedDimension === chartModel_1.ChartModel.DEFAULT_CATEGORY;
    };
    ChartController.prototype.setChartRange = function () {
        if (!this.model.isSuppressChartRanges() && !this.model.isDetached()) {
            this.rangeController.setCellRanges(this.model.getCellRanges());
        }
    };
    ChartController.prototype.detachChartRange = function () {
        // when chart is detached it won't listen to changes from the grid
        this.model.toggleDetached();
        if (this.model.isDetached()) {
            // remove range from grid
            this.rangeController.setCellRanges([]);
        }
        else {
            // update grid with chart range
            this.setChartRange();
            // update chart data may have changed
            this.updateForGridChange();
        }
    };
    ChartController.prototype.getChartProxy = function () {
        return this.model.getChartProxy();
    };
    ChartController.prototype.isActiveXYChart = function () {
        var xyChartSelected = [ag_grid_community_1.ChartType.Scatter, ag_grid_community_1.ChartType.Bubble].indexOf(this.getChartType()) > -1;
        // x y charts behave like regular cartesian charts if the default category is not selected, i.e. (None)
        return xyChartSelected && this.isDefaultCategorySelected();
    };
    ChartController.prototype.raiseChartUpdatedEvent = function () {
        var event = {
            type: ChartController.EVENT_CHART_MODEL_UPDATED
        };
        this.dispatchEvent(event);
    };
    ChartController.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.rangeController) {
            this.rangeController.setCellRanges([]);
        }
    };
    ChartController.EVENT_CHART_MODEL_UPDATED = 'chartModelUpdated';
    __decorate([
        ag_grid_community_1.Autowired('eventService'),
        __metadata("design:type", ag_grid_community_1.EventService)
    ], ChartController.prototype, "eventService", void 0);
    __decorate([
        ag_grid_community_1.Autowired('rangeController'),
        __metadata("design:type", rangeController_1.RangeController)
    ], ChartController.prototype, "rangeController", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartController.prototype, "init", null);
    return ChartController;
}(ag_grid_community_1.BeanStub));
exports.ChartController = ChartController;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartDatasource.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartDatasource.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var aggregationStage_1 = __webpack_require__(/*! ../../rowStages/aggregationStage */ "./node_modules/ag-grid-enterprise/dist/lib/rowStages/aggregationStage.js");
var chartModel_1 = __webpack_require__(/*! ./chartModel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js");
var ChartDatasource = /** @class */ (function (_super) {
    __extends(ChartDatasource, _super);
    function ChartDatasource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartDatasource.prototype.getData = function (params) {
        var result = this.extractRowsFromGridRowModel(params);
        result.data = this.aggregateRowsByDimension(params, result.data);
        return result;
    };
    ChartDatasource.prototype.extractRowsFromGridRowModel = function (params) {
        var _this = this;
        var extractedRowData = [];
        var columnNames = {};
        // maps used to keep track of expanded groups that need to be removed
        var groupNodeIndexes = {};
        var groupsToRemove = {};
        // make sure enough rows in range to chart. if user filters and less rows, then end row will be
        // the last displayed row, not where the range ends.
        var modelLastRow = this.gridRowModel.getRowCount() - 1;
        var rangeLastRow = params.endRow > 0 ? Math.min(params.endRow, modelLastRow) : modelLastRow;
        var numRows = rangeLastRow - params.startRow + 1;
        var _loop_1 = function (i) {
            var data = {};
            // lookup row node from row model using row index
            var rowNode = this_1.gridRowModel.getRow(i + params.startRow);
            // first get data for dimensions columns
            params.dimensionCols.forEach(function (col) {
                var colId = col.colId;
                var column = _this.columnController.getGridColumn(colId);
                if (column) {
                    var valueObject = _this.valueService.getValue(column, rowNode);
                    // force return type to be string or empty string (as value can be an object)
                    var value = (valueObject && valueObject.toString) ? valueObject.toString() : '';
                    // when grouping we also need to build up multi category labels for charts
                    if (params.grouping) {
                        // traverse parents to extract group label path
                        var labels_1 = _this.getGroupLabels(rowNode, [String(value)]);
                        if (params.multiCategories) {
                            // add group labels to group column for multi category charts
                            data[colId] = { labels: labels_1, toString: function () { return labels_1[0]; } };
                        }
                        else {
                            // concat group keys from the top group key down (used when grouping Pie charts)
                            data[colId] = labels_1.slice().reverse().join(' - ');
                        }
                        // keep track of group node indexes so they can be padded when other groups are expanded
                        if (rowNode.group) {
                            groupNodeIndexes[labels_1.toString()] = i;
                        }
                        // if node (group or leaf) has parents then it is expanded and should be removed
                        var groupKey = labels_1.slice(1, labels_1.length).toString();
                        if (groupKey) {
                            groupsToRemove[groupKey] = groupNodeIndexes[groupKey];
                        }
                    }
                    else {
                        // leaf nodes can be directly added to dimension columns
                        data[colId] = value;
                    }
                }
                else {
                    // introduce a default category when no dimensions exist with a value based off row index (+1)
                    data[chartModel_1.ChartModel.DEFAULT_CATEGORY] = (i + 1).toString();
                }
            });
            // then get data for value columns
            params.valueCols.forEach(function (col) {
                var columnNamesArr = [];
                // pivot keys should be added first
                var pivotKeys = col.getColDef().pivotKeys;
                if (pivotKeys) {
                    columnNamesArr = pivotKeys.slice();
                }
                // then add column header name to results
                var headerName = col.getColDef().headerName;
                if (headerName) {
                    columnNamesArr.push(headerName);
                }
                // add array of column names to results
                if (columnNamesArr.length > 0) {
                    columnNames[col.getId()] = columnNamesArr;
                }
                // add data value to value column
                data[col.getId()] = _this.valueService.getValue(col, rowNode);
            });
            // add data to results
            extractedRowData.push(data);
        };
        var this_1 = this;
        for (var i = 0; i < numRows; i++) {
            _loop_1(i);
        }
        if (params.grouping) {
            // determine indexes of expanded group nodes to be removed
            var groupIndexesToRemove_1 = Object.keys(groupsToRemove).map(function (key) { return groupsToRemove[key]; });
            // remove expanded groups from results
            extractedRowData = extractedRowData.filter(function (_, index) { return groupIndexesToRemove_1.indexOf(index) < 0; });
        }
        return { data: extractedRowData, columnNames: columnNames };
    };
    ChartDatasource.prototype.aggregateRowsByDimension = function (params, dataFromGrid) {
        var _this = this;
        var dimensionCols = params.dimensionCols;
        var skipAggregation = !params.aggFunc || dimensionCols.length === 0;
        if (skipAggregation) {
            return dataFromGrid;
        }
        var lastCol = ag_grid_community_1._.last(dimensionCols);
        var lastColId = lastCol && lastCol.colId;
        var map = {};
        var dataAggregated = [];
        dataFromGrid.forEach(function (data) {
            var currentMap = map;
            dimensionCols.forEach(function (col) {
                var colId = col.colId;
                var key = data[colId];
                if (colId === lastColId) {
                    var groupItem_1 = currentMap[key];
                    if (!groupItem_1) {
                        groupItem_1 = { __children: [] };
                        dimensionCols.forEach(function (col) {
                            var colId = col.colId;
                            groupItem_1[colId] = data[colId];
                        });
                        currentMap[key] = groupItem_1;
                        dataAggregated.push(groupItem_1);
                    }
                    groupItem_1.__children.push(data);
                }
                else {
                    // map of maps
                    if (!currentMap[key]) {
                        currentMap[key] = {};
                    }
                    currentMap = currentMap[key];
                }
            });
        });
        dataAggregated.forEach(function (groupItem) {
            params.valueCols.forEach(function (col) {
                var dataToAgg = [];
                groupItem.__children.forEach(function (child) {
                    dataToAgg.push(child[col.getId()]);
                });
                var aggResult = _this.aggregationStage.aggregateValues(dataToAgg, params.aggFunc);
                if (typeof (aggResult.value) !== 'undefined') {
                    groupItem[col.getId()] = aggResult.value;
                }
                else {
                    groupItem[col.getId()] = aggResult;
                }
            });
        });
        return dataAggregated;
    };
    ChartDatasource.prototype.getGroupLabels = function (rowNode, result) {
        // add parent group keys by walking up the tree
        if (rowNode.level === 0) {
            return result;
        }
        var parentNode = rowNode.parent;
        result.push(parentNode.key);
        return this.getGroupLabels(parentNode, result);
    };
    __decorate([
        ag_grid_community_1.Autowired('rowModel'),
        __metadata("design:type", Object)
    ], ChartDatasource.prototype, "gridRowModel", void 0);
    __decorate([
        ag_grid_community_1.Autowired('valueService'),
        __metadata("design:type", ag_grid_community_1.ValueService)
    ], ChartDatasource.prototype, "valueService", void 0);
    __decorate([
        ag_grid_community_1.Autowired('aggregationStage'),
        __metadata("design:type", aggregationStage_1.AggregationStage)
    ], ChartDatasource.prototype, "aggregationStage", void 0);
    __decorate([
        ag_grid_community_1.Autowired('columnController'),
        __metadata("design:type", ag_grid_community_1.ColumnController)
    ], ChartDatasource.prototype, "columnController", void 0);
    return ChartDatasource;
}(ag_grid_community_1.BeanStub));
exports.ChartDatasource = ChartDatasource;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartDatasource_1 = __webpack_require__(/*! ./chartDatasource */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartDatasource.js");
var rangeController_1 = __webpack_require__(/*! ../../rangeController */ "./node_modules/ag-grid-enterprise/dist/lib/rangeController.js");
var ChartModel = /** @class */ (function (_super) {
    __extends(ChartModel, _super);
    function ChartModel(params) {
        var _this = _super.call(this) || this;
        _this.dimensionColState = [];
        _this.valueColState = [];
        _this.initialising = true;
        _this.detached = false;
        _this.columnNames = {};
        _this.pivotChart = params.pivotChart;
        _this.chartType = params.chartType;
        _this.aggFunc = params.aggFunc;
        _this.cellRanges = params.cellRanges;
        _this.palettes = params.palettes;
        _this.activePalette = params.activePalette;
        _this.suppressChartRanges = params.suppressChartRanges;
        // this is used to associate chart ranges with charts
        _this.chartId = _this.generateId();
        return _this;
    }
    ChartModel.prototype.init = function () {
        this.datasource = new chartDatasource_1.ChartDatasource();
        this.getContext().wireBean(this.datasource);
        // use first range as a reference range to be used after removing all cols (via menu) so we can re-add later
        this.referenceCellRange = this.cellRanges[0];
    };
    ChartModel.prototype.updateData = function () {
        var _a = this.getRowIndexes(), startRow = _a.startRow, endRow = _a.endRow;
        var selectedDimension = this.getSelectedDimension();
        var selectedValueCols = this.getSelectedValueCols();
        this.grouping = this.isGrouping();
        var params = {
            aggFunc: this.aggFunc,
            dimensionCols: [selectedDimension],
            grouping: this.grouping,
            pivoting: this.isPivotActive(),
            multiCategories: this.isMultiCategoryChart(),
            valueCols: selectedValueCols,
            startRow: startRow,
            endRow: endRow
        };
        var result = this.datasource.getData(params);
        this.chartData = result.data;
        this.columnNames = result.columnNames;
    };
    ChartModel.prototype.resetColumnState = function () {
        var _this = this;
        var _a = this.getAllChartColumns(), dimensionCols = _a.dimensionCols, valueCols = _a.valueCols;
        var allCols = this.pivotChart ? this.columnController.getAllDisplayedColumns() : this.getAllColumnsFromRanges();
        this.valueColState = valueCols.map(function (column) {
            return {
                column: column,
                colId: column.getColId(),
                displayName: _this.getColDisplayName(column),
                selected: allCols.indexOf(column) > -1
            };
        });
        this.dimensionColState = dimensionCols.map(function (column) {
            return {
                column: column,
                colId: column.getColId(),
                displayName: _this.getColDisplayName(column),
                selected: false
            };
        });
        var dimensionsInCellRange = dimensionCols.filter(function (col) { return allCols.indexOf(col) > -1; });
        if (dimensionsInCellRange.length > 0) {
            // select the first dimension from the range
            var selectedDimensionId_1 = dimensionsInCellRange[0].getColId();
            this.dimensionColState.forEach(function (cs) { return cs.selected = cs.colId === selectedDimensionId_1; });
        }
        // if no dimensions in range select the default
        var defaultCategory = {
            colId: ChartModel.DEFAULT_CATEGORY,
            displayName: '(None)',
            selected: dimensionsInCellRange.length === 0
        };
        this.dimensionColState.unshift(defaultCategory);
    };
    ChartModel.prototype.updateColumnState = function (updatedCol) {
        var idsMatch = function (cs) { return cs.colId === updatedCol.colId; };
        var isDimensionCol = this.dimensionColState.filter(idsMatch).length > 0;
        var isValueCol = this.valueColState.filter(idsMatch).length > 0;
        if (isDimensionCol) {
            // only one dimension should be selected
            this.dimensionColState.forEach(function (cs) { return cs.selected = idsMatch(cs); });
        }
        else if (isValueCol) {
            // just update the selected value on the supplied value column
            this.valueColState.forEach(function (cs) { return cs.selected = idsMatch(cs) ? updatedCol.selected : cs.selected; });
        }
    };
    ChartModel.prototype.updateCellRanges = function (updatedCol) {
        var _a = this.getAllChartColumns(), dimensionCols = _a.dimensionCols, valueCols = _a.valueCols;
        var lastRange = ag_grid_community_1._.last(this.cellRanges);
        if (lastRange) {
            // update the reference range
            this.referenceCellRange = lastRange;
            if (updatedCol) {
                var updatingStartCol = lastRange.columns[0] === updatedCol.column;
                this.referenceCellRange.startColumn = updatingStartCol ? lastRange.columns[1] : lastRange.columns[0];
            }
        }
        var allColsFromRanges = this.getAllColumnsFromRanges();
        // clear ranges
        this.cellRanges = [];
        var dimensionColsInRange = dimensionCols.filter(function (col) { return allColsFromRanges.indexOf(col) > -1; });
        if (this.initialising) {
            // first time in just take the first dimension from the range as the column state hasn't been updated yet
            if (dimensionColsInRange.length > 0) {
                this.addRange(ag_grid_community_1.CellRangeType.DIMENSION, [dimensionColsInRange[0]]);
            }
            this.initialising = false;
        }
        if (updatedCol && dimensionCols.indexOf(updatedCol.column) > -1) {
            // if updated col is dimension col and is not the default category
            if (updatedCol.colId !== ChartModel.DEFAULT_CATEGORY) {
                this.addRange(ag_grid_community_1.CellRangeType.DIMENSION, [updatedCol.column]);
            }
        }
        else {
            // otherwise use current selected dimension
            var selectedDimension = this.dimensionColState.filter(function (cs) { return cs.selected; })[0];
            if (selectedDimension && selectedDimension.colId !== ChartModel.DEFAULT_CATEGORY) {
                this.addRange(ag_grid_community_1.CellRangeType.DIMENSION, [selectedDimension.column]);
            }
        }
        var valueColsInRange = valueCols.filter(function (col) { return allColsFromRanges.indexOf(col) > -1; });
        if (updatedCol && valueCols.indexOf(updatedCol.column) > -1) {
            if (updatedCol.selected) {
                valueColsInRange.push(updatedCol.column);
                valueColsInRange = this.getColumnInDisplayOrder(valueCols, valueColsInRange);
            }
            else {
                valueColsInRange = valueColsInRange.filter(function (col) { return col.getColId() !== updatedCol.colId; });
            }
        }
        if (valueColsInRange.length > 0) {
            this.addRange(ag_grid_community_1.CellRangeType.VALUE, valueColsInRange);
        }
    };
    ChartModel.prototype.getData = function () {
        // grouped data contains label fields rather than objects with toString
        if (this.grouping && this.isMultiCategoryChart()) {
            return this.chartData;
        }
        var colId = this.getSelectedDimension().colId;
        // replacing the selected dimension with a complex object to facilitate duplicated categories
        return this.chartData.map(function (d, index) {
            var dimensionValue = d[colId] ? d[colId].toString() : '';
            d[colId] = { toString: function () { return dimensionValue; }, id: index };
            return d;
        });
    };
    ChartModel.prototype.setChartType = function (chartType) {
        var isCurrentMultiCategory = this.isMultiCategoryChart();
        this.chartType = chartType;
        // switching between single and multi-category charts requires data to be reformatted
        if (isCurrentMultiCategory !== this.isMultiCategoryChart()) {
            this.updateData();
        }
    };
    ChartModel.prototype.isGrouping = function () {
        var usingTreeData = this.gridOptionsWrapper.isTreeData();
        var groupedCols = usingTreeData ? null : this.columnController.getRowGroupColumns();
        var groupActive = usingTreeData || (groupedCols && groupedCols.length > 0);
        // charts only group when the selected category is a group column
        var groupCols = this.columnController.getGroupDisplayColumns();
        var colId = this.getSelectedDimension().colId;
        var groupDimensionSelected = groupCols
            .map(function (col) { return col.getColId(); })
            .some(function (id) { return id === colId; });
        return groupActive && groupDimensionSelected;
    };
    ChartModel.prototype.isPivotActive = function () {
        return this.columnController.isPivotActive();
    };
    ChartModel.prototype.isPivotMode = function () {
        return this.columnController.isPivotMode();
    };
    ChartModel.prototype.isPivotChart = function () {
        return this.pivotChart;
    };
    ChartModel.prototype.setChartProxy = function (chartProxy) {
        this.chartProxy = chartProxy;
    };
    ChartModel.prototype.getChartProxy = function () {
        return this.chartProxy;
    };
    ChartModel.prototype.getChartId = function () {
        return this.chartId;
    };
    ChartModel.prototype.getValueColState = function () {
        return this.valueColState.map(this.displayNameMapper.bind(this));
    };
    ChartModel.prototype.getDimensionColState = function () {
        return this.dimensionColState;
    };
    ChartModel.prototype.getCellRanges = function () {
        return this.cellRanges;
    };
    ChartModel.prototype.getChartType = function () {
        return this.chartType;
    };
    ChartModel.prototype.setActivePalette = function (palette) {
        this.activePalette = palette;
    };
    ChartModel.prototype.getActivePalette = function () {
        return this.activePalette;
    };
    ChartModel.prototype.getPalettes = function () {
        return this.palettes;
    };
    ChartModel.prototype.isSuppressChartRanges = function () {
        return this.suppressChartRanges;
    };
    ChartModel.prototype.isDetached = function () {
        return this.detached;
    };
    ChartModel.prototype.toggleDetached = function () {
        this.detached = !this.detached;
    };
    ChartModel.prototype.getSelectedValueColState = function () {
        return this.getValueColState().filter(function (cs) { return cs.selected; });
    };
    ChartModel.prototype.getSelectedValueCols = function () {
        return this.valueColState.filter(function (cs) { return cs.selected; }).map(function (cs) { return cs.column; });
    };
    ChartModel.prototype.getSelectedDimension = function () {
        return this.dimensionColState.filter(function (cs) { return cs.selected; })[0];
    };
    ChartModel.prototype.getColumnInDisplayOrder = function (allDisplayedColumns, listToSort) {
        var sortedList = [];
        allDisplayedColumns.forEach(function (col) {
            if (listToSort.indexOf(col) > -1) {
                sortedList.push(col);
            }
        });
        return sortedList;
    };
    ChartModel.prototype.addRange = function (cellRangeType, columns) {
        var newRange = {
            id: this.chartId,
            startRow: this.referenceCellRange.startRow,
            endRow: this.referenceCellRange.endRow,
            columns: columns,
            startColumn: this.referenceCellRange.startColumn,
            type: cellRangeType
        };
        cellRangeType === ag_grid_community_1.CellRangeType.DIMENSION ? this.cellRanges.unshift(newRange) : this.cellRanges.push(newRange);
    };
    ChartModel.prototype.getAllColumnsFromRanges = function () {
        return ag_grid_community_1._.flatten(this.cellRanges.map(function (range) { return range.columns; }));
    };
    ChartModel.prototype.getColDisplayName = function (col) {
        return this.columnController.getDisplayNameForColumn(col, 'chart');
    };
    ChartModel.prototype.getRowIndexes = function () {
        var startRow = 0, endRow = 0;
        var range = ag_grid_community_1._.last(this.cellRanges);
        if (range) {
            startRow = this.rangeController.getRangeStartRow(range).rowIndex;
            endRow = this.rangeController.getRangeEndRow(range).rowIndex;
        }
        return { startRow: startRow, endRow: endRow };
    };
    ChartModel.prototype.getAllChartColumns = function () {
        var _this = this;
        var displayedCols = this.columnController.getAllDisplayedColumns();
        var dimensionCols = [];
        var valueCols = [];
        displayedCols.forEach(function (col) {
            var colDef = col.getColDef();
            // first check column for 'chartDataType'
            var chartDataType = colDef.chartDataType;
            if (chartDataType) {
                var validChartType = true;
                if (chartDataType === 'category') {
                    dimensionCols.push(col);
                }
                else if (chartDataType === 'series') {
                    valueCols.push(col);
                }
                else if (chartDataType === 'excluded') {
                    // ignore
                }
                else {
                    console.warn("ag-Grid: unexpected chartDataType value '" + chartDataType + "' supplied, instead use 'category', 'series' or 'excluded'");
                    validChartType = false;
                }
                if (validChartType) {
                    return;
                }
            }
            if (colDef.colId === 'ag-Grid-AutoColumn') {
                dimensionCols.push(col);
                return;
            }
            if (!col.isPrimary()) {
                valueCols.push(col);
                return;
            }
            // if 'chartDataType' is not provided then infer type based data contained in first row
            _this.isNumberCol(col.getColId()) ? valueCols.push(col) : dimensionCols.push(col);
        });
        return { dimensionCols: dimensionCols, valueCols: valueCols };
    };
    ChartModel.prototype.isNumberCol = function (colId) {
        if (colId === 'ag-Grid-AutoColumn') {
            return false;
        }
        var row = this.rowRenderer.getRowNode({ rowIndex: 0, rowPinned: undefined });
        var rowData = row ? row.data : null;
        var cellData;
        if (row && row.group) {
            cellData = this.extractLeafData(row, colId);
        }
        else {
            cellData = rowData ? rowData[colId] : null;
        }
        return typeof cellData === 'number';
    };
    ChartModel.prototype.extractLeafData = function (row, colId) {
        var leafRowData = row.allLeafChildren.map(function (row) { return row.data; });
        var leafCellData = leafRowData.map(function (rowData) { return rowData[colId]; });
        for (var i = 0; i < leafCellData.length; i++) {
            if (leafCellData[i] !== null) {
                return leafCellData[i];
            }
        }
        return null;
    };
    ChartModel.prototype.displayNameMapper = function (col) {
        if (this.columnNames[col.colId]) {
            col.displayName = this.columnNames[col.colId].join(' - ');
        }
        else {
            col.displayName = this.getColDisplayName(col.column);
        }
        return col;
    };
    ChartModel.prototype.isMultiCategoryChart = function () {
        return [
            ag_grid_community_1.ChartType.Pie,
            ag_grid_community_1.ChartType.Doughnut,
            ag_grid_community_1.ChartType.Scatter,
            ag_grid_community_1.ChartType.Bubble
        ].indexOf(this.chartType) < 0;
    };
    ChartModel.prototype.generateId = function () {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    };
    ChartModel.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.datasource) {
            this.datasource.destroy();
        }
    };
    ChartModel.DEFAULT_CATEGORY = 'AG-GRID-DEFAULT-CATEGORY';
    __decorate([
        ag_grid_community_1.Autowired('columnController'),
        __metadata("design:type", ag_grid_community_1.ColumnController)
    ], ChartModel.prototype, "columnController", void 0);
    __decorate([
        ag_grid_community_1.Autowired('gridOptionsWrapper'),
        __metadata("design:type", ag_grid_community_1.GridOptionsWrapper)
    ], ChartModel.prototype, "gridOptionsWrapper", void 0);
    __decorate([
        ag_grid_community_1.Autowired('rangeController'),
        __metadata("design:type", rangeController_1.RangeController)
    ], ChartModel.prototype, "rangeController", void 0);
    __decorate([
        ag_grid_community_1.Autowired('rowRenderer'),
        __metadata("design:type", ag_grid_community_1.RowRenderer)
    ], ChartModel.prototype, "rowRenderer", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartModel.prototype, "init", null);
    return ChartModel;
}(ag_grid_community_1.BeanStub));
exports.ChartModel = ChartModel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/areaChartProxy.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/areaChartProxy.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartBuilder_1 = __webpack_require__(/*! ../../../builder/chartBuilder */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js");
var categoryAxis_1 = __webpack_require__(/*! ../../../../charts/chart/axis/categoryAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/categoryAxis.js");
var cartesianChartProxy_1 = __webpack_require__(/*! ./cartesianChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/cartesianChartProxy.js");
var AreaChartProxy = /** @class */ (function (_super) {
    __extends(AreaChartProxy, _super);
    function AreaChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.chartType = params.chartType;
        _this.initChartOptions(params.chartType, _this.defaultOptions());
        if (params.grouping) {
            _this.chart = chartBuilder_1.ChartBuilder.createGroupedAreaChart(_this.chartOptions);
        }
        else {
            _this.chart = chartBuilder_1.ChartBuilder.createAreaChart(_this.chartOptions);
        }
        _this.setAxisPadding(_this.chart);
        var areaSeries = chartBuilder_1.ChartBuilder.createSeries(_this.chartOptions.seriesDefaults);
        if (areaSeries) {
            _this.chart.addSeries(areaSeries);
        }
        return _this;
    }
    AreaChartProxy.prototype.setAxisPadding = function (chart) {
        var xAxis = chart.xAxis;
        if (xAxis instanceof categoryAxis_1.CategoryAxis) {
            xAxis.scale.paddingInner = 1;
            xAxis.scale.paddingOuter = 0;
        }
    };
    AreaChartProxy.prototype.update = function (params) {
        var chart = this.chart;
        if (this.chartType === ag_grid_community_1.ChartType.Area) {
            // area charts have multiple series
            this.updateAreaChart(params);
        }
        else {
            // stacked and normalized has a single series
            var areaSeries = this.chart.series[0];
            areaSeries.data = params.data;
            areaSeries.xField = params.category.id;
            areaSeries.yFields = params.fields.map(function (f) { return f.colId; });
            areaSeries.yFieldNames = params.fields.map(function (f) { return f.displayName; });
            var palette = this.overriddenPalette ? this.overriddenPalette : this.chartProxyParams.getSelectedPalette();
            areaSeries.fills = palette.fills;
            areaSeries.strokes = palette.strokes;
        }
        chart.xAxis.labelRotation = this.overrideLabelRotation(params.category.id) ? 0 : this.chartOptions.xAxis.labelRotation;
    };
    AreaChartProxy.prototype.updateAreaChart = function (params) {
        var _this = this;
        if (params.fields.length === 0) {
            this.chart.removeAllSeries();
            return;
        }
        var lineChart = this.chart;
        var fieldIds = params.fields.map(function (f) { return f.colId; });
        var existingSeriesMap = {};
        var updateSeries = function (areaSeries) {
            var id = areaSeries.yFields[0];
            var seriesExists = fieldIds.indexOf(id) > -1;
            seriesExists ? existingSeriesMap[id] = areaSeries : lineChart.removeSeries(areaSeries);
        };
        lineChart.series.map(function (series) { return series; }).forEach(updateSeries);
        params.fields.forEach(function (f, index) {
            var seriesOptions = _this.chartOptions.seriesDefaults;
            var existingSeries = existingSeriesMap[f.colId];
            var areaSeries = existingSeries ? existingSeries : chartBuilder_1.ChartBuilder.createSeries(seriesOptions);
            if (areaSeries) {
                areaSeries.yFieldNames = [f.displayName];
                areaSeries.data = params.data;
                areaSeries.xField = params.category.id;
                areaSeries.yFields = [f.colId];
                var palette = _this.overriddenPalette ? _this.overriddenPalette : _this.chartProxyParams.getSelectedPalette();
                var fills = palette.fills;
                areaSeries.fills = [fills[index % fills.length]];
                var strokes = palette.strokes;
                areaSeries.strokes = [strokes[index % strokes.length]];
                if (!existingSeries) {
                    lineChart.addSeries(areaSeries);
                }
            }
        });
    };
    AreaChartProxy.prototype.setSeriesProperty = function (property, value) {
        var series = this.getChart().series;
        series.forEach(function (s) { return s[property] = value; });
        if (!this.chartOptions.seriesDefaults) {
            this.chartOptions.seriesDefaults = {};
        }
        this.chartOptions.seriesDefaults[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    AreaChartProxy.prototype.getSeriesProperty = function (property) {
        return this.chartOptions.seriesDefaults ? "" + this.chartOptions.seriesDefaults[property] : '';
    };
    AreaChartProxy.prototype.getTooltipsEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.tooltipEnabled : false;
    };
    AreaChartProxy.prototype.getMarkersEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.marker : false;
    };
    AreaChartProxy.prototype.defaultOptions = function () {
        var palette = this.chartProxyParams.getSelectedPalette();
        return {
            background: {
                fill: this.getBackgroundColor()
            },
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            legendPosition: 'right',
            legendPadding: 20,
            legend: {
                enabled: true,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerStrokeWidth: 1
            },
            xAxis: {
                type: 'category',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 335,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            yAxis: {
                type: 'number',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 0,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            seriesDefaults: {
                type: 'area',
                fills: palette.fills,
                strokes: palette.strokes,
                strokeWidth: 3,
                strokeOpacity: 1,
                fillOpacity: this.chartProxyParams.chartType === ag_grid_community_1.ChartType.Area ? 0.7 : 1,
                normalizedTo: this.chartProxyParams.chartType === ag_grid_community_1.ChartType.NormalizedArea ? 100 : undefined,
                marker: true,
                markerSize: 6,
                markerStrokeWidth: 1,
                tooltipEnabled: true,
                tooltipRenderer: undefined,
                showInLegend: true,
                shadow: {
                    enabled: false,
                    blur: 5,
                    xOffset: 3,
                    yOffset: 3,
                    color: 'rgba(0,0,0,0.5)'
                }
            }
        };
    };
    return AreaChartProxy;
}(cartesianChartProxy_1.CartesianChartProxy));
exports.AreaChartProxy = AreaChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/barChartProxy.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/barChartProxy.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartBuilder_1 = __webpack_require__(/*! ../../../builder/chartBuilder */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js");
var cartesianChartProxy_1 = __webpack_require__(/*! ./cartesianChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/cartesianChartProxy.js");
var BarChartProxy = /** @class */ (function (_super) {
    __extends(BarChartProxy, _super);
    function BarChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.initChartOptions(params.chartType, _this.defaultOptions());
        if (params.grouping) {
            _this.chart = BarChartProxy.isBarChart(params.chartType) ?
                chartBuilder_1.ChartBuilder.createGroupedBarChart(_this.chartOptions) : chartBuilder_1.ChartBuilder.createGroupedColumnChart(_this.chartOptions);
        }
        else {
            _this.chart = BarChartProxy.isBarChart(params.chartType) ?
                chartBuilder_1.ChartBuilder.createBarChart(_this.chartOptions) : chartBuilder_1.ChartBuilder.createColumnChart(_this.chartOptions);
        }
        var barSeries = chartBuilder_1.ChartBuilder.createSeries(_this.chartOptions.seriesDefaults);
        if (barSeries) {
            _this.chart.addSeries(barSeries);
        }
        return _this;
    }
    BarChartProxy.prototype.update = function (params) {
        var chart = this.chart;
        var barSeries = chart.series[0];
        barSeries.data = params.data;
        barSeries.xField = params.category.id;
        barSeries.yFields = params.fields.map(function (f) { return f.colId; });
        barSeries.yFieldNames = params.fields.map(function (f) { return f.displayName; });
        if (BarChartProxy.isBarChart(this.chartProxyParams.chartType)) {
            chart.yAxis.labelRotation = this.overrideLabelRotation(params.category.id) ? 0 : this.chartOptions.yAxis.labelRotation;
        }
        else {
            chart.xAxis.labelRotation = this.overrideLabelRotation(params.category.id) ? 0 : this.chartOptions.xAxis.labelRotation;
        }
        var palette = this.overriddenPalette ? this.overriddenPalette : this.chartProxyParams.getSelectedPalette();
        barSeries.fills = palette.fills;
        barSeries.strokes = palette.strokes;
    };
    BarChartProxy.prototype.setSeriesProperty = function (property, value) {
        var series = this.getChart().series;
        series.forEach(function (s) { return s[property] = value; });
        if (!this.chartOptions.seriesDefaults) {
            this.chartOptions.seriesDefaults = {};
        }
        this.chartOptions.seriesDefaults[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    BarChartProxy.prototype.getSeriesProperty = function (property) {
        return this.chartOptions.seriesDefaults ? "" + this.chartOptions.seriesDefaults[property] : '';
    };
    BarChartProxy.prototype.getTooltipsEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.tooltipEnabled : false;
    };
    BarChartProxy.prototype.getLabelEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.labelEnabled : false;
    };
    BarChartProxy.isBarChart = function (type) {
        return type === ag_grid_community_1.ChartType.GroupedBar || type === ag_grid_community_1.ChartType.StackedBar || type === ag_grid_community_1.ChartType.NormalizedBar;
    };
    BarChartProxy.prototype.defaultOptions = function () {
        var palette = this.chartProxyParams.getSelectedPalette();
        var chartType = this.chartProxyParams.chartType;
        return {
            parent: this.chartProxyParams.parentElement,
            background: {
                fill: this.getBackgroundColor()
            },
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            legendPosition: 'right',
            legendPadding: 20,
            legend: {
                enabled: true,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerStrokeWidth: 1
            },
            xAxis: {
                type: 'category',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 335,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            yAxis: {
                type: 'number',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 0,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            seriesDefaults: {
                type: 'bar',
                fills: palette.fills,
                strokes: palette.strokes,
                grouped: chartType === ag_grid_community_1.ChartType.GroupedColumn || chartType === ag_grid_community_1.ChartType.GroupedBar,
                normalizedTo: (chartType === ag_grid_community_1.ChartType.NormalizedColumn || chartType === ag_grid_community_1.ChartType.NormalizedBar) ? 100 : undefined,
                strokeWidth: 1,
                tooltipEnabled: true,
                labelEnabled: false,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                tooltipRenderer: undefined,
                showInLegend: true,
                shadow: {
                    enabled: false,
                    blur: 5,
                    xOffset: 3,
                    yOffset: 3,
                    color: 'rgba(0,0,0,0.5)'
                },
                strokeOpacity: 1,
                fillOpacity: 1
            }
        };
    };
    return BarChartProxy;
}(cartesianChartProxy_1.CartesianChartProxy));
exports.BarChartProxy = BarChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/cartesianChartProxy.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/cartesianChartProxy.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chartProxy_1 = __webpack_require__(/*! ../chartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/chartProxy.js");
var chartModel_1 = __webpack_require__(/*! ../../chartModel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js");
var CartesianChartProxy = /** @class */ (function (_super) {
    __extends(CartesianChartProxy, _super);
    function CartesianChartProxy(params) {
        return _super.call(this, params) || this;
    }
    CartesianChartProxy.prototype.overrideLabelRotation = function (categoryId) {
        return categoryId === chartModel_1.ChartModel.DEFAULT_CATEGORY || this.chartProxyParams.grouping;
    };
    CartesianChartProxy.prototype.setCommonAxisProperty = function (property, value) {
        var cartesianChart = this.chart;
        cartesianChart.xAxis[property] = value;
        cartesianChart.yAxis[property] = value;
        cartesianChart.performLayout();
        this.chartOptions.xAxis[property] = value;
        this.chartOptions.yAxis[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    CartesianChartProxy.prototype.getCommonAxisProperty = function (property) {
        return this.chartOptions.xAxis ? "" + this.chartOptions.xAxis[property] : '';
    };
    CartesianChartProxy.prototype.getXRotation = function () {
        var cartesianChart = this.chart;
        return cartesianChart.xAxis.labelRotation;
    };
    CartesianChartProxy.prototype.setXRotation = function (rotation) {
        var cartesianChart = this.chart;
        cartesianChart.xAxis.labelRotation = rotation;
        this.chartOptions.xAxis.labelRotation = rotation;
        this.chart.performLayout();
        this.raiseChartOptionsChangedEvent();
    };
    CartesianChartProxy.prototype.getYRotation = function () {
        var cartesianChart = this.chart;
        return cartesianChart.yAxis.labelRotation;
    };
    CartesianChartProxy.prototype.setYRotation = function (rotation) {
        var cartesianChart = this.chart;
        cartesianChart.yAxis.labelRotation = rotation;
        this.chartOptions.yAxis.labelRotation = rotation;
        this.chart.performLayout();
        this.raiseChartOptionsChangedEvent();
    };
    return CartesianChartProxy;
}(chartProxy_1.ChartProxy));
exports.CartesianChartProxy = CartesianChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/lineChartProxy.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/lineChartProxy.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartBuilder_1 = __webpack_require__(/*! ../../../builder/chartBuilder */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js");
var cartesianChartProxy_1 = __webpack_require__(/*! ./cartesianChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/cartesianChartProxy.js");
var LineChartProxy = /** @class */ (function (_super) {
    __extends(LineChartProxy, _super);
    function LineChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.initChartOptions(ag_grid_community_1.ChartType.Line, _this.defaultOptions());
        if (params.grouping) {
            _this.chart = chartBuilder_1.ChartBuilder.createGroupedLineChart(_this.chartOptions);
        }
        else {
            _this.chart = chartBuilder_1.ChartBuilder.createLineChart(_this.chartOptions);
        }
        return _this;
    }
    LineChartProxy.prototype.update = function (params) {
        var _this = this;
        var chart = this.chart;
        if (params.fields.length === 0) {
            this.chart.removeAllSeries();
            return;
        }
        var lineChart = this.chart;
        var fieldIds = params.fields.map(function (f) { return f.colId; });
        var existingSeriesMap = {};
        var updateSeries = function (lineSeries) {
            var id = lineSeries.yField;
            var seriesExists = fieldIds.indexOf(id) > -1;
            seriesExists ? existingSeriesMap[id] = lineSeries : lineChart.removeSeries(lineSeries);
        };
        lineChart.series.map(function (series) { return series; }).forEach(updateSeries);
        params.fields.forEach(function (f, index) {
            var seriesOptions = _this.chartOptions.seriesDefaults;
            var existingSeries = existingSeriesMap[f.colId];
            var lineSeries = existingSeries ? existingSeries : chartBuilder_1.ChartBuilder.createSeries(seriesOptions);
            if (lineSeries) {
                lineSeries.title = f.displayName;
                lineSeries.data = params.data;
                lineSeries.xField = params.category.id;
                lineSeries.yField = f.colId;
                var palette = _this.overriddenPalette ? _this.overriddenPalette : _this.chartProxyParams.getSelectedPalette();
                var fills = palette.fills;
                lineSeries.fill = fills[index % fills.length];
                var strokes = palette.strokes;
                lineSeries.stroke = strokes[index % strokes.length];
                if (!existingSeries) {
                    lineChart.addSeries(lineSeries);
                }
            }
        });
        chart.xAxis.labelRotation = this.overrideLabelRotation(params.category.id) ? 0 : this.chartOptions.xAxis.labelRotation;
    };
    LineChartProxy.prototype.setSeriesProperty = function (property, value) {
        var series = this.getChart().series;
        series.forEach(function (s) { return s[property] = value; });
        if (!this.chartOptions.seriesDefaults) {
            this.chartOptions.seriesDefaults = {};
        }
        this.chartOptions.seriesDefaults[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    LineChartProxy.prototype.getSeriesProperty = function (property) {
        return this.chartOptions.seriesDefaults ? "" + this.chartOptions.seriesDefaults[property] : '';
    };
    LineChartProxy.prototype.getTooltipsEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.tooltipEnabled : false;
    };
    LineChartProxy.prototype.getMarkersEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.marker : false;
    };
    LineChartProxy.prototype.defaultOptions = function () {
        var palette = this.chartProxyParams.getSelectedPalette();
        return {
            background: {
                fill: this.getBackgroundColor()
            },
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            legendPosition: 'right',
            legendPadding: 20,
            legend: {
                enabled: true,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerStrokeWidth: 1
            },
            xAxis: {
                type: 'category',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 335,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            yAxis: {
                type: 'number',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 0,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            seriesDefaults: {
                type: 'line',
                fills: palette.fills,
                strokes: palette.strokes,
                strokeWidth: 3,
                marker: true,
                markerSize: 6,
                markerStrokeWidth: 1,
                tooltipEnabled: true,
                tooltipRenderer: undefined,
                showInLegend: true,
                title: ''
            }
        };
    };
    return LineChartProxy;
}(cartesianChartProxy_1.CartesianChartProxy));
exports.LineChartProxy = LineChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/scatterChartProxy.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/scatterChartProxy.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartBuilder_1 = __webpack_require__(/*! ../../../builder/chartBuilder */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js");
var chartModel_1 = __webpack_require__(/*! ../../chartModel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js");
var cartesianChartProxy_1 = __webpack_require__(/*! ./cartesianChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/cartesianChartProxy.js");
var ScatterChartProxy = /** @class */ (function (_super) {
    __extends(ScatterChartProxy, _super);
    function ScatterChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.initChartOptions(params.chartType, _this.defaultOptions());
        _this.chart = chartBuilder_1.ChartBuilder.createScatterChart(_this.chartOptions);
        return _this;
    }
    ScatterChartProxy.prototype.update = function (params) {
        var _this = this;
        if (params.fields.length === 0) {
            this.chart.removeAllSeries();
            return;
        }
        var chart = this.chart;
        var chartType = this.chartProxyParams.chartType;
        var fieldIds = params.fields.map(function (f) { return f.colId; });
        var existingSeriesMap = {};
        var defaultCategorySelected = params.category.id === chartModel_1.ChartModel.DEFAULT_CATEGORY;
        var updateSeries = function (scatterSeries) {
            var id = scatterSeries.yField;
            var seriesExists = fieldIds.indexOf(id) > -1;
            seriesExists ? existingSeriesMap[id] = scatterSeries : chart.removeSeries(scatterSeries);
        };
        chart.series
            .map(function (series) { return series; })
            .forEach(updateSeries);
        var updateFunc = function (f, index) {
            var seriesOptions = _this.chartOptions.seriesDefaults;
            var existingSeries = existingSeriesMap[f.colId];
            var scatterSeries = existingSeries ? existingSeries : chartBuilder_1.ChartBuilder.createSeries(seriesOptions);
            if (scatterSeries) {
                if (defaultCategorySelected) {
                    scatterSeries.title = params.fields[0].displayName + " vs " + f.displayName;
                    scatterSeries.xField = params.fields[0].colId;
                    scatterSeries.xFieldName = params.fields[0].displayName;
                    if (chartType === ag_grid_community_1.ChartType.Bubble) {
                        var f_1 = params.fields[index * 2 + 2];
                        scatterSeries.radiusField = f_1.colId;
                        scatterSeries.radiusFieldName = f_1.displayName;
                    }
                }
                else {
                    scatterSeries.title = f.displayName;
                    scatterSeries.xField = params.category.id;
                    scatterSeries.xFieldName = params.category.name;
                }
                scatterSeries.data = params.data;
                scatterSeries.yField = f.colId;
                scatterSeries.yFieldName = f.displayName;
                var palette = _this.overriddenPalette ? _this.overriddenPalette : _this.chartProxyParams.getSelectedPalette();
                var fills = palette.fills;
                scatterSeries.fill = fills[index % fills.length];
                var strokes = palette.strokes;
                scatterSeries.stroke = strokes[index % strokes.length];
                if (!existingSeries) {
                    chart.addSeries(scatterSeries);
                }
            }
        };
        if (defaultCategorySelected) {
            if (chartType === ag_grid_community_1.ChartType.Bubble) {
                // only update bubble chart if the correct number of fields are present
                var len = params.fields.length;
                var offset = len % 2 === 0 ? 1 : 0;
                var fields = [];
                for (var i = 1; i < len - offset; i += 2) {
                    fields.push(params.fields[i]);
                }
                fields.forEach(updateFunc);
            }
            else {
                params.fields.slice(1, params.fields.length).forEach(updateFunc);
            }
        }
        else {
            params.fields.forEach(updateFunc);
        }
        chart.xAxis.labelRotation = this.overrideLabelRotation(params.category.id) ? 0 : this.chartOptions.xAxis.labelRotation;
    };
    ScatterChartProxy.prototype.setSeriesProperty = function (property, value) {
        var series = this.getChart().series;
        series.forEach(function (s) { return s[property] = value; });
        if (!this.chartOptions.seriesDefaults) {
            this.chartOptions.seriesDefaults = {};
        }
        this.chartOptions.seriesDefaults[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    ScatterChartProxy.prototype.getSeriesProperty = function (property) {
        return this.chartOptions.seriesDefaults ? "" + this.chartOptions.seriesDefaults[property] : '';
    };
    ScatterChartProxy.prototype.getTooltipsEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.tooltipEnabled : false;
    };
    ScatterChartProxy.prototype.getMarkersEnabled = function () {
        // markers are always enabled on scatter charts
        return true;
    };
    ScatterChartProxy.prototype.defaultOptions = function () {
        var xAxisType = this.chartProxyParams.categorySelected ? 'category' : 'number';
        var palette = this.chartProxyParams.getSelectedPalette();
        var isBubble = this.chartProxyParams.chartType === ag_grid_community_1.ChartType.Bubble;
        return {
            background: {
                fill: this.getBackgroundColor()
            },
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            legendPosition: 'right',
            legendPadding: 20,
            legend: {
                enabled: true,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerStrokeWidth: 1
            },
            xAxis: {
                type: xAxisType,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 335,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            yAxis: {
                type: 'number',
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelRotation: 0,
                tickColor: 'rgba(195, 195, 195, 1)',
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                        stroke: this.getAxisGridColor(),
                        lineDash: [4, 2]
                    }]
            },
            seriesDefaults: {
                type: 'scatter',
                fills: palette.fills,
                fillOpacity: isBubble ? 0.7 : 1,
                strokes: palette.strokes,
                marker: true,
                markerSize: isBubble ? 30 : 6,
                minMarkerSize: 3,
                markerStrokeWidth: 1,
                tooltipEnabled: true,
                tooltipRenderer: undefined,
                showInLegend: true,
                title: ''
            }
        };
    };
    return ScatterChartProxy;
}(cartesianChartProxy_1.CartesianChartProxy));
exports.ScatterChartProxy = ScatterChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/chartProxy.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/chartProxy.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var dropShadow_1 = __webpack_require__(/*! ../../../charts/scene/dropShadow */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/dropShadow.js");
var ChartProxy = /** @class */ (function () {
    function ChartProxy(chartProxyParams) {
        this.chartProxyParams = chartProxyParams;
    }
    ChartProxy.prototype.getChart = function () {
        return this.chart;
    };
    ChartProxy.prototype.getLabelColor = function () {
        return this.chartProxyParams.isDarkTheme() ? ChartProxy.darkLabelColour : ChartProxy.lightLabelColour;
    };
    ChartProxy.prototype.getAxisGridColor = function () {
        return this.chartProxyParams.isDarkTheme() ? ChartProxy.darkAxisColour : ChartProxy.lightAxisColour;
    };
    ChartProxy.prototype.getBackgroundColor = function () {
        return this.chartProxyParams.isDarkTheme() ? '#2d3436' : 'white';
    };
    ChartProxy.prototype.initChartOptions = function (type, options) {
        // allow users to override options before they are applied
        if (this.chartProxyParams.processChartOptions) {
            var params = { type: type, options: options };
            var overriddenOptions = this.chartProxyParams.processChartOptions(params);
            this.overridePalette(overriddenOptions);
            this.chartOptions = overriddenOptions;
        }
        else {
            this.chartOptions = options;
        }
        // these chart options are not overridable via the processChartOptions callback
        this.chartOptions.parent = this.chartProxyParams.parentElement;
        this.chartOptions.width = this.chartProxyParams.width;
        this.chartOptions.height = this.chartProxyParams.height;
    };
    ChartProxy.prototype.overridePalette = function (chartOptions) {
        var seriesDefaults = chartOptions.seriesDefaults;
        var palette = this.chartProxyParams.getSelectedPalette();
        var defaultFills = palette.fills;
        var defaultStrokes = palette.strokes;
        var fillsOverridden = seriesDefaults.fills !== defaultFills;
        var strokesOverridden = seriesDefaults.strokes !== defaultStrokes;
        if (fillsOverridden || strokesOverridden) {
            this.overriddenPalette = {
                fills: fillsOverridden && seriesDefaults.fills ? seriesDefaults.fills : defaultFills,
                strokes: strokesOverridden && seriesDefaults.strokes ? seriesDefaults.strokes : defaultStrokes
            };
        }
    };
    ChartProxy.prototype.setChartPaddingProperty = function (property, value) {
        var padding = this.chart.padding;
        padding[property] = value;
        this.chart.padding = padding;
        this.chartOptions.padding = padding;
        this.raiseChartOptionsChangedEvent();
    };
    ChartProxy.prototype.getChartPadding = function (property) {
        return this.chartOptions.padding ? "" + this.chartOptions.padding[property] : '';
    };
    ChartProxy.prototype.setLegendProperty = function (property, value) {
        this.chart.legend[property] = value;
        if (!this.chartOptions.legend) {
            this.chartOptions.legend = {};
        }
        this.chartOptions.legend[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    ChartProxy.prototype.getLegendProperty = function (property) {
        return this.chartOptions.legend ? "" + this.chartOptions.legend[property] : '';
    };
    ChartProxy.prototype.getLegendEnabled = function () {
        return this.chartOptions.legend ? !!this.chartOptions.legend.enabled : false;
    };
    ChartProxy.prototype.setLegendPadding = function (padding) {
        this.chart.legendPadding = padding;
        this.chartOptions.legendPadding = padding;
        this.raiseChartOptionsChangedEvent();
    };
    ChartProxy.prototype.getLegendPadding = function () {
        return "" + this.chartOptions.legendPadding;
    };
    ChartProxy.prototype.setLegendPosition = function (position) {
        this.chart.legendPosition = position;
        this.chartOptions.legendPosition = position;
        this.raiseChartOptionsChangedEvent();
    };
    ChartProxy.prototype.getLegendPosition = function () {
        return "" + this.chartOptions.legendPosition;
    };
    ChartProxy.prototype.setTitleProperty = function (property, value) {
        if (!this.chart.title) {
            this.chart.title = {};
        }
        this.chart.title[property] = value;
        if (!this.chartOptions.title) {
            this.chartOptions.title = {};
        }
        this.chartOptions.title[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    ChartProxy.prototype.getTitleProperty = function (property) {
        return this.chart.title ? "" + this.chart.title[property] : '';
    };
    ChartProxy.prototype.getShadowEnabled = function () {
        var chartOptions = this.chartOptions;
        return chartOptions.seriesDefaults && chartOptions.seriesDefaults.shadow ? !!chartOptions.seriesDefaults.shadow.enabled : false;
    };
    ChartProxy.prototype.getShadowProperty = function (property) {
        var chartOptions = this.chartOptions;
        return chartOptions.seriesDefaults && chartOptions.seriesDefaults.shadow ? chartOptions.seriesDefaults.shadow[property] : '';
    };
    ChartProxy.prototype.setShadowProperty = function (property, value) {
        var series = this.getChart().series;
        series.forEach(function (s) {
            if (!s.shadow) {
                s.shadow = new dropShadow_1.DropShadow({ enabled: false, blur: 0, xOffset: 0, yOffset: 0, color: 'rgba(0,0,0,0.5)' });
            }
            s.shadow[property] = value;
        });
        var chartOptions = this.chartOptions;
        if (!chartOptions.seriesDefaults) {
            chartOptions.seriesDefaults = {};
        }
        if (!chartOptions.seriesDefaults.shadow) {
            chartOptions.seriesDefaults.shadow = {};
        }
        chartOptions.seriesDefaults.shadow[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    ChartProxy.prototype.raiseChartOptionsChangedEvent = function () {
        var event = {
            type: ag_grid_community_1.Events.EVENT_CHART_OPTIONS_CHANGED,
            chartType: this.chartProxyParams.chartType,
            chartOptions: this.chartOptions
        };
        this.chartProxyParams.eventService.dispatchEvent(event);
    };
    ChartProxy.prototype.destroy = function () {
        this.chart.destroy();
    };
    ChartProxy.darkLabelColour = 'rgb(221, 221, 221)';
    ChartProxy.lightLabelColour = 'rgb(87, 87, 87)';
    ChartProxy.darkAxisColour = 'rgb(100, 100, 100)';
    ChartProxy.lightAxisColour = 'rgb(219, 219, 219)';
    return ChartProxy;
}());
exports.ChartProxy = ChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/doughnutChartProxy.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/doughnutChartProxy.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chartBuilder_1 = __webpack_require__(/*! ../../../builder/chartBuilder */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js");
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var polarChartProxy_1 = __webpack_require__(/*! ./polarChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/polarChartProxy.js");
var DoughnutChartProxy = /** @class */ (function (_super) {
    __extends(DoughnutChartProxy, _super);
    function DoughnutChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.initChartOptions(ag_grid_community_1.ChartType.Doughnut, _this.defaultOptions());
        _this.chart = chartBuilder_1.ChartBuilder.createDoughnutChart(_this.chartOptions);
        return _this;
    }
    DoughnutChartProxy.prototype.update = function (params) {
        var _this = this;
        if (params.fields.length === 0) {
            this.chart.removeAllSeries();
            return;
        }
        var doughnutChart = this.chart;
        var fieldIds = params.fields.map(function (f) { return f.colId; });
        var seriesMap = {};
        doughnutChart.series.forEach(function (series) {
            var pieSeries = series;
            var id = pieSeries.angleField;
            if (fieldIds.indexOf(id) >= 0) {
                seriesMap[id] = pieSeries;
            }
        });
        var seriesOptions = this.chartOptions.seriesDefaults;
        // Use `Object.create` to prevent mutating the original user config that is possibly reused.
        var title = (seriesOptions.title ? Object.create(seriesOptions.title) : {});
        seriesOptions.title = title;
        var offset = 0;
        params.fields.forEach(function (f, index) {
            var existingSeries = seriesMap[f.colId];
            title.text = f.displayName;
            seriesOptions.angleField = f.colId;
            seriesOptions.showInLegend = index === 0; // show legend items for the first series only
            var calloutColors = seriesOptions.calloutColors;
            var pieSeries = existingSeries ? existingSeries : chartBuilder_1.ChartBuilder.createSeries(seriesOptions);
            pieSeries.labelField = params.category.id;
            pieSeries.data = params.data;
            // Normally all series provide legend items for every slice.
            // For our use case, where all series have the same number of slices in the same order with the same labels
            // (all of which can be different in other use cases) we don't want to show repeating labels in the legend,
            // so we only show legend items for the first series, and then when the user toggles the slices of the
            // first series in the legend, we programmatically toggle the corresponding slices of other series.
            if (index === 0) {
                pieSeries.toggleSeriesItem = function (itemId, enabled) {
                    var chart = pieSeries.chart;
                    if (chart) {
                        chart.series.forEach(function (series) {
                            series.enabled[itemId] = enabled;
                        });
                    }
                    pieSeries.scheduleData();
                };
            }
            pieSeries.outerRadiusOffset = offset;
            offset -= 20;
            pieSeries.innerRadiusOffset = offset;
            offset -= 20;
            var palette = _this.overriddenPalette ? _this.overriddenPalette : _this.chartProxyParams.getSelectedPalette();
            pieSeries.fills = palette.fills;
            pieSeries.strokes = palette.strokes;
            if (calloutColors) {
                pieSeries.calloutColors = calloutColors;
            }
            if (!existingSeries) {
                seriesMap[f.colId] = pieSeries;
            }
        });
        // Because repaints are automatic, it's important to remove/add/update series at once,
        // so that we don't get painted twice.
        var existingSeries = [];
        for (var id in seriesMap) {
            existingSeries.push(seriesMap[id]);
        }
        doughnutChart.series = existingSeries;
    };
    DoughnutChartProxy.prototype.defaultOptions = function () {
        var palette = this.chartProxyParams.getSelectedPalette();
        return {
            background: {
                fill: this.getBackgroundColor()
            },
            padding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            },
            legendPosition: 'right',
            legendPadding: 20,
            legend: {
                enabled: true,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerStrokeWidth: 1
            },
            seriesDefaults: {
                type: 'pie',
                fills: palette.fills,
                strokes: palette.strokes,
                strokeWidth: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                calloutColors: palette.strokes,
                calloutLength: 10,
                calloutStrokeWidth: 1,
                labelOffset: 3,
                labelEnabled: false,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelMinAngle: 0,
                tooltipEnabled: true,
                tooltipRenderer: undefined,
                showInLegend: true,
                shadow: {
                    enabled: false,
                    blur: 5,
                    xOffset: 3,
                    yOffset: 3,
                    color: 'rgba(0,0,0,0.5)'
                },
                title: {
                    enabled: false,
                    font: 'bold 12px Verdana, sans-serif',
                    color: 'black'
                }
            }
        };
    };
    return DoughnutChartProxy;
}(polarChartProxy_1.PolarChartProxy));
exports.DoughnutChartProxy = DoughnutChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/pieChartProxy.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/pieChartProxy.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chartBuilder_1 = __webpack_require__(/*! ../../../builder/chartBuilder */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/builder/chartBuilder.js");
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var polarChartProxy_1 = __webpack_require__(/*! ./polarChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/polarChartProxy.js");
var PieChartProxy = /** @class */ (function (_super) {
    __extends(PieChartProxy, _super);
    function PieChartProxy(params) {
        var _this = _super.call(this, params) || this;
        _this.initChartOptions(ag_grid_community_1.ChartType.Pie, _this.defaultOptions());
        _this.chart = chartBuilder_1.ChartBuilder.createPolarChart(_this.chartOptions);
        return _this;
    }
    PieChartProxy.prototype.update = function (params) {
        if (params.fields.length === 0) {
            this.chart.removeAllSeries();
            return;
        }
        var pieChart = this.chart;
        var existingSeries = pieChart.series[0];
        var existingSeriesId = existingSeries && existingSeries.angleField;
        var pieSeriesId = params.fields[0].colId;
        var pieSeriesName = params.fields[0].displayName;
        var pieSeries = existingSeries;
        var calloutColors = undefined;
        if (existingSeriesId !== pieSeriesId) {
            pieChart.removeSeries(existingSeries);
            var seriesOptions = this.chartOptions.seriesDefaults;
            // Use `Object.create` to prevent mutating the original user config that is possibly reused.
            var title = (seriesOptions.title ? Object.create(seriesOptions.title) : {});
            title.text = pieSeriesName;
            seriesOptions.title = title;
            seriesOptions.angleField = pieSeriesId;
            calloutColors = seriesOptions.calloutColors;
            pieSeries = chartBuilder_1.ChartBuilder.createSeries(seriesOptions);
        }
        pieSeries.labelField = params.category.id;
        pieSeries.data = params.data;
        var palette = this.overriddenPalette ? this.overriddenPalette : this.chartProxyParams.getSelectedPalette();
        pieSeries.fills = palette.fills;
        pieSeries.strokes = palette.strokes;
        if (calloutColors) {
            pieSeries.calloutColors = calloutColors;
        }
        if (!existingSeries) {
            pieChart.addSeries(pieSeries);
        }
    };
    PieChartProxy.prototype.defaultOptions = function () {
        var palette = this.chartProxyParams.getSelectedPalette();
        return {
            background: {
                fill: this.getBackgroundColor()
            },
            padding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            },
            legendPosition: 'right',
            legendPadding: 20,
            legend: {
                enabled: true,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerStrokeWidth: 1
            },
            seriesDefaults: {
                type: 'pie',
                fills: palette.fills,
                strokes: palette.strokes,
                strokeWidth: 1,
                strokeOpacity: 1,
                fillOpacity: 1,
                calloutColors: palette.strokes,
                calloutLength: 10,
                calloutStrokeWidth: 1,
                labelOffset: 3,
                labelEnabled: false,
                labelFontStyle: undefined,
                labelFontWeight: 'normal',
                labelFontSize: 12,
                labelFontFamily: 'Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelMinAngle: 0,
                tooltipEnabled: true,
                tooltipRenderer: undefined,
                showInLegend: true,
                shadow: {
                    enabled: false,
                    blur: 5,
                    xOffset: 3,
                    yOffset: 3,
                    color: 'rgba(0,0,0,0.5)'
                },
                title: {
                    enabled: false,
                    font: 'bold 12px Verdana, sans-serif',
                    color: 'black'
                }
            }
        };
    };
    return PieChartProxy;
}(polarChartProxy_1.PolarChartProxy));
exports.PieChartProxy = PieChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/polarChartProxy.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/polarChartProxy.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chartProxy_1 = __webpack_require__(/*! ../chartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/chartProxy.js");
var PolarChartProxy = /** @class */ (function (_super) {
    __extends(PolarChartProxy, _super);
    function PolarChartProxy(params) {
        return _super.call(this, params) || this;
    }
    PolarChartProxy.prototype.setSeriesProperty = function (property, value) {
        var series = this.getChart().series;
        series.forEach(function (s) { return s[property] = value; });
        if (!this.chartOptions.seriesDefaults) {
            this.chartOptions.seriesDefaults = {};
        }
        this.chartOptions.seriesDefaults[property] = value;
        this.raiseChartOptionsChangedEvent();
    };
    PolarChartProxy.prototype.getSeriesProperty = function (property) {
        return this.chartOptions.seriesDefaults ? "" + this.chartOptions.seriesDefaults[property] : '';
    };
    PolarChartProxy.prototype.getTooltipsEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.tooltipEnabled : false;
    };
    PolarChartProxy.prototype.getLabelEnabled = function () {
        return this.chartOptions.seriesDefaults ? !!this.chartOptions.seriesDefaults.labelEnabled : false;
    };
    return PolarChartProxy;
}(chartProxy_1.ChartProxy));
exports.PolarChartProxy = PolarChartProxy;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var ChartTranslator = /** @class */ (function () {
    function ChartTranslator() {
    }
    ChartTranslator_1 = ChartTranslator;
    ChartTranslator.prototype.translate = function (toTranslate) {
        var translate = this.gridOptionsWrapper.getLocaleTextFunc();
        var defaultTranslation = ChartTranslator_1.DEFAULT_TRANSLATIONS[toTranslate];
        return translate(toTranslate, defaultTranslation);
    };
    var ChartTranslator_1;
    ChartTranslator.DEFAULT_TRANSLATIONS = {
        pivotChartTitle: 'Pivot Chart',
        rangeChartTitle: 'Range Chart',
        settings: 'Settings',
        data: 'Data',
        format: 'Format',
        categories: 'Categories',
        series: 'Series',
        xyValues: 'X Y Values',
        axis: 'Axis',
        color: 'Color',
        thickness: 'Thickness',
        xRotation: 'X Rotation',
        yRotation: 'Y Rotation',
        ticks: 'Ticks',
        width: 'Width',
        length: 'Length',
        padding: 'Padding',
        chart: 'Chart',
        title: 'Title',
        font: 'Font',
        top: 'Top',
        right: 'Right',
        bottom: 'Bottom',
        left: 'Left',
        labels: 'Labels',
        size: 'Size',
        legend: 'Legend',
        position: 'Position',
        markerSize: 'Marker Size',
        markerStroke: 'Marker Stroke',
        markerPadding: 'Marker Padding',
        itemPaddingX: 'Item Padding X',
        itemPaddingY: 'Item Padding Y',
        strokeWidth: 'Stroke Width',
        offset: 'Offset',
        tooltips: 'Tooltips',
        offsets: 'Offsets',
        callout: 'Callout',
        markers: 'Markers',
        shadow: 'Shadow',
        blur: 'Blur',
        xOffset: 'X Offset',
        yOffset: 'Y Offset',
        lineWidth: 'Line Width',
        normal: 'Normal',
        bold: 'Bold',
        italic: 'Italic',
        boldItalic: 'Bold Italic',
        fillOpacity: 'Fill Opacity',
        strokeOpacity: 'Line Opacity',
        groupedColumnTooltip: 'Grouped',
        stackedColumnTooltip: 'Stacked',
        normalizedColumnTooltip: '100% Stacked',
        groupedBarTooltip: 'Grouped',
        stackedBarTooltip: 'Stacked',
        normalizedBarTooltip: '100% Stacked',
        pieTooltip: 'Pie',
        doughnutTooltip: 'Doughnut',
        lineTooltip: 'Line',
        groupedAreaTooltip: 'Grouped',
        stackedAreaTooltip: 'Stacked',
        normalizedAreaTooltip: '100% Stacked',
        scatterTooltip: 'Scatter',
        bubbleTooltip: 'Bubble',
        columnGroup: 'Column',
        barGroup: 'Bar',
        pieGroup: 'Pie',
        lineGroup: 'Line',
        scatterGroup: 'X Y (Scatter)',
        areaGroup: 'Area',
        pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
        noDataToChart: 'No data available to be charted.',
    };
    __decorate([
        ag_grid_community_1.Autowired('gridOptionsWrapper'),
        __metadata("design:type", ag_grid_community_1.GridOptionsWrapper)
    ], ChartTranslator.prototype, "gridOptionsWrapper", void 0);
    ChartTranslator = ChartTranslator_1 = __decorate([
        ag_grid_community_1.Bean("chartTranslator")
    ], ChartTranslator);
    return ChartTranslator;
}());
exports.ChartTranslator = ChartTranslator;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/gridChartComp.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/gridChartComp.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartMenu_1 = __webpack_require__(/*! ./menu/chartMenu */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/chartMenu.js");
var chartController_1 = __webpack_require__(/*! ./chartController */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartController.js");
var chartModel_1 = __webpack_require__(/*! ./chartModel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartModel.js");
var barChartProxy_1 = __webpack_require__(/*! ./chartProxies/cartesian/barChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/barChartProxy.js");
var areaChartProxy_1 = __webpack_require__(/*! ./chartProxies/cartesian/areaChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/areaChartProxy.js");
var lineChartProxy_1 = __webpack_require__(/*! ./chartProxies/cartesian/lineChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/lineChartProxy.js");
var pieChartProxy_1 = __webpack_require__(/*! ./chartProxies/polar/pieChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/pieChartProxy.js");
var doughnutChartProxy_1 = __webpack_require__(/*! ./chartProxies/polar/doughnutChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/polar/doughnutChartProxy.js");
var scatterChartProxy_1 = __webpack_require__(/*! ./chartProxies/cartesian/scatterChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/scatterChartProxy.js");
var palettes_1 = __webpack_require__(/*! ../../charts/chart/palettes */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js");
var chartTranslator_1 = __webpack_require__(/*! ./chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var categoryAxis_1 = __webpack_require__(/*! ../../charts/chart/axis/categoryAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/categoryAxis.js");
var numberAxis_1 = __webpack_require__(/*! ../../charts/chart/axis/numberAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/numberAxis.js");
var GridChartComp = /** @class */ (function (_super) {
    __extends(GridChartComp, _super);
    function GridChartComp(params) {
        var _this = _super.call(this, GridChartComp.TEMPLATE) || this;
        _this.params = params;
        return _this;
    }
    GridChartComp.prototype.init = function () {
        var modelParams = {
            pivotChart: this.params.pivotChart,
            chartType: this.params.chartType,
            aggFunc: this.params.aggFunc,
            cellRanges: [this.params.cellRange],
            suppressChartRanges: this.params.suppressChartRanges,
            palettes: palettes_1.palettes,
            activePalette: 0
        };
        this.model = new chartModel_1.ChartModel(modelParams);
        this.getContext().wireBean(this.model);
        this.chartController = new chartController_1.ChartController(this.model);
        this.getContext().wireBean(this.chartController);
        this.createChart();
        if (this.params.insideDialog) {
            this.addDialog();
        }
        this.addResizeListener();
        this.addMenu();
        this.addDestroyableEventListener(this.getGui(), 'focusin', this.setActiveChartCellRange.bind(this));
        this.addDestroyableEventListener(this.chartController, chartController_1.ChartController.EVENT_CHART_MODEL_UPDATED, this.refresh.bind(this));
        this.addDestroyableEventListener(this.chartMenu, chartMenu_1.ChartMenu.EVENT_DOWNLOAD_CHART, this.downloadChart.bind(this));
        this.refresh();
    };
    GridChartComp.prototype.createChart = function () {
        var _a = this.params, width = _a.width, height = _a.height;
        // destroy chart and remove it from DOM
        if (this.chartProxy) {
            var chart = this.chartProxy.getChart();
            height = chart.height;
            width = chart.width;
            this.chartProxy.destroy();
            var canvas = this.eChart.querySelector('canvas');
            if (canvas) {
                this.eChart.removeChild(canvas);
            }
        }
        var processChartOptionsFunc = this.params.processChartOptions ?
            this.params.processChartOptions : this.gridOptionsWrapper.getProcessChartOptionsFunc();
        var categorySelected = this.model.getSelectedDimension().colId !== chartModel_1.ChartModel.DEFAULT_CATEGORY;
        var chartProxyParams = {
            chartType: this.model.getChartType(),
            processChartOptions: processChartOptionsFunc,
            getSelectedPalette: this.getSelectedPalette.bind(this),
            isDarkTheme: this.environment.isThemeDark.bind(this.environment),
            parentElement: this.eChart,
            width: width,
            height: height,
            eventService: this.eventService,
            categorySelected: categorySelected,
            grouping: this.model.isGrouping(),
            document: this.gridOptionsWrapper.getDocument()
        };
        // local state used to detect when chart type changes
        this.currentChartType = this.model.getChartType();
        this.currentChartGroupingActive = this.model.isGrouping();
        this.chartProxy = this.createChartProxy(chartProxyParams);
        // update chart proxy ref (used by format panel)
        this.model.setChartProxy(this.chartProxy);
    };
    GridChartComp.prototype.getSelectedPalette = function () {
        return this.model.getPalettes()[this.model.getActivePalette()];
    };
    GridChartComp.prototype.createChartProxy = function (chartOptions) {
        switch (chartOptions.chartType) {
            case ag_grid_community_1.ChartType.GroupedColumn:
            case ag_grid_community_1.ChartType.StackedColumn:
            case ag_grid_community_1.ChartType.NormalizedColumn:
            case ag_grid_community_1.ChartType.GroupedBar:
            case ag_grid_community_1.ChartType.StackedBar:
            case ag_grid_community_1.ChartType.NormalizedBar:
                return new barChartProxy_1.BarChartProxy(chartOptions);
            case ag_grid_community_1.ChartType.Pie:
                return new pieChartProxy_1.PieChartProxy(chartOptions);
            case ag_grid_community_1.ChartType.Doughnut:
                return new doughnutChartProxy_1.DoughnutChartProxy(chartOptions);
            case ag_grid_community_1.ChartType.Area:
            case ag_grid_community_1.ChartType.StackedArea:
            case ag_grid_community_1.ChartType.NormalizedArea:
                return new areaChartProxy_1.AreaChartProxy(chartOptions);
            case ag_grid_community_1.ChartType.Line:
                return new lineChartProxy_1.LineChartProxy(chartOptions);
            case ag_grid_community_1.ChartType.Scatter:
            case ag_grid_community_1.ChartType.Bubble:
                return new scatterChartProxy_1.ScatterChartProxy(chartOptions);
        }
    };
    GridChartComp.prototype.addDialog = function () {
        var _this = this;
        var title = this.chartTranslator.translate(this.params.pivotChart ? 'pivotChartTitle' : 'rangeChartTitle');
        this.chartDialog = new ag_grid_community_1.AgDialog({
            resizable: true,
            movable: true,
            maximizable: true,
            title: title,
            component: this,
            centered: true,
            closable: true
        });
        this.getContext().wireBean(this.chartDialog);
        this.chartDialog.addEventListener(ag_grid_community_1.AgDialog.EVENT_DESTROYED, function () { return _this.destroy(); });
    };
    GridChartComp.prototype.addMenu = function () {
        this.chartMenu = new chartMenu_1.ChartMenu(this.chartController);
        this.chartMenu.setParentComponent(this);
        this.getContext().wireBean(this.chartMenu);
        this.eChartComponentsWrapper.appendChild(this.chartMenu.getGui());
    };
    GridChartComp.prototype.refresh = function () {
        if (this.shouldRecreateChart()) {
            this.createChart();
        }
        this.updateChart();
    };
    GridChartComp.prototype.shouldRecreateChart = function () {
        var chartTypeChanged = this.model.getChartType() !== this.currentChartType;
        var groupingChanged = this.currentChartGroupingActive !== this.model.isGrouping();
        if (chartTypeChanged || groupingChanged) {
            return true;
        }
        // we also need to recreate XY charts when xAxis changes
        if (this.isXYChart()) {
            var categorySelected = !this.chartController.isDefaultCategorySelected();
            var chart = this.chartProxy.getChart();
            var switchingToCategoryAxis = categorySelected && chart.xAxis instanceof numberAxis_1.NumberAxis;
            var switchingToNumberAxis = !categorySelected && chart.xAxis instanceof categoryAxis_1.CategoryAxis;
            return switchingToCategoryAxis || switchingToNumberAxis;
        }
        return false;
    };
    GridChartComp.prototype.getChartComponentsWrapper = function () {
        return this.eChartComponentsWrapper;
    };
    GridChartComp.prototype.getDockedContainer = function () {
        return this.eDockedContainer;
    };
    GridChartComp.prototype.slideDockedOut = function (width) {
        this.eDockedContainer.style.minWidth = width + 'px';
    };
    GridChartComp.prototype.slideDockedIn = function () {
        this.eDockedContainer.style.minWidth = '0';
    };
    GridChartComp.prototype.getCurrentChartType = function () {
        return this.currentChartType;
    };
    GridChartComp.prototype.updateChart = function () {
        var _a = this, model = _a.model, chartProxy = _a.chartProxy;
        var selectedCols = model.getSelectedValueColState();
        var fields = selectedCols.map(function (c) {
            return { colId: c.colId, displayName: c.displayName };
        });
        var data = model.getData();
        var chartEmpty = this.handleEmptyChart(data, fields);
        if (chartEmpty) {
            return;
        }
        var selectedDimension = model.getSelectedDimension();
        var chartUpdateParams = {
            data: data,
            category: {
                id: selectedDimension.colId,
                name: selectedDimension.displayName
            },
            fields: fields
        };
        chartProxy.update(chartUpdateParams);
    };
    GridChartComp.prototype.handleEmptyChart = function (data, fields) {
        var parent = this.chartProxy.getChart().parent;
        var pivotModeDisabled = this.model.isPivotChart() && !this.model.isPivotMode();
        var minFieldsRequired = 1;
        if (this.chartController.isActiveXYChart()) {
            if (this.model.getChartType() === ag_grid_community_1.ChartType.Bubble) {
                minFieldsRequired = 3;
            }
            else {
                minFieldsRequired = 2;
            }
        }
        var isEmptyChart = fields.length < minFieldsRequired || data.length === 0;
        if (parent) {
            ag_grid_community_1._.addOrRemoveCssClass(parent, 'ag-chart-empty', pivotModeDisabled || isEmptyChart);
        }
        if (pivotModeDisabled) {
            this.eEmpty.innerText = this.chartTranslator.translate('pivotChartRequiresPivotMode');
            return true;
        }
        if (isEmptyChart) {
            this.eEmpty.innerText = this.chartTranslator.translate('noDataToChart');
            return true;
        }
        return false;
    };
    GridChartComp.prototype.downloadChart = function () {
        var chart = this.chartProxy.getChart();
        var fileName = chart.title ? chart.title.text : 'chart';
        chart.scene.download(fileName);
    };
    GridChartComp.prototype.refreshCanvasSize = function () {
        var eChartWrapper = this.eChart;
        var chart = this.chartProxy.getChart();
        chart.height = ag_grid_community_1._.getInnerHeight(eChartWrapper);
        chart.width = ag_grid_community_1._.getInnerWidth(eChartWrapper);
    };
    GridChartComp.prototype.addResizeListener = function () {
        var _this = this;
        var eGui = this.getGui();
        var resizeFunc = function () {
            if (!eGui || !eGui.offsetParent) {
                observeResizeFunc();
                return;
            }
            _this.refreshCanvasSize();
        };
        var observeResizeFunc = this.resizeObserverService.observeResize(this.eChart, resizeFunc, 5);
    };
    GridChartComp.prototype.setActiveChartCellRange = function (focusEvent) {
        if (this.getGui().contains(focusEvent.relatedTarget)) {
            return;
        }
        this.chartController.setChartRange();
    };
    GridChartComp.prototype.isXYChart = function () {
        return [ag_grid_community_1.ChartType.Scatter, ag_grid_community_1.ChartType.Bubble].indexOf(this.model.getChartType()) > -1;
    };
    GridChartComp.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.chartController) {
            this.chartController.destroy();
        }
        if (this.chartProxy) {
            this.chartProxy.destroy();
        }
        if (this.chartMenu) {
            this.chartMenu.destroy();
        }
        // don't want to invoke destroy() on the Dialog / MessageBox (prevents destroy loop)
        if (this.chartDialog && this.chartDialog.isAlive()) {
            this.chartDialog.destroy();
        }
        // if the user is providing containers for the charts, we need to clean up, otherwise the old chart
        // data will still be visible although the chart is no longer bound to the grid
        var eGui = this.getGui();
        ag_grid_community_1._.clearElement(eGui);
        // remove from parent, so if user provided container, we detach from the provided dom element
        ag_grid_community_1._.removeFromParent(eGui);
    };
    GridChartComp.TEMPLATE = "<div class=\"ag-chart\" tabindex=\"-1\">\n            <div ref=\"eChartComponentsWrapper\" tabindex=\"-1\" class=\"ag-chart-components-wrapper\">\n                <div ref=\"eChart\" class=\"ag-chart-canvas-wrapper\">\n                    <div ref=\"eEmpty\" class=\"ag-chart-empty-text ag-unselectable\"></div>\n                </div>\n            </div>\n            <div ref=\"eDockedContainer\" class=\"ag-chart-docked-container\"></div>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('eChart'),
        __metadata("design:type", HTMLElement)
    ], GridChartComp.prototype, "eChart", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('eChartComponentsWrapper'),
        __metadata("design:type", HTMLElement)
    ], GridChartComp.prototype, "eChartComponentsWrapper", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('eDockedContainer'),
        __metadata("design:type", HTMLElement)
    ], GridChartComp.prototype, "eDockedContainer", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('eEmpty'),
        __metadata("design:type", HTMLElement)
    ], GridChartComp.prototype, "eEmpty", void 0);
    __decorate([
        ag_grid_community_1.Autowired('resizeObserverService'),
        __metadata("design:type", ag_grid_community_1.ResizeObserverService)
    ], GridChartComp.prototype, "resizeObserverService", void 0);
    __decorate([
        ag_grid_community_1.Autowired('gridOptionsWrapper'),
        __metadata("design:type", ag_grid_community_1.GridOptionsWrapper)
    ], GridChartComp.prototype, "gridOptionsWrapper", void 0);
    __decorate([
        ag_grid_community_1.Autowired('environment'),
        __metadata("design:type", ag_grid_community_1.Environment)
    ], GridChartComp.prototype, "environment", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], GridChartComp.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.Autowired('eventService'),
        __metadata("design:type", ag_grid_community_1.EventService)
    ], GridChartComp.prototype, "eventService", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GridChartComp.prototype, "init", null);
    return GridChartComp;
}(ag_grid_community_1.Component));
exports.GridChartComp = GridChartComp;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/chartMenu.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/chartMenu.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var tabbedChartMenu_1 = __webpack_require__(/*! ./tabbedChartMenu */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/tabbedChartMenu.js");
var ChartMenu = /** @class */ (function (_super) {
    __extends(ChartMenu, _super);
    function ChartMenu(chartController) {
        var _this = _super.call(this, ChartMenu.TEMPLATE) || this;
        _this.buttons = {
            chartSettings: ['menu', function () { return _this.showMenu('chartSettings'); }],
            chartData: ['menu', function () { return _this.showMenu('chartData'); }],
            chartFormat: ['menu', function () { return _this.showMenu('chartFormat'); }],
            chartUnlink: ['linked', function (e) { return _this.toggleDetached(e); }],
            chartDownload: ['save', function () { return _this.saveChart(); }]
        };
        _this.tabs = [];
        _this.chartController = chartController;
        return _this;
    }
    ChartMenu.prototype.postConstruct = function () {
        this.createButtons();
    };
    ChartMenu.prototype.getToolbarOptions = function () {
        var _this = this;
        var tabOptions = ['chartSettings', 'chartData', 'chartFormat', 'chartUnlink', 'chartDownload'];
        var toolbarItemsFunc = this.gridOptionsWrapper.getChartToolbarItemsFunc();
        if (toolbarItemsFunc) {
            var params = {
                api: this.gridOptionsWrapper.getApi(),
                columnApi: this.gridOptionsWrapper.getColumnApi(),
                defaultItems: tabOptions
            };
            tabOptions = toolbarItemsFunc(params).filter(function (option) {
                if (!_this.buttons[option]) {
                    console.warn("ag-Grid: '" + option + " is not a valid Chart Toolbar Option");
                    return false;
                }
                return true;
            });
        }
        // pivot charts use the column tool panel instead of the data panel
        if (this.chartController.isPivotChart()) {
            tabOptions = tabOptions.filter(function (option) { return option !== 'chartData'; });
        }
        var ignoreOptions = ['chartUnlink', 'chartDownload'];
        this.tabs = tabOptions.filter(function (option) { return ignoreOptions.indexOf(option) === -1; });
        return tabOptions.filter(function (value) { return ignoreOptions.indexOf(value) !== -1 || (_this.tabs.length && value === _this.tabs[0]); });
    };
    ChartMenu.prototype.toggleDetached = function (e) {
        var target = e.target;
        var active = ag_grid_community_1._.containsClass(target, 'ag-icon-linked');
        ag_grid_community_1._.addOrRemoveCssClass(target, 'ag-icon-linked', !active);
        ag_grid_community_1._.addOrRemoveCssClass(target, 'ag-icon-unlinked', active);
        this.chartController.detachChartRange();
    };
    ChartMenu.prototype.createButtons = function () {
        var _this = this;
        var chartToolbarOptions = this.getToolbarOptions();
        chartToolbarOptions.forEach(function (button) {
            var buttonConfig = _this.buttons[button];
            var iconName = buttonConfig[0], callback = buttonConfig[1];
            var buttonEl = ag_grid_community_1._.createIconNoSpan(iconName, _this.gridOptionsWrapper, undefined, true);
            _this.addDestroyableEventListener(buttonEl, 'click', callback);
            _this.getGui().appendChild(buttonEl);
        });
    };
    ChartMenu.prototype.saveChart = function () {
        var event = {
            type: ChartMenu.EVENT_DOWNLOAD_CHART
        };
        this.dispatchEvent(event);
    };
    ChartMenu.prototype.createMenu = function (defaultTab) {
        var _this = this;
        var chartComp = this.getParentComponent();
        var dockedContainer = chartComp.getDockedContainer();
        var context = this.getContext();
        var menuPanel = this.menuPanel = new ag_grid_community_1.AgPanel({
            minWidth: 220,
            width: 220,
            height: '100%',
            closable: true,
            hideTitleBar: true
        });
        context.wireBean(this.menuPanel);
        menuPanel.setParentComponent(this);
        dockedContainer.appendChild(menuPanel.getGui());
        this.tabbedMenu = new tabbedChartMenu_1.TabbedChartMenu({
            controller: this.chartController,
            type: chartComp.getCurrentChartType(),
            panels: this.tabs
        });
        context.wireBean(this.tabbedMenu);
        this.addDestroyableEventListener(this.menuPanel, ag_grid_community_1.Component.EVENT_DESTROYED, function () {
            _this.tabbedMenu.destroy();
        });
        return new ag_grid_community_1.Promise(function (res) {
            window.setTimeout(function () {
                menuPanel.setBodyComponent(_this.tabbedMenu);
                _this.tabbedMenu.showTab(defaultTab);
                _this.addDestroyableEventListener(chartComp.getChartComponentsWrapper(), 'click', function () {
                    if (ag_grid_community_1._.containsClass(chartComp.getGui(), 'ag-has-menu')) {
                        _this.hideMenu();
                    }
                });
                res(menuPanel);
            }, 100);
        });
    };
    ChartMenu.prototype.slideDockedContainer = function () {
        var _this = this;
        var chartComp = this.getParentComponent();
        chartComp.slideDockedOut(this.menuPanel.getWidth());
        window.setTimeout(function () {
            ag_grid_community_1._.addCssClass(_this.getParentComponent().getGui(), 'ag-has-menu');
        }, 500);
    };
    ChartMenu.prototype.showMenu = function (tabName) {
        var _this = this;
        var tab = this.tabs.indexOf(tabName);
        if (!this.menuPanel) {
            this.createMenu(tab)
                .then(function () {
                _this.slideDockedContainer();
            });
        }
        else {
            this.slideDockedContainer();
        }
    };
    ChartMenu.prototype.hideMenu = function () {
        var chartComp = this.getParentComponent();
        chartComp.slideDockedIn();
        ag_grid_community_1._.removeCssClass(this.getParentComponent().getGui(), 'ag-has-menu');
    };
    ChartMenu.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.menuPanel && this.menuPanel.isAlive()) {
            this.menuPanel.destroy();
        }
    };
    ChartMenu.EVENT_DOWNLOAD_CHART = 'downloadChart';
    ChartMenu.TEMPLATE = "<div class=\"ag-chart-menu\"></div>";
    __decorate([
        ag_grid_community_1.Autowired('gridOptionsWrapper'),
        __metadata("design:type", ag_grid_community_1.GridOptionsWrapper)
    ], ChartMenu.prototype, "gridOptionsWrapper", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartMenu.prototype, "postConstruct", null);
    return ChartMenu;
}(ag_grid_community_1.Component));
exports.ChartMenu = ChartMenu;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/data/chartDataPanel.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/data/chartDataPanel.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartController_1 = __webpack_require__(/*! ../../chartController */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartController.js");
var chartTranslator_1 = __webpack_require__(/*! ../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var ChartDataPanel = /** @class */ (function (_super) {
    __extends(ChartDataPanel, _super);
    function ChartDataPanel(chartController) {
        var _this = _super.call(this, ChartDataPanel.TEMPLATE) || this;
        _this.columnComps = {};
        _this.dimensionComps = [];
        _this.chartController = chartController;
        return _this;
    }
    ChartDataPanel.prototype.init = function () {
        this.createDataGroupElements();
        this.addDestroyableEventListener(this.chartController, chartController_1.ChartController.EVENT_CHART_MODEL_UPDATED, this.createDataGroupElements.bind(this));
    };
    ChartDataPanel.prototype.createDataGroupElements = function () {
        var _this = this;
        this.destroyColumnComps();
        var eGui = this.getGui();
        var _a = this.chartController.getColStateForMenu(), dimensionCols = _a.dimensionCols, valueCols = _a.valueCols;
        [dimensionCols, valueCols].forEach(function (group, idx) {
            var isCategory = idx === 0;
            var dataGroupKey = isCategory ? 'categories' : _this.chartController.isActiveXYChart() ? 'xyValues' : 'series';
            var groupComp = new ag_grid_community_1.AgGroupComponent({
                title: _this.chartTranslator.translate(dataGroupKey),
                enabled: true,
                suppressEnabledCheckbox: true,
                suppressOpenCloseIcons: false
            });
            _this.getContext().wireBean(groupComp);
            group.forEach(_this.getColumnStateMapper(isCategory, groupComp));
            var eDiv = document.createElement('div');
            eDiv.appendChild(groupComp.getGui());
            eGui.appendChild(eDiv);
        });
    };
    ChartDataPanel.prototype.getColumnStateMapper = function (dimension, container) {
        var _this = this;
        return function (colState) {
            var comp = dimension
                ? new ag_grid_community_1.AgRadioButton()
                : new ag_grid_community_1.AgCheckbox();
            _this.getContext().wireBean(comp);
            comp.setLabel(ag_grid_community_1._.escape(colState.displayName));
            comp.setValue(colState.selected);
            _this.columnComps[colState.colId] = comp;
            if (dimension) {
                comp.setInputName('chartDimension' + _this.getCompId());
                _this.dimensionComps.push(comp);
            }
            _this.addDestroyableEventListener(comp, ag_grid_community_1.AgAbstractField.EVENT_CHANGED, function () {
                colState.selected = comp.getValue();
                _this.chartController.updateForMenuChange(colState);
            });
            container.addItem(comp);
        };
    };
    ChartDataPanel.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.destroyColumnComps();
    };
    ChartDataPanel.prototype.destroyColumnComps = function () {
        ag_grid_community_1._.clearElement(this.getGui());
        if (this.columnComps) {
            ag_grid_community_1._.iterateObject(this.columnComps, function (key, renderedItem) { return renderedItem.destroy(); });
        }
        this.columnComps = {};
    };
    ChartDataPanel.TEMPLATE = "<div class=\"ag-chart-data-wrapper\"></div>";
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], ChartDataPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartDataPanel.prototype, "init", null);
    return ChartDataPanel;
}(ag_grid_community_1.Component));
exports.ChartDataPanel = ChartDataPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/axis/axisPanel.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/axis/axisPanel.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var axisTicksPanel_1 = __webpack_require__(/*! ./axisTicksPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/axis/axisTicksPanel.js");
var labelPanel_1 = __webpack_require__(/*! ../label/labelPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var AxisPanel = /** @class */ (function (_super) {
    __extends(AxisPanel, _super);
    function AxisPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    AxisPanel.prototype.init = function () {
        this.setTemplate(AxisPanel.TEMPLATE);
        this.initAxis();
        this.initAxisTicks();
        this.initAxisLabels();
    };
    AxisPanel.prototype.initAxis = function () {
        var _this = this;
        this.axisGroup
            .setTitle(this.chartTranslator.translate('axis'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
        this.axisColorInput
            .setLabel(this.chartTranslator.translate('color'))
            .setLabelWidth('flex')
            .setInputWidth(45)
            .setValue(this.chartProxy.getCommonAxisProperty('lineColor'))
            .onValueChange(function (newColor) { return _this.chartProxy.setCommonAxisProperty('lineColor', newColor); });
        this.axisLineWidthSlider
            .setLabel(this.chartTranslator.translate('thickness'))
            .setMaxValue(10)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getCommonAxisProperty('lineWidth'))
            .onValueChange(function (newValue) { return _this.chartProxy.setCommonAxisProperty('lineWidth', newValue); });
    };
    AxisPanel.prototype.initAxisTicks = function () {
        var axisTicksComp = new axisTicksPanel_1.AxisTicksPanel(this.chartController);
        this.getContext().wireBean(axisTicksComp);
        this.axisGroup.addItem(axisTicksComp);
        this.activePanels.push(axisTicksComp);
    };
    AxisPanel.prototype.initAxisLabels = function () {
        var _this = this;
        var initialFont = {
            family: this.chartProxy.getCommonAxisProperty('labelFontFamily'),
            style: this.chartProxy.getCommonAxisProperty('labelFontStyle'),
            weight: this.chartProxy.getCommonAxisProperty('labelFontWeight'),
            size: parseInt(this.chartProxy.getCommonAxisProperty('labelFontSize')),
            color: this.chartProxy.getCommonAxisProperty('labelColor')
        };
        // note we don't set the font style via legend panel
        var setFont = function (font) {
            if (font.family) {
                _this.chartProxy.setCommonAxisProperty('labelFontFamily', font.family);
            }
            if (font.weight) {
                _this.chartProxy.setCommonAxisProperty('labelFontWeight', font.weight);
            }
            if (font.size) {
                _this.chartProxy.setCommonAxisProperty('labelFontSize', font.size);
            }
            if (font.color) {
                _this.chartProxy.setCommonAxisProperty('labelColor', font.color);
            }
            _this.chartProxy.getChart().performLayout();
        };
        var params = {
            enabled: true,
            suppressEnabledCheckbox: true,
            initialFont: initialFont,
            setFont: setFont
        };
        var labelPanelComp = new labelPanel_1.LabelPanel(params);
        this.getContext().wireBean(labelPanelComp);
        this.axisGroup.addItem(labelPanelComp);
        this.activePanels.push(labelPanelComp);
        this.addAdditionalLabelComps(labelPanelComp);
    };
    AxisPanel.prototype.addAdditionalLabelComps = function (labelPanelComp) {
        var _this = this;
        var createAngleComp = function (label, initialValue, updateFunc) {
            var rotationInput = new ag_grid_community_1.AgAngleSelect()
                .setLabel(label)
                .setLabelWidth("flex")
                .setValue(initialValue)
                .onValueChange(updateFunc);
            _this.getContext().wireBean(rotationInput);
            labelPanelComp.addCompToPanel(rotationInput);
        };
        var degreesSymbol = String.fromCharCode(176);
        var xRotationLabel = this.chartTranslator.translate('xRotation') + " " + degreesSymbol;
        var xUpdateFunc = function (newValue) { return _this.chartProxy.setXRotation(newValue); };
        createAngleComp(xRotationLabel, this.chartProxy.getXRotation(), xUpdateFunc);
        var yRotationLabel = this.chartTranslator.translate('yRotation') + " " + degreesSymbol;
        var yUpdateFunc = function (newValue) { return _this.chartProxy.setYRotation(newValue); };
        createAngleComp(yRotationLabel, this.chartProxy.getYRotation(), yUpdateFunc);
    };
    AxisPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    AxisPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    AxisPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"axisGroup\">\n                <ag-color-picker ref=\"axisColorInput\"></ag-color-picker>\n                <ag-slider ref=\"axisLineWidthSlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('axisGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], AxisPanel.prototype, "axisGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('axisLineWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AxisPanel.prototype, "axisLineWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('axisColorInput'),
        __metadata("design:type", ag_grid_community_1.AgColorPicker)
    ], AxisPanel.prototype, "axisColorInput", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], AxisPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AxisPanel.prototype, "init", null);
    return AxisPanel;
}(ag_grid_community_1.Component));
exports.AxisPanel = AxisPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/axis/axisTicksPanel.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/axis/axisTicksPanel.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var AxisTicksPanel = /** @class */ (function (_super) {
    __extends(AxisTicksPanel, _super);
    function AxisTicksPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    AxisTicksPanel.prototype.init = function () {
        this.setTemplate(AxisTicksPanel.TEMPLATE);
        this.initAxisTicks();
    };
    AxisTicksPanel.prototype.initAxisTicks = function () {
        var _this = this;
        this.axisTicksGroup
            .setTitle(this.chartTranslator.translate('ticks'))
            .hideOpenCloseIcons(true)
            .hideEnabledCheckbox(true);
        this.axisTicksColorPicker
            .setLabel(this.chartTranslator.translate('color'))
            .setLabelWidth('flex')
            .setInputWidth(45)
            .setValue(this.chartProxy.getCommonAxisProperty('tickColor'))
            .onValueChange(function (newColor) { return _this.chartProxy.setCommonAxisProperty('tickColor', newColor); });
        var initInput = function (property, input, label, maxValue) {
            input.setLabel(label)
                .setValue(_this.chartProxy.getCommonAxisProperty(property))
                .setMaxValue(maxValue)
                .setTextFieldWidth(45)
                .onValueChange(function (newValue) { return _this.chartProxy.setCommonAxisProperty(property, newValue); });
        };
        initInput('tickWidth', this.axisTicksWidthSlider, this.chartTranslator.translate('width'), 10);
        initInput('tickSize', this.axisTicksSizeSlider, this.chartTranslator.translate('length'), 30);
        initInput('tickPadding', this.axisTicksPaddingSlider, this.chartTranslator.translate('padding'), 30);
    };
    AxisTicksPanel.TEMPLATE = "<div>         \n            <ag-group-component ref=\"axisTicksGroup\">\n                <ag-color-picker ref=\"axisTicksColorPicker\"></ag-color-picker>\n                <ag-slider ref=\"axisTicksWidthSlider\"></ag-slider>\n                <ag-slider ref=\"axisTicksSizeSlider\"></ag-slider>\n                <ag-slider ref=\"axisTicksPaddingSlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('axisTicksGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], AxisTicksPanel.prototype, "axisTicksGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('axisTicksColorPicker'),
        __metadata("design:type", ag_grid_community_1.AgColorPicker)
    ], AxisTicksPanel.prototype, "axisTicksColorPicker", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('axisTicksWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AxisTicksPanel.prototype, "axisTicksWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('axisTicksSizeSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AxisTicksPanel.prototype, "axisTicksSizeSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('axisTicksPaddingSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AxisTicksPanel.prototype, "axisTicksPaddingSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], AxisTicksPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AxisTicksPanel.prototype, "init", null);
    return AxisTicksPanel;
}(ag_grid_community_1.Component));
exports.AxisTicksPanel = AxisTicksPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chart/chartPanel.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chart/chartPanel.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var paddingPanel_1 = __webpack_require__(/*! ./paddingPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chart/paddingPanel.js");
var labelPanel_1 = __webpack_require__(/*! ../label/labelPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js");
var caption_1 = __webpack_require__(/*! ../../../../../charts/caption */ "./node_modules/ag-grid-enterprise/dist/lib/charts/caption.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var ChartPanel = /** @class */ (function (_super) {
    __extends(ChartPanel, _super);
    function ChartPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        _this.chartProxy = _this.chartController.getChartProxy();
        _this.chart = _this.chartProxy.getChart();
        return _this;
    }
    ChartPanel.prototype.init = function () {
        this.setTemplate(ChartPanel.TEMPLATE);
        this.initGroup();
        this.initTitles();
        this.initPaddingPanel();
    };
    ChartPanel.prototype.initGroup = function () {
        this.chartGroup
            .setTitle(this.chartTranslator.translate('chart'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
    };
    ChartPanel.prototype.initTitles = function () {
        var _this = this;
        var title = this.chart.title ? this.chart.title.text : '';
        var initialFont = {
            family: this.chart.title ? this.chartProxy.getTitleProperty('fontFamily') : 'Verdana, sans-serif',
            style: this.chart.title ? this.chartProxy.getTitleProperty('fontStyle') : '',
            weight: this.chart.title ? this.chartProxy.getTitleProperty('fontWeight') : 'Normal',
            size: this.chart.title ? parseInt(this.chartProxy.getTitleProperty('fontSize')) : 22,
            color: this.chart.title ? this.chartProxy.getTitleProperty('color') : 'black'
        };
        // note we don't set the font style via chart title panel
        var setFont = function (font) {
            if (font.family) {
                _this.chartProxy.setTitleProperty('fontFamily', font.family);
            }
            if (font.weight) {
                _this.chartProxy.setTitleProperty('fontWeight', font.weight);
            }
            if (font.size) {
                _this.chartProxy.setTitleProperty('fontSize', font.size);
            }
            if (font.color) {
                _this.chartProxy.setTitleProperty('color', font.color);
            }
        };
        this.titleInput
            .setLabel(this.chartTranslator.translate('title'))
            .setLabelAlignment('top')
            .setLabelWidth('flex')
            .setValue(title)
            .onValueChange(function (newValue) {
            if (!_this.chart.title) {
                _this.chart.title = caption_1.Caption.create({ text: title });
                setFont(initialFont);
            }
            var currentCaption = _this.chart.title;
            currentCaption.text = newValue;
            _this.chart.title = currentCaption;
            // only show font panel when title exists
            labelPanelComp.setEnabled(ag_grid_community_1._.exists(_this.chart.title.text));
        });
        var params = {
            name: this.chartTranslator.translate('font'),
            enabled: true,
            suppressEnabledCheckbox: true,
            initialFont: initialFont,
            setFont: setFont
        };
        var labelPanelComp = new labelPanel_1.LabelPanel(params);
        this.getContext().wireBean(labelPanelComp);
        this.chartGroup.addItem(labelPanelComp);
        this.activePanels.push(labelPanelComp);
        labelPanelComp.setEnabled(ag_grid_community_1._.exists(title));
    };
    ChartPanel.prototype.initPaddingPanel = function () {
        var paddingPanelComp = new paddingPanel_1.PaddingPanel(this.chartController);
        this.getContext().wireBean(paddingPanelComp);
        this.chartGroup.addItem(paddingPanelComp);
        this.activePanels.push(paddingPanelComp);
    };
    ChartPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    ChartPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    ChartPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"chartGroup\">\n                <ag-input-text-area ref=\"titleInput\"></ag-input-text-area>\n            </ag-group-component>\n        <div>";
    __decorate([
        ag_grid_community_1.RefSelector('chartGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], ChartPanel.prototype, "chartGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('titleInput'),
        __metadata("design:type", ag_grid_community_1.AgInputTextArea)
    ], ChartPanel.prototype, "titleInput", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], ChartPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartPanel.prototype, "init", null);
    return ChartPanel;
}(ag_grid_community_1.Component));
exports.ChartPanel = ChartPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chart/paddingPanel.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chart/paddingPanel.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var PaddingPanel = /** @class */ (function (_super) {
    __extends(PaddingPanel, _super);
    function PaddingPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    PaddingPanel.prototype.init = function () {
        this.setTemplate(PaddingPanel.TEMPLATE);
        this.initGroup();
        this.initChartPaddingItems();
    };
    PaddingPanel.prototype.initGroup = function () {
        this.chartPaddingGroup
            .setTitle(this.chartTranslator.translate('padding'))
            .hideOpenCloseIcons(true)
            .hideEnabledCheckbox(true);
    };
    PaddingPanel.prototype.initChartPaddingItems = function () {
        var _this = this;
        var initInput = function (property, input, labelKey) {
            input.setLabel(_this.chartTranslator.translate(labelKey))
                .setValue(_this.chartProxy.getChartPadding(property))
                .setMaxValue(200)
                .setTextFieldWidth(45)
                .onValueChange(function (newValue) { return _this.chartProxy.setChartPaddingProperty(property, newValue); });
        };
        initInput('top', this.paddingTopSlider, 'top');
        initInput('right', this.paddingRightSlider, 'right');
        initInput('bottom', this.paddingBottomSlider, 'bottom');
        initInput('left', this.paddingLeftSlider, 'left');
    };
    PaddingPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"chartPaddingGroup\">\n                <ag-slider ref=\"paddingTopSlider\"></ag-slider>\n                <ag-slider ref=\"paddingRightSlider\"></ag-slider>\n                <ag-slider ref=\"paddingBottomSlider\"></ag-slider>\n                <ag-slider ref=\"paddingLeftSlider\"></ag-slider>\n            </ag-group-component>\n        <div>";
    __decorate([
        ag_grid_community_1.RefSelector('chartPaddingGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], PaddingPanel.prototype, "chartPaddingGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('paddingTopSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PaddingPanel.prototype, "paddingTopSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('paddingRightSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PaddingPanel.prototype, "paddingRightSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('paddingBottomSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PaddingPanel.prototype, "paddingBottomSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('paddingLeftSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PaddingPanel.prototype, "paddingLeftSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], PaddingPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PaddingPanel.prototype, "init", null);
    return PaddingPanel;
}(ag_grid_community_1.Component));
exports.PaddingPanel = PaddingPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chartFormatingPanel.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chartFormatingPanel.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartController_1 = __webpack_require__(/*! ../../chartController */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartController.js");
var legendPanel_1 = __webpack_require__(/*! ./legend/legendPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/legend/legendPanel.js");
var barSeriesPanel_1 = __webpack_require__(/*! ./series/barSeriesPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/barSeriesPanel.js");
var axisPanel_1 = __webpack_require__(/*! ./axis/axisPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/axis/axisPanel.js");
var lineSeriesPanel_1 = __webpack_require__(/*! ./series/lineSeriesPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/lineSeriesPanel.js");
var pieSeriesPanel_1 = __webpack_require__(/*! ./series/pieSeriesPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/pieSeriesPanel.js");
var chartPanel_1 = __webpack_require__(/*! ./chart/chartPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chart/chartPanel.js");
var areaSeriesPanel_1 = __webpack_require__(/*! ./series/areaSeriesPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/areaSeriesPanel.js");
var scatterSeriesPanel_1 = __webpack_require__(/*! ./series/scatterSeriesPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/scatterSeriesPanel.js");
var ChartFormattingPanel = /** @class */ (function (_super) {
    __extends(ChartFormattingPanel, _super);
    function ChartFormattingPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        return _this;
    }
    ChartFormattingPanel.prototype.init = function () {
        this.setTemplate(ChartFormattingPanel.TEMPLATE);
        this.createFormatPanel();
        this.addDestroyableEventListener(this.chartController, chartController_1.ChartController.EVENT_CHART_MODEL_UPDATED, this.createFormatPanel.bind(this));
    };
    ChartFormattingPanel.prototype.createFormatPanel = function () {
        this.destroyActivePanels();
        this.addComponent(new chartPanel_1.ChartPanel(this.chartController));
        this.addComponent(new legendPanel_1.LegendPanel(this.chartController));
        var chartType = this.chartController.getChartType();
        if (this.isBarChart(chartType)) {
            this.addComponent(new axisPanel_1.AxisPanel(this.chartController));
            this.addComponent(new barSeriesPanel_1.BarSeriesPanel(this.chartController));
        }
        else if (chartType === ag_grid_community_1.ChartType.Pie || chartType === ag_grid_community_1.ChartType.Doughnut) {
            this.addComponent(new pieSeriesPanel_1.PieSeriesPanel(this.chartController));
        }
        else if (chartType === ag_grid_community_1.ChartType.Line) {
            this.addComponent(new axisPanel_1.AxisPanel(this.chartController));
            this.addComponent(new lineSeriesPanel_1.LineSeriesPanel(this.chartController));
        }
        else if (chartType === ag_grid_community_1.ChartType.Scatter || chartType === ag_grid_community_1.ChartType.Bubble) {
            this.addComponent(new axisPanel_1.AxisPanel(this.chartController));
            this.addComponent(new scatterSeriesPanel_1.ScatterSeriesPanel(this.chartController));
        }
        else if (chartType === ag_grid_community_1.ChartType.Area || chartType === ag_grid_community_1.ChartType.StackedArea || chartType === ag_grid_community_1.ChartType.NormalizedArea) {
            this.addComponent(new axisPanel_1.AxisPanel(this.chartController));
            this.addComponent(new areaSeriesPanel_1.AreaSeriesPanel(this.chartController));
        }
        else {
            console.warn("ag-Grid: ChartFormattingPanel - unexpected chart type index: " + chartType + " supplied");
        }
    };
    ChartFormattingPanel.prototype.isBarChart = function (chartType) {
        return [
            ag_grid_community_1.ChartType.GroupedColumn,
            ag_grid_community_1.ChartType.StackedColumn,
            ag_grid_community_1.ChartType.NormalizedColumn,
            ag_grid_community_1.ChartType.GroupedBar,
            ag_grid_community_1.ChartType.StackedBar,
            ag_grid_community_1.ChartType.NormalizedBar
        ].indexOf(chartType) > -1;
    };
    ChartFormattingPanel.prototype.addComponent = function (component) {
        this.getContext().wireBean(component);
        this.getGui().appendChild(component.getGui());
        this.activePanels.push(component);
    };
    ChartFormattingPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    ChartFormattingPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    ChartFormattingPanel.TEMPLATE = "<div class=\"ag-chart-format-wrapper\"></div>";
    __decorate([
        ag_grid_community_1.RefSelector('formatPanelWrapper'),
        __metadata("design:type", HTMLElement)
    ], ChartFormattingPanel.prototype, "formatPanelWrapper", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartFormattingPanel.prototype, "init", null);
    return ChartFormattingPanel;
}(ag_grid_community_1.Component));
exports.ChartFormattingPanel = ChartFormattingPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var LabelPanel = /** @class */ (function (_super) {
    __extends(LabelPanel, _super);
    function LabelPanel(params) {
        var _this = _super.call(this) || this;
        _this.activeComps = [];
        _this.params = params;
        return _this;
    }
    LabelPanel.prototype.init = function () {
        this.setTemplate(LabelPanel.TEMPLATE);
        this.initGroup();
        this.initFontSelects();
        this.initFontColorPicker();
    };
    LabelPanel.prototype.addCompToPanel = function (comp) {
        this.labelsGroup.addItem(comp);
        this.activeComps.push(comp);
    };
    LabelPanel.prototype.setEnabled = function (enabled) {
        this.labelsGroup.setEnabled(enabled);
    };
    LabelPanel.prototype.initGroup = function () {
        var _this = this;
        this.labelsGroup
            .setTitle(this.params.name ? this.params.name : this.chartTranslator.translate('labels'))
            .setEnabled(this.params.enabled)
            .hideEnabledCheckbox(!!this.params.suppressEnabledCheckbox)
            .hideOpenCloseIcons(true)
            .onEnableChange(function (enabled) {
            if (_this.params.setEnabled) {
                _this.params.setEnabled(enabled);
            }
        });
    };
    LabelPanel.prototype.initFontSelects = function () {
        var _this = this;
        var initSelect = function (property, input, values, sortedValues) {
            var fontValue = _this.params.initialFont[property];
            var initialValue = values[0];
            if (fontValue) {
                var fontValueAsStr = "" + fontValue;
                var lowerCaseFontValue = ag_grid_community_1._.exists(fontValueAsStr) ? fontValueAsStr.toLowerCase() : '';
                var lowerCaseValues = values.map(function (value) { return value.toLowerCase(); });
                // check for known font values using lowercase
                var valueIndex = lowerCaseValues.indexOf(lowerCaseFontValue);
                var unknownUserProvidedFont = valueIndex < 0;
                if (unknownUserProvidedFont) {
                    var capitalisedFontValue = ag_grid_community_1._.capitalise(fontValueAsStr);
                    // add user provided font to list
                    values.push(capitalisedFontValue);
                    if (sortedValues) {
                        values.sort();
                    }
                    initialValue = capitalisedFontValue;
                }
                else {
                    initialValue = values[valueIndex];
                }
            }
            var options = values.map(function (value) {
                return { value: value, text: value };
            });
            input.addOptions(options)
                .setValue("" + initialValue)
                .onValueChange(function (newValue) {
                var _a;
                return _this.params.setFont((_a = {}, _a[property] = newValue, _a));
            });
        };
        var fonts = [
            'Arial, sans-serif',
            'Aria Black, sans-serif',
            'Book Antiqua,  serif',
            'Charcoal, sans-serif',
            'Comic Sans MS, cursive',
            'Courier, monospace',
            'Courier New, monospace',
            'Gadget, sans-serif',
            'Geneva, sans-serif',
            'Helvetica, sans-serif',
            'Impact, sans-serif',
            'Lucida Console, monospace',
            'Lucida Grande, sans-serif',
            'Lucida Sans Unicode,  sans-serif',
            'Monaco, monospace',
            'Palatino Linotype, serif',
            'Palatino, serif',
            'Times New Roman, serif',
            'Times, serif',
            'Verdana, sans-serif',
        ];
        initSelect('family', this.labelFontFamilySelect, fonts, true);
        var weightKeys = ['normal', 'bold', 'italic', 'boldItalic'];
        initSelect('weight', this.labelFontWeightSelect, this.getWeigthNames(weightKeys), false);
        var sizes = ['8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'];
        this.labelFontSizeSelect.setLabel(this.chartTranslator.translate('size'));
        initSelect('size', this.labelFontSizeSelect, sizes, true);
    };
    LabelPanel.prototype.initFontColorPicker = function () {
        var _this = this;
        this.labelColorPicker
            .setLabel(this.chartTranslator.translate('color'))
            .setInputWidth(45)
            .setValue("" + this.params.initialFont.color)
            .onValueChange(function (newColor) { return _this.params.setFont({ color: newColor }); });
    };
    LabelPanel.prototype.getWeigthNames = function (keys) {
        var _this = this;
        return keys.map(function (key) { return _this.chartTranslator.translate(key); });
    };
    LabelPanel.prototype.destroyActiveComps = function () {
        this.activeComps.forEach(function (comp) {
            ag_grid_community_1._.removeFromParent(comp.getGui());
            comp.destroy();
        });
    };
    LabelPanel.prototype.destroy = function () {
        this.destroyActiveComps();
        _super.prototype.destroy.call(this);
    };
    LabelPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"labelsGroup\">\n                <ag-select ref=\"labelFontFamilySelect\"></ag-select>\n                <ag-select ref=\"labelFontWeightSelect\"></ag-select>\n                <div class=\"ag-group-subgroup\">\n                    <ag-select ref=\"labelFontSizeSelect\"></ag-select>\n                    <ag-color-picker ref=\"labelColorPicker\"></ag-color-picker>\n                </div>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('labelsGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], LabelPanel.prototype, "labelsGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('labelFontFamilySelect'),
        __metadata("design:type", ag_grid_community_1.AgSelect)
    ], LabelPanel.prototype, "labelFontFamilySelect", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('labelFontWeightSelect'),
        __metadata("design:type", ag_grid_community_1.AgSelect)
    ], LabelPanel.prototype, "labelFontWeightSelect", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('labelFontSizeSelect'),
        __metadata("design:type", ag_grid_community_1.AgSelect)
    ], LabelPanel.prototype, "labelFontSizeSelect", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('labelColorPicker'),
        __metadata("design:type", ag_grid_community_1.AgColorPicker)
    ], LabelPanel.prototype, "labelColorPicker", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], LabelPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LabelPanel.prototype, "init", null);
    return LabelPanel;
}(ag_grid_community_1.Component));
exports.LabelPanel = LabelPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/legend/legendPanel.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/legend/legendPanel.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var labelPanel_1 = __webpack_require__(/*! ../label/labelPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var LegendPanel = /** @class */ (function (_super) {
    __extends(LegendPanel, _super);
    function LegendPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        _this.chartProxy = _this.chartController.getChartProxy();
        return _this;
    }
    LegendPanel.prototype.init = function () {
        this.setTemplate(LegendPanel.TEMPLATE);
        this.initLegendGroup();
        this.initLegendPosition();
        this.initLegendPadding();
        this.initLegendItems();
        this.initLabelPanel();
    };
    LegendPanel.prototype.initLegendGroup = function () {
        var _this = this;
        this.legendGroup
            .setTitle(this.chartTranslator.translate('legend'))
            .hideEnabledCheckbox(false)
            .setEnabled(this.chartProxy.getLegendEnabled())
            .toggleGroupExpand(false)
            .onEnableChange(function (enabled) {
            _this.chartProxy.setLegendProperty('enabled', enabled);
            _this.legendGroup.toggleGroupExpand(true);
        });
    };
    LegendPanel.prototype.initLegendPosition = function () {
        var _this = this;
        var chartProxy = this.chartController.getChartProxy();
        var positions = ['top', 'right', 'bottom', 'left'];
        this.legendPositionSelect
            .setLabel(this.chartTranslator.translate('position'))
            .setLabelWidth('flex')
            .setInputWidth(80)
            .addOptions(positions.map(function (position) { return ({
            value: position,
            text: _this.chartTranslator.translate(position)
        }); }))
            .setValue(chartProxy.getLegendPosition())
            .onValueChange(function (newValue) { return chartProxy.setLegendPosition(newValue); });
    };
    LegendPanel.prototype.initLegendPadding = function () {
        var _this = this;
        this.legendPaddingSlider
            .setLabel(this.chartTranslator.translate('padding'))
            .setValue(this.chartProxy.getLegendPadding())
            .setTextFieldWidth(45)
            .setMaxValue(200)
            .onValueChange(function (newValue) { return _this.chartProxy.setLegendPadding(newValue); });
    };
    LegendPanel.prototype.initLegendItems = function () {
        var _this = this;
        var initSlider = function (property, labelKey, input, maxValue) {
            input.setLabel(_this.chartTranslator.translate(labelKey))
                .setValue(_this.chartProxy.getLegendProperty(property))
                .setMaxValue(maxValue)
                .setTextFieldWidth(45)
                .onValueChange(function (newValue) { return _this.chartProxy.setLegendProperty(property, newValue); });
        };
        initSlider('markerSize', 'markerSize', this.markerSizeSlider, 40);
        initSlider('markerStrokeWidth', 'markerStroke', this.markerStrokeSlider, 10);
        initSlider('markerPadding', 'markerPadding', this.markerPaddingSlider, 200);
        initSlider('itemPaddingX', 'itemPaddingX', this.itemPaddingXSlider, 50);
        initSlider('itemPaddingY', 'itemPaddingY', this.itemPaddingYSlider, 50);
    };
    LegendPanel.prototype.initLabelPanel = function () {
        var _this = this;
        var initialFont = {
            family: this.chartProxy.getLegendProperty('labelFontFamily'),
            style: this.chartProxy.getLegendProperty('labelFontStyle'),
            weight: this.chartProxy.getLegendProperty('labelFontWeight'),
            size: parseInt(this.chartProxy.getLegendProperty('labelFontSize')),
            color: this.chartProxy.getLegendProperty('labelColor')
        };
        // note we don't set the font style via legend panel
        var setFont = function (font) {
            if (font.family) {
                _this.chartProxy.setLegendProperty('labelFontFamily', font.family);
            }
            if (font.weight) {
                _this.chartProxy.setLegendProperty('labelFontWeight', font.weight);
            }
            if (font.size) {
                _this.chartProxy.setLegendProperty('labelFontSize', font.size);
            }
            if (font.color) {
                _this.chartProxy.setLegendProperty('labelColor', font.color);
            }
        };
        var params = {
            enabled: true,
            suppressEnabledCheckbox: true,
            initialFont: initialFont,
            setFont: setFont
        };
        var labelPanelComp = new labelPanel_1.LabelPanel(params);
        this.getContext().wireBean(labelPanelComp);
        this.legendGroup.addItem(labelPanelComp);
        this.activePanels.push(labelPanelComp);
    };
    LegendPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    LegendPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    LegendPanel.TEMPLATE = "<div>  \n            <ag-group-component ref=\"legendGroup\">\n                <ag-select ref=\"legendPositionSelect\"></ag-select>\n                <ag-slider ref=\"legendPaddingSlider\"></ag-slider>\n                <ag-slider ref=\"markerSizeSlider\"></ag-slider>\n                <ag-slider ref=\"markerStrokeSlider\"></ag-slider>\n                <ag-slider ref=\"markerPaddingSlider\"></ag-slider>\n                <ag-slider ref=\"itemPaddingXSlider\"></ag-slider>\n                <ag-slider ref=\"itemPaddingYSlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('legendGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], LegendPanel.prototype, "legendGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('legendPositionSelect'),
        __metadata("design:type", ag_grid_community_1.AgSelect)
    ], LegendPanel.prototype, "legendPositionSelect", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('legendPaddingSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LegendPanel.prototype, "legendPaddingSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('markerSizeSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LegendPanel.prototype, "markerSizeSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('markerStrokeSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LegendPanel.prototype, "markerStrokeSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('markerPaddingSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LegendPanel.prototype, "markerPaddingSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('itemPaddingXSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LegendPanel.prototype, "itemPaddingXSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('itemPaddingYSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LegendPanel.prototype, "itemPaddingYSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], LegendPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LegendPanel.prototype, "init", null);
    return LegendPanel;
}(ag_grid_community_1.Component));
exports.LegendPanel = LegendPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/areaSeriesPanel.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/areaSeriesPanel.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var markersPanel_1 = __webpack_require__(/*! ./markersPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/markersPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var shadowPanel_1 = __webpack_require__(/*! ./shadowPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/shadowPanel.js");
var AreaSeriesPanel = /** @class */ (function (_super) {
    __extends(AreaSeriesPanel, _super);
    function AreaSeriesPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    AreaSeriesPanel.prototype.init = function () {
        this.setTemplate(AreaSeriesPanel.TEMPLATE);
        this.initSeriesGroup();
        this.initSeriesTooltips();
        this.initSeriesLineWidth();
        this.initOpacity();
        this.initMarkersPanel();
        this.initShadowPanel();
    };
    AreaSeriesPanel.prototype.initSeriesGroup = function () {
        this.seriesGroup
            .setTitle(this.chartTranslator.translate('series'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
    };
    AreaSeriesPanel.prototype.initSeriesTooltips = function () {
        var _this = this;
        this.seriesTooltipsToggle
            .setLabel(this.chartTranslator.translate('tooltips'))
            .setLabelAlignment('left')
            .setLabelWidth('flex')
            .setInputWidth(40)
            .setValue(this.chartProxy.getTooltipsEnabled())
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('tooltipEnabled', newValue); });
    };
    AreaSeriesPanel.prototype.initSeriesLineWidth = function () {
        var _this = this;
        this.seriesLineWidthSlider
            .setLabel(this.chartTranslator.translate('lineWidth'))
            .setMaxValue(10)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeWidth'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeWidth', newValue); });
    };
    AreaSeriesPanel.prototype.initOpacity = function () {
        var _this = this;
        this.seriesLineOpacitySlider
            .setLabel(this.chartTranslator.translate('strokeOpacity'))
            .setStep(0.05)
            .setMaxValue(1)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeOpacity'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeOpacity', newValue); });
        this.seriesFillOpacitySlider
            .setLabel(this.chartTranslator.translate('fillOpacity'))
            .setStep(0.05)
            .setMaxValue(1)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('fillOpacity'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('fillOpacity', newValue); });
    };
    AreaSeriesPanel.prototype.initMarkersPanel = function () {
        var markersPanelComp = new markersPanel_1.MarkersPanel(this.chartProxy);
        this.getContext().wireBean(markersPanelComp);
        this.seriesGroup.addItem(markersPanelComp);
        this.activePanels.push(markersPanelComp);
    };
    AreaSeriesPanel.prototype.initShadowPanel = function () {
        var shadowPanelComp = new shadowPanel_1.ShadowPanel(this.chartProxy);
        this.getContext().wireBean(shadowPanelComp);
        this.seriesGroup.addItem(shadowPanelComp);
        this.activePanels.push(shadowPanelComp);
    };
    AreaSeriesPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    AreaSeriesPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    AreaSeriesPanel.TEMPLATE = "<div>   \n            <ag-group-component ref=\"seriesGroup\">\n                <ag-toggle-button ref=\"seriesTooltipsToggle\"></ag-toggle-button>\n                <ag-slider ref=\"seriesLineWidthSlider\"></ag-slider>\n                <ag-slider ref=\"seriesLineOpacitySlider\"></ag-slider>\n                <ag-slider ref=\"seriesFillOpacitySlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], AreaSeriesPanel.prototype, "seriesGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesTooltipsToggle'),
        __metadata("design:type", ag_grid_community_1.AgToggleButton)
    ], AreaSeriesPanel.prototype, "seriesTooltipsToggle", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesLineWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AreaSeriesPanel.prototype, "seriesLineWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesLineOpacitySlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AreaSeriesPanel.prototype, "seriesLineOpacitySlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesFillOpacitySlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], AreaSeriesPanel.prototype, "seriesFillOpacitySlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], AreaSeriesPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AreaSeriesPanel.prototype, "init", null);
    return AreaSeriesPanel;
}(ag_grid_community_1.Component));
exports.AreaSeriesPanel = AreaSeriesPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/barSeriesPanel.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/barSeriesPanel.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var shadowPanel_1 = __webpack_require__(/*! ./shadowPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/shadowPanel.js");
var labelPanel_1 = __webpack_require__(/*! ../label/labelPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var BarSeriesPanel = /** @class */ (function (_super) {
    __extends(BarSeriesPanel, _super);
    function BarSeriesPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        _this.chartProxy = _this.chartController.getChartProxy();
        return _this;
    }
    BarSeriesPanel.prototype.init = function () {
        this.setTemplate(BarSeriesPanel.TEMPLATE);
        this.seriesGroup
            .setTitle(this.chartTranslator.translate('series'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
        this.initSeriesTooltips();
        this.initSeriesStrokeWidth();
        this.initOpacity();
        this.initLabelPanel();
        this.initShadowPanel();
    };
    BarSeriesPanel.prototype.initSeriesTooltips = function () {
        var _this = this;
        this.seriesTooltipsToggle
            .setLabel(this.chartTranslator.translate('tooltips'))
            .setLabelAlignment('left')
            .setLabelWidth('flex')
            .setInputWidth(40)
            .setValue(this.chartProxy.getTooltipsEnabled())
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('tooltipEnabled', newValue); });
    };
    BarSeriesPanel.prototype.initSeriesStrokeWidth = function () {
        var _this = this;
        this.seriesStrokeWidthSlider
            .setLabel(this.chartTranslator.translate('strokeWidth'))
            .setMaxValue(10)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeWidth'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeWidth', newValue); });
    };
    BarSeriesPanel.prototype.initOpacity = function () {
        var _this = this;
        this.seriesLineOpacitySlider
            .setLabel(this.chartTranslator.translate('strokeOpacity'))
            .setStep(0.05)
            .setMaxValue(1)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeOpacity'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeOpacity', newValue); });
        this.seriesFillOpacitySlider
            .setLabel(this.chartTranslator.translate('fillOpacity'))
            .setStep(0.05)
            .setMaxValue(1)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('fillOpacity'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('fillOpacity', newValue); });
    };
    BarSeriesPanel.prototype.initLabelPanel = function () {
        var _this = this;
        var initialFont = {
            family: this.chartProxy.getSeriesProperty('labelFontFamily'),
            style: this.chartProxy.getSeriesProperty('labelFontStyle'),
            weight: this.chartProxy.getSeriesProperty('labelFontWeight'),
            size: parseInt(this.chartProxy.getSeriesProperty('labelFontSize')),
            color: this.chartProxy.getSeriesProperty('labelColor')
        };
        // note we don't set the font style via series panel
        var setFont = function (font) {
            if (font.family) {
                _this.chartProxy.setSeriesProperty('labelFontFamily', font.family);
            }
            if (font.weight) {
                _this.chartProxy.setSeriesProperty('labelFontWeight', font.weight);
            }
            if (font.size) {
                _this.chartProxy.setSeriesProperty('labelFontSize', font.size);
            }
            if (font.color) {
                _this.chartProxy.setSeriesProperty('labelColor', font.color);
            }
        };
        var params = {
            enabled: this.chartProxy.getLabelEnabled(),
            setEnabled: function (enabled) { return _this.chartProxy.setSeriesProperty('labelEnabled', enabled); },
            suppressEnabledCheckbox: false,
            initialFont: initialFont,
            setFont: setFont
        };
        var labelPanelComp = new labelPanel_1.LabelPanel(params);
        this.getContext().wireBean(labelPanelComp);
        this.activePanels.push(labelPanelComp);
        this.seriesGroup.addItem(labelPanelComp);
    };
    BarSeriesPanel.prototype.initShadowPanel = function () {
        var shadowPanelComp = new shadowPanel_1.ShadowPanel(this.chartProxy);
        this.getContext().wireBean(shadowPanelComp);
        this.seriesGroup.addItem(shadowPanelComp);
        this.activePanels.push(shadowPanelComp);
    };
    BarSeriesPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    BarSeriesPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    BarSeriesPanel.TEMPLATE = "<div>   \n            <ag-group-component ref=\"seriesGroup\">\n                <ag-toggle-button ref=\"seriesTooltipsToggle\"></ag-toggle-button>\n                <ag-slider ref=\"seriesStrokeWidthSlider\"></ag-slider>\n                <ag-slider ref=\"seriesLineOpacitySlider\"></ag-slider>\n                <ag-slider ref=\"seriesFillOpacitySlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], BarSeriesPanel.prototype, "seriesGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesTooltipsToggle'),
        __metadata("design:type", ag_grid_community_1.AgToggleButton)
    ], BarSeriesPanel.prototype, "seriesTooltipsToggle", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesStrokeWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], BarSeriesPanel.prototype, "seriesStrokeWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesLineOpacitySlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], BarSeriesPanel.prototype, "seriesLineOpacitySlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesFillOpacitySlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], BarSeriesPanel.prototype, "seriesFillOpacitySlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], BarSeriesPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BarSeriesPanel.prototype, "init", null);
    return BarSeriesPanel;
}(ag_grid_community_1.Component));
exports.BarSeriesPanel = BarSeriesPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/calloutPanel.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/calloutPanel.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var CalloutPanel = /** @class */ (function (_super) {
    __extends(CalloutPanel, _super);
    function CalloutPanel(chartProxy) {
        var _this = _super.call(this) || this;
        _this.chartProxy = chartProxy;
        return _this;
    }
    CalloutPanel.prototype.init = function () {
        this.setTemplate(CalloutPanel.TEMPLATE);
        this.initCalloutOptions();
    };
    CalloutPanel.prototype.initCalloutOptions = function () {
        var _this = this;
        this.calloutGroup
            .setTitle(this.chartTranslator.translate('callout'))
            .setEnabled(true)
            .hideOpenCloseIcons(true)
            .hideEnabledCheckbox(true);
        var initInput = function (property, input, labelKey, maxValue) {
            input.setLabel(_this.chartTranslator.translate(labelKey))
                .setValue(_this.chartProxy.getSeriesProperty(property))
                .setMaxValue(maxValue)
                .setTextFieldWidth(45)
                .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty(property, newValue); });
        };
        initInput('calloutLength', this.calloutLengthSlider, 'length', 40);
        initInput('calloutStrokeWidth', this.calloutStrokeWidthSlider, 'strokeWidth', 10);
        initInput('labelOffset', this.labelOffsetSlider, 'offset', 30);
    };
    CalloutPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"calloutGroup\">\n                <ag-slider ref=\"calloutLengthSlider\"></ag-slider>\n                <ag-slider ref=\"calloutStrokeWidthSlider\"></ag-slider>\n                <ag-slider ref=\"labelOffsetSlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], CalloutPanel.prototype, "seriesGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('calloutGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], CalloutPanel.prototype, "calloutGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('calloutLengthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], CalloutPanel.prototype, "calloutLengthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('calloutStrokeWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], CalloutPanel.prototype, "calloutStrokeWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('labelOffsetSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], CalloutPanel.prototype, "labelOffsetSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], CalloutPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalloutPanel.prototype, "init", null);
    return CalloutPanel;
}(ag_grid_community_1.Component));
exports.CalloutPanel = CalloutPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/lineSeriesPanel.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/lineSeriesPanel.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var markersPanel_1 = __webpack_require__(/*! ./markersPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/markersPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var LineSeriesPanel = /** @class */ (function (_super) {
    __extends(LineSeriesPanel, _super);
    function LineSeriesPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    LineSeriesPanel.prototype.init = function () {
        this.setTemplate(LineSeriesPanel.TEMPLATE);
        this.initSeriesGroup();
        this.initSeriesTooltips();
        this.initSeriesLineWidth();
        this.initMarkersPanel();
    };
    LineSeriesPanel.prototype.initSeriesGroup = function () {
        this.seriesGroup
            .setTitle(this.chartTranslator.translate('series'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
    };
    LineSeriesPanel.prototype.initSeriesTooltips = function () {
        var _this = this;
        this.seriesTooltipsToggle
            .setLabel(this.chartTranslator.translate('tooltips'))
            .setLabelAlignment('left')
            .setLabelWidth('flex')
            .setInputWidth(40)
            .setValue(this.chartProxy.getTooltipsEnabled())
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('tooltipEnabled', newValue); });
    };
    LineSeriesPanel.prototype.initSeriesLineWidth = function () {
        var _this = this;
        this.seriesLineWidthSlider
            .setLabel(this.chartTranslator.translate('lineWidth'))
            .setMaxValue(10)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeWidth'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeWidth', newValue); });
    };
    LineSeriesPanel.prototype.initMarkersPanel = function () {
        var markersPanelComp = new markersPanel_1.MarkersPanel(this.chartProxy);
        this.getContext().wireBean(markersPanelComp);
        this.seriesGroup.addItem(markersPanelComp);
        this.activePanels.push(markersPanelComp);
    };
    LineSeriesPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    LineSeriesPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    LineSeriesPanel.TEMPLATE = "<div>   \n            <ag-group-component ref=\"seriesGroup\">\n                <ag-toggle-button ref=\"seriesTooltipsToggle\"></ag-toggle-button>\n                <ag-slider ref=\"seriesLineWidthSlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], LineSeriesPanel.prototype, "seriesGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesTooltipsToggle'),
        __metadata("design:type", ag_grid_community_1.AgToggleButton)
    ], LineSeriesPanel.prototype, "seriesTooltipsToggle", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesLineWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], LineSeriesPanel.prototype, "seriesLineWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], LineSeriesPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LineSeriesPanel.prototype, "init", null);
    return LineSeriesPanel;
}(ag_grid_community_1.Component));
exports.LineSeriesPanel = LineSeriesPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/markersPanel.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/markersPanel.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var scatterChartProxy_1 = __webpack_require__(/*! ../../../chartProxies/cartesian/scatterChartProxy */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartProxies/cartesian/scatterChartProxy.js");
var MarkersPanel = /** @class */ (function (_super) {
    __extends(MarkersPanel, _super);
    function MarkersPanel(chartProxy) {
        var _this = _super.call(this) || this;
        _this.chartProxy = chartProxy;
        return _this;
    }
    MarkersPanel.prototype.init = function () {
        this.setTemplate(MarkersPanel.TEMPLATE);
        this.initMarkers();
    };
    MarkersPanel.prototype.initMarkers = function () {
        var _this = this;
        // scatter charts should always show markers
        var shouldHideEnabledCheckbox = this.chartProxy instanceof scatterChartProxy_1.ScatterChartProxy;
        this.seriesMarkersGroup
            .setTitle(this.chartTranslator.translate('markers'))
            .hideEnabledCheckbox(shouldHideEnabledCheckbox)
            .setEnabled(this.chartProxy.getMarkersEnabled())
            .hideOpenCloseIcons(true)
            .onEnableChange(function (newValue) { return _this.chartProxy.setSeriesProperty('marker', newValue); });
        var initInput = function (property, input, labelKey, maxValue) {
            input.setLabel(_this.chartTranslator.translate(labelKey))
                .setValue(_this.chartProxy.getSeriesProperty(property))
                .setMaxValue(maxValue)
                .setTextFieldWidth(45)
                .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty(property, newValue); });
        };
        initInput('markerSize', this.seriesMarkerSizeSlider, 'size', 30);
        initInput('markerStrokeWidth', this.seriesMarkerStrokeWidthSlider, 'strokeWidth', 10);
    };
    MarkersPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"seriesMarkersGroup\">\n                <ag-slider ref=\"seriesMarkerSizeSlider\"></ag-slider>\n                <ag-slider ref=\"seriesMarkerStrokeWidthSlider\"></ag-slider>\n            </ag-group-component>  \n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesMarkersGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], MarkersPanel.prototype, "seriesMarkersGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesMarkerSizeSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], MarkersPanel.prototype, "seriesMarkerSizeSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesMarkerStrokeWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], MarkersPanel.prototype, "seriesMarkerStrokeWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], MarkersPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarkersPanel.prototype, "init", null);
    return MarkersPanel;
}(ag_grid_community_1.Component));
exports.MarkersPanel = MarkersPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/pieSeriesPanel.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/pieSeriesPanel.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var shadowPanel_1 = __webpack_require__(/*! ./shadowPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/shadowPanel.js");
var labelPanel_1 = __webpack_require__(/*! ../label/labelPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/label/labelPanel.js");
var calloutPanel_1 = __webpack_require__(/*! ./calloutPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/calloutPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var PieSeriesPanel = /** @class */ (function (_super) {
    __extends(PieSeriesPanel, _super);
    function PieSeriesPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    PieSeriesPanel.prototype.init = function () {
        this.setTemplate(PieSeriesPanel.TEMPLATE);
        this.initGroup();
        this.initSeriesTooltips();
        this.initSeriesStrokeWidth();
        this.initOpacity();
        this.initLabelPanel();
        this.initShadowPanel();
    };
    PieSeriesPanel.prototype.initGroup = function () {
        this.seriesGroup
            .setTitle(this.chartTranslator.translate('series'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
    };
    PieSeriesPanel.prototype.initSeriesTooltips = function () {
        var _this = this;
        this.seriesTooltipsToggle
            .setLabel(this.chartTranslator.translate('tooltips'))
            .setLabelAlignment('left')
            .setLabelWidth('flex')
            .setInputWidth(40)
            .setValue(this.chartProxy.getTooltipsEnabled())
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('tooltipEnabled', newValue); });
    };
    PieSeriesPanel.prototype.initSeriesStrokeWidth = function () {
        var _this = this;
        this.seriesStrokeWidthSlider
            .setLabel(this.chartTranslator.translate('strokeWidth'))
            .setMaxValue(10)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeWidth'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeWidth', newValue); });
    };
    PieSeriesPanel.prototype.initOpacity = function () {
        var _this = this;
        this.seriesLineOpacitySlider
            .setLabel(this.chartTranslator.translate('strokeOpacity'))
            .setStep(0.05)
            .setMaxValue(1)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('strokeOpacity'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('strokeOpacity', newValue); });
        this.seriesFillOpacitySlider
            .setLabel(this.chartTranslator.translate('fillOpacity'))
            .setStep(0.05)
            .setMaxValue(1)
            .setTextFieldWidth(45)
            .setValue(this.chartProxy.getSeriesProperty('fillOpacity'))
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('fillOpacity', newValue); });
    };
    PieSeriesPanel.prototype.initLabelPanel = function () {
        var _this = this;
        var initialFont = {
            family: this.chartProxy.getSeriesProperty('labelFontFamily'),
            style: this.chartProxy.getSeriesProperty('labelFontStyle'),
            weight: this.chartProxy.getSeriesProperty('labelFontWeight'),
            size: parseInt(this.chartProxy.getSeriesProperty('labelFontSize')),
            color: this.chartProxy.getSeriesProperty('labelColor')
        };
        // note we don't set the font style via series panel
        var setFont = function (font) {
            if (font.family) {
                _this.chartProxy.setSeriesProperty('labelFontFamily', font.family);
            }
            if (font.weight) {
                _this.chartProxy.setSeriesProperty('labelFontWeight', font.weight);
            }
            if (font.size) {
                _this.chartProxy.setSeriesProperty('labelFontSize', font.size);
            }
            if (font.color) {
                _this.chartProxy.setSeriesProperty('labelColor', font.color);
            }
        };
        var params = {
            enabled: this.chartProxy.getLabelEnabled(),
            setEnabled: function (enabled) { return _this.chartProxy.setSeriesProperty('labelEnabled', enabled); },
            suppressEnabledCheckbox: false,
            initialFont: initialFont,
            setFont: setFont
        };
        var labelPanelComp = new labelPanel_1.LabelPanel(params);
        this.getContext().wireBean(labelPanelComp);
        this.activePanels.push(labelPanelComp);
        var calloutPanelComp = new calloutPanel_1.CalloutPanel(this.chartProxy);
        this.getContext().wireBean(calloutPanelComp);
        labelPanelComp.addCompToPanel(calloutPanelComp);
        this.activePanels.push(calloutPanelComp);
        this.seriesGroup.addItem(labelPanelComp);
    };
    PieSeriesPanel.prototype.initShadowPanel = function () {
        var shadowPanelComp = new shadowPanel_1.ShadowPanel(this.chartProxy);
        this.getContext().wireBean(shadowPanelComp);
        this.seriesGroup.getGui().appendChild(shadowPanelComp.getGui());
        this.seriesGroup.addItem(shadowPanelComp);
    };
    PieSeriesPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    PieSeriesPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    PieSeriesPanel.TEMPLATE = "<div>   \n            <ag-group-component ref=\"seriesGroup\">\n               <ag-toggle-button ref=\"seriesTooltipsToggle\"></ag-toggle-button>\n                <ag-slider ref=\"seriesStrokeWidthSlider\"></ag-slider>\n                <ag-slider ref=\"seriesLineOpacitySlider\"></ag-slider>\n                <ag-slider ref=\"seriesFillOpacitySlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], PieSeriesPanel.prototype, "seriesGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesTooltipsToggle'),
        __metadata("design:type", ag_grid_community_1.AgToggleButton)
    ], PieSeriesPanel.prototype, "seriesTooltipsToggle", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesStrokeWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PieSeriesPanel.prototype, "seriesStrokeWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesLineOpacitySlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PieSeriesPanel.prototype, "seriesLineOpacitySlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesFillOpacitySlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], PieSeriesPanel.prototype, "seriesFillOpacitySlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], PieSeriesPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PieSeriesPanel.prototype, "init", null);
    return PieSeriesPanel;
}(ag_grid_community_1.Component));
exports.PieSeriesPanel = PieSeriesPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/scatterSeriesPanel.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/scatterSeriesPanel.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var markersPanel_1 = __webpack_require__(/*! ./markersPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/markersPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var ScatterSeriesPanel = /** @class */ (function (_super) {
    __extends(ScatterSeriesPanel, _super);
    function ScatterSeriesPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartProxy = chartController.getChartProxy();
        return _this;
    }
    ScatterSeriesPanel.prototype.init = function () {
        this.setTemplate(ScatterSeriesPanel.TEMPLATE);
        this.initSeriesGroup();
        this.initSeriesTooltips();
        this.initMarkersPanel();
    };
    ScatterSeriesPanel.prototype.initSeriesGroup = function () {
        this.seriesGroup
            .setTitle(this.chartTranslator.translate('series'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
    };
    ScatterSeriesPanel.prototype.initSeriesTooltips = function () {
        var _this = this;
        this.seriesTooltipsToggle
            .setLabel(this.chartTranslator.translate('tooltips'))
            .setLabelAlignment('left')
            .setLabelWidth('flex')
            .setInputWidth(40)
            .setValue(this.chartProxy.getTooltipsEnabled())
            .onValueChange(function (newValue) { return _this.chartProxy.setSeriesProperty('tooltipEnabled', newValue); });
    };
    ScatterSeriesPanel.prototype.initMarkersPanel = function () {
        var markersPanelComp = new markersPanel_1.MarkersPanel(this.chartProxy);
        this.getContext().wireBean(markersPanelComp);
        this.seriesGroup.addItem(markersPanelComp);
        this.activePanels.push(markersPanelComp);
    };
    ScatterSeriesPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            ag_grid_community_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    ScatterSeriesPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    ScatterSeriesPanel.TEMPLATE = "<div>   \n            <ag-group-component ref=\"seriesGroup\">\n                <ag-toggle-button ref=\"seriesTooltipsToggle\"></ag-toggle-button>                \n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('seriesGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], ScatterSeriesPanel.prototype, "seriesGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesTooltipsToggle'),
        __metadata("design:type", ag_grid_community_1.AgToggleButton)
    ], ScatterSeriesPanel.prototype, "seriesTooltipsToggle", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('seriesLineWidthSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], ScatterSeriesPanel.prototype, "seriesLineWidthSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], ScatterSeriesPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScatterSeriesPanel.prototype, "init", null);
    return ScatterSeriesPanel;
}(ag_grid_community_1.Component));
exports.ScatterSeriesPanel = ScatterSeriesPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/shadowPanel.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/series/shadowPanel.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var ShadowPanel = /** @class */ (function (_super) {
    __extends(ShadowPanel, _super);
    function ShadowPanel(chartProxy) {
        var _this = _super.call(this) || this;
        _this.chartProxy = chartProxy;
        return _this;
    }
    ShadowPanel.prototype.init = function () {
        this.setTemplate(ShadowPanel.TEMPLATE);
        this.shadowBlurSlider.setTextFieldWidth(45);
        this.shadowXOffsetSlider.setTextFieldWidth(45);
        this.shadowYOffsetSlider.setTextFieldWidth(45);
        this.initSeriesShadow();
    };
    ShadowPanel.prototype.initSeriesShadow = function () {
        var _this = this;
        this.shadowGroup
            .setTitle(this.chartTranslator.translate('shadow'))
            .setEnabled(this.chartProxy.getShadowEnabled())
            .hideOpenCloseIcons(true)
            .hideEnabledCheckbox(false)
            .onEnableChange(function (newValue) { return _this.chartProxy.setShadowProperty('enabled', newValue); });
        this.shadowColorPicker
            .setLabel(this.chartTranslator.translate('color'))
            .setLabelWidth('flex')
            .setInputWidth(45)
            .setValue('rgba(0,0,0,0.5)')
            .onValueChange(function (newValue) { return _this.chartProxy.setShadowProperty('color', newValue); });
        var initInput = function (input, property, maxValue) {
            input.setLabel(_this.chartTranslator.translate(property))
                .setValue(_this.chartProxy.getShadowProperty(property))
                .setMaxValue(maxValue)
                .onValueChange(function (newValue) { return _this.chartProxy.setShadowProperty(property, newValue); });
        };
        initInput(this.shadowBlurSlider, 'blur', 20);
        initInput(this.shadowXOffsetSlider, 'xOffset', 20);
        initInput(this.shadowYOffsetSlider, 'yOffset', 20);
    };
    ShadowPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"shadowGroup\">\n                <ag-color-picker ref=\"shadowColorPicker\"></ag-color-picker>\n                <ag-slider ref=\"shadowBlurSlider\"></ag-slider>\n                <ag-slider ref=\"shadowXOffsetSlider\"></ag-slider>\n                <ag-slider ref=\"shadowYOffsetSlider\"></ag-slider>\n            </ag-group-component>\n        </div>";
    __decorate([
        ag_grid_community_1.RefSelector('shadowGroup'),
        __metadata("design:type", ag_grid_community_1.AgGroupComponent)
    ], ShadowPanel.prototype, "shadowGroup", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('shadowColorPicker'),
        __metadata("design:type", ag_grid_community_1.AgColorPicker)
    ], ShadowPanel.prototype, "shadowColorPicker", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('shadowBlurSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], ShadowPanel.prototype, "shadowBlurSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('shadowXOffsetSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], ShadowPanel.prototype, "shadowXOffsetSlider", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('shadowYOffsetSlider'),
        __metadata("design:type", ag_grid_community_1.AgSlider)
    ], ShadowPanel.prototype, "shadowYOffsetSlider", void 0);
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], ShadowPanel.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShadowPanel.prototype, "init", null);
    return ShadowPanel;
}(ag_grid_community_1.Component));
exports.ShadowPanel = ShadowPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/settings/chartSettingsPanel.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/settings/chartSettingsPanel.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var miniChartsContainer_1 = __webpack_require__(/*! ./miniChartsContainer */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/settings/miniChartsContainer.js");
var ChartSettingsPanel = /** @class */ (function (_super) {
    __extends(ChartSettingsPanel, _super);
    function ChartSettingsPanel(chartController) {
        var _this = _super.call(this, ChartSettingsPanel.TEMPLATE) || this;
        _this.miniCharts = [];
        _this.cardItems = [];
        _this.chartController = chartController;
        _this.activePalette = _this.chartController.getActivePalette();
        _this.palettes = _this.chartController.getPalettes();
        return _this;
    }
    ChartSettingsPanel.prototype.postConstruct = function () {
        var _this = this;
        this.palettes.forEach(function (palette, idx) {
            var miniChartsContainer = new miniChartsContainer_1.MiniChartsContainer(idx, _this.chartController);
            _this.getContext().wireBean(miniChartsContainer);
            _this.miniCharts.push(miniChartsContainer);
            _this.eMiniChartsContainer.appendChild(miniChartsContainer.getGui());
            _this.addCardLink(idx);
        });
        this.ePrevBtn.insertAdjacentElement('afterbegin', ag_grid_community_1._.createIconNoSpan('smallLeft', this.gridOptionsWrapper));
        this.eNextBtn.insertAdjacentElement('afterbegin', ag_grid_community_1._.createIconNoSpan('smallRight', this.gridOptionsWrapper));
        this.addDestroyableEventListener(this.ePrevBtn, 'click', this.prev.bind(this));
        this.addDestroyableEventListener(this.eNextBtn, 'click', this.next.bind(this));
        this.setActivePalette(this.activePalette, 0);
    };
    ChartSettingsPanel.prototype.addCardLink = function (idx) {
        var _this = this;
        var link = document.createElement('div');
        ag_grid_community_1._.addCssClass(link, 'ag-nav-card-item');
        link.innerHTML = '\u25CF';
        this.addDestroyableEventListener(link, 'click', function () {
            if (idx === _this.activePalette || _this.isAnimating) {
                return;
            }
            _this.setActivePalette(idx, idx < _this.activePalette ? 1 : 2);
        });
        this.eCardSelector.appendChild(link);
        this.cardItems.push(link);
    };
    ChartSettingsPanel.prototype.getPrev = function () {
        var prev = this.activePalette - 1;
        if (prev < 0) {
            prev = this.palettes.length - 1;
        }
        return prev;
    };
    ChartSettingsPanel.prototype.prev = function () {
        if (this.isAnimating) {
            return;
        }
        var prev = this.getPrev();
        this.setActivePalette(prev, 1);
    };
    ChartSettingsPanel.prototype.getNext = function () {
        var next = this.activePalette + 1;
        if (next === this.palettes.length) {
            next = 0;
        }
        return next;
    };
    ChartSettingsPanel.prototype.next = function () {
        if (this.isAnimating) {
            return;
        }
        var next = this.getNext();
        this.setActivePalette(next, 2);
    };
    ChartSettingsPanel.prototype.setActivePalette = function (palette, animate) {
        var _this = this;
        ag_grid_community_1._.radioCssClass(this.cardItems[palette], 'ag-selected');
        if (!animate) {
            this.miniCharts.forEach(function (miniChart, idx) {
                ag_grid_community_1._.addOrRemoveCssClass(miniChart.getGui(), 'ag-hidden', idx !== palette);
            });
            this.miniCharts[this.activePalette].refreshSelected();
            this.activePalette = palette;
        }
        else {
            var currentPalette = this.miniCharts[this.activePalette];
            var currentGui_1 = currentPalette.getGui();
            var futurePalette = this.miniCharts[palette];
            var futureGui_1 = futurePalette.getGui();
            currentPalette.refreshSelected();
            futurePalette.refreshSelected();
            var multiplier = animate === 1 ? -1 : 1;
            var final_1 = futureGui_1.style.left = (ag_grid_community_1._.getAbsoluteWidth(this.getGui()) * multiplier) + "px";
            ag_grid_community_1._.removeCssClass(futureGui_1, 'ag-hidden');
            ag_grid_community_1._.addCssClass(currentGui_1, 'ag-animating');
            ag_grid_community_1._.addCssClass(futureGui_1, 'ag-animating');
            this.activePalette = palette;
            this.chartController.setChartWithPalette(this.chartController.getChartType(), this.activePalette);
            this.isAnimating = true;
            window.setTimeout(function () {
                currentGui_1.style.left = parseFloat(final_1) * -1 + "px";
                futureGui_1.style.left = '0px';
            }, 50);
            window.setTimeout(function () {
                _this.isAnimating = false;
                ag_grid_community_1._.removeCssClass(currentGui_1, 'ag-animating');
                ag_grid_community_1._.removeCssClass(futureGui_1, 'ag-animating');
                ag_grid_community_1._.addCssClass(currentGui_1, 'ag-hidden');
            }, 500);
        }
    };
    ChartSettingsPanel.TEMPLATE = "<div class=\"ag-chart-settings-wrapper\">\n            <div ref=\"eMiniChartsContainer\" class=\"ag-chart-settings-mini-charts-container\"></div>\n            <div class=\"ag-chart-settings-nav-bar\">\n                <div ref=\"ePrevBtn\" class=\"ag-chart-settings-prev-btn\">\n                    <button type=\"button\"></button>\n                </div>\n                <div ref=\"eCardSelector\" class=\"ag-nav-card-selector\"></div>\n                <div ref=\"eNextBtn\" class=\"ag-chart-settings-next-btn\">\n                    <button type=\"button\"></button>\n                </div>\n            </div>\n        </div>";
    __decorate([
        ag_grid_community_1.Autowired('gridOptionsWrapper'),
        __metadata("design:type", ag_grid_community_1.GridOptionsWrapper)
    ], ChartSettingsPanel.prototype, "gridOptionsWrapper", void 0);
    __decorate([
        ag_grid_community_1.RefSelector('eMiniChartsContainer'),
        __metadata("design:type", HTMLElement)
    ], ChartSettingsPanel.prototype, "eMiniChartsContainer", void 0);
    __decorate([
        ag_grid_community_1.RefSelector("eCardSelector"),
        __metadata("design:type", HTMLElement)
    ], ChartSettingsPanel.prototype, "eCardSelector", void 0);
    __decorate([
        ag_grid_community_1.RefSelector("ePrevBtn"),
        __metadata("design:type", HTMLElement)
    ], ChartSettingsPanel.prototype, "ePrevBtn", void 0);
    __decorate([
        ag_grid_community_1.RefSelector("eNextBtn"),
        __metadata("design:type", HTMLElement)
    ], ChartSettingsPanel.prototype, "eNextBtn", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartSettingsPanel.prototype, "postConstruct", null);
    return ChartSettingsPanel;
}(ag_grid_community_1.Component));
exports.ChartSettingsPanel = ChartSettingsPanel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/settings/miniChartsContainer.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/settings/miniChartsContainer.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartTranslator_1 = __webpack_require__(/*! ../../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var group_1 = __webpack_require__(/*! ../../../../charts/scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var scene_1 = __webpack_require__(/*! ../../../../charts/scene/scene */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/scene.js");
var angle_1 = __webpack_require__(/*! ../../../../charts/util/angle */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js");
var sector_1 = __webpack_require__(/*! ../../../../charts/scene/shape/sector */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/sector.js");
var path_1 = __webpack_require__(/*! ../../../../charts/scene/shape/path */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/path.js");
var linearScale_1 = __webpack_require__(/*! ../../../../charts/scale/linearScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/linearScale.js");
var line_1 = __webpack_require__(/*! ../../../../charts/scene/shape/line */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/line.js");
var clipRect_1 = __webpack_require__(/*! ../../../../charts/scene/clipRect */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/clipRect.js");
var rect_1 = __webpack_require__(/*! ../../../../charts/scene/shape/rect */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/rect.js");
var bandScale_1 = __webpack_require__(/*! ../../../../charts/scale/bandScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/bandScale.js");
var arc_1 = __webpack_require__(/*! ../../../../charts/scene/shape/arc */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js");
var MiniChartsContainer = /** @class */ (function (_super) {
    __extends(MiniChartsContainer, _super);
    function MiniChartsContainer(activePalette, chartController) {
        var _this = _super.call(this, MiniChartsContainer.TEMPLATE) || this;
        _this.wrappers = {};
        var palettes = chartController.getPalettes();
        _this.fills = palettes[activePalette].fills;
        _this.strokes = palettes[activePalette].strokes;
        _this.chartController = chartController;
        return _this;
    }
    MiniChartsContainer.prototype.init = function () {
        var _this = this;
        var chartGroups = {
            columnGroup: [
                MiniColumn,
                MiniStackedColumn,
                MiniNormalizedColumn
            ],
            barGroup: [
                MiniBar,
                MiniStackedBar,
                MiniNormalizedBar
            ],
            pieGroup: [
                MiniPie,
                MiniDoughnut
            ],
            lineGroup: [
                MiniLine
            ],
            scatterGroup: [
                MiniScatter,
                MiniBubble
            ],
            areaGroup: [
                MiniArea,
                MiniStackedArea,
                MiniNormalizedArea
            ]
        };
        var eGui = this.getGui();
        Object.keys(chartGroups).forEach(function (group) {
            var chartGroup = chartGroups[group];
            var groupComponent = new ag_grid_community_1.AgGroupComponent({
                title: _this.chartTranslator.translate(group),
                suppressEnabledCheckbox: true,
                enabled: true,
                suppressOpenCloseIcons: true
            });
            _this.getContext().wireBean(groupComponent);
            chartGroup.forEach(function (MiniClass) {
                var miniWrapper = document.createElement('div');
                ag_grid_community_1._.addCssClass(miniWrapper, 'ag-chart-mini-thumbnail');
                _this.addDestroyableEventListener(miniWrapper, 'click', function () {
                    _this.chartController.setChartType(MiniClass.chartType);
                    _this.refreshSelected();
                });
                _this.wrappers[MiniClass.chartType] = miniWrapper;
                var miniChart = new MiniClass(miniWrapper, _this.fills, _this.strokes);
                _this.getContext().wireBean(miniChart);
                groupComponent.addItem(miniWrapper);
            });
            eGui.appendChild(groupComponent.getGui());
        });
        this.refreshSelected();
    };
    MiniChartsContainer.prototype.refreshSelected = function () {
        var type = this.chartController.getChartType();
        for (var wrapper in this.wrappers) {
            ag_grid_community_1._.addOrRemoveCssClass(this.wrappers[wrapper], 'ag-selected', wrapper === type);
        }
    };
    MiniChartsContainer.TEMPLATE = '<div class="ag-chart-settings-mini-wrapper"></div>';
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], MiniChartsContainer.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniChartsContainer.prototype, "init", null);
    return MiniChartsContainer;
}(ag_grid_community_1.Component));
exports.MiniChartsContainer = MiniChartsContainer;
var MiniChart = /** @class */ (function (_super) {
    __extends(MiniChart, _super);
    function MiniChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 58;
        _this.padding = 5;
        _this.root = new group_1.Group();
        _this.scene = (function () {
            var scene = new scene_1.Scene({
                width: _this.size,
                height: _this.size
            });
            scene.root = _this.root;
            return scene;
        })();
        _this.element = _this.scene.canvas.element;
        return _this;
    }
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], MiniChart.prototype, "chartTranslator", void 0);
    return MiniChart;
}(ag_grid_community_1.Component));
exports.MiniChart = MiniChart;
var MiniPie = /** @class */ (function (_super) {
    __extends(MiniPie, _super);
    function MiniPie(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.radius = (_this.size - _this.padding * 2) / 2;
        _this.center = _this.radius + _this.padding;
        _this.sectors = MiniPie.angles.map(function (pair) {
            var sector = sector_1.Sector.create(_this.center, _this.center, 0, _this.radius, pair[0], pair[1]);
            sector.stroke = undefined;
            return sector;
        });
        _this.scene.parent = parent;
        _this.root.append(_this.sectors);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniPie.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('pieTooltip');
    };
    MiniPie.prototype.updateColors = function (fills, strokes) {
        this.sectors.forEach(function (sector, i) {
            sector.fill = fills[i];
            sector.stroke = strokes[i];
        });
    };
    MiniPie.chartType = ag_grid_community_1.ChartType.Pie;
    MiniPie.angles = [
        [angle_1.toRadians(-90), angle_1.toRadians(30)],
        [angle_1.toRadians(30), angle_1.toRadians(120)],
        [angle_1.toRadians(120), angle_1.toRadians(180)],
        [angle_1.toRadians(180), angle_1.toRadians(210)],
        [angle_1.toRadians(210), angle_1.toRadians(240)],
        [angle_1.toRadians(240), angle_1.toRadians(270)]
    ];
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniPie.prototype, "init", null);
    return MiniPie;
}(MiniChart));
exports.MiniPie = MiniPie;
var MiniDoughnut = /** @class */ (function (_super) {
    __extends(MiniDoughnut, _super);
    function MiniDoughnut(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.radius = (_this.size - _this.padding * 2) / 2;
        _this.center = _this.radius + _this.padding;
        _this.sectors = MiniPie.angles.map(function (pair) {
            var sector = sector_1.Sector.create(_this.center, _this.center, _this.radius * 0.6, _this.radius, pair[0], pair[1]);
            sector.stroke = undefined;
            return sector;
        });
        _this.scene.parent = parent;
        _this.root.append(_this.sectors);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniDoughnut.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('doughnutTooltip');
    };
    MiniDoughnut.prototype.updateColors = function (fills, strokes) {
        this.sectors.forEach(function (sector, i) {
            sector.fill = fills[i];
            sector.stroke = strokes[i];
        });
    };
    MiniDoughnut.chartType = ag_grid_community_1.ChartType.Doughnut;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniDoughnut.prototype, "init", null);
    return MiniDoughnut;
}(MiniChart));
var MiniLine = /** @class */ (function (_super) {
    __extends(MiniLine, _super);
    function MiniLine(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var xScale = linearScale_1.default();
        xScale.domain = [0, 4];
        xScale.range = [padding, size - padding];
        var yScale = linearScale_1.default();
        yScale.domain = [0, 10];
        yScale.range = [size - padding, padding];
        var data = [
            [9, 7, 8, 5, 6],
            [5, 6, 3, 4, 1],
            [1, 3, 4, 8, 7]
        ];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        _this.lines = data.map(function (series) {
            var line = new path_1.Path();
            line.strokeWidth = 3;
            line.lineCap = 'round';
            line.fill = undefined;
            series.forEach(function (datum, i) {
                line.path[i > 0 ? 'lineTo' : 'moveTo'](xScale.convert(i), yScale.convert(datum));
            });
            return line;
        });
        var clipRect = new clipRect_1.ClipRect();
        clipRect.x = padding;
        clipRect.y = padding;
        clipRect.width = size - padding * 2;
        clipRect.height = size - padding * 2;
        clipRect.append(_this.lines);
        var root = _this.root;
        root.append(clipRect);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniLine.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('lineTooltip');
    };
    MiniLine.prototype.updateColors = function (fills, strokes) {
        this.lines.forEach(function (line, i) {
            line.stroke = strokes[i];
        });
    };
    MiniLine.chartType = ag_grid_community_1.ChartType.Line;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniLine.prototype, "init", null);
    return MiniLine;
}(MiniChart));
var MiniColumn = /** @class */ (function (_super) {
    __extends(MiniColumn, _super);
    function MiniColumn(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var data = [2, 3, 4];
        var xScale = new bandScale_1.BandScale();
        xScale.domain = [0, 1, 2];
        xScale.range = [padding, size - padding];
        xScale.paddingInner = 0.3;
        xScale.paddingOuter = 0.3;
        var yScale = linearScale_1.default();
        yScale.domain = [0, 4];
        yScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        _this.axes = [leftAxis, bottomAxis];
        var rectLineWidth = 1;
        var alignment = Math.floor(rectLineWidth) % 2 / 2;
        var bottom = yScale.convert(0);
        _this.bars = data.map(function (datum, i) {
            var top = yScale.convert(datum);
            var rect = new rect_1.Rect();
            rect.strokeWidth = rectLineWidth;
            rect.x = Math.floor(xScale.convert(i)) + alignment;
            rect.y = Math.floor(top) + alignment;
            var width = xScale.bandwidth;
            var height = bottom - top;
            rect.width = Math.floor(width) + Math.floor(rect.x % 1 + width % 1);
            rect.height = Math.floor(height) + Math.floor(rect.y % 1 + height % 1);
            return rect;
        });
        var root = _this.root;
        root.append(_this.bars);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniColumn.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('groupedColumnTooltip');
    };
    MiniColumn.prototype.updateColors = function (fills, strokes) {
        this.bars.forEach(function (bar, i) {
            bar.fill = fills[i];
            bar.stroke = strokes[i];
        });
    };
    MiniColumn.chartType = ag_grid_community_1.ChartType.GroupedColumn;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniColumn.prototype, "init", null);
    return MiniColumn;
}(MiniChart));
var MiniBar = /** @class */ (function (_super) {
    __extends(MiniBar, _super);
    function MiniBar(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var data = [2, 3, 4];
        var yScale = new bandScale_1.BandScale();
        yScale.domain = [0, 1, 2];
        yScale.range = [padding, size - padding];
        yScale.paddingInner = 0.3;
        yScale.paddingOuter = 0.3;
        var xScale = linearScale_1.default();
        xScale.domain = [0, 4];
        xScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        _this.axes = [leftAxis, bottomAxis];
        var rectLineWidth = 1;
        var alignment = Math.floor(rectLineWidth) % 2 / 2;
        var bottom = xScale.convert(0);
        _this.bars = data.map(function (datum, i) {
            var top = xScale.convert(datum);
            var rect = new rect_1.Rect();
            rect.strokeWidth = rectLineWidth;
            rect.x = Math.floor(padding) + alignment;
            rect.y = Math.floor(yScale.convert(i)) + alignment;
            var width = yScale.bandwidth;
            var height = bottom - top;
            rect.width = Math.floor(height) + Math.floor(rect.y % 1 + height % 1);
            rect.height = Math.floor(width) + Math.floor(rect.x % 1 + width % 1);
            return rect;
        });
        var root = _this.root;
        root.append(_this.bars);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniBar.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('groupedBarTooltip');
    };
    MiniBar.prototype.updateColors = function (fills, strokes) {
        this.bars.forEach(function (bar, i) {
            bar.fill = fills[i];
            bar.stroke = strokes[i];
        });
    };
    MiniBar.chartType = ag_grid_community_1.ChartType.GroupedBar;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniBar.prototype, "init", null);
    return MiniBar;
}(MiniChart));
var MiniStackedColumn = /** @class */ (function (_super) {
    __extends(MiniStackedColumn, _super);
    function MiniStackedColumn(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var data = [
            [8, 12, 16],
            [6, 9, 12],
            [2, 3, 4]
        ];
        var xScale = new bandScale_1.BandScale();
        xScale.domain = [0, 1, 2];
        xScale.range = [padding, size - padding];
        xScale.paddingInner = 0.3;
        xScale.paddingOuter = 0.3;
        var yScale = linearScale_1.default();
        yScale.domain = [0, 16];
        yScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var rectLineWidth = 1;
        var alignment = Math.floor(rectLineWidth) % 2 / 2;
        var bottom = yScale.convert(0);
        _this.bars = data.map(function (series) {
            return series.map(function (datum, i) {
                var top = yScale.convert(datum);
                var rect = new rect_1.Rect();
                rect.strokeWidth = rectLineWidth;
                rect.x = Math.floor(xScale.convert(i)) + alignment;
                rect.y = Math.floor(top) + alignment;
                var width = xScale.bandwidth;
                var height = bottom - top;
                rect.width = Math.floor(width) + Math.floor(rect.x % 1 + width % 1);
                rect.height = Math.floor(height) + Math.floor(rect.y % 1 + height % 1);
                return rect;
            });
        });
        var root = _this.root;
        root.append([].concat.apply([], _this.bars));
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniStackedColumn.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('stackedColumnTooltip');
    };
    MiniStackedColumn.prototype.updateColors = function (fills, strokes) {
        this.bars.forEach(function (series, i) {
            series.forEach(function (bar) {
                bar.fill = fills[i];
                bar.stroke = strokes[i];
            });
        });
    };
    MiniStackedColumn.chartType = ag_grid_community_1.ChartType.StackedColumn;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniStackedColumn.prototype, "init", null);
    return MiniStackedColumn;
}(MiniChart));
var MiniStackedBar = /** @class */ (function (_super) {
    __extends(MiniStackedBar, _super);
    function MiniStackedBar(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var data = [
            [8, 12, 16],
            [6, 9, 12],
            [2, 3, 4]
        ];
        var yScale = new bandScale_1.BandScale();
        yScale.domain = [0, 1, 2];
        yScale.range = [padding, size - padding];
        yScale.paddingInner = 0.3;
        yScale.paddingOuter = 0.3;
        var xScale = linearScale_1.default();
        xScale.domain = [0, 16];
        xScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var rectLineWidth = 1;
        var alignment = Math.floor(rectLineWidth) % 2 / 2;
        var bottom = xScale.convert(0);
        _this.bars = data.map(function (series) {
            return series.map(function (datum, i) {
                var top = xScale.convert(datum);
                var rect = new rect_1.Rect();
                rect.strokeWidth = rectLineWidth;
                rect.x = Math.floor(padding) + alignment;
                rect.y = Math.floor(yScale.convert(i)) + alignment;
                var width = yScale.bandwidth;
                var height = bottom - top;
                rect.width = Math.floor(height) + Math.floor(rect.y % 1 + height % 1);
                rect.height = Math.floor(width) + Math.floor(rect.x % 1 + width % 1);
                return rect;
            });
        });
        var root = _this.root;
        root.append([].concat.apply([], _this.bars));
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniStackedBar.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('stackedBarTooltip');
    };
    MiniStackedBar.prototype.updateColors = function (fills, strokes) {
        this.bars.forEach(function (series, i) {
            series.forEach(function (bar) {
                bar.fill = fills[i];
                bar.stroke = strokes[i];
            });
        });
    };
    MiniStackedBar.chartType = ag_grid_community_1.ChartType.StackedBar;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniStackedBar.prototype, "init", null);
    return MiniStackedBar;
}(MiniChart));
var MiniNormalizedColumn = /** @class */ (function (_super) {
    __extends(MiniNormalizedColumn, _super);
    function MiniNormalizedColumn(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var data = [
            [10, 10, 10],
            [6, 7, 8],
            [2, 4, 6]
        ];
        var xScale = new bandScale_1.BandScale();
        xScale.domain = [0, 1, 2];
        xScale.range = [padding, size - padding];
        xScale.paddingInner = 0.3;
        xScale.paddingOuter = 0.3;
        var yScale = linearScale_1.default();
        yScale.domain = [0, 10];
        yScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var rectLineWidth = 1;
        var alignment = Math.floor(rectLineWidth) % 2 / 2;
        var bottom = yScale.convert(0);
        _this.bars = data.map(function (series) {
            return series.map(function (datum, i) {
                var top = yScale.convert(datum);
                var rect = new rect_1.Rect();
                rect.strokeWidth = rectLineWidth;
                rect.x = Math.floor(xScale.convert(i)) + alignment;
                rect.y = Math.floor(top) + alignment;
                var width = xScale.bandwidth;
                var height = bottom - top;
                rect.width = Math.floor(width) + Math.floor(rect.x % 1 + width % 1);
                rect.height = Math.floor(height) + Math.floor(rect.y % 1 + height % 1);
                return rect;
            });
        });
        var root = _this.root;
        root.append([].concat.apply([], _this.bars));
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniNormalizedColumn.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('normalizedColumnTooltip');
    };
    MiniNormalizedColumn.prototype.updateColors = function (fills, strokes) {
        this.bars.forEach(function (series, i) {
            series.forEach(function (bar) {
                bar.fill = fills[i];
                bar.stroke = strokes[i];
            });
        });
    };
    MiniNormalizedColumn.chartType = ag_grid_community_1.ChartType.NormalizedColumn;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniNormalizedColumn.prototype, "init", null);
    return MiniNormalizedColumn;
}(MiniChart));
var MiniNormalizedBar = /** @class */ (function (_super) {
    __extends(MiniNormalizedBar, _super);
    function MiniNormalizedBar(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var data = [
            [10, 10, 10],
            [6, 7, 8],
            [2, 4, 6]
        ];
        var yScale = new bandScale_1.BandScale();
        yScale.domain = [0, 1, 2];
        yScale.range = [padding, size - padding];
        yScale.paddingInner = 0.3;
        yScale.paddingOuter = 0.3;
        var xScale = linearScale_1.default();
        xScale.domain = [0, 10];
        xScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var rectLineWidth = 1;
        var alignment = Math.floor(rectLineWidth) % 2 / 2;
        var bottom = xScale.convert(0);
        _this.bars = data.map(function (series) {
            return series.map(function (datum, i) {
                var top = xScale.convert(datum);
                var rect = new rect_1.Rect();
                rect.strokeWidth = rectLineWidth;
                rect.x = Math.floor(padding) + alignment;
                rect.y = Math.floor(yScale.convert(i)) + alignment;
                var width = yScale.bandwidth;
                var height = bottom - top;
                rect.width = Math.floor(height) + Math.floor(rect.y % 1 + height % 1);
                rect.height = Math.floor(width) + Math.floor(rect.x % 1 + width % 1);
                return rect;
            });
        });
        var root = _this.root;
        root.append([].concat.apply([], _this.bars));
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniNormalizedBar.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('normalizedBarTooltip');
    };
    MiniNormalizedBar.prototype.updateColors = function (fills, strokes) {
        this.bars.forEach(function (series, i) {
            series.forEach(function (bar) {
                bar.fill = fills[i];
                bar.stroke = strokes[i];
            });
        });
    };
    MiniNormalizedBar.chartType = ag_grid_community_1.ChartType.NormalizedBar;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniNormalizedBar.prototype, "init", null);
    return MiniNormalizedBar;
}(MiniChart));
var MiniScatter = /** @class */ (function (_super) {
    __extends(MiniScatter, _super);
    function MiniScatter(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        // [x, y] pairs
        var data = [
            [[0.3, 3], [1.1, 0.9], [2, 0.4], [3.4, 2.4]],
            [[0, 0.3], [1, 2], [2.4, 1.4], [3, 0]]
        ];
        var xScale = linearScale_1.default();
        xScale.domain = [-0.5, 4];
        xScale.range = [padding * 2, size - padding];
        var yScale = linearScale_1.default();
        yScale.domain = [-0.5, 3.5];
        yScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var points = [];
        data.forEach(function (series, i) {
            series.forEach(function (datum, j) {
                var arc = new arc_1.Arc();
                arc.strokeWidth = 1;
                arc.centerX = xScale.convert(datum[0]);
                arc.centerY = yScale.convert(datum[1]);
                arc.radiusX = 2.5;
                arc.radiusY = 2.5;
                points.push(arc);
            });
        });
        _this.points = points;
        var clipRect = new clipRect_1.ClipRect();
        clipRect.x = padding;
        clipRect.y = padding;
        clipRect.width = size - padding * 2;
        clipRect.height = size - padding * 2;
        clipRect.append(_this.points);
        var root = _this.root;
        root.append(clipRect);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniScatter.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('scatterTooltip');
    };
    MiniScatter.prototype.updateColors = function (fills, strokes) {
        this.points.forEach(function (line, i) {
            line.stroke = strokes[i % strokes.length];
            line.fill = fills[i % fills.length];
        });
    };
    MiniScatter.chartType = ag_grid_community_1.ChartType.Scatter;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniScatter.prototype, "init", null);
    return MiniScatter;
}(MiniChart));
var MiniBubble = /** @class */ (function (_super) {
    __extends(MiniBubble, _super);
    function MiniBubble(parent, fills, strokes) {
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        // [x, y, radius] triples
        var data = [
            [[0.1, 0.3, 5], [0.5, 0.4, 7], [0.2, 0.8, 7]], [[0.8, 0.7, 5], [0.7, 0.3, 9]]
        ];
        var xScale = linearScale_1.default();
        xScale.domain = [0, 1];
        xScale.range = [padding * 2, size - padding];
        var yScale = linearScale_1.default();
        yScale.domain = [0, 1];
        yScale.range = [size - padding, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var points = [];
        data.forEach(function (series, i) {
            series.forEach(function (datum, j) {
                var arc = new arc_1.Arc();
                arc.strokeWidth = 1;
                arc.centerX = xScale.convert(datum[0]);
                arc.centerY = yScale.convert(datum[1]);
                arc.radiusX = datum[2];
                arc.radiusY = datum[2];
                arc.fillOpacity = 0.7;
                points.push(arc);
            });
        });
        _this.points = points;
        var clipRect = new clipRect_1.ClipRect();
        clipRect.x = padding;
        clipRect.y = padding;
        clipRect.width = size - padding * 2;
        clipRect.height = size - padding * 2;
        clipRect.append(_this.points);
        var root = _this.root;
        root.append(clipRect);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniBubble.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('bubbleTooltip');
    };
    MiniBubble.prototype.updateColors = function (fills, strokes) {
        this.points.forEach(function (line, i) {
            line.stroke = strokes[i % strokes.length];
            line.fill = fills[i % fills.length];
        });
    };
    MiniBubble.chartType = ag_grid_community_1.ChartType.Bubble;
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniBubble.prototype, "init", null);
    return MiniBubble;
}(MiniChart));
var MiniArea = /** @class */ (function (_super) {
    __extends(MiniArea, _super);
    function MiniArea(parent, fills, strokes, data) {
        if (data === void 0) { data = MiniArea.data; }
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var xScale = new bandScale_1.BandScale();
        xScale.paddingInner = 1;
        xScale.paddingOuter = 0;
        xScale.domain = [0, 1, 2];
        xScale.range = [padding + 0.5, size - padding - 0.5];
        var yScale = linearScale_1.default();
        yScale.domain = [0, 6];
        yScale.range = [size - padding + 0.5, padding];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var xCount = data.length;
        var last = xCount * 2 - 1;
        var pathData = [];
        var bottomY = yScale.convert(0);
        for (var i = 0; i < xCount; i++) {
            var yDatum = data[i];
            var yCount = yDatum.length;
            var x = xScale.convert(i);
            var curr = void 0;
            for (var j = 0; j < yCount; j++) {
                curr = yDatum[j];
                var y = yScale.convert(curr);
                var points = pathData[j] || (pathData[j] = []);
                points[i] = {
                    x: x,
                    y: y
                };
                points[last - i] = {
                    x: x,
                    y: bottomY
                };
            }
        }
        _this.areas = pathData.reverse().map(function (points) {
            var area = new path_1.Path();
            area.strokeWidth = 1;
            area.fillOpacity = 0.7;
            var path = area.path;
            path.clear();
            points.forEach(function (point, i) {
                if (!i) {
                    path.moveTo(point.x, point.y);
                }
                else {
                    path.lineTo(point.x, point.y);
                }
            });
            path.closePath();
            return area;
        });
        var root = _this.root;
        root.append(_this.areas);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniArea.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('groupedAreaTooltip');
    };
    MiniArea.prototype.updateColors = function (fills, strokes) {
        this.areas.forEach(function (area, i) {
            area.fill = fills[i];
            area.stroke = strokes[i];
        });
    };
    MiniArea.chartType = ag_grid_community_1.ChartType.Area;
    MiniArea.data = [
        [1, 3, 5],
        [2, 6, 4],
        [5, 3, 1]
    ];
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniArea.prototype, "init", null);
    return MiniArea;
}(MiniChart));
var MiniStackedArea = /** @class */ (function (_super) {
    __extends(MiniStackedArea, _super);
    function MiniStackedArea(parent, fills, strokes, data) {
        if (data === void 0) { data = MiniStackedArea.data; }
        var _this = _super.call(this) || this;
        _this.scene.parent = parent;
        var size = _this.size;
        var padding = _this.padding;
        var xScale = new bandScale_1.BandScale();
        xScale.paddingInner = 1;
        xScale.paddingOuter = 0;
        xScale.domain = [0, 1, 2];
        xScale.range = [padding + 0.5, size - padding - 0.5];
        var yScale = linearScale_1.default();
        yScale.domain = [0, 16];
        yScale.range = [size - padding + 0.5, padding + 0.5];
        var axisOvershoot = 3;
        var leftAxis = line_1.Line.create(padding, padding, padding, size - padding + axisOvershoot);
        leftAxis.stroke = 'gray';
        leftAxis.strokeWidth = 1;
        var bottomAxis = line_1.Line.create(padding - axisOvershoot, size - padding, size - padding, size - padding);
        bottomAxis.stroke = 'gray';
        bottomAxis.strokeWidth = 1;
        var xCount = data.length;
        var last = xCount * 2 - 1;
        var pathData = [];
        for (var i = 0; i < xCount; i++) {
            var yDatum = data[i];
            var yCount = yDatum.length;
            var x = xScale.convert(i);
            var prev = 0;
            var curr = void 0;
            for (var j = 0; j < yCount; j++) {
                curr = yDatum[j];
                var y = yScale.convert(prev + curr);
                var points = pathData[j] || (pathData[j] = []);
                points[i] = {
                    x: x,
                    y: y
                };
                points[last - i] = {
                    x: x,
                    y: yScale.convert(prev) // bottom y
                };
                prev += curr;
            }
        }
        _this.areas = pathData.map(function (points) {
            var area = new path_1.Path();
            area.strokeWidth = 1;
            var path = area.path;
            path.clear();
            points.forEach(function (point, i) {
                if (!i) {
                    path.moveTo(point.x, point.y);
                }
                else {
                    path.lineTo(point.x, point.y);
                }
            });
            path.closePath();
            return area;
        });
        var root = _this.root;
        root.append(_this.areas);
        root.append(leftAxis);
        root.append(bottomAxis);
        _this.updateColors(fills, strokes);
        return _this;
    }
    MiniStackedArea.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('stackedAreaTooltip');
    };
    MiniStackedArea.prototype.updateColors = function (fills, strokes) {
        this.areas.forEach(function (area, i) {
            area.fill = fills[i];
            area.stroke = strokes[i];
        });
    };
    MiniStackedArea.chartType = ag_grid_community_1.ChartType.StackedArea;
    MiniStackedArea.data = [
        [2, 3, 2],
        [3, 6, 5],
        [6, 2, 2]
    ];
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniStackedArea.prototype, "init", null);
    return MiniStackedArea;
}(MiniChart));
var MiniNormalizedArea = /** @class */ (function (_super) {
    __extends(MiniNormalizedArea, _super);
    function MiniNormalizedArea(parent, fills, strokes, data) {
        if (data === void 0) { data = MiniNormalizedArea.data; }
        return _super.call(this, parent, fills, strokes, data) || this;
    }
    MiniNormalizedArea.prototype.init = function () {
        this.scene.canvas.element.title = this.chartTranslator.translate('normalizedAreaTooltip');
    };
    MiniNormalizedArea.chartType = ag_grid_community_1.ChartType.NormalizedArea;
    MiniNormalizedArea.data = MiniStackedArea.data.map(function (stack) {
        var sum = stack.reduce(function (p, c) { return p + c; }, 0);
        return stack.map(function (v) { return v / sum * 16; });
    });
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniNormalizedArea.prototype, "init", null);
    return MiniNormalizedArea;
}(MiniStackedArea));


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/tabbedChartMenu.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/tabbedChartMenu.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var chartDataPanel_1 = __webpack_require__(/*! ./data/chartDataPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/data/chartDataPanel.js");
var chartFormatingPanel_1 = __webpack_require__(/*! ./format/chartFormatingPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/format/chartFormatingPanel.js");
var chartSettingsPanel_1 = __webpack_require__(/*! ./settings/chartSettingsPanel */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/menu/settings/chartSettingsPanel.js");
var chartTranslator_1 = __webpack_require__(/*! ../chartTranslator */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/chartTranslator.js");
var TabbedChartMenu = /** @class */ (function (_super) {
    __extends(TabbedChartMenu, _super);
    function TabbedChartMenu(params) {
        var _this = _super.call(this) || this;
        _this.tabs = [];
        _this.chartIcons = {};
        var controller = params.controller, type = params.type, panels = params.panels;
        _this.chartController = controller;
        _this.currentChartType = type;
        _this.panels = panels;
        return _this;
    }
    TabbedChartMenu.prototype.init = function () {
        var _this = this;
        this.panels.forEach(function (panel) {
            var panelType = panel.replace('chart', '').toLowerCase();
            var _a = _this.createTab(panel, panelType, _this.getPanelClass(panelType)), comp = _a.comp, tab = _a.tab;
            _this.tabs.push(tab);
            _this.addDestroyFunc(function () { return comp.destroy(); });
        });
        this.tabbedLayout = new ag_grid_community_1.TabbedLayout({
            items: this.tabs,
            cssClass: 'ag-chart-tabbed-menu'
        });
    };
    TabbedChartMenu.prototype.createTab = function (name, title, ChildClass) {
        var eWrapperDiv = document.createElement('div');
        ag_grid_community_1._.addCssClass(eWrapperDiv, "ag-chart-" + title);
        var comp = new ChildClass(this.chartController);
        this.getContext().wireBean(comp);
        eWrapperDiv.appendChild(comp.getGui());
        var titleEl = document.createElement('div');
        titleEl.innerText = this.chartTranslator.translate(title);
        return {
            comp: comp,
            tab: {
                title: titleEl,
                bodyPromise: ag_grid_community_1.Promise.resolve(eWrapperDiv),
                name: name
            }
        };
    };
    TabbedChartMenu.prototype.getMinDimensions = function () {
        return this.tabbedLayout.getMinDimensions();
    };
    TabbedChartMenu.prototype.updateCurrentChartType = function (chartType) {
        ag_grid_community_1._.removeCssClass(this.chartIcons[this.currentChartType], 'ag-selected');
        this.currentChartType = chartType;
        ag_grid_community_1._.addCssClass(this.chartIcons[chartType], 'ag-selected');
    };
    TabbedChartMenu.prototype.showTab = function (tab) {
        var tabItem = this.tabs[tab];
        this.tabbedLayout.showItem(tabItem);
    };
    TabbedChartMenu.prototype.getGui = function () {
        return this.tabbedLayout && this.tabbedLayout.getGui();
    };
    TabbedChartMenu.prototype.destroy = function () {
        if (this.parentComponent && this.parentComponent.isAlive()) {
            this.parentComponent.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    TabbedChartMenu.prototype.getPanelClass = function (panelType) {
        var isDataPanel = panelType === TabbedChartMenu.TAB_DATA;
        var isFormatPanel = panelType === TabbedChartMenu.TAB_FORMAT;
        return isDataPanel ? chartDataPanel_1.ChartDataPanel : (isFormatPanel ? chartFormatingPanel_1.ChartFormattingPanel : chartSettingsPanel_1.ChartSettingsPanel);
    };
    TabbedChartMenu.EVENT_TAB_SELECTED = 'tabSelected';
    TabbedChartMenu.TAB_MAIN = 'settings';
    TabbedChartMenu.TAB_DATA = 'data';
    TabbedChartMenu.TAB_FORMAT = 'format';
    __decorate([
        ag_grid_community_1.Autowired('chartTranslator'),
        __metadata("design:type", chartTranslator_1.ChartTranslator)
    ], TabbedChartMenu.prototype, "chartTranslator", void 0);
    __decorate([
        ag_grid_community_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabbedChartMenu.prototype, "init", null);
    return TabbedChartMenu;
}(ag_grid_community_1.Component));
exports.TabbedChartMenu = TabbedChartMenu;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartService.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartService.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var rangeController_1 = __webpack_require__(/*! ../rangeController */ "./node_modules/ag-grid-enterprise/dist/lib/rangeController.js");
var gridChartComp_1 = __webpack_require__(/*! ./chartComp/gridChartComp */ "./node_modules/ag-grid-enterprise/dist/lib/chartAdaptor/chartComp/gridChartComp.js");
var ChartService = /** @class */ (function () {
    function ChartService() {
        // we destroy all charts bound to this grid when grid is destroyed. activeCharts contains all charts, including
        // those in developer provided containers.
        this.activeCharts = [];
    }
    ChartService.prototype.chartCurrentRange = function (chartType) {
        if (chartType === void 0) { chartType = ag_grid_community_1.ChartType.GroupedColumn; }
        var selectedRange = this.getSelectedRange();
        return this.chartRange(selectedRange, chartType);
    };
    ChartService.prototype.chartCellRange = function (params) {
        var cellRange = this.rangeController.createCellRangeFromCellRangeParams(params.cellRange);
        if (!cellRange) {
            console.warn("ag-Grid - unable to chart as no range is selected");
            return;
        }
        if (cellRange) {
            var pivotChart = false;
            return this.chartRange(cellRange, params.chartType, pivotChart, params.suppressChartRanges, params.chartContainer, params.aggFunc, params.processChartOptions);
        }
    };
    ChartService.prototype.pivotChart = function (chartType) {
        if (chartType === void 0) { chartType = ag_grid_community_1.ChartType.GroupedColumn; }
        // if required enter pivot mode
        if (!this.columnController.isPivotMode()) {
            this.columnController.setPivotMode(true, "pivotChart");
        }
        // pivot chart range contains all visible column without a row range to include all rows
        var chartAllRangeParams = {
            columns: this.columnController.getAllDisplayedColumns().map(function (col) { return col.getColId(); })
        };
        var cellRange = this.rangeController.createCellRangeFromCellRangeParams(chartAllRangeParams);
        if (!cellRange) {
            console.warn("ag-Grid - unable to chart as there are no columns in the grid.");
            return;
        }
        var pivotChart = true, suppressChartRanges = true;
        return this.chartRange(cellRange, chartType, pivotChart, suppressChartRanges);
    };
    ChartService.prototype.chartRange = function (cellRange, chartType, pivotChart, suppressChartRanges, container, aggFunc, processChartOptions) {
        var _this = this;
        if (pivotChart === void 0) { pivotChart = false; }
        if (suppressChartRanges === void 0) { suppressChartRanges = false; }
        var createChartContainerFunc = this.gridOptionsWrapper.getCreateChartContainerFunc();
        var params = {
            pivotChart: pivotChart,
            cellRange: cellRange,
            chartType: chartType,
            insideDialog: !(container || createChartContainerFunc),
            suppressChartRanges: suppressChartRanges,
            aggFunc: aggFunc,
            processChartOptions: processChartOptions,
            height: 400,
            width: 800 //TODO
        };
        var chartComp = new gridChartComp_1.GridChartComp(params);
        this.context.wireBean(chartComp);
        var chartRef = this.createChartRef(chartComp);
        if (container) {
            // if container exists, means developer initiated chart create via API, so place in provided container
            container.appendChild(chartComp.getGui());
            // if the chart container was placed outside of an element that
            // has the grid's theme, we manually add the current theme to
            // make sure all styles for the chartMenu are rendered correctly
            var theme = this.environment.getTheme();
            if (theme.el && !theme.el.contains(container)) {
                ag_grid_community_1._.addCssClass(container, theme.theme);
            }
        }
        else if (createChartContainerFunc) {
            // otherwise user created chart via grid UI, check if developer provides containers (eg if the application
            // is using it's own dialog's rather than the grid provided dialogs)
            createChartContainerFunc(chartRef);
        }
        else {
            // add listener to remove from active charts list when charts are destroyed, e.g. closing chart dialog
            chartComp.addEventListener(gridChartComp_1.GridChartComp.EVENT_DESTROYED, function () {
                ag_grid_community_1._.removeFromArray(_this.activeCharts, chartRef);
            });
        }
        return chartRef;
    };
    ChartService.prototype.createChartRef = function (chartComp) {
        var _this = this;
        var chartRef = {
            destroyChart: function () {
                if (_this.activeCharts.indexOf(chartRef) >= 0) {
                    chartComp.destroy();
                    ag_grid_community_1._.removeFromArray(_this.activeCharts, chartRef);
                }
            },
            chartElement: chartComp.getGui()
        };
        this.activeCharts.push(chartRef);
        return chartRef;
    };
    ChartService.prototype.getSelectedRange = function () {
        var ranges = this.rangeController.getCellRanges();
        return ranges.length > 0 ? ranges[0] : {};
    };
    ChartService.prototype.destroyAllActiveCharts = function () {
        // we take copy as the forEach is removing from the array as we process
        var activeCharts = this.activeCharts.slice();
        activeCharts.forEach(function (chart) { return chart.destroyChart(); });
    };
    __decorate([
        ag_grid_community_1.Autowired('rangeController'),
        __metadata("design:type", rangeController_1.RangeController)
    ], ChartService.prototype, "rangeController", void 0);
    __decorate([
        ag_grid_community_1.Autowired('columnController'),
        __metadata("design:type", ag_grid_community_1.ColumnController)
    ], ChartService.prototype, "columnController", void 0);
    __decorate([
        ag_grid_community_1.Autowired('environment'),
        __metadata("design:type", ag_grid_community_1.Environment)
    ], ChartService.prototype, "environment", void 0);
    __decorate([
        ag_grid_community_1.Autowired('context'),
        __metadata("design:type", ag_grid_community_1.Context)
    ], ChartService.prototype, "context", void 0);
    __decorate([
        ag_grid_community_1.Autowired('gridOptionsWrapper'),
        __metadata("design:type", ag_grid_community_1.GridOptionsWrapper)
    ], ChartService.prototype, "gridOptionsWrapper", void 0);
    __decorate([
        ag_grid_community_1.PreDestroy,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChartService.prototype, "destroyAllActiveCharts", null);
    ChartService = __decorate([
        ag_grid_community_1.Bean('chartService')
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/axis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/axis.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ./scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var selection_1 = __webpack_require__(/*! ./scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var line_1 = __webpack_require__(/*! ./scene/shape/line */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/line.js");
var ticks_1 = __webpack_require__(/*! ./util/ticks */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/ticks.js");
var angle_1 = __webpack_require__(/*! ./util/angle */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js");
var text_1 = __webpack_require__(/*! ./scene/shape/text */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js");
var arc_1 = __webpack_require__(/*! ./scene/shape/arc */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js");
var bbox_1 = __webpack_require__(/*! ./scene/bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var matrix_1 = __webpack_require__(/*! ./scene/matrix */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/matrix.js");
// import { Rect } from "./scene/shape/rect"; // debug (bbox)
var Tags;
(function (Tags) {
    Tags[Tags["Tick"] = 0] = "Tick";
    Tags[Tags["GridLine"] = 1] = "GridLine";
})(Tags || (Tags = {}));
/**
 * A general purpose linear axis with no notion of orientation.
 * The axis is always rendered vertically, with horizontal labels positioned to the left
 * of the axis line by default. The axis can be {@link rotation | rotated} by an arbitrary angle,
 * so that it can be used as a top, right, bottom, left, radial or any other kind
 * of linear axis.
 * The generic `D` parameter is the type of the domain of the axis' scale.
 * The output range of the axis' scale is always numeric (screen coordinates).
 */
var Axis = /** @class */ (function () {
    // onLayoutChange?: () => void;
    function Axis(scale) {
        this.group = new group_1.Group();
        this.line = new line_1.Line();
        /**
         * The horizontal translation of the axis group.
         */
        this.translationX = 0;
        /**
         * The vertical translation of the axis group.
         */
        this.translationY = 0;
        /**
         * Axis rotation angle in degrees.
         */
        this.rotation = 0;
        /**
         * The line width to be used by the axis line.
         */
        this.lineWidth = 1;
        /**
         * The color of the axis line.
         * Use `null` rather than `rgba(0, 0, 0, 0)` to make the axis line invisible.
         */
        this.lineColor = 'rgba(195, 195, 195, 1)';
        /**
         * The line width to be used by axis ticks.
         */
        this.tickWidth = 1;
        /**
         * The line length to be used by axis ticks.
         */
        this.tickSize = 6;
        /**
         * The padding between the ticks and the labels.
         */
        this.tickPadding = 5;
        /**
         * The color of the axis ticks.
         * Use `null` rather than `rgba(0, 0, 0, 0)` to make the ticks invisible.
         */
        this.tickColor = 'rgba(195, 195, 195, 1)';
        this.labelFontStyle = '';
        this.labelFontWeight = '';
        this.labelFontSize = 12;
        this.labelFontFamily = 'Verdana, sans-serif';
        this._title = undefined;
        /**
         * The color of the labels.
         * Use `null` rather than `rgba(0, 0, 0, 0)` to make labels invisible.
         */
        this.labelColor = 'rgba(87, 87, 87, 1)';
        /**
         * The length of the grid. The grid is only visible in case of a non-zero value.
         * In case {@link radialGrid} is `true`, the value is interpreted as an angle
         * (in degrees).
         */
        this._gridLength = 0;
        /**
         * The array of styles to cycle through when rendering grid lines.
         * For example, use two {@link GridStyle} objects for alternating styles.
         * Contains only one {@link GridStyle} object by default, meaning all grid lines
         * have the same style.
         */
        this._gridStyle = [{
                stroke: 'rgba(219, 219, 219, 1)',
                lineDash: [4, 2]
            }];
        /**
         * `false` - render grid as lines of {@link gridLength} that extend the ticks
         *           on the opposite side of the axis
         * `true` - render grid as concentric circles that go through the ticks
         */
        this._radialGrid = false;
        /**
         * Custom label rotation in degrees.
         * Labels are rendered perpendicular to the axis line by default.
         * Or parallel to the axis line, if the {@link parallelLabels} is set to `true`.
         * The value of this config is used as the angular offset/deflection
         * from the default rotation.
         */
        this.labelRotation = 0;
        /**
         * By default labels and ticks are positioned to the left of the axis line.
         * `true` positions the labels to the right of the axis line.
         * However, if the axis is rotated, its easier to think in terms
         * of this side or the opposite side, rather than left and right.
         * We use the term `mirror` for conciseness, although it's not
         * true mirroring - for example, when a label is rotated, so that
         * it is inclined at the 45 degree angle, text flowing from north-west
         * to south-east, ending at the tick to the left of the axis line,
         * and then we set this config to `true`, the text will still be flowing
         * from north-west to south-east, _starting_ at the tick to the right
         * of the axis line.
         */
        this.mirrorLabels = false;
        /**
         * Labels are rendered perpendicular to the axis line by default.
         * Setting this config to `true` makes labels render parallel to the axis line
         * and center aligns labels' text at the ticks.
         */
        this.parallelLabels = false;
        this.scale = scale;
        this.groupSelection = selection_1.Selection.select(this.group).selectAll();
        this.group.append(this.line);
        // this.group.append(this.bboxRect); // debug (bbox)
    }
    Object.defineProperty(Axis.prototype, "range", {
        get: function () {
            return this.scale.range;
        },
        set: function (value) {
            this.scale.range = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axis.prototype, "domain", {
        get: function () {
            return this.scale.domain;
        },
        set: function (value) {
            this.scale.domain = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axis.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            var oldTitle = this._title;
            if (oldTitle !== value) {
                if (oldTitle) {
                    // oldTitle.onLayoutChange = undefined;
                    this.group.removeChild(oldTitle.node);
                }
                if (value) {
                    value.node.rotation = -Math.PI / 2;
                    // value.onLayoutChange = this.onLayoutChange;
                    this.group.appendChild(value.node);
                }
                this._title = value;
                // this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axis.prototype, "gridLength", {
        get: function () {
            return this._gridLength;
        },
        set: function (value) {
            // Was visible and now invisible, or was invisible and now visible.
            if (this._gridLength && !value || !this._gridLength && value) {
                this.groupSelection = this.groupSelection.remove().setData([]);
            }
            this._gridLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axis.prototype, "gridStyle", {
        get: function () {
            return this._gridStyle;
        },
        set: function (value) {
            if (value.length) {
                this._gridStyle = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axis.prototype, "radialGrid", {
        get: function () {
            return this._radialGrid;
        },
        set: function (value) {
            if (this._radialGrid !== value) {
                this._radialGrid = value;
                this.groupSelection = this.groupSelection.remove().setData([]);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates/removes/updates the scene graph nodes that constitute the axis.
     * Supposed to be called _manually_ after changing _any_ of the axis properties.
     * This allows to bulk set axis properties before updating the nodes.
     * The node changes made by this method are rendered on the next animation frame.
     * We could schedule this method call automatically on the next animation frame
     * when any of the axis properties change (the way we do when properties of scene graph's
     * nodes change), but this will mean that we first wait for the next animation
     * frame to make changes to the nodes of the axis, then wait for another animation
     * frame to render those changes. It's nice to have everything update automatically,
     * but this extra level of async indirection will not just introduce an unwanted delay,
     * it will also make it harder to reason about the program.
     */
    Axis.prototype.update = function () {
        var _this = this;
        var group = this.group;
        var scale = this.scale;
        var rotation = angle_1.toRadians(this.rotation);
        var labelRotation = angle_1.normalizeAngle360(angle_1.toRadians(this.labelRotation));
        group.translationX = this.translationX;
        group.translationY = this.translationY;
        group.rotation = rotation;
        // Render ticks and labels.
        var ticks = scale.ticks(10);
        var fractionDigits = 0;
        if (ticks instanceof ticks_1.NumericTicks) {
            fractionDigits = ticks.fractionDigits;
        }
        var bandwidth = (scale.bandwidth || 0) / 2;
        // The side of the axis line to position the labels on.
        // -1 = left (default)
        //  1 = right
        var sideFlag = this.mirrorLabels ? 1 : -1;
        // When labels are parallel to the axis line, the `parallelFlipFlag` is used to
        // flip the labels to avoid upside-down text, when the axis is rotated
        // such that it is in the right hemisphere, i.e. the angle of rotation
        // is in the [0, π] interval.
        // The rotation angle is normalized, so that we have an easier time checking
        // if it's in the said interval. Since the axis is always rendered vertically
        // and then rotated, zero rotation means 12 (not 3) o-clock.
        // -1 = flip
        //  1 = don't flip (default)
        var parallelFlipRotation = angle_1.normalizeAngle360(rotation);
        var parallelFlipFlag = (!labelRotation && parallelFlipRotation >= 0 && parallelFlipRotation <= Math.PI) ? -1 : 1;
        var regularFlipRotation = angle_1.normalizeAngle360(rotation - Math.PI / 2);
        // Flip if the axis rotation angle is in the top hemisphere.
        var regularFlipFlag = (!labelRotation && regularFlipRotation >= 0 && regularFlipRotation <= Math.PI) ? -1 : 1;
        var alignFlag = (labelRotation >= 0 && labelRotation <= Math.PI) ? -1 : 1;
        var parallelLabels = this.parallelLabels;
        var update = this.groupSelection.setData(ticks);
        update.exit.remove();
        var enter = update.enter.append(group_1.Group);
        // Line auto-snaps to pixel grid if vertical or horizontal.
        enter.append(line_1.Line).each(function (node) { return node.tag = Tags.Tick; });
        if (this.gridLength) {
            if (this.radialGrid) {
                enter.append(arc_1.Arc).each(function (node) { return node.tag = Tags.GridLine; });
            }
            else {
                enter.append(line_1.Line).each(function (node) { return node.tag = Tags.GridLine; });
            }
        }
        enter.append(text_1.Text);
        var groupSelection = update.merge(enter);
        groupSelection
            .attrFn('translationY', function (_, datum) {
            return Math.round(scale.convert(datum) + bandwidth);
        });
        groupSelection.selectByTag(Tags.Tick)
            .each(function (line) {
            line.strokeWidth = _this.tickWidth;
            line.stroke = _this.tickColor;
        })
            .attr('x1', sideFlag * this.tickSize)
            .attr('x2', 0)
            .attr('y1', 0)
            .attr('y2', 0);
        if (this.gridLength) {
            var styles_1 = this.gridStyle;
            var styleCount_1 = styles_1.length;
            var gridLines = void 0;
            if (this.radialGrid) {
                var angularGridLength_1 = angle_1.normalizeAngle360Inclusive(angle_1.toRadians(this.gridLength));
                gridLines = groupSelection.selectByTag(Tags.GridLine)
                    .each(function (arc, datum) {
                    var radius = Math.round(scale.convert(datum) + bandwidth);
                    arc.centerX = 0;
                    arc.centerY = _this.scale.range[0] - radius;
                    arc.endAngle = angularGridLength_1;
                    arc.radiusX = radius;
                    arc.radiusY = radius;
                });
            }
            else {
                gridLines = groupSelection.selectByTag(Tags.GridLine)
                    .each(function (line) {
                    line.x1 = 0;
                    line.x2 = -sideFlag * _this.gridLength;
                    line.y1 = 0;
                    line.y2 = 0;
                    line.visible = Math.abs(line.parent.translationY - scale.range[0]) > 1;
                });
            }
            gridLines.each(function (gridLine, datum, index) {
                var style = styles_1[index % styleCount_1];
                gridLine.stroke = style.stroke;
                gridLine.strokeWidth = _this.tickWidth;
                gridLine.lineDash = style.lineDash;
                gridLine.fill = undefined;
            });
        }
        var labelFormatter = this.labelFormatter;
        var labels = groupSelection.selectByClass(text_1.Text)
            .each(function (label, datum, index) {
            label.fontStyle = _this.labelFontStyle;
            label.fontWeight = _this.labelFontWeight;
            label.fontSize = _this.labelFontSize;
            label.fontFamily = _this.labelFontFamily;
            label.fill = _this.labelColor;
            label.textBaseline = parallelLabels && !labelRotation
                ? (sideFlag * parallelFlipFlag === -1 ? 'hanging' : 'bottom')
                : 'middle';
            label.text = labelFormatter
                ? labelFormatter({
                    value: fractionDigits >= 0 ? datum : String(datum),
                    index: index,
                    fractionDigits: fractionDigits
                })
                : fractionDigits
                    // the `datum` is a floating point number
                    ? datum.toFixed(fractionDigits)
                    // the `datum` is an integer, a string or an object
                    : String(datum);
            label.textAlign = parallelLabels
                ? labelRotation ? (sideFlag * alignFlag === -1 ? 'end' : 'start') : 'center'
                : sideFlag * regularFlipFlag === -1 ? 'end' : 'start';
        });
        var labelX = sideFlag * (this.tickSize + this.tickPadding);
        var autoRotation = parallelLabels
            ? parallelFlipFlag * Math.PI / 2
            : (regularFlipFlag === -1 ? Math.PI : 0);
        labels.each(function (label) {
            label.x = labelX;
            label.rotationCenterX = labelX;
            label.rotation = autoRotation + labelRotation;
        });
        this.groupSelection = groupSelection;
        // Render axis line.
        var line = this.line;
        line.x1 = 0;
        line.x2 = 0;
        line.y1 = scale.range[0];
        line.y2 = scale.range[scale.range.length - 1];
        line.strokeWidth = this.lineWidth;
        line.stroke = this.lineColor;
        line.visible = ticks.length > 0;
        var title = this.title;
        if (title) {
            var padding = title.padding.bottom;
            var node = title.node;
            var bbox = this.getBBox(false);
            var titleRotationFlag = sideFlag === -1 && parallelFlipRotation > Math.PI && parallelFlipRotation < Math.PI * 2 ? -1 : 1;
            node.rotation = titleRotationFlag * sideFlag * Math.PI / 2;
            node.x = titleRotationFlag * sideFlag * (line.y1 + line.y2) / 2;
            if (sideFlag === -1) {
                node.y = titleRotationFlag * (-padding - bbox.width + Math.max(bbox.x + bbox.width, 0));
            }
            else {
                node.y = -padding - bbox.width - Math.min(bbox.x, 0);
            }
            // title.text = `Axis Title: ${sideFlag} ${toDegrees(parallelFlipRotation).toFixed(0)} ${titleRotationFlag}`;
            node.textBaseline = titleRotationFlag === 1 ? 'bottom' : 'top';
        }
        // debug (bbox)
        // const bbox = this.getBBox();
        // const bboxRect = this.bboxRect;
        // bboxRect.x = bbox.x;
        // bboxRect.y = bbox.y;
        // bboxRect.width = bbox.width;
        // bboxRect.height = bbox.height;
    };
    Axis.prototype.getBBox = function (includeTitle) {
        if (includeTitle === void 0) { includeTitle = true; }
        var line = this.line;
        var labels = this.groupSelection.selectByClass(text_1.Text);
        var left = Infinity;
        var right = -Infinity;
        var top = Infinity;
        var bottom = -Infinity;
        labels.each(function (label) {
            // The label itself is rotated, but not translated, the group that
            // contains it is. So to capture the group transform in the label bbox
            // calculation we combine the transform matrices of the label and the group.
            // Depending on the timing of the `axis.getBBox()` method call, we may
            // not have the group's and the label's transform matrices updated yet (because
            // the transform matrix is not recalculated whenever a node's transform attributes
            // change, instead it's marked for recalculation on the next frame by setting
            // the node's `dirtyTransform` flag to `true`), so we force them to update
            // right here by calling `computeTransformMatrix`.
            label.computeTransformMatrix();
            var matrix = matrix_1.Matrix.flyweight(label.matrix);
            var group = label.parent;
            group.computeTransformMatrix();
            matrix.preMultiplySelf(group.matrix);
            var labelBBox = label.getBBox();
            if (labelBBox) {
                var bbox = matrix.transformBBox(labelBBox);
                left = Math.min(left, bbox.x);
                right = Math.max(right, bbox.x + bbox.width);
                top = Math.min(top, bbox.y);
                bottom = Math.max(bottom, bbox.y + bbox.height);
            }
        });
        if (includeTitle && this.title) {
            var label = this.title.node;
            label.computeTransformMatrix();
            var matrix = matrix_1.Matrix.flyweight(label.matrix);
            var labelBBox = label.getBBox();
            if (labelBBox) {
                var bbox = matrix.transformBBox(labelBBox);
                left = Math.min(left, bbox.x);
                right = Math.max(right, bbox.x + bbox.width);
                top = Math.min(top, bbox.y);
                bottom = Math.max(bottom, bbox.y + bbox.height);
            }
        }
        left = Math.min(left, 0);
        right = Math.max(right, 0);
        top = Math.min(top, line.y1, line.y2);
        bottom = Math.max(bottom, line.y1, line.y2);
        return new bbox_1.BBox(left, top, right - left, bottom - top);
    };
    return Axis;
}());
exports.Axis = Axis;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/canvas/hdpiCanvas.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/canvas/hdpiCanvas.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps the native Canvas element and overrides its CanvasRenderingContext2D to
 * provide resolution independent rendering based on `window.devicePixelRatio`.
 */
var HdpiCanvas = /** @class */ (function () {
    // The width/height attributes of the Canvas element default to
    // 300/150 according to w3.org.
    function HdpiCanvas(options) {
        if (options === void 0) { options = {}; }
        this._parent = undefined;
        // `NaN` is deliberate here, so that overrides are always applied
        // and the `resetTransform` inside the `resize` method works in IE11.
        this._pixelRatio = NaN;
        this.document = options.document || window.document;
        this.tempCanvas = this.document.createElement('canvas');
        this.element = this.document.createElement('canvas');
        this.element.style.userSelect = 'none';
        this.context = this.element.getContext('2d');
        this.updatePixelRatio(0, false);
        this.resize(this._width = options.width || 300, this._height = options.height || 150);
    }
    Object.defineProperty(HdpiCanvas.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            if (this._parent !== value) {
                this.remove();
                if (value) {
                    value.appendChild(this.element);
                }
                this._parent = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    HdpiCanvas.prototype.remove = function () {
        var parent = this.element.parentNode;
        if (parent !== null) {
            parent.removeChild(this.element);
        }
    };
    HdpiCanvas.prototype.destroy = function () {
        this.element.remove();
        this._canvas = undefined;
        Object.freeze(this);
    };
    HdpiCanvas.prototype.toImage = function () {
        var img = this.document.createElement('img');
        img.src = this.element.toDataURL();
        return img;
    };
    /**
     * @param options.fileName The `.png` extension is going to be added automatically.
     * @param [options.background] Defaults to `white`.
     */
    HdpiCanvas.prototype.download = function (fileName) {
        fileName = ((fileName || '').trim() || 'image') + '.png';
        // Chart images saved as JPEG are a few times larger at 50% quality than PNG images,
        // so we don't support saving to JPEG.
        var type = 'image/png';
        var dataUrl = this.element.toDataURL(type);
        var document = this.document;
        if (navigator.msSaveOrOpenBlob) { // IE11
            var binary = atob(dataUrl.split(',')[1]); // strip the `data:image/png;base64,` part
            var array = [];
            for (var i = 0, n = binary.length; i < n; i++) {
                array.push(binary.charCodeAt(i));
            }
            var blob = new Blob([new Uint8Array(array)], { type: type });
            navigator.msSaveOrOpenBlob(blob, fileName);
        }
        else {
            var a = document.createElement('a');
            a.href = dataUrl;
            a.download = fileName;
            a.style.display = 'none';
            document.body.appendChild(a); // required for the `click` to work in Firefox
            a.click();
            document.body.removeChild(a);
        }
    };
    Object.defineProperty(HdpiCanvas.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the pixel ratio of the Canvas element with the given value,
     * or uses the window.devicePixelRatio (default), then resizes the Canvas
     * element accordingly (default).
     * @param ratio
     * @param resize
     */
    HdpiCanvas.prototype.updatePixelRatio = function (ratio, resize) {
        if (ratio === void 0) { ratio = 0; }
        if (resize === void 0) { resize = true; }
        var pixelRatio = ratio || window.devicePixelRatio;
        if (pixelRatio === this.pixelRatio) {
            return;
        }
        var canvas = this.element;
        var ctx = this.context;
        var overrides = this.overrides = HdpiCanvas.makeHdpiOverrides(pixelRatio);
        for (var name_1 in overrides) {
            if (overrides.hasOwnProperty(name_1)) {
                // Save native methods under prefixed names,
                // if this hasn't been done by the previous overrides already.
                if (!ctx['$' + name_1]) {
                    ctx['$' + name_1] = ctx[name_1];
                }
                // Replace native methods with overrides,
                // or previous overrides with the new ones.
                ctx[name_1] = overrides[name_1];
            }
        }
        if (resize) {
            var logicalWidth = canvas.width / this.pixelRatio;
            var logicalHeight = canvas.height / this.pixelRatio;
            canvas.width = Math.round(logicalWidth * pixelRatio);
            canvas.height = Math.round(logicalHeight * pixelRatio);
            canvas.style.width = Math.round(logicalWidth) + 'px';
            canvas.style.height = Math.round(logicalHeight) + 'px';
            ctx.resetTransform(); // should be called every time Canvas size changes
        }
        this._pixelRatio = pixelRatio;
    };
    Object.defineProperty(HdpiCanvas.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdpiCanvas.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    HdpiCanvas.prototype.resize = function (width, height) {
        var canvas = this.element;
        var context = this.context;
        var tempCanvas = this.tempCanvas;
        this._width = width;
        this._height = height;
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        var tempContext = tempCanvas.getContext('2d');
        tempContext.drawImage(context.canvas, 0, 0);
        canvas.width = Math.round(width * this.pixelRatio);
        canvas.height = Math.round(height * this.pixelRatio);
        canvas.style.width = Math.round(width) + 'px';
        canvas.style.height = Math.round(height) + 'px';
        context.drawImage(tempContext.canvas, 0, 0);
        context.resetTransform();
    };
    Object.defineProperty(HdpiCanvas.prototype, "textMeasuringContext", {
        get: function () {
            if (this._textMeasuringContext) {
                return this._textMeasuringContext;
            }
            var canvas = document.createElement('canvas');
            return this._textMeasuringContext = canvas.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdpiCanvas.prototype, "svgText", {
        get: function () {
            if (this._svgText) {
                return this._svgText;
            }
            var xmlns = 'http://www.w3.org/2000/svg';
            var svg = document.createElementNS(xmlns, 'svg');
            svg.setAttribute('width', '100');
            svg.setAttribute('height', '100');
            // Add a descriptive class name in case someone sees this SVG element
            // in devtools and wonders about its purpose:
            if (svg.classList) {
                svg.classList.add('text-measuring-svg');
            }
            else {
                svg.setAttribute('class', 'text-measuring-svg');
            }
            svg.style.position = 'absolute';
            svg.style.top = '-1000px';
            svg.style.visibility = 'hidden';
            var svgText = document.createElementNS(xmlns, 'text');
            svgText.setAttribute('x', '0');
            svgText.setAttribute('y', '30');
            svgText.setAttribute('text', 'black');
            svg.appendChild(svgText);
            document.body.appendChild(svg);
            this._svgText = svgText;
            return svgText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HdpiCanvas.prototype, "has", {
        get: function () {
            if (this._has) {
                return this._has;
            }
            return this._has = Object.freeze({
                textMetrics: this.textMeasuringContext.measureText('test')
                    .actualBoundingBoxDescent !== undefined,
                getTransform: this.textMeasuringContext.getTransform !== undefined,
                flicker: !!window.safari
            });
        },
        enumerable: true,
        configurable: true
    });
    HdpiCanvas.prototype.measureText = function (text, font, textBaseline, textAlign) {
        var ctx = this.textMeasuringContext;
        ctx.font = font;
        ctx.textBaseline = textBaseline;
        ctx.textAlign = textAlign;
        return ctx.measureText(text);
    };
    /**
     * Returns the width and height of the measured text.
     * @param text The single-line text to measure.
     * @param font The font shorthand string.
     */
    HdpiCanvas.prototype.getTextSize = function (text, font) {
        if (this.has.textMetrics) {
            var ctx = this.textMeasuringContext;
            ctx.font = font;
            var metrics = ctx.measureText(text);
            return {
                width: metrics.width,
                height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
            };
        }
        else {
            return this.measureSvgText(text, font);
        }
    };
    HdpiCanvas.prototype.measureSvgText = function (text, font) {
        var cache = HdpiCanvas.textSizeCache;
        var fontCache = cache[font];
        // Note: consider not caching the size of numeric strings.
        // For example: if (isNaN(+text)) { // skip
        if (fontCache) {
            var size_1 = fontCache[text];
            if (size_1) {
                return size_1;
            }
        }
        else {
            cache[font] = {};
        }
        var svgText = this.svgText;
        svgText.style.font = font;
        svgText.textContent = text;
        // `getBBox` returns an instance of `SVGRect` with the same `width` and `height`
        // measurements as `DOMRect` instance returned by the `getBoundingClientRect`.
        // But the `SVGRect` instance has half the properties of the `DOMRect`,
        // so we use the `getBBox` method.
        var bbox = svgText.getBBox();
        var size = {
            width: bbox.width,
            height: bbox.height
        };
        cache[font][text] = size;
        return size;
    };
    HdpiCanvas.makeHdpiOverrides = function (pixelRatio) {
        var depth = 0;
        return {
            save: function () {
                this.$save();
                depth++;
            },
            restore: function () {
                if (depth > 0) {
                    this.$restore();
                    depth--;
                }
            },
            setTransform: function (a, b, c, d, e, f) {
                this.$setTransform(a * pixelRatio, b * pixelRatio, c * pixelRatio, d * pixelRatio, e * pixelRatio, f * pixelRatio);
            },
            resetTransform: function () {
                // As of Jan 8, 2019, `resetTransform` is still an "experimental technology",
                // and doesn't work in IE11 and Edge 44.
                this.$setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
                this.save();
                depth = 0;
                // The scale above will be impossible to restore,
                // because we override the `ctx.restore` above and
                // check `depth` there.
            }
        };
    };
    HdpiCanvas.textSizeCache = {};
    return HdpiCanvas;
}());
exports.HdpiCanvas = HdpiCanvas;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/caption.js":
/*!********************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/caption.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var padding_1 = __webpack_require__(/*! ./util/padding */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js");
var text_1 = __webpack_require__(/*! ./scene/shape/text */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js");
var node_1 = __webpack_require__(/*! ./scene/node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var Caption = /** @class */ (function () {
    function Caption() {
        this.node = new text_1.Text();
        this._enabled = true;
        this._padding = new padding_1.Padding(10);
        var node = this.node;
        node.textAlign = 'center';
        node.textBaseline = 'top';
        node.pointerEvents = node_1.PointerEvents.None;
    }
    Caption.create = function (params) {
        if (params === void 0) { params = {}; }
        var caption = new Caption();
        caption.text = params.text || '';
        caption.fontStyle = params.fontStyle;
        caption.fontWeight = params.fontWeight || 'bold';
        caption.fontSize = params.fontSize || 14;
        caption.fontFamily = params.fontFamily || 'Verdana, sans-serif';
        caption.color = params.color || 'black';
        caption.requestLayout();
        return caption;
    };
    Object.defineProperty(Caption.prototype, "text", {
        get: function () {
            return this.node.text;
        },
        set: function (value) {
            if (this.node.text !== value) {
                this.node.text = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "fontStyle", {
        get: function () {
            return this.node.fontStyle;
        },
        set: function (value) {
            if (this.node.fontStyle !== value) {
                this.node.fontStyle = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "fontWeight", {
        get: function () {
            return this.node.fontWeight;
        },
        set: function (value) {
            if (this.node.fontWeight !== value) {
                this.node.fontWeight = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "fontSize", {
        get: function () {
            return this.node.fontSize;
        },
        set: function (value) {
            if (this.node.fontSize !== value) {
                this.node.fontSize = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "fontFamily", {
        get: function () {
            return this.node.fontFamily;
        },
        set: function (value) {
            if (this.node.fontFamily !== value) {
                this.node.fontFamily = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "color", {
        get: function () {
            return this.node.fill || '';
        },
        set: function (value) {
            if (this.node.fill !== value) {
                this.node.fill = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled !== value) {
                this._enabled = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Caption.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        set: function (value) {
            if (this._padding !== value) {
                this._padding = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Caption.prototype.requestLayout = function () {
        if (this.onLayoutChange) {
            this.onLayoutChange();
        }
    };
    return Caption;
}());
exports.Caption = Caption;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/categoryAxis.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/categoryAxis.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bandScale_1 = __webpack_require__(/*! ../../scale/bandScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/bandScale.js");
var axis_1 = __webpack_require__(/*! ../../axis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/axis.js");
var CategoryAxis = /** @class */ (function (_super) {
    __extends(CategoryAxis, _super);
    function CategoryAxis() {
        var _this = this;
        var scale = new bandScale_1.BandScale();
        scale.paddingInner = 0.2;
        scale.paddingOuter = 0.3;
        _this = _super.call(this, scale) || this;
        return _this;
    }
    return CategoryAxis;
}(axis_1.Axis));
exports.CategoryAxis = CategoryAxis;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/groupedCategoryAxis.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/groupedCategoryAxis.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var selection_1 = __webpack_require__(/*! ../../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var line_1 = __webpack_require__(/*! ../../scene/shape/line */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/line.js");
var angle_1 = __webpack_require__(/*! ../../util/angle */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js");
var text_1 = __webpack_require__(/*! ../../scene/shape/text */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js");
var bbox_1 = __webpack_require__(/*! ../../scene/bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var matrix_1 = __webpack_require__(/*! ../../scene/matrix */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/matrix.js");
var bandScale_1 = __webpack_require__(/*! ../../scale/bandScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/bandScale.js");
var tree_1 = __webpack_require__(/*! ../../layout/tree */ "./node_modules/ag-grid-enterprise/dist/lib/charts/layout/tree.js");
var Tags;
(function (Tags) {
    Tags[Tags["Tick"] = 0] = "Tick";
    Tags[Tags["GridLine"] = 1] = "GridLine";
})(Tags || (Tags = {}));
/**
 * A general purpose linear axis with no notion of orientation.
 * The axis is always rendered vertically, with horizontal labels positioned to the left
 * of the axis line by default. The axis can be {@link rotation | rotated} by an arbitrary angle,
 * so that it can be used as a top, right, bottom, left, radial or any other kind
 * of linear axis.
 * The generic `D` parameter is the type of the domain of the axis' scale.
 * The output range of the axis' scale is always numeric (screen coordinates).
 */
var GroupedCategoryAxis = /** @class */ (function () {
    // onLayoutChange?: () => void;
    function GroupedCategoryAxis() {
        this.id = this.createId();
        this.scale = new bandScale_1.BandScale();
        this.tickScale = new bandScale_1.BandScale();
        this.group = new group_1.Group();
        /**
         * The horizontal translation of the axis group.
         */
        this.translationX = 0;
        /**
         * The vertical translation of the axis group.
         */
        this.translationY = 0;
        /**
         * Axis rotation angle in degrees.
         */
        this.rotation = 0;
        /**
         * The line width to be used by the axis line.
         */
        this.lineWidth = 1;
        /**
         * The color of the axis line.
         * Use `null` rather than `rgba(0, 0, 0, 0)` to make the axis line invisible.
         */
        this.lineColor = 'rgba(195, 195, 195, 1)';
        /**
         * The line width to be used by axis ticks.
         */
        this.tickWidth = 1;
        /**
         * The line length to be used by axis ticks.
         */
        this.tickSize = 6;
        /**
         * The padding between the labels and the axis line.
         */
        this.labelPadding = 5;
        this.labelGrid = false;
        /**
         * The color of the axis ticks.
         * Use `null` rather than `rgba(0, 0, 0, 0)` to make the ticks invisible.
         */
        this.tickColor = 'rgba(195, 195, 195, 1)';
        this.labelFontStyle = '';
        this.labelFontWeight = '';
        this.labelFontSize = 12;
        this.labelFontFamily = 'Verdana, sans-serif';
        this.title = undefined;
        /**
         * The color of the labels.
         * Use `null` rather than `rgba(0, 0, 0, 0)` to make labels invisible.
         */
        this.labelColor = 'rgba(87, 87, 87, 1)';
        /**
         * The length of the grid. The grid is only visible in case of a non-zero value.
         */
        this._gridLength = 0;
        /**
         * The array of styles to cycle through when rendering grid lines.
         * For example, use two {@link GridStyle} objects for alternating styles.
         * Contains only one {@link GridStyle} object by default, meaning all grid lines
         * have the same style.
         */
        this._gridStyle = [{
                stroke: 'rgba(219, 219, 219, 1)',
                lineDash: [4, 2]
            }];
        /**
         * Custom label rotation in degrees.
         * Labels are rendered perpendicular to the axis line by default.
         * Or parallel to the axis line, if the {@link parallelLabels} is set to `true`.
         * The value of this config is used as the angular offset/deflection
         * from the default rotation.
         */
        this.labelRotation = 0;
        /**
         * By default labels and ticks are positioned to the left of the axis line.
         * `true` positions the labels to the right of the axis line.
         * However, if the axis is rotated, its easier to think in terms
         * of this side or the opposite side, rather than left and right.
         * We use the term `mirror` for conciseness, although it's not
         * true mirroring - for example, when a label is rotated, so that
         * it is inclined at the 45 degree angle, text flowing from north-west
         * to south-east, ending at the tick to the left of the axis line,
         * and then we set this config to `true`, the text will still be flowing
         * from north-west to south-east, _starting_ at the tick to the right
         * of the axis line.
         */
        this.mirrorLabels = false;
        /**
         * Labels are rendered perpendicular to the axis line by default.
         * Setting this config to `true` makes labels render parallel to the axis line
         * and center aligns labels' text at the ticks.
         */
        this.parallelLabels = false;
        var scale = this.scale;
        scale.paddingOuter = 0.1;
        scale.paddingInner = scale.paddingOuter * 2;
        var tickScale = this.tickScale;
        tickScale.paddingInner = 1;
        tickScale.paddingOuter = 0;
        this.gridLineSelection = selection_1.Selection.select(this.group).selectAll();
        this.axisLineSelection = selection_1.Selection.select(this.group).selectAll();
        this.separatorSelection = selection_1.Selection.select(this.group).selectAll();
        this.labelSelection = selection_1.Selection.select(this.group).selectAll();
        // this.group.append(this.bboxRect); // debug (bbox)
    }
    GroupedCategoryAxis.prototype.createId = function () {
        var constructor = this.constructor;
        var className = constructor.className;
        if (!className) {
            throw new Error("The " + constructor + " is missing the 'className' property.");
        }
        return className + '-' + (constructor.id = (constructor.id || 0) + 1);
    };
    Object.defineProperty(GroupedCategoryAxis.prototype, "domain", {
        get: function () {
            return this.scale.domain;
        },
        set: function (value) {
            this.scale.domain = value;
            var tickTree = tree_1.ticksToTree(value);
            this.tickTreeLayout = tree_1.treeLayout(tickTree);
            var domain = value.slice();
            domain.push('');
            this.tickScale.domain = domain;
            this.resizeTickTree();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedCategoryAxis.prototype, "range", {
        get: function () {
            return this.scale.range;
        },
        set: function (value) {
            this.scale.range = value;
            this.tickScale.range = value;
            this.resizeTickTree();
        },
        enumerable: true,
        configurable: true
    });
    GroupedCategoryAxis.prototype.resizeTickTree = function () {
        var s = this.scale;
        var range = s.domain.length ? [s.convert(s.domain[0]), s.convert(s.domain[s.domain.length - 1])] : s.range;
        var layout = this.tickTreeLayout;
        var lineHeight = this.lineHeight;
        if (layout) {
            layout.resize(Math.abs(range[1] - range[0]), layout.depth * lineHeight, (Math.min(range[0], range[1]) || 0) + (s.bandwidth || 0) / 2, -layout.depth * lineHeight);
        }
    };
    Object.defineProperty(GroupedCategoryAxis.prototype, "lineHeight", {
        get: function () {
            return this.labelFontSize * 1.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedCategoryAxis.prototype, "gridLength", {
        get: function () {
            return this._gridLength;
        },
        set: function (value) {
            // Was visible and now invisible, or was invisible and now visible.
            if (this._gridLength && !value || !this._gridLength && value) {
                this.gridLineSelection = this.gridLineSelection.remove().setData([]);
                this.labelSelection = this.labelSelection.remove().setData([]);
            }
            this._gridLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedCategoryAxis.prototype, "gridStyle", {
        get: function () {
            return this._gridStyle;
        },
        set: function (value) {
            if (value.length) {
                this._gridStyle = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates/removes/updates the scene graph nodes that constitute the axis.
     * Supposed to be called _manually_ after changing _any_ of the axis properties.
     * This allows to bulk set axis properties before updating the nodes.
     * The node changes made by this method are rendered on the next animation frame.
     * We could schedule this method call automatically on the next animation frame
     * when any of the axis properties change (the way we do when properties of scene graph's
     * nodes change), but this will mean that we first wait for the next animation
     * frame to make changes to the nodes of the axis, then wait for another animation
     * frame to render those changes. It's nice to have everything update automatically,
     * but this extra level of async indirection will not just introduce an unwanted delay,
     * it will also make it harder to reason about the program.
     */
    GroupedCategoryAxis.prototype.update = function () {
        var _this = this;
        var group = this.group;
        var scale = this.scale;
        var tickScale = this.tickScale;
        var bandwidth = Math.abs(scale.range[1] - scale.range[0]) / scale.domain.length || 0;
        var parallelLabels = this.parallelLabels;
        var rotation = angle_1.toRadians(this.rotation);
        var isHorizontal = Math.abs(Math.cos(rotation)) < 1e-8;
        var labelRotation = angle_1.normalizeAngle360(angle_1.toRadians(this.labelRotation));
        group.translationX = this.translationX;
        group.translationY = this.translationY;
        group.rotation = rotation;
        var title = this.title;
        var lineHeight = this.lineHeight;
        // Render ticks and labels.
        var tickTreeLayout = this.tickTreeLayout;
        var labels = scale.ticks();
        var treeLabels = tickTreeLayout ? tickTreeLayout.nodes : [];
        var isLabelTree = tickTreeLayout ? tickTreeLayout.depth > 1 : false;
        var ticks = tickScale.ticks();
        // The side of the axis line to position the labels on.
        // -1 = left (default)
        //  1 = right
        var sideFlag = this.mirrorLabels ? 1 : -1;
        // When labels are parallel to the axis line, the `parallelFlipFlag` is used to
        // flip the labels to avoid upside-down text, when the axis is rotated
        // such that it is in the right hemisphere, i.e. the angle of rotation
        // is in the [0, π] interval.
        // The rotation angle is normalized, so that we have an easier time checking
        // if it's in the said interval. Since the axis is always rendered vertically
        // and then rotated, zero rotation means 12 (not 3) o-clock.
        // -1 = flip
        //  1 = don't flip (default)
        var parallelFlipRotation = angle_1.normalizeAngle360(rotation);
        var parallelFlipFlag = (!labelRotation && parallelFlipRotation >= 0 && parallelFlipRotation <= Math.PI) ? -1 : 1;
        var regularFlipRotation = angle_1.normalizeAngle360(rotation - Math.PI / 2);
        // Flip if the axis rotation angle is in the top hemisphere.
        var regularFlipFlag = (!labelRotation && regularFlipRotation >= 0 && regularFlipRotation <= Math.PI) ? -1 : 1;
        var updateGridLines = this.gridLineSelection.setData(this.gridLength ? ticks : []);
        updateGridLines.exit.remove();
        var enterGridLines = updateGridLines.enter.append(line_1.Line);
        var gridLineSelection = updateGridLines.merge(enterGridLines);
        var updateLabels = this.labelSelection.setData(treeLabels);
        updateLabels.exit.remove();
        var enterLabels = updateLabels.enter.append(text_1.Text);
        var labelSelection = updateLabels.merge(enterLabels);
        var labelFormatter = this.labelFormatter;
        var maxLeafLabelWidth = 0;
        labelSelection
            .each(function (label, datum, index) {
            label.fontStyle = _this.labelFontStyle;
            label.fontWeight = _this.labelFontWeight;
            label.fontSize = _this.labelFontSize;
            label.fontFamily = _this.labelFontFamily;
            label.fill = _this.labelColor;
            label.textBaseline = parallelFlipFlag === -1 ? 'bottom' : 'hanging';
            // label.textBaseline = parallelLabels && !labelRotation
            //     ? (sideFlag * parallelFlipFlag === -1 ? 'hanging' : 'bottom')
            //     : 'middle';
            if (title && index === 0) { // use the phantom root as the axis title
                label.text = title.text;
                label.fontSize = title.fontSize;
                label.fontStyle = title.fontStyle;
                label.fontWeight = title.fontWeight;
                label.fontFamily = title.fontFamily;
                label.textBaseline = 'hanging';
            }
            else {
                label.text = labelFormatter
                    ? labelFormatter({
                        value: String(datum.label),
                        index: index
                    })
                    : String(datum.label);
            }
            label.textAlign = 'center';
            label.translationX = datum.screenY - _this.labelFontSize * 0.25;
            label.translationY = datum.screenX;
            var bbox = label.getBBox();
            if (bbox && bbox.width > maxLeafLabelWidth) {
                maxLeafLabelWidth = bbox.width;
            }
        });
        var labelX = sideFlag * this.labelPadding; // label padding from the axis line
        var autoRotation = parallelLabels
            ? parallelFlipFlag * Math.PI / 2
            : (regularFlipFlag === -1 ? Math.PI : 0);
        var labelGrid = this.labelGrid;
        var separatorData = [];
        labelSelection.each(function (label, datum, index) {
            label.x = labelX;
            label.rotationCenterX = labelX;
            if (!datum.children.length) {
                label.rotation = labelRotation;
                label.textAlign = 'end';
                label.textBaseline = 'middle';
            }
            else {
                label.translationX -= maxLeafLabelWidth - lineHeight + _this.labelPadding;
                if (isHorizontal) {
                    label.rotation = autoRotation;
                }
                else {
                    label.rotation = -Math.PI / 2;
                }
            }
            // Calculate positions of label separators for all nodes except the root.
            // Each separator is placed to the top of the current label.
            if (datum.parent && isLabelTree) {
                var y = !datum.children.length
                    ? datum.screenX - bandwidth / 2
                    : datum.screenX - datum.leafCount * bandwidth / 2;
                if (!datum.children.length) {
                    if (!datum.number || labelGrid) {
                        separatorData.push({
                            y: y,
                            x1: 0,
                            x2: -maxLeafLabelWidth - _this.labelPadding * 2,
                            toString: function () { return String(index); }
                        });
                    }
                }
                else {
                    separatorData.push({
                        y: y,
                        x1: -maxLeafLabelWidth + datum.screenY + lineHeight / 2,
                        x2: -maxLeafLabelWidth + datum.screenY - lineHeight / 2,
                        toString: function () { return String(index); }
                    });
                }
            }
        });
        // Calculate the position of the long separator on the far bottom of the axis.
        var minX = 0;
        separatorData.forEach(function (d) { return minX = Math.min(minX, d.x2); });
        separatorData.push({
            y: Math.max(scale.range[0], scale.range[1]),
            x1: 0,
            x2: minX,
            toString: function () { return String(separatorData.length); }
        });
        var updateSeparators = this.separatorSelection.setData(separatorData);
        updateSeparators.exit.remove();
        var enterSeparators = updateSeparators.enter.append(line_1.Line);
        var separatorSelection = updateSeparators.merge(enterSeparators);
        this.separatorSelection = separatorSelection;
        separatorSelection.each(function (line, datum, index) {
            line.x1 = datum.x1;
            line.x2 = datum.x2;
            line.y1 = datum.y;
            line.y2 = datum.y;
            line.stroke = _this.tickColor;
            line.fill = undefined;
            line.strokeWidth = 1;
        });
        this.gridLineSelection = gridLineSelection;
        this.labelSelection = labelSelection;
        // Render axis lines.
        var lineCount = tickTreeLayout ? tickTreeLayout.depth + 1 : 1;
        var lines = [];
        for (var i = 0; i < lineCount; i++) {
            lines.push(i);
        }
        var updateAxisLines = this.axisLineSelection.setData(lines);
        updateAxisLines.exit.remove();
        var enterAxisLines = updateAxisLines.enter.append(line_1.Line);
        var axisLineSelection = updateAxisLines.merge(enterAxisLines);
        this.axisLineSelection = axisLineSelection;
        axisLineSelection.each(function (line, datum, index) {
            var x = index > 0 ? -maxLeafLabelWidth - _this.labelPadding * 2 - (index - 1) * lineHeight : 0;
            line.x1 = x;
            line.x2 = x;
            line.y1 = scale.range[0];
            line.y2 = scale.range[1];
            line.strokeWidth = _this.lineWidth;
            line.stroke = _this.lineColor;
            line.visible = labels.length > 0 && (index === 0 || (labelGrid && isLabelTree));
        });
        if (this.gridLength) {
            var styles_1 = this.gridStyle;
            var styleCount_1 = styles_1.length;
            gridLineSelection
                .each(function (line, datum, index) {
                var y = Math.round(tickScale.convert(datum));
                line.x1 = 0;
                line.x2 = -sideFlag * _this.gridLength;
                line.y1 = y;
                line.y2 = y;
                line.visible = Math.abs(line.parent.translationY - scale.range[0]) > 1;
                var style = styles_1[index % styleCount_1];
                line.stroke = style.stroke;
                line.strokeWidth = _this.tickWidth;
                line.lineDash = style.lineDash;
                line.fill = undefined;
            });
        }
        // debug (bbox)
        // const bbox = this.getBBox();
        // const bboxRect = this.bboxRect;
        // bboxRect.x = bbox.x;
        // bboxRect.y = bbox.y;
        // bboxRect.width = bbox.width;
        // bboxRect.height = bbox.height;
    };
    GroupedCategoryAxis.prototype.getBBox = function (includeTitle) {
        if (includeTitle === void 0) { includeTitle = true; }
        var left = Infinity;
        var right = -Infinity;
        var top = Infinity;
        var bottom = -Infinity;
        this.labelSelection.each(function (label, datum, index) {
            // The label itself is rotated, but not translated, the group that
            // contains it is. So to capture the group transform in the label bbox
            // calculation we combine the transform matrices of the label and the group.
            // Depending on the timing of the `axis.getBBox()` method call, we may
            // not have the group's and the label's transform matrices updated yet (because
            // the transform matrix is not recalculated whenever a node's transform attributes
            // change, instead it's marked for recalculation on the next frame by setting
            // the node's `dirtyTransform` flag to `true`), so we force them to update
            // right here by calling `computeTransformMatrix`.
            if (index > 0 || includeTitle) { // first node is the root (title)
                label.computeTransformMatrix();
                var matrix = matrix_1.Matrix.flyweight(label.matrix);
                var group = label.parent;
                group.computeTransformMatrix();
                matrix.preMultiplySelf(group.matrix);
                var labelBBox = label.getBBox();
                if (labelBBox) {
                    var bbox = matrix.transformBBox(labelBBox);
                    left = Math.min(left, bbox.x);
                    right = Math.max(right, bbox.x + bbox.width);
                    top = Math.min(top, bbox.y);
                    bottom = Math.max(bottom, bbox.y + bbox.height);
                }
            }
        });
        return new bbox_1.BBox(left, top, right - left, bottom - top);
    };
    // debug (bbox)
    // private bboxRect = (() => {
    //     const rect = new Rect();
    //     rect.fill = undefined;
    //     rect.stroke = 'red';
    //     rect.strokeWidth = 1;
    //     rect.strokeOpacity = 0.7;
    //     return rect;
    // })();
    GroupedCategoryAxis.className = 'GroupedCategoryAxis';
    return GroupedCategoryAxis;
}());
exports.GroupedCategoryAxis = GroupedCategoryAxis;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/numberAxis.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/numberAxis.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var axis_1 = __webpack_require__(/*! ../../axis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/axis.js");
var linearScale_1 = __webpack_require__(/*! ../../scale/linearScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/linearScale.js");
var NumberAxis = /** @class */ (function (_super) {
    __extends(NumberAxis, _super);
    function NumberAxis() {
        var _this = _super.call(this, linearScale_1.default()) || this;
        _this._nice = true;
        _this.scale.clamp = true;
        return _this;
    }
    Object.defineProperty(NumberAxis.prototype, "nice", {
        get: function () {
            return this._nice;
        },
        set: function (value) {
            if (this._nice !== value) {
                this._nice = value;
                if (value && this.scale.nice) {
                    this.scale.nice(10);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberAxis.prototype, "domain", {
        get: function () {
            return this.scale.domain;
        },
        set: function (value) {
            this.scale.domain = value;
            if (this.nice && this.scale.nice) {
                this.scale.nice(10);
            }
        },
        enumerable: true,
        configurable: true
    });
    return NumberAxis;
}(axis_1.Axis));
exports.NumberAxis = NumberAxis;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/cartesianChart.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/cartesianChart.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chart_1 = __webpack_require__(/*! ./chart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/chart.js");
var array_1 = __webpack_require__(/*! ../util/array */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js");
var padding_1 = __webpack_require__(/*! ../util/padding */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js");
var group_1 = __webpack_require__(/*! ../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var CartesianChartLayout;
(function (CartesianChartLayout) {
    CartesianChartLayout[CartesianChartLayout["Vertical"] = 0] = "Vertical";
    CartesianChartLayout[CartesianChartLayout["Horizontal"] = 1] = "Horizontal";
})(CartesianChartLayout = exports.CartesianChartLayout || (exports.CartesianChartLayout = {}));
var CartesianChart = /** @class */ (function (_super) {
    __extends(CartesianChart, _super);
    function CartesianChart(options) {
        var _this = _super.call(this, options) || this;
        _this.axisAutoPadding = new padding_1.Padding();
        _this.seriesClipRect = new group_1.Group();
        _this._layout = CartesianChartLayout.Vertical;
        var xAxis = options.xAxis;
        var yAxis = options.yAxis;
        _this._xAxis = xAxis;
        _this._yAxis = yAxis;
        _this.scene.root.append([xAxis.group, yAxis.group, _this.seriesClipRect]);
        _this.scene.root.append(_this.legend.group);
        return _this;
    }
    Object.defineProperty(CartesianChart.prototype, "seriesRoot", {
        get: function () {
            return this.seriesClipRect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartesianChart.prototype, "xAxis", {
        get: function () {
            return this._xAxis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartesianChart.prototype, "yAxis", {
        get: function () {
            return this._yAxis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartesianChart.prototype, "series", {
        get: function () {
            return this._series;
        },
        set: function (values) {
            var _this = this;
            this.removeAllSeries();
            values.forEach(function (series) {
                _this.addSeries(series);
            });
        },
        enumerable: true,
        configurable: true
    });
    CartesianChart.prototype.performLayout = function () {
        if (this.dataPending || !(this.xAxis && this.yAxis)) {
            return;
        }
        var shrinkRect = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };
        var captionAutoPadding = this.captionAutoPadding;
        shrinkRect.y += captionAutoPadding;
        shrinkRect.height -= captionAutoPadding;
        if (this.legend.enabled && this.legend.data.length) {
            var legendAutoPadding = this.legendAutoPadding;
            shrinkRect.x += legendAutoPadding.left;
            shrinkRect.y += legendAutoPadding.top;
            shrinkRect.width -= legendAutoPadding.left + legendAutoPadding.right;
            shrinkRect.height -= legendAutoPadding.top + legendAutoPadding.bottom;
            var legendPadding = this.legendPadding;
            switch (this.legendPosition) {
                case 'right':
                    shrinkRect.width -= legendPadding;
                    break;
                case 'bottom':
                    shrinkRect.height -= legendPadding;
                    break;
                case 'left':
                    shrinkRect.x += legendPadding;
                    shrinkRect.width -= legendPadding;
                    break;
                case 'top':
                    shrinkRect.y += legendPadding;
                    shrinkRect.height -= legendPadding;
                    break;
            }
        }
        var padding = this.padding;
        shrinkRect.x += padding.left;
        shrinkRect.y += padding.top;
        shrinkRect.width -= padding.left + padding.right;
        shrinkRect.height -= padding.top + padding.bottom;
        var axisAutoPadding = this.axisAutoPadding;
        shrinkRect.x += axisAutoPadding.left;
        shrinkRect.y += axisAutoPadding.top;
        shrinkRect.width -= axisAutoPadding.left + axisAutoPadding.right;
        shrinkRect.height -= axisAutoPadding.top + axisAutoPadding.bottom;
        // const seriesClipRect = this.seriesClipRect;
        // seriesClipRect.x = shrinkRect.x;
        // seriesClipRect.y = shrinkRect.y;
        // seriesClipRect.width = shrinkRect.width;
        // seriesClipRect.height = shrinkRect.height;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        xAxis.scale.range = [0, shrinkRect.width];
        xAxis.rotation = -90;
        xAxis.translationX = Math.floor(shrinkRect.x);
        xAxis.translationY = Math.floor(shrinkRect.y + shrinkRect.height + 1);
        xAxis.parallelLabels = true;
        xAxis.gridLength = shrinkRect.height;
        yAxis.scale.range = [shrinkRect.height, 0];
        yAxis.translationX = Math.floor(shrinkRect.x);
        yAxis.translationY = Math.floor(shrinkRect.y);
        yAxis.gridLength = shrinkRect.width;
        this.updateAxes();
        this.series.forEach(function (series) {
            series.group.translationX = Math.floor(shrinkRect.x);
            series.group.translationY = Math.floor(shrinkRect.y);
            series.update(); // this has to happen after the `updateAxis` call
        });
        this.positionCaptions();
        this.positionLegend();
    };
    Object.defineProperty(CartesianChart.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        set: function (value) {
            if (this._layout !== value) {
                this._layout = value;
                this.layoutPending = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    CartesianChart.prototype.updateAxes = function () {
        var _a, _b;
        var isHorizontal = this.layout === CartesianChartLayout.Horizontal;
        var xAxis = isHorizontal ? this.yAxis : this.xAxis;
        var yAxis = isHorizontal ? this.xAxis : this.yAxis;
        if (!(xAxis && yAxis)) {
            return;
        }
        var xDomains = [];
        var yDomains = [];
        this.series.forEach(function (series) {
            if (series.visible) {
                var xDomain_1 = series.getDomainX();
                var yDomain_1 = series.getDomainY();
                xDomains.push(xDomain_1);
                yDomains.push(yDomain_1);
            }
        });
        var xDomain = (_a = new Array()).concat.apply(_a, xDomains);
        var yDomain = (_b = new Array()).concat.apply(_b, yDomains);
        xAxis.domain = array_1.numericExtent(xDomain) || xDomain;
        yAxis.domain = array_1.numericExtent(yDomain) || yDomain;
        xAxis.update();
        yAxis.update();
        // The `xAxis` and `yAxis` have `.this` prefix on purpose here.
        var xAxisBBox = this.xAxis.getBBox();
        var yAxisBBox = this.yAxis.getBBox();
        {
            var axisThickness = Math.floor(yAxisBBox.width);
            if (this.axisAutoPadding.left !== axisThickness) {
                this.axisAutoPadding.left = axisThickness;
                this.layoutPending = true;
            }
        }
        {
            var axisThickness = Math.floor(xAxisBBox.width);
            if (this.axisAutoPadding.bottom !== axisThickness) {
                this.axisAutoPadding.bottom = axisThickness;
                this.layoutPending = true;
            }
        }
    };
    return CartesianChart;
}(chart_1.Chart));
exports.CartesianChart = CartesianChart;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/chart.js":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/chart.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var scene_1 = __webpack_require__(/*! ../scene/scene */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/scene.js");
var group_1 = __webpack_require__(/*! ../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var padding_1 = __webpack_require__(/*! ../util/padding */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js");
var shape_1 = __webpack_require__(/*! ../scene/shape/shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var rect_1 = __webpack_require__(/*! ../scene/shape/rect */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/rect.js");
var legend_1 = __webpack_require__(/*! ./legend */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/legend.js");
var array_1 = __webpack_require__(/*! ../util/array */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js");
var Chart = /** @class */ (function () {
    function Chart(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.background = new rect_1.Rect();
        this.legend = new legend_1.Legend();
        this.legendAutoPadding = new padding_1.Padding();
        this.captionAutoPadding = 0; // top padding only
        this.tooltipOffset = [20, 20];
        this.defaultTooltipClass = 'ag-chart-tooltip';
        this.onLayoutChange = function () {
            _this.layoutPending = true;
        };
        this._title = undefined;
        this._subtitle = undefined;
        this._series = [];
        this._legendPosition = 'right';
        this._legendPadding = 20;
        this._data = [];
        this._padding = new padding_1.Padding(20);
        this.layoutCallbackId = 0;
        this._performLayout = function () {
            _this.layoutCallbackId = 0;
            _this.background.width = _this.width;
            _this.background.height = _this.height;
            _this.performLayout();
            if (_this.onLayoutDone) {
                _this.onLayoutDone();
            }
        };
        this.dataCallbackId = 0;
        this._processData = function () {
            _this.dataCallbackId = 0;
            _this.processData();
        };
        this.onMouseMove = function (event) {
            var x = event.offsetX;
            var y = event.offsetY;
            var pick = _this.pickSeriesNode(x, y);
            if (pick) {
                var node = pick.node;
                if (node instanceof shape_1.Shape) {
                    if (!_this.lastPick) { // cursor moved from empty space to a node
                        _this.onSeriesNodePick(event, pick.series, node);
                    }
                    else {
                        if (_this.lastPick.node !== node) { // cursor moved from one node to another
                            _this.onSeriesNodePick(event, pick.series, node);
                        }
                        else { // cursor moved within the same node
                            if (pick.series.tooltipEnabled) {
                                _this.showTooltip(event);
                            }
                        }
                    }
                }
            }
            else if (_this.lastPick) { // cursor moved from a node to empty space
                _this.lastPick.series.dehighlightNode();
                _this.hideTooltip();
                _this.lastPick = undefined;
            }
        };
        this.onMouseOut = function (event) {
            _this.toggleTooltip(false);
        };
        this.onClick = function (event) {
            var x = event.offsetX;
            var y = event.offsetY;
            var datum = _this.legend.datumForPoint(x, y);
            if (datum) {
                var id_1 = datum.id, itemId = datum.itemId, enabled = datum.enabled;
                var series = array_1.find(_this.series, function (series) { return series.id === id_1; });
                if (series) {
                    series.toggleSeriesItem(itemId, !enabled);
                }
            }
        };
        this._tooltipClass = this.defaultTooltipClass;
        var root = new group_1.Group();
        var background = this.background;
        var document = options.document || window.document;
        background.fill = 'white';
        root.appendChild(background);
        this.scene = new scene_1.Scene({ document: document });
        this.scene.root = root;
        this.legend.onLayoutChange = this.onLayoutChange;
        this.tooltipElement = document.createElement('div');
        this.tooltipClass = '';
        document.body.appendChild(this.tooltipElement);
        this.setupListeners(this.scene.canvas.element);
    }
    Chart.prototype.destroy = function () {
        var tooltipParent = this.tooltipElement.parentNode;
        if (tooltipParent) {
            tooltipParent.removeChild(this.tooltipElement);
        }
        this.legend.onLayoutChange = undefined;
        this.cleanupListeners(this.scene.canvas.element);
        this.scene.parent = undefined;
    };
    Object.defineProperty(Chart.prototype, "element", {
        get: function () {
            return this.scene.canvas.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "parent", {
        get: function () {
            return this.scene.parent;
        },
        set: function (value) {
            this.scene.parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            var oldTitle = this._title;
            if (oldTitle !== value) {
                if (oldTitle) {
                    oldTitle.onLayoutChange = undefined;
                    this.scene.root.removeChild(oldTitle.node);
                }
                if (value) {
                    value.onLayoutChange = this.onLayoutChange;
                    this.scene.root.appendChild(value.node);
                }
                this._title = value;
                this.layoutPending = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "subtitle", {
        get: function () {
            return this._subtitle;
        },
        set: function (value) {
            var oldSubtitle = this._subtitle;
            if (oldSubtitle !== value) {
                if (oldSubtitle) {
                    oldSubtitle.onLayoutChange = undefined;
                    this.scene.root.removeChild(oldSubtitle.node);
                }
                if (value) {
                    value.onLayoutChange = this.onLayoutChange;
                    this.scene.root.appendChild(value.node);
                }
                this._subtitle = value;
                this.layoutPending = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "series", {
        get: function () {
            return this._series;
        },
        set: function (values) {
            this._series = values;
        },
        enumerable: true,
        configurable: true
    });
    Chart.prototype.addSeries = function (series, before) {
        if (before === void 0) { before = null; }
        var canAdd = this.series.indexOf(series) < 0;
        if (canAdd) {
            var beforeIndex = before ? this.series.indexOf(before) : -1;
            if (beforeIndex >= 0) {
                this.series.splice(beforeIndex, 0, series);
                this.seriesRoot.insertBefore(series.group, before.group);
            }
            else {
                this.series.push(series);
                this.seriesRoot.append(series.group);
            }
            series.chart = this;
            this.dataPending = true;
            return true;
        }
        return false;
    };
    Chart.prototype.removeSeries = function (series) {
        var index = this.series.indexOf(series);
        if (index >= 0) {
            this.series.splice(index, 1);
            series.chart = undefined;
            this.seriesRoot.removeChild(series.group);
            this.dataPending = true;
            return true;
        }
        return false;
    };
    Chart.prototype.removeAllSeries = function () {
        var _this = this;
        this.series.forEach(function (series) {
            series.chart = undefined;
            _this.seriesRoot.removeChild(series.group);
        });
        this._series = []; // using `_series` instead of `series` to prevent infinite recursion
        this.dataPending = true;
    };
    Object.defineProperty(Chart.prototype, "legendPosition", {
        get: function () {
            return this._legendPosition;
        },
        set: function (value) {
            if (this._legendPosition !== value) {
                this._legendPosition = value;
                this.legendAutoPadding.clear();
                switch (value) {
                    case 'right':
                    case 'left':
                        this.legend.orientation = legend_1.Orientation.Vertical;
                        break;
                    case 'bottom':
                    case 'top':
                        this.legend.orientation = legend_1.Orientation.Horizontal;
                        break;
                }
                this.layoutPending = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "legendPadding", {
        get: function () {
            return this._legendPadding;
        },
        set: function (value) {
            value = isFinite(value) ? value : 20;
            if (this._legendPadding !== value) {
                this._legendPadding = value;
                this.layoutPending = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
            this.series.forEach(function (series) { return series.data = data; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        set: function (value) {
            this._padding = value;
            this.layoutPending = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "size", {
        get: function () {
            return this.scene.size;
        },
        set: function (value) {
            this.scene.size = value;
            this.layoutPending = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "width", {
        get: function () {
            return this.scene.width;
        },
        /**
         * The width of the chart in CSS pixels.
         */
        set: function (value) {
            this.scene.width = value;
            this.layoutPending = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "height", {
        get: function () {
            return this.scene.height;
        },
        /**
         * The height of the chart in CSS pixels.
         */
        set: function (value) {
            this.scene.height = value;
            this.layoutPending = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "layoutPending", {
        /**
         * Only `true` while we are waiting for the layout to start.
         * This will be `false` if the layout has already started and is ongoing.
         */
        get: function () {
            return !!this.layoutCallbackId;
        },
        set: function (value) {
            if (value) {
                if (!(this.layoutCallbackId || this.dataPending)) {
                    this.layoutCallbackId = requestAnimationFrame(this._performLayout);
                }
            }
            else if (this.layoutCallbackId) {
                cancelAnimationFrame(this.layoutCallbackId);
                this.layoutCallbackId = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "dataPending", {
        get: function () {
            return !!this.dataCallbackId;
        },
        set: function (value) {
            if (this.dataCallbackId) {
                clearTimeout(this.dataCallbackId);
                this.dataCallbackId = 0;
            }
            if (value) {
                // We don't want to render before the data is processed and then again after,
                // so we cancel the auto-scheduled render, if any.
                this.scene.cancelRender();
                this.dataCallbackId = window.setTimeout(this._processData, 0); // run on next tick
            }
        },
        enumerable: true,
        configurable: true
    });
    Chart.prototype.processData = function () {
        this.layoutPending = false;
        var legendData = [];
        this.series.forEach(function (series) {
            if (series.visible) {
                series.processData();
            }
            if (series.showInLegend) {
                series.listSeriesItems(legendData);
            }
        });
        this.legend.data = legendData;
        this.layoutPending = true;
    };
    Chart.prototype.positionCaptions = function () {
        var title = this.title;
        var subtitle = this.subtitle;
        var titleVisible = false;
        var subtitleVisible = false;
        var spacing = 5;
        var paddingTop = 0;
        if (title && title.enabled) {
            paddingTop += 10;
            var bbox = title.node.getBBox();
            title.node.x = this.width / 2;
            title.node.y = paddingTop;
            titleVisible = true;
            paddingTop += bbox ? bbox.height : 0;
            if (subtitle && subtitle.enabled) {
                var bbox_1 = subtitle.node.getBBox();
                subtitle.node.x = this.width / 2;
                subtitle.node.y = paddingTop;
                subtitleVisible = true;
                paddingTop += spacing + (bbox_1 ? bbox_1.height : 0);
            }
        }
        if (title) {
            title.node.visible = titleVisible;
        }
        if (subtitle) {
            subtitle.node.visible = subtitleVisible;
        }
        if (this.captionAutoPadding !== paddingTop) {
            this.captionAutoPadding = paddingTop;
            this.layoutPending = true;
        }
    };
    Chart.prototype.positionLegend = function () {
        if (!this.legend.enabled || !this.legend.data.length) {
            return;
        }
        var captionAutoPadding = this.captionAutoPadding;
        var width = this.width;
        var height = this.height - captionAutoPadding;
        var legend = this.legend;
        var legendGroup = legend.group;
        var legendPadding = this.legendPadding;
        var legendAutoPadding = this.legendAutoPadding;
        legendGroup.translationX = 0;
        legendGroup.translationY = 0;
        var legendBBox;
        switch (this.legendPosition) {
            case 'bottom':
                legend.performLayout(width - legendPadding * 2, 0);
                legendBBox = legendGroup.getBBox();
                legendGroup.translationX = (width - legendBBox.width) / 2 - legendBBox.x;
                legendGroup.translationY = captionAutoPadding + height - legendBBox.height - legendBBox.y - legendPadding;
                if (legendAutoPadding.bottom !== legendBBox.height) {
                    legendAutoPadding.bottom = legendBBox.height;
                    this.layoutPending = true;
                }
                break;
            case 'top':
                legend.performLayout(width - legendPadding * 2, 0);
                legendBBox = legendGroup.getBBox();
                legendGroup.translationX = (width - legendBBox.width) / 2 - legendBBox.x;
                legendGroup.translationY = captionAutoPadding + legendPadding - legendBBox.y;
                if (legendAutoPadding.top !== legendBBox.height) {
                    legendAutoPadding.top = legendBBox.height;
                    this.layoutPending = true;
                }
                break;
            case 'left':
                legend.performLayout(0, height - legendPadding * 2);
                legendBBox = legendGroup.getBBox();
                legendGroup.translationX = legendPadding - legendBBox.x;
                legendGroup.translationY = captionAutoPadding + (height - legendBBox.height) / 2 - legendBBox.y;
                if (legendAutoPadding.left !== legendBBox.width) {
                    legendAutoPadding.left = legendBBox.width;
                    this.layoutPending = true;
                }
                break;
            default: // case 'right':
                legend.performLayout(0, height - legendPadding * 2);
                legendBBox = legendGroup.getBBox();
                legendGroup.translationX = width - legendBBox.width - legendBBox.x - legendPadding;
                legendGroup.translationY = captionAutoPadding + (height - legendBBox.height) / 2 - legendBBox.y;
                if (legendAutoPadding.right !== legendBBox.width) {
                    legendAutoPadding.right = legendBBox.width;
                    this.layoutPending = true;
                }
                break;
        }
        // Round off for pixel grid alignment to work properly.
        legendGroup.translationX = Math.floor(legendGroup.translationX);
        legendGroup.translationY = Math.floor(legendGroup.translationY);
        this.legendBBox = legendBBox;
    };
    Chart.prototype.setupListeners = function (chartElement) {
        chartElement.addEventListener('mousemove', this.onMouseMove);
        chartElement.addEventListener('mouseout', this.onMouseOut);
        chartElement.addEventListener('click', this.onClick);
    };
    Chart.prototype.cleanupListeners = function (chartElement) {
        chartElement.removeEventListener('mousemove', this.onMouseMove);
        chartElement.removeEventListener('mouseout', this.onMouseMove);
        chartElement.removeEventListener('click', this.onClick);
    };
    Chart.prototype.pickSeriesNode = function (x, y) {
        var allSeries = this.series;
        var node = undefined;
        for (var i = allSeries.length - 1; i >= 0; i--) {
            var series = allSeries[i];
            node = series.group.pickNode(x, y);
            if (node) {
                return {
                    series: series,
                    node: node
                };
            }
        }
    };
    Chart.prototype.onSeriesNodePick = function (event, series, node) {
        this.lastPick = {
            series: series,
            node: node
        };
        series.highlightNode(node);
        var html = series.tooltipEnabled && series.getTooltipHtml(node.datum);
        if (html) {
            this.showTooltip(event, html);
        }
    };
    Object.defineProperty(Chart.prototype, "tooltipClass", {
        get: function () {
            return this._tooltipClass;
        },
        set: function (value) {
            if (this._tooltipClass !== value) {
                this._tooltipClass = value;
                this.toggleTooltip();
            }
        },
        enumerable: true,
        configurable: true
    });
    Chart.prototype.toggleTooltip = function (visible) {
        var classList = [this.defaultTooltipClass, this._tooltipClass];
        if (visible) {
            classList.push('visible');
        }
        this.tooltipElement.setAttribute('class', classList.join(' '));
    };
    /**
     * Shows tooltip at the given event's coordinates.
     * If the `html` parameter is missing, moves the existing tooltip to the new position.
     */
    Chart.prototype.showTooltip = function (event, html) {
        var el = this.tooltipElement;
        var offset = this.tooltipOffset;
        var parent = el.parentElement;
        if (html !== undefined) {
            el.innerHTML = html;
        }
        else if (!el.innerHTML) {
            return;
        }
        if (html) {
            this.toggleTooltip(true);
        }
        var tooltipRect = this.tooltipRect = el.getBoundingClientRect();
        var left = event.pageX + offset[0];
        var top = event.pageY + offset[1];
        if (tooltipRect && parent && parent.parentElement) {
            if (left - pageXOffset + tooltipRect.width > parent.parentElement.offsetWidth) {
                left -= tooltipRect.width + offset[0];
            }
        }
        el.style.left = left + "px";
        el.style.top = top + "px";
    };
    Chart.prototype.hideTooltip = function () {
        this.toggleTooltip(false);
    };
    return Chart;
}());
exports.Chart = Chart;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/groupedCategoryChart.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/groupedCategoryChart.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chart_1 = __webpack_require__(/*! ./chart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/chart.js");
var cartesianChart_1 = __webpack_require__(/*! ./cartesianChart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/cartesianChart.js");
var array_1 = __webpack_require__(/*! ../util/array */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js");
var padding_1 = __webpack_require__(/*! ../util/padding */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js");
var group_1 = __webpack_require__(/*! ../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var GroupedCategoryChart = /** @class */ (function (_super) {
    __extends(GroupedCategoryChart, _super);
    function GroupedCategoryChart(options) {
        var _this = _super.call(this, options) || this;
        _this.axisAutoPadding = new padding_1.Padding();
        _this._seriesRoot = new group_1.Group();
        _this._layout = cartesianChart_1.CartesianChartLayout.Vertical;
        var xAxis = options.xAxis;
        var yAxis = options.yAxis;
        _this._xAxis = xAxis;
        _this._yAxis = yAxis;
        _this.scene.root.append([xAxis.group, yAxis.group, _this.seriesRoot]);
        _this.scene.root.append(_this.legend.group);
        return _this;
    }
    Object.defineProperty(GroupedCategoryChart.prototype, "seriesRoot", {
        get: function () {
            return this._seriesRoot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedCategoryChart.prototype, "xAxis", {
        get: function () {
            return this._xAxis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedCategoryChart.prototype, "yAxis", {
        get: function () {
            return this._yAxis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedCategoryChart.prototype, "series", {
        get: function () {
            return this._series;
        },
        set: function (values) {
            var _this = this;
            this.removeAllSeries();
            values.forEach(function (series) {
                _this.addSeries(series);
            });
        },
        enumerable: true,
        configurable: true
    });
    GroupedCategoryChart.prototype.performLayout = function () {
        if (this.dataPending || !(this.xAxis && this.yAxis)) {
            return;
        }
        var shrinkRect = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };
        var captionAutoPadding = this.captionAutoPadding;
        shrinkRect.y += captionAutoPadding;
        shrinkRect.height -= captionAutoPadding;
        if (this.legend.enabled && this.legend.data.length) {
            var legendAutoPadding = this.legendAutoPadding;
            shrinkRect.x += legendAutoPadding.left;
            shrinkRect.y += legendAutoPadding.top;
            shrinkRect.width -= legendAutoPadding.left + legendAutoPadding.right;
            shrinkRect.height -= legendAutoPadding.top + legendAutoPadding.bottom;
            var legendPadding = this.legendPadding;
            switch (this.legendPosition) {
                case 'right':
                    shrinkRect.width -= legendPadding;
                    break;
                case 'bottom':
                    shrinkRect.height -= legendPadding;
                    break;
                case 'left':
                    shrinkRect.x += legendPadding;
                    shrinkRect.width -= legendPadding;
                    break;
                case 'top':
                    shrinkRect.y += legendPadding;
                    shrinkRect.height -= legendPadding;
                    break;
            }
        }
        var padding = this.padding;
        shrinkRect.x += padding.left;
        shrinkRect.y += padding.top;
        shrinkRect.width -= padding.left + padding.right;
        shrinkRect.height -= padding.top + padding.bottom;
        var axisAutoPadding = this.axisAutoPadding;
        shrinkRect.x += axisAutoPadding.left;
        shrinkRect.y += axisAutoPadding.top;
        shrinkRect.width -= axisAutoPadding.left + axisAutoPadding.right;
        shrinkRect.height -= axisAutoPadding.top + axisAutoPadding.bottom;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        xAxis.range = [0, shrinkRect.width];
        xAxis.rotation = -90;
        xAxis.translationX = Math.floor(shrinkRect.x);
        xAxis.translationY = Math.floor(shrinkRect.y + shrinkRect.height + 1);
        xAxis.parallelLabels = true;
        xAxis.gridLength = shrinkRect.height;
        yAxis.range = [shrinkRect.height, 0];
        yAxis.translationX = Math.floor(shrinkRect.x);
        yAxis.translationY = Math.floor(shrinkRect.y);
        yAxis.gridLength = shrinkRect.width;
        this.updateAxes();
        this.series.forEach(function (series) {
            series.group.translationX = Math.floor(shrinkRect.x);
            series.group.translationY = Math.floor(shrinkRect.y);
            series.update(); // this has to happen after the `updateAxis` call
        });
        this.positionCaptions();
        this.positionLegend();
    };
    Object.defineProperty(GroupedCategoryChart.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        set: function (value) {
            if (this._layout !== value) {
                this._layout = value;
                this.layoutPending = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    GroupedCategoryChart.prototype.updateAxes = function () {
        var _a, _b;
        var isHorizontal = this.layout === cartesianChart_1.CartesianChartLayout.Horizontal;
        var xAxis = isHorizontal ? this.yAxis : this.xAxis;
        var yAxis = isHorizontal ? this.xAxis : this.yAxis;
        if (!(xAxis && yAxis)) {
            return;
        }
        var xDomains = [];
        var yDomains = [];
        var isNumericX = undefined;
        this.series.forEach(function (series, index) {
            if (series.visible) {
                var xDomain_1 = series.getDomainX();
                var yDomain_1 = series.getDomainY();
                var isFirstVisibleSeries = isNumericX === undefined;
                if (isFirstVisibleSeries) {
                    isNumericX = typeof xDomain_1[0] === 'number';
                }
                if (isNumericX || isFirstVisibleSeries) {
                    xDomains.push(xDomain_1);
                }
                yDomains.push(yDomain_1);
            }
        });
        var xDomain = (_a = new Array()).concat.apply(_a, xDomains);
        var yDomain = (_b = new Array()).concat.apply(_b, yDomains);
        xAxis.domain = array_1.numericExtent(xDomain) || xDomain;
        yAxis.domain = array_1.numericExtent(yDomain) || yDomain;
        xAxis.update();
        yAxis.update();
        // The `xAxis` and `yAxis` have `.this` prefix on purpose here.
        var xAxisBBox = this.xAxis.getBBox();
        var yAxisBBox = this.yAxis.getBBox();
        {
            var axisThickness = Math.floor(yAxisBBox.width);
            if (this.axisAutoPadding.left !== axisThickness) {
                this.axisAutoPadding.left = axisThickness;
                this.layoutPending = true;
            }
        }
        {
            var axisThickness = Math.floor(isHorizontal ? xAxisBBox.width : xAxisBBox.height);
            if (this.axisAutoPadding.bottom !== axisThickness) {
                this.axisAutoPadding.bottom = axisThickness;
                this.layoutPending = true;
            }
        }
    };
    return GroupedCategoryChart;
}(chart_1.Chart));
exports.GroupedCategoryChart = GroupedCategoryChart;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/legend.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/legend.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var selection_1 = __webpack_require__(/*! ../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var markerLabel_1 = __webpack_require__(/*! ./markerLabel */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/markerLabel.js");
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Vertical"] = 0] = "Vertical";
    Orientation[Orientation["Horizontal"] = 1] = "Horizontal";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var Legend = /** @class */ (function () {
    function Legend() {
        this.group = new group_1.Group();
        this.itemSelection = selection_1.Selection.select(this.group).selectAll();
        this.oldSize = [0, 0];
        this._size = [0, 0];
        this._data = [];
        this._orientation = Orientation.Vertical;
        this._enabled = true;
        this._itemPaddingX = 16;
        this._itemPaddingY = 8;
        this._markerPadding = markerLabel_1.MarkerLabel.defaults.padding;
        this._labelColor = markerLabel_1.MarkerLabel.defaults.labelColor;
        this._labelFontStyle = markerLabel_1.MarkerLabel.defaults.labelFontStyle;
        this._labelFontWeight = markerLabel_1.MarkerLabel.defaults.labelFontWeight;
        this._labelFontSize = markerLabel_1.MarkerLabel.defaults.labelFontSize;
        this._labelFontFamily = markerLabel_1.MarkerLabel.defaults.labelFontFamily;
        this._markerSize = 14;
        this._markerStrokeWidth = 1;
    }
    Object.defineProperty(Legend.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
            this.group.visible = this.enabled && data.length > 0;
            this.requestLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            if (this._orientation !== value) {
                this._orientation = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled !== value) {
                this._enabled = value;
                this.group.visible = value && this.data.length > 0;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "itemPaddingX", {
        get: function () {
            return this._itemPaddingX;
        },
        set: function (value) {
            value = isFinite(value) ? value : 16;
            if (this._itemPaddingX !== value) {
                this._itemPaddingX = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "itemPaddingY", {
        get: function () {
            return this._itemPaddingY;
        },
        set: function (value) {
            value = isFinite(value) ? value : 8;
            if (this._itemPaddingY !== value) {
                this._itemPaddingY = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "markerPadding", {
        get: function () {
            return this._markerPadding;
        },
        set: function (value) {
            value = isFinite(value) ? value : markerLabel_1.MarkerLabel.defaults.padding;
            if (this._markerPadding !== value) {
                this._markerPadding = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "labelColor", {
        get: function () {
            return this._labelColor;
        },
        set: function (value) {
            if (this._labelColor !== value) {
                this._labelColor = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "labelFontStyle", {
        get: function () {
            return this._labelFontStyle;
        },
        set: function (value) {
            if (this._labelFontStyle !== value) {
                this._labelFontStyle = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "labelFontWeight", {
        get: function () {
            return this._labelFontWeight;
        },
        set: function (value) {
            if (this._labelFontWeight !== value) {
                this._labelFontWeight = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "labelFontSize", {
        get: function () {
            return this._labelFontSize;
        },
        set: function (value) {
            if (this._labelFontSize !== value) {
                this._labelFontSize = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "labelFontFamily", {
        get: function () {
            return this._labelFontFamily;
        },
        set: function (value) {
            if (this._labelFontFamily !== value) {
                this._labelFontFamily = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "markerSize", {
        get: function () {
            return this._markerSize;
        },
        set: function (value) {
            value = isFinite(value) ? value : 14;
            if (this._markerSize !== value) {
                this._markerSize = value;
                this.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "markerStrokeWidth", {
        get: function () {
            return this._markerStrokeWidth;
        },
        set: function (value) {
            value = isFinite(value) ? value : 1;
            if (this._markerStrokeWidth !== value) {
                this._markerStrokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Legend.prototype.requestLayout = function () {
        if (this.onLayoutChange) {
            this.onLayoutChange();
        }
    };
    /**
     * The method is given the desired size of the legend, which only serves as a hint.
     * The vertically oriented legend will take as much horizontal space as needed, but will
     * respect the height constraints, and the horizontal legend will take as much vertical
     * space as needed in an attempt not to exceed the given width.
     * After the layout is done, the {@link size} will contain the actual size of the legend.
     * If the actual size is not the same as the previous actual size, the legend will notify
     * the parent component via the {@link onLayoutChange} callback that another layout is needed,
     * and the above process should be repeated.
     * @param width
     * @param height
     */
    Legend.prototype.performLayout = function (width, height) {
        var _this = this;
        var updateSelection = this.itemSelection.setData(this.data);
        updateSelection.exit.remove();
        var enterSelection = updateSelection.enter.append(markerLabel_1.MarkerLabel);
        var itemSelection = this.itemSelection = updateSelection.merge(enterSelection);
        var itemCount = itemSelection.size;
        var itemPaddingX = this.itemPaddingX;
        var itemPaddingY = this.itemPaddingY;
        // Update properties that affect the size of the legend items and measure them.
        var bboxes = [];
        itemSelection.each(function (markerLabel, datum) {
            // TODO: measure only when one of these properties or data change (in a separate routine)
            markerLabel.markerSize = _this.markerSize;
            markerLabel.labelFontStyle = _this.labelFontStyle;
            markerLabel.labelFontWeight = _this.labelFontWeight;
            markerLabel.labelFontSize = _this.labelFontSize;
            markerLabel.labelFontFamily = _this.labelFontFamily;
            markerLabel.labelText = datum.label.text;
            markerLabel.padding = _this.markerPadding;
            bboxes.push(markerLabel.getBBox());
        });
        var itemHeight = bboxes.length && bboxes[0].height;
        var rowCount = 0;
        var columnWidth = 0;
        var paddedItemsWidth = 0;
        var paddedItemsHeight = 0;
        switch (this.orientation) {
            case Orientation.Horizontal:
                if (!(isFinite(width) && width > 0)) {
                    return false;
                }
                rowCount = 0;
                var columnCount = 0;
                // Split legend items into columns until the width is suitable.
                do {
                    var itemsWidth = 0;
                    columnCount = 0;
                    columnWidth = 0;
                    rowCount++;
                    var i = 0;
                    while (i < itemCount) {
                        var bbox = bboxes[i];
                        if (bbox.width > columnWidth) {
                            columnWidth = bbox.width;
                        }
                        i++;
                        if (i % rowCount === 0) {
                            itemsWidth += columnWidth;
                            columnWidth = 0;
                            columnCount++;
                        }
                    }
                    if (i % rowCount !== 0) {
                        itemsWidth += columnWidth;
                        columnCount++;
                    }
                    paddedItemsWidth = itemsWidth + (columnCount - 1) * itemPaddingX;
                } while (paddedItemsWidth > width && columnCount > 1);
                paddedItemsHeight = itemHeight * rowCount + (rowCount - 1) * itemPaddingY;
                break;
            case Orientation.Vertical:
                if (!(isFinite(height) && height > 0)) {
                    return false;
                }
                rowCount = itemCount * 2;
                // Split legend items into columns until the height is suitable.
                do {
                    rowCount = (rowCount >> 1) + (rowCount % 2);
                    columnWidth = 0;
                    var itemsWidth = 0;
                    var itemsHeight = 0;
                    var columnCount_1 = 0;
                    var i = 0;
                    while (i < itemCount) {
                        var bbox = bboxes[i];
                        if (!columnCount_1) {
                            itemsHeight += bbox.height;
                        }
                        if (bbox.width > columnWidth) {
                            columnWidth = bbox.width;
                        }
                        i++;
                        if (i % rowCount === 0) {
                            itemsWidth += columnWidth;
                            columnWidth = 0;
                            columnCount_1++;
                        }
                    }
                    if (i % rowCount !== 0) {
                        itemsWidth += columnWidth;
                        columnCount_1++;
                    }
                    paddedItemsWidth = itemsWidth + (columnCount_1 - 1) * itemPaddingX;
                    paddedItemsHeight = itemsHeight + (rowCount - 1) * itemPaddingY;
                } while (paddedItemsHeight > height && rowCount > 1);
                break;
        }
        // Top-left corner of the first legend item.
        var startX = (width - paddedItemsWidth) / 2;
        var startY = (height - paddedItemsHeight) / 2;
        var x = 0;
        var y = 0;
        columnWidth = 0;
        // Position legend items using the layout computed above.
        itemSelection.each(function (markerLabel, datum, i) {
            // Round off for pixel grid alignment to work properly.
            markerLabel.translationX = Math.floor(startX + x);
            markerLabel.translationY = Math.floor(startY + y);
            var bbox = bboxes[i];
            if (bbox.width > columnWidth) {
                columnWidth = bbox.width;
            }
            if ((i + 1) % rowCount === 0) {
                x += columnWidth + itemPaddingX;
                y = 0;
                columnWidth = 0;
            }
            else {
                y += bbox.height + itemPaddingY;
            }
        });
        // Update legend item properties that don't affect the layout.
        this.update();
        var size = this._size;
        var oldSize = this.oldSize;
        size[0] = paddedItemsWidth;
        size[1] = paddedItemsHeight;
        if (size[0] !== oldSize[0] || size[1] !== oldSize[1]) {
            oldSize[0] = size[0];
            oldSize[1] = size[1];
            this.requestLayout();
        }
    };
    Legend.prototype.update = function () {
        var _this = this;
        this.itemSelection.each(function (markerLabel, datum) {
            var marker = datum.marker;
            markerLabel.markerFill = marker.fill;
            markerLabel.markerStroke = marker.stroke;
            markerLabel.markerStrokeWidth = _this.markerStrokeWidth;
            markerLabel.opacity = datum.enabled ? 1 : 0.5;
            markerLabel.labelColor = _this.labelColor;
        });
    };
    Legend.prototype.datumForPoint = function (x, y) {
        var node = this.group.pickNode(x, y);
        if (node && node.parent) {
            return node.parent.datum;
        }
    };
    return Legend;
}());
exports.Legend = Legend;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/markerLabel.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/markerLabel.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var rect_1 = __webpack_require__(/*! ../scene/shape/rect */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/rect.js");
var text_1 = __webpack_require__(/*! ../scene/shape/text */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js");
var MarkerLabel = /** @class */ (function (_super) {
    __extends(MarkerLabel, _super);
    function MarkerLabel() {
        var _this = _super.call(this) || this;
        _this.marker = new rect_1.Rect();
        _this.label = new text_1.Text();
        _this._markerSize = MarkerLabel.defaults.markerSize;
        _this._padding = MarkerLabel.defaults.padding;
        _this.marker.crisp = true;
        var label = _this.label;
        label.textBaseline = 'middle';
        label.fontStyle = MarkerLabel.defaults.labelFontStyle;
        label.fontWeight = MarkerLabel.defaults.labelFontWeight;
        label.fontSize = MarkerLabel.defaults.labelFontSize;
        label.fontFamily = MarkerLabel.defaults.labelFontFamily;
        label.fill = MarkerLabel.defaults.labelColor;
        label.y = 2; // for better looking vertical alignment of labels to markers
        _this.append([_this.marker, label]);
        _this.update();
        return _this;
    }
    Object.defineProperty(MarkerLabel.prototype, "labelText", {
        get: function () {
            return this.label.text;
        },
        set: function (value) {
            this.label.text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "labelFontStyle", {
        get: function () {
            return this.label.fontStyle;
        },
        set: function (value) {
            this.label.fontStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "labelFontWeight", {
        get: function () {
            return this.label.fontWeight;
        },
        set: function (value) {
            this.label.fontWeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "labelFontSize", {
        get: function () {
            return this.label.fontSize;
        },
        set: function (value) {
            this.label.fontSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "labelFontFamily", {
        get: function () {
            return this.label.fontFamily;
        },
        set: function (value) {
            this.label.fontFamily = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "labelColor", {
        get: function () {
            return this.label.fill;
        },
        set: function (value) {
            this.label.fill = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "markerSize", {
        get: function () {
            return this._markerSize;
        },
        set: function (value) {
            if (this._markerSize !== value) {
                this._markerSize = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "markerFill", {
        get: function () {
            return this.marker.fill;
        },
        set: function (value) {
            this.marker.fill = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "markerStroke", {
        get: function () {
            return this.marker.stroke;
        },
        set: function (value) {
            this.marker.stroke = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "markerStrokeWidth", {
        get: function () {
            return this.marker.strokeWidth;
        },
        set: function (value) {
            this.marker.strokeWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "opacity", {
        get: function () {
            return this.marker.opacity;
        },
        set: function (value) {
            this.marker.opacity = value;
            this.label.opacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerLabel.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        set: function (value) {
            if (this._padding !== value) {
                this._padding = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    MarkerLabel.prototype.update = function () {
        var marker = this.marker;
        var markerSize = this.markerSize;
        marker.x = -markerSize / 2;
        marker.y = -markerSize / 2;
        marker.width = markerSize;
        marker.height = markerSize;
        this.label.x = markerSize / 2 + this.padding;
    };
    MarkerLabel.className = 'MarkerLabel';
    MarkerLabel.defaults = Object.freeze({
        padding: 4,
        markerSize: 14,
        labelFont: '12px Verdana, sans-serif',
        labelFontStyle: undefined,
        labelFontWeight: undefined,
        labelFontSize: 12,
        labelFontFamily: 'Verdana, sans-serif',
        labelColor: 'black'
    });
    return MarkerLabel;
}(group_1.Group));
exports.MarkerLabel = MarkerLabel;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
exports.borneo = {
    fills: [
        '#f3622d',
        '#fba71b',
        '#57b757',
        '#41a9c9',
        '#4258c9',
        '#9a42c8',
        '#c84164',
        '#888888'
    ],
    strokes: [
        '#aa4520',
        '#b07513',
        '#3d803d',
        '#2d768d',
        '#2e3e8d',
        '#6c2e8c',
        '#8c2d46',
        '#5f5f5f'
    ]
};
exports.material = {
    fills: [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722'
    ],
    strokes: [
        '#ab2f26',
        '#a31545',
        '#6d1b7b',
        '#482980',
        '#2c397f',
        '#1769aa',
        '#0276ab',
        '#008494',
        '#00695f',
        '#357a38',
        '#618834',
        '#909a28',
        '#b3a429',
        '#b38705',
        '#b36a00',
        '#b33d18'
    ]
};
exports.pastel = {
    fills: [
        '#c16068',
        '#a2bf8a',
        '#ebcc87',
        '#80a0c3',
        '#b58dae',
        '#85c0d1'
    ],
    strokes: [
        '#874349',
        '#718661',
        '#a48f5f',
        '#5a7088',
        '#7f637a',
        '#5d8692'
    ]
};
exports.bright = {
    fills: [
        '#5BC0EB',
        '#FDE74C',
        '#9BC53D',
        '#E55934',
        '#FA7921',
        '#fa3081'
    ],
    strokes: [
        '#4086a4',
        '#b1a235',
        '#6c8a2b',
        '#a03e24',
        '#af5517',
        '#af225a'
    ]
};
exports.flat = {
    fills: [
        '#febe76',
        '#ff7979',
        '#badc58',
        '#f9ca23',
        '#f0932b',
        '#eb4c4b',
        '#6ab04c',
        '#7ed6df',
        '#e056fd',
        '#686de0'
    ],
    strokes: [
        '#b28553',
        '#b35555',
        '#829a3e',
        '#ae8d19',
        '#a8671e',
        '#a43535',
        '#4a7b35',
        '#58969c',
        '#9d3cb1',
        '#494c9d'
    ]
};
exports.default = exports.borneo;
exports.palettes = [
    exports.borneo,
    exports.material,
    exports.pastel,
    exports.bright,
    exports.flat
];


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/polarChart.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/polarChart.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chart_1 = __webpack_require__(/*! ./chart */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/chart.js");
var padding_1 = __webpack_require__(/*! ../util/padding */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js");
var PolarChart = /** @class */ (function (_super) {
    __extends(PolarChart, _super);
    function PolarChart() {
        var _this = _super.call(this) || this;
        /**
         * The center of the polar series (for example, the center of a pie).
         * If the polar chart has multiple series, all of them will have their
         * center set to the same value as a result of the polar chart layout.
         * The center coordinates are not supposed to be set by the user.
         */
        _this.centerX = 0;
        _this.centerY = 0;
        /**
         * The maximum radius the series can use.
         * This value is set automatically as a result of the polar chart layout
         * and is not supposed to be set by the user.
         */
        _this.radius = 0;
        _this._padding = new padding_1.Padding(50);
        _this._series = [];
        _this.scene.root.append(_this.legend.group);
        return _this;
    }
    Object.defineProperty(PolarChart.prototype, "seriesRoot", {
        get: function () {
            return this.scene.root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarChart.prototype, "series", {
        get: function () {
            return this._series;
        },
        set: function (values) {
            var _this = this;
            this.removeAllSeries();
            values.forEach(function (series) {
                _this.addSeries(series, null);
            });
        },
        enumerable: true,
        configurable: true
    });
    PolarChart.prototype.performLayout = function () {
        var shrinkRect = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };
        var captionAutoPadding = this.captionAutoPadding;
        shrinkRect.y += captionAutoPadding;
        shrinkRect.height -= captionAutoPadding;
        if (this.legend.enabled && this.legend.data.length) {
            var legendAutoPadding = this.legendAutoPadding;
            shrinkRect.x += legendAutoPadding.left;
            shrinkRect.y += legendAutoPadding.top;
            shrinkRect.width -= legendAutoPadding.left + legendAutoPadding.right;
            shrinkRect.height -= legendAutoPadding.top + legendAutoPadding.bottom;
            var legendPadding = this.legendPadding;
            switch (this.legendPosition) {
                case 'right':
                    shrinkRect.width -= legendPadding;
                    break;
                case 'bottom':
                    shrinkRect.height -= legendPadding;
                    break;
                case 'left':
                    shrinkRect.x += legendPadding;
                    shrinkRect.width -= legendPadding;
                    break;
                case 'top':
                    shrinkRect.y += legendPadding;
                    shrinkRect.height -= legendPadding;
                    break;
            }
        }
        var padding = this.padding;
        shrinkRect.x += padding.left;
        shrinkRect.y += padding.top;
        shrinkRect.width -= padding.left + padding.right;
        shrinkRect.height -= padding.top + padding.bottom;
        this.centerX = shrinkRect.x + shrinkRect.width / 2;
        this.centerY = shrinkRect.y + shrinkRect.height / 2;
        this.radius = Math.min(shrinkRect.width, shrinkRect.height) / 2;
        this.series.forEach(function (series) {
            series.update();
        });
        this.positionCaptions();
        this.positionLegend();
    };
    return PolarChart;
}(chart_1.Chart));
exports.PolarChart = PolarChart;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/areaSeries.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/areaSeries.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var selection_1 = __webpack_require__(/*! ../../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var series_1 = __webpack_require__(/*! ./series */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js");
var continuousScale_1 = __webpack_require__(/*! ../../scale/continuousScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/continuousScale.js");
var node_1 = __webpack_require__(/*! ../../scene/node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var path_1 = __webpack_require__(/*! ../../scene/shape/path */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/path.js");
var arc_1 = __webpack_require__(/*! ../../scene/shape/arc */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js");
var palettes_1 = __webpack_require__(/*! ../palettes */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js");
var array_1 = __webpack_require__(/*! ../../util/array */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js");
var AreaSeries = /** @class */ (function (_super) {
    __extends(AreaSeries, _super);
    function AreaSeries() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.areaGroup = _this.group.appendChild(new group_1.Group);
        _this.strokeGroup = _this.group.appendChild(new group_1.Group);
        _this.markerGroup = _this.group.appendChild(new group_1.Group);
        _this.areaSelection = selection_1.Selection.select(_this.areaGroup).selectAll();
        _this.strokeSelection = selection_1.Selection.select(_this.strokeGroup).selectAll();
        _this.markerSelection = selection_1.Selection.select(_this.markerGroup).selectAll();
        /**
         * The assumption is that the values will be reset (to `true`)
         * in the {@link yFields} setter.
         */
        _this.enabled = new Map();
        _this._fills = palettes_1.default.fills;
        _this._strokes = ['white'];
        _this._fillOpacity = 1;
        _this._strokeOpacity = 1;
        _this.xData = [];
        _this.yData = [];
        _this.ySums = [];
        _this.domainX = [];
        _this.domainY = [];
        _this._xField = '';
        _this._yFields = [];
        _this._yFieldNames = [];
        _this._normalizedTo = NaN;
        _this._strokeWidth = 3;
        _this._marker = false;
        _this._markerSize = 8;
        _this._markerStrokeWidth = 2;
        _this._shadow = undefined;
        _this.highlightStyle = {
            fill: 'yellow'
        };
        return _this;
    }
    Object.defineProperty(AreaSeries.prototype, "fills", {
        get: function () {
            return this._fills;
        },
        set: function (values) {
            this._fills = values;
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "strokes", {
        get: function () {
            return this._strokes;
        },
        set: function (values) {
            this._strokes = values;
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "fillOpacity", {
        get: function () {
            return this._fillOpacity;
        },
        set: function (value) {
            if (this._fillOpacity !== value) {
                this._fillOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "strokeOpacity", {
        get: function () {
            return this._strokeOpacity;
        },
        set: function (value) {
            if (this._strokeOpacity !== value) {
                this._strokeOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            if (this._chart !== chart) {
                this._chart = chart;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "xField", {
        get: function () {
            return this._xField;
        },
        set: function (value) {
            if (this._xField !== value) {
                this._xField = value;
                this.xData = [];
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "yFields", {
        get: function () {
            return this._yFields;
        },
        set: function (values) {
            this._yFields = values;
            var enabled = this.enabled;
            enabled.clear();
            values.forEach(function (field) { return enabled.set(field, true); });
            this.yData = [];
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "yFieldNames", {
        get: function () {
            return this._yFieldNames;
        },
        set: function (values) {
            this._yFieldNames = values;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "normalizedTo", {
        get: function () {
            return this._normalizedTo;
        },
        set: function (value) {
            if (value === 0) {
                value = NaN;
            }
            var absValue = Math.abs(value);
            if (this._normalizedTo !== absValue) {
                this._normalizedTo = absValue;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            if (this._strokeWidth !== value) {
                this._strokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "marker", {
        get: function () {
            return this._marker;
        },
        set: function (value) {
            if (this._marker !== value) {
                this._marker = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "markerSize", {
        get: function () {
            return this._markerSize;
        },
        set: function (value) {
            if (this._markerSize !== value) {
                this._markerSize = Math.abs(value);
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "markerStrokeWidth", {
        get: function () {
            return this._markerStrokeWidth;
        },
        set: function (value) {
            if (this._markerStrokeWidth !== value) {
                this._markerStrokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSeries.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (value) {
            if (this._shadow !== value) {
                this._shadow = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    AreaSeries.prototype.highlightNode = function (node) {
        if (!(node instanceof arc_1.Arc)) {
            return;
        }
        this.highlightedNode = node;
        this.scheduleLayout();
    };
    AreaSeries.prototype.dehighlightNode = function () {
        this.highlightedNode = undefined;
        this.scheduleLayout();
    };
    AreaSeries.prototype.processData = function () {
        var chart = this.chart;
        var xField = this.xField;
        var yFields = this.yFields;
        var data = this.data;
        if (!(chart && chart.xAxis && chart.yAxis)) {
            return false;
        }
        if (!(xField && yFields.length)) {
            this._data = data = [];
        }
        // If the data is an array of rows like so:
        //
        // [{
        //   xField: 'Jan',
        //   yField1: 5,
        //   yField2: 7,
        //   yField3: -9,
        // }, {
        //   xField: 'Feb',
        //   yField1: 10,
        //   yField2: -15,
        //   yField3: 20
        // }]
        //
        var enabled = this.enabled;
        var normalizedTo = this.normalizedTo;
        var continuousX = chart.xAxis.scale instanceof continuousScale_1.default;
        var xData = this.xData = data.map(function (datum) { return datum[xField]; });
        var ySums = this.ySums = []; // used for normalization
        var yData = this.yData = data.map(function (datum, xIndex) {
            var values = [];
            var ySum = 0;
            yFields.forEach(function (field) {
                var value = datum[field];
                if (!isFinite(value) || !enabled.get(field)) {
                    value = 0;
                }
                if (value < 0) {
                    value = Math.abs(value);
                }
                if (value > 0) {
                    ySum += value;
                }
                values.push(value);
            });
            ySums[xIndex] = ySum;
            return values;
        });
        // xData: ['Jan', 'Feb']
        //
        // yData: [
        //   [5, 7, -9],
        //   [10, -15, 20]
        // ]
        var yMin = Infinity;
        var yMax = -Infinity;
        if (isFinite(normalizedTo)) {
            yMin = 0;
            yMax = normalizedTo;
            yData.forEach(function (stack, i) {
                var ySum = ySums[i];
                stack.forEach(function (y, j) { return stack[j] = y / ySum * normalizedTo; });
            });
        }
        else {
            // Find the height of each stack in the positive and negative directions,
            // then find the tallest stacks in both directions.
            yMin = Math.min.apply(Math, [0].concat(yData.map(function (stackValues) {
                var min = 0;
                stackValues.forEach(function (value) {
                    if (value < 0) {
                        min -= value;
                    }
                });
                return min;
            })));
            yMax = Math.max.apply(Math, yData.map(function (stackValues) {
                var max = 0;
                stackValues.forEach(function (value) {
                    if (value > 0) {
                        max += value;
                    }
                });
                return max;
            }));
        }
        if (yMin === yMax || !isFinite(yMin) || !isFinite(yMax)) {
            yMin = 0;
            yMax = 1;
            // console.warn('Zero or infinite y-range.');
        }
        var domainX = continuousX ? (array_1.numericExtent(xData) || [0, 1]) : xData;
        if (continuousX) {
            var _a = domainX, min = _a[0], max = _a[1];
            if (min === max) {
                domainX[0] = min - 1;
                domainX[1] = max + 1;
            }
        }
        this.domainX = domainX;
        this.domainY = [yMin, yMax];
        if (chart) {
            chart.updateAxes();
        }
        return true;
    };
    AreaSeries.prototype.getDomainX = function () {
        return this.xData;
    };
    AreaSeries.prototype.getDomainY = function () {
        return this.domainY;
    };
    AreaSeries.prototype.update = function () {
        var _this = this;
        var chart = this.chart;
        var visible = this.group.visible = this.visible;
        if (!chart || !visible || chart.dataPending || chart.layoutPending || !(chart.xAxis && chart.yAxis)) {
            return;
        }
        var xCount = this.data.length;
        var xAxis = chart.xAxis;
        var yAxis = chart.yAxis;
        var xScale = xAxis.scale;
        var yScale = yAxis.scale;
        var xOffset = (xScale.bandwidth || 0) / 2;
        var yOffset = (yScale.bandwidth || 0) / 2;
        var yFields = this.yFields;
        var enabled = this.enabled;
        var fills = this.fills;
        var strokes = this.strokes;
        var fillOpacity = this.fillOpacity;
        var strokeOpacity = this.strokeOpacity;
        var strokeWidth = this.strokeWidth;
        var data = this.data;
        var xData = this.xData;
        var yData = this.yData;
        var marker = this.marker;
        var markerSize = this.markerSize;
        var markerStrokeWidth = this.markerStrokeWidth;
        var areaSelectionData = [];
        var markerSelectionData = [];
        var last = xCount * 2 - 1;
        for (var i = 0; i < xCount; i++) {
            var xDatum = xData[i];
            var yDatum = yData[i];
            var yCount = yDatum.length;
            var x = xScale.convert(xDatum) + xOffset;
            var prev = 0;
            var curr = void 0;
            for (var j = 0; j < yCount; j++) {
                curr = yDatum[j];
                var y = yScale.convert(prev + curr) + yOffset;
                var yField = yFields[j];
                var seriesDatum = data[i];
                var yValue = seriesDatum[yField];
                if (marker) {
                    markerSelectionData.push({
                        seriesDatum: seriesDatum,
                        yValue: yValue,
                        yField: yField,
                        x: x,
                        y: y,
                        fill: fills[j % fills.length],
                        stroke: strokes[j % strokes.length],
                        radius: markerSize / 2,
                        text: this.yFieldNames[j]
                    });
                }
                var areaDatum = areaSelectionData[j] || (areaSelectionData[j] = {
                    yField: yField,
                    points: []
                });
                var areaPoints = areaDatum.points;
                areaPoints[i] = {
                    x: x,
                    y: y
                };
                areaPoints[last - i] = {
                    x: x,
                    y: yScale.convert(prev) + yOffset // bottom y
                };
                prev += curr;
            }
        }
        var updateAreas = this.areaSelection.setData(areaSelectionData);
        var updateStrokes = this.strokeSelection.setData(areaSelectionData);
        var updateMarkers = this.markerSelection.setData(markerSelectionData);
        updateAreas.exit.remove();
        updateStrokes.exit.remove();
        updateMarkers.exit.remove();
        var enterAreas = updateAreas.enter.append(path_1.Path)
            .each(function (path) {
            path.stroke = undefined;
            path.pointerEvents = node_1.PointerEvents.None;
        });
        var enterStrokes = updateStrokes.enter.append(path_1.Path)
            .each(function (path) {
            path.fill = undefined;
            path.lineJoin = 'round';
            path.lineCap = 'round';
            path.pointerEvents = node_1.PointerEvents.None;
        });
        var enterMarkers = updateMarkers.enter.append(arc_1.Arc)
            .each(function (arc) { return arc.type = arc_1.ArcType.Chord; });
        var highlightedNode = this.highlightedNode;
        var areaSelection = updateAreas.merge(enterAreas);
        var strokeSelection = updateStrokes.merge(enterStrokes);
        var markerSelection = updateMarkers.merge(enterMarkers);
        areaSelection.each(function (shape, datum, index) {
            var path = shape.path;
            shape.fill = fills[index % fills.length];
            shape.fillOpacity = fillOpacity;
            shape.fillShadow = _this.shadow;
            shape.visible = !!enabled.get(datum.yField);
            path.clear();
            var points = datum.points;
            var n = points.length;
            for (var i = 0; i < n; i++) {
                var _a = points[i], x = _a.x, y = _a.y;
                if (!i) {
                    path.moveTo(x, y);
                }
                else {
                    path.lineTo(x, y);
                }
            }
            path.closePath();
        });
        strokeSelection.each(function (shape, datum, index) {
            var path = shape.path;
            shape.stroke = strokes[index % strokes.length];
            shape.strokeWidth = strokeWidth;
            shape.visible = !!enabled.get(datum.yField);
            shape.strokeOpacity = strokeOpacity;
            path.clear();
            var points = datum.points;
            // The stroke doesn't go all the way around the fill, only on top,
            // that's why we iterate until `xCount` (rather than `points.length`) and stop.
            for (var i = 0; i < xCount; i++) {
                var _a = points[i], x = _a.x, y = _a.y;
                if (!i) {
                    path.moveTo(x, y);
                }
                else {
                    path.lineTo(x, y);
                }
            }
        });
        markerSelection.each(function (arc, datum) {
            arc.centerX = datum.x;
            arc.centerY = datum.y;
            arc.radiusX = datum.radius;
            arc.radiusY = datum.radius;
            arc.fill = arc === highlightedNode && _this.highlightStyle.fill !== undefined
                ? _this.highlightStyle.fill
                : datum.fill;
            arc.stroke = arc === highlightedNode && _this.highlightStyle.stroke !== undefined
                ? _this.highlightStyle.stroke
                : datum.stroke;
            arc.strokeWidth = markerStrokeWidth;
            arc.visible = datum.radius > 0 && !!enabled.get(datum.yField);
        });
        this.areaSelection = areaSelection;
        this.strokeSelection = strokeSelection;
        this.markerSelection = markerSelection;
    };
    AreaSeries.prototype.getTooltipHtml = function (nodeDatum) {
        var html = '';
        if (this.tooltipEnabled) {
            var xField = this.xField;
            var yField = nodeDatum.yField;
            var yFields = this.yFields;
            var yFieldIndex = yFields.indexOf(yField);
            var color = this.fills[yFieldIndex % this.fills.length];
            var title = nodeDatum.text;
            if (this.tooltipRenderer && xField) {
                html = this.tooltipRenderer({
                    datum: nodeDatum.seriesDatum,
                    xField: xField,
                    yField: yField,
                    title: title,
                    color: color
                });
            }
            else {
                var titleStyle = "style=\"color: white; background-color: " + color + "\"";
                title = title ? "<div class=\"title\" " + titleStyle + ">" + title + "</div>" : '';
                var seriesDatum = nodeDatum.seriesDatum;
                var xValue = seriesDatum[xField];
                var yValue = seriesDatum[yField];
                var xString = typeof (xValue) === 'number' ? number_1.toFixed(xValue) : String(xValue);
                var yString = typeof (yValue) === 'number' ? number_1.toFixed(yValue) : String(yValue);
                html = title + "<div class=\"content\">" + xString + ": " + yString + "</div>";
            }
        }
        return html;
    };
    AreaSeries.prototype.listSeriesItems = function (data) {
        var _this = this;
        if (this.data.length && this.xField && this.yFields.length) {
            var fills_1 = this.fills;
            var strokes_1 = this.strokes;
            var id_1 = this.id;
            this.yFields.forEach(function (yField, index) {
                data.push({
                    id: id_1,
                    itemId: yField,
                    enabled: _this.enabled.get(yField) || false,
                    label: {
                        text: _this.yFieldNames[index] || _this.yFields[index]
                    },
                    marker: {
                        fill: fills_1[index % fills_1.length],
                        stroke: strokes_1[index % strokes_1.length]
                    }
                });
            });
        }
    };
    AreaSeries.prototype.toggleSeriesItem = function (itemId, enabled) {
        this.enabled.set(itemId, enabled);
        this.scheduleData();
    };
    AreaSeries.className = 'AreaSeries';
    return AreaSeries;
}(series_1.Series));
exports.AreaSeries = AreaSeries;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/barSeries.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/barSeries.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var selection_1 = __webpack_require__(/*! ../../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var rect_1 = __webpack_require__(/*! ../../scene/shape/rect */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/rect.js");
var text_1 = __webpack_require__(/*! ../../scene/shape/text */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js");
var bandScale_1 = __webpack_require__(/*! ../../scale/bandScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/bandScale.js");
var palettes_1 = __webpack_require__(/*! ../palettes */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js");
var series_1 = __webpack_require__(/*! ./series */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js");
var node_1 = __webpack_require__(/*! ../../scene/node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var numberAxis_1 = __webpack_require__(/*! ../axis/numberAxis */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/axis/numberAxis.js");
var BarSeriesNodeTag;
(function (BarSeriesNodeTag) {
    BarSeriesNodeTag[BarSeriesNodeTag["Bar"] = 0] = "Bar";
    BarSeriesNodeTag[BarSeriesNodeTag["Label"] = 1] = "Label";
})(BarSeriesNodeTag || (BarSeriesNodeTag = {}));
var BarSeries = /** @class */ (function (_super) {
    __extends(BarSeries, _super);
    function BarSeries() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Need to put bar and label nodes into separate groups, because even though label nodes are
        // created after the bar nodes, this only guarantees that labels will always be on top of bars
        // on the first run. If on the next run more bars are added, they might clip the labels
        // rendered during the previous run.
        _this.rectGroup = _this.group.appendChild(new group_1.Group);
        _this.textGroup = _this.group.appendChild(new group_1.Group);
        _this.rectSelection = selection_1.Selection.select(_this.rectGroup).selectAll();
        _this.textSelection = selection_1.Selection.select(_this.textGroup).selectAll();
        /**
         * The assumption is that the values will be reset (to `true`)
         * in the {@link yFields} setter.
         */
        _this.enabled = new Map();
        _this._fills = palettes_1.default.fills;
        _this._strokes = palettes_1.default.strokes;
        _this._fillOpacity = 1;
        _this._strokeOpacity = 1;
        _this.xData = [];
        _this.yData = [];
        _this.ySums = [];
        _this.domainY = [];
        /**
         * Used to get the position of bars within each group.
         */
        _this.groupScale = new bandScale_1.BandScale();
        _this._xField = '';
        /**
         * With a single value in the `yFields` array we get the regular bar series.
         * With multiple values, we get the stacked bar series.
         * If the {@link grouped} set to `true`, we get the grouped bar series.
         * @param values
         */
        _this._yFields = [];
        _this._yFieldNames = [];
        _this._grouped = false;
        /**
         * The value to normalize the stacks to, when {@link grouped} is `false`.
         * Should be a finite positive value or `NaN`.
         * Defaults to `NaN` - stacks are not normalized.
         */
        _this._normalizedTo = NaN;
        _this._strokeWidth = 1;
        _this._shadow = undefined;
        _this._labelEnabled = true;
        _this._labelFontStyle = undefined;
        _this._labelFontWeight = undefined;
        _this._labelFontSize = 12;
        _this._labelFontFamily = 'Verdana, sans-serif';
        _this._labelColor = 'black';
        _this._labelFormatter = undefined;
        _this.highlightStyle = {
            fill: 'yellow'
        };
        return _this;
    }
    Object.defineProperty(BarSeries.prototype, "fills", {
        get: function () {
            return this._fills;
        },
        set: function (values) {
            this._fills = values;
            this.strokes = values.map(function (color) { return ag_grid_community_1.Color.fromString(color).darker().toHexString(); });
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "strokes", {
        get: function () {
            return this._strokes;
        },
        set: function (values) {
            this._strokes = values;
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "fillOpacity", {
        get: function () {
            return this._fillOpacity;
        },
        set: function (value) {
            if (this._fillOpacity !== value) {
                this._fillOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "strokeOpacity", {
        get: function () {
            return this._strokeOpacity;
        },
        set: function (value) {
            if (this._strokeOpacity !== value) {
                this._strokeOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            if (this._chart !== chart) {
                this._chart = chart;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "xField", {
        get: function () {
            return this._xField;
        },
        set: function (value) {
            if (this._xField !== value) {
                this._xField = value;
                this.xData = [];
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "yFields", {
        get: function () {
            return this._yFields;
        },
        set: function (values) {
            this._yFields = values;
            var enabled = this.enabled;
            enabled.clear();
            values.forEach(function (field) { return enabled.set(field, true); });
            var groupScale = this.groupScale;
            groupScale.domain = values;
            groupScale.padding = 0.1;
            groupScale.round = true;
            this.yData = [];
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "yFieldNames", {
        get: function () {
            return this._yFieldNames;
        },
        set: function (values) {
            this._yFieldNames = values;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "grouped", {
        get: function () {
            return this._grouped;
        },
        set: function (value) {
            if (this._grouped !== value) {
                this._grouped = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "normalizedTo", {
        get: function () {
            return this._normalizedTo;
        },
        set: function (value) {
            if (value === 0) {
                value = NaN;
            }
            var absValue = Math.abs(value);
            if (this._normalizedTo !== absValue) {
                this._normalizedTo = absValue;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            if (this._strokeWidth !== value) {
                this._strokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (value) {
            if (this._shadow !== value) {
                this._shadow = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelEnabled", {
        get: function () {
            return this._labelEnabled;
        },
        set: function (value) {
            if (this._labelEnabled !== value) {
                this._labelEnabled = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelFontStyle", {
        get: function () {
            return this._labelFontStyle;
        },
        set: function (value) {
            if (this._labelFontStyle !== value) {
                this._labelFontStyle = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelFontWeight", {
        get: function () {
            return this._labelFontWeight;
        },
        set: function (value) {
            if (this._labelFontWeight !== value) {
                this._labelFontWeight = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelFontSize", {
        get: function () {
            return this._labelFontSize;
        },
        set: function (value) {
            if (this._labelFontSize !== value) {
                this._labelFontSize = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelFontFamily", {
        get: function () {
            return this._labelFontFamily;
        },
        set: function (value) {
            if (this._labelFontFamily !== value) {
                this._labelFontFamily = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelColor", {
        get: function () {
            return this._labelColor;
        },
        set: function (value) {
            if (this._labelColor !== value) {
                this._labelColor = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeries.prototype, "labelFormatter", {
        get: function () {
            return this._labelFormatter;
        },
        set: function (value) {
            if (this._labelFormatter !== value) {
                this._labelFormatter = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    BarSeries.prototype.highlightNode = function (node) {
        if (!(node instanceof rect_1.Rect)) {
            return;
        }
        this.highlightedNode = node;
        this.scheduleLayout();
    };
    BarSeries.prototype.dehighlightNode = function () {
        this.highlightedNode = undefined;
        this.scheduleLayout();
    };
    BarSeries.prototype.processData = function () {
        var data = this.data;
        var xField = this.xField;
        var yFields = this.yFields;
        if (!(xField && yFields.length)) {
            this._data = data = [];
        }
        // If the data is an array of rows like so:
        //
        // [{
        //   xField: 'Jan',
        //   yField1: 5,
        //   yField2: 7,
        //   yField3: -9,
        // }, {
        //   xField: 'Feb',
        //   yField1: 10,
        //   yField2: -15,
        //   yField3: 20
        // }]
        //
        var enabled = this.enabled;
        var normalizedTo = this.normalizedTo;
        var xData = this.xData = data.map(function (datum) { return datum[xField]; });
        var ySums = this.ySums = []; // used for normalization of stacked bars
        var yData = this.yData = data.map(function (datum, xIndex) {
            var values = [];
            var ySum = 0;
            yFields.forEach(function (field) {
                var value = datum[field];
                if (!isFinite(value) || !enabled.get(field)) {
                    value = 0;
                }
                if (value > 0) {
                    ySum += value;
                }
                values.push(value);
            });
            ySums[xIndex] = ySum;
            return values;
        });
        // xData: ['Jan', 'Feb']
        //
        // yData: [
        //   [5, 7, -9],
        //   [10, -15, 20]
        // ]
        var yMin = Infinity;
        var yMax = -Infinity;
        if (this.grouped) {
            // Find the tallest positive/negative bar in each group,
            // then find the tallest positive/negative bar overall.
            // The `yMin` should always be <= 0,
            // otherwise with the `yData` like [300, 200, 100] the last bar
            // will have zero height, because the y-axis range is [100, 300].
            yMin = Math.min.apply(Math, yData.map(function (groupValues) { return Math.min.apply(Math, [0].concat(groupValues)); }));
            yMax = Math.max.apply(Math, yData.map(function (groupValues) { return Math.max.apply(Math, groupValues); }));
        }
        else { // stacked or regular
            if (isFinite(normalizedTo)) {
                yMin = 0;
                yMax = normalizedTo;
                yData.forEach(function (stackValues, i) {
                    var ySum = ySums[i];
                    stackValues.forEach(function (y, j) { return stackValues[j] = y / ySum * normalizedTo; });
                });
            }
            else {
                // Find the height of each stack in the positive and negative directions,
                // then find the tallest stacks in both directions.
                yMin = Math.min.apply(Math, [0].concat(yData.map(function (stackValues) {
                    var min = 0;
                    stackValues.forEach(function (y) {
                        if (y < 0) {
                            min -= y;
                        }
                    });
                    return min;
                })));
                yMax = Math.max.apply(Math, yData.map(function (stackValues) {
                    var max = 0;
                    stackValues.forEach(function (y) {
                        if (y > 0) {
                            max += y;
                        }
                    });
                    return max;
                }));
            }
        }
        if (yMin === yMax || !isFinite(yMin) || !isFinite(yMax)) {
            yMin = 0;
            yMax = 1;
            // console.warn('Zero or infinite y-range.');
        }
        this.domainY = [yMin, yMax];
        var chart = this.chart;
        if (chart) {
            chart.updateAxes();
        }
        return true;
    };
    BarSeries.prototype.getDomainX = function () {
        return this.xData;
    };
    BarSeries.prototype.getDomainY = function () {
        return this.domainY;
    };
    BarSeries.prototype.update = function () {
        var _this = this;
        var chart = this.chart;
        var visible = this.group.visible = this.visible;
        if (!chart || !visible || chart.dataPending || chart.layoutPending || !(chart.xAxis && chart.yAxis)) {
            return;
        }
        var categoryCount = this.data.length;
        var flipXY = !(chart.yAxis instanceof numberAxis_1.NumberAxis);
        var xAxis = flipXY ? chart.yAxis : chart.xAxis;
        var yAxis = flipXY ? chart.xAxis : chart.yAxis;
        var xScale = xAxis.scale;
        var yScale = yAxis.scale;
        var groupScale = this.groupScale;
        var yFields = this.yFields;
        var fills = this.fills;
        var strokes = this.strokes;
        var fillOpacity = this.fillOpacity;
        var strokeOpacity = this.strokeOpacity;
        var grouped = this.grouped;
        var strokeWidth = this.strokeWidth;
        var enabled = this.enabled;
        var labelEnabled = this.labelEnabled;
        var labelFontStyle = this.labelFontStyle;
        var labelFontWeight = this.labelFontWeight;
        var labelFontSize = this.labelFontSize;
        var labelFontFamily = this.labelFontFamily;
        var labelColor = this.labelColor;
        var labelFormatter = this.labelFormatter;
        var data = this.data;
        var xData = this.xData;
        var yData = this.yData;
        groupScale.range = [0, xScale.bandwidth];
        var barWidth = grouped ? groupScale.bandwidth : xScale.bandwidth;
        var selectionData = [];
        for (var i = 0; i < categoryCount; i++) {
            var category = xData[i];
            var values = yData[i];
            var valueCount = values.length;
            var x = xScale.convert(category);
            var prev = 0;
            var curr = void 0;
            for (var j = 0; j < valueCount; j++) {
                curr = values[j];
                var yField = yFields[j];
                var yFieldEnabled = enabled.get(yField);
                var barX = grouped ? x + groupScale.convert(yField) : x;
                var y = yScale.convert((grouped ? curr : prev + curr));
                var bottomY = yScale.convert((grouped ? 0 : prev));
                var seriesDatum = data[i];
                var yValue = seriesDatum[yField]; // unprocessed y-value
                var yValueIsNumber = typeof yValue === 'number';
                var labelText = void 0;
                if (labelFormatter) {
                    labelText = labelFormatter({
                        value: yValueIsNumber ? yValue : NaN
                    });
                }
                else {
                    labelText = yValueIsNumber && isFinite(yValue) ? yValue.toFixed(2) : '';
                }
                selectionData.push({
                    seriesDatum: seriesDatum,
                    yValue: yValue,
                    yField: yField,
                    x: flipXY ? Math.min(y, bottomY) : barX,
                    y: flipXY ? barX : Math.min(y, bottomY),
                    width: flipXY ? Math.abs(bottomY - y) : barWidth,
                    height: flipXY ? barWidth : Math.abs(bottomY - y),
                    fill: fills[j % fills.length],
                    stroke: strokes[j % strokes.length],
                    strokeWidth: strokeWidth,
                    label: yFieldEnabled && labelText ? {
                        text: labelText,
                        fontStyle: labelFontStyle,
                        fontWeight: labelFontWeight,
                        fontSize: labelFontSize,
                        fontFamily: labelFontFamily,
                        fill: labelColor,
                        x: flipXY ? y + (yValue >= 0 ? -1 : 1) * Math.abs(bottomY - y) / 2 : barX + barWidth / 2,
                        y: flipXY ? barX + barWidth / 2 : y + (yValue >= 0 ? 1 : -1) * Math.abs(bottomY - y) / 2
                    } : undefined
                });
                if (grouped) {
                    prev = curr;
                }
                else {
                    prev += curr;
                }
            }
        }
        var updateRects = this.rectSelection.setData(selectionData);
        var updateTexts = this.textSelection.setData(selectionData);
        updateRects.exit.remove();
        updateTexts.exit.remove();
        var enterRects = updateRects.enter.append(rect_1.Rect).each(function (rect) {
            rect.tag = BarSeriesNodeTag.Bar;
            // rect.sizing = RectSizing.Border;
            rect.crisp = true;
        });
        var enterTexts = updateTexts.enter.append(text_1.Text).each(function (text) {
            text.tag = BarSeriesNodeTag.Label;
            text.pointerEvents = node_1.PointerEvents.None;
            text.textAlign = 'center';
            text.textBaseline = 'middle';
        });
        var highlightedNode = this.highlightedNode;
        var rectSelection = updateRects.merge(enterRects);
        var textSelection = updateTexts.merge(enterTexts);
        rectSelection.each(function (rect, datum) {
            rect.x = datum.x;
            rect.y = datum.y;
            rect.width = datum.width;
            rect.height = datum.height;
            rect.fill = rect === highlightedNode && _this.highlightStyle.fill !== undefined
                ? _this.highlightStyle.fill
                : datum.fill;
            rect.stroke = rect === highlightedNode && _this.highlightStyle.stroke !== undefined
                ? _this.highlightStyle.stroke
                : datum.stroke;
            rect.fillOpacity = fillOpacity;
            rect.strokeOpacity = strokeOpacity;
            rect.strokeWidth = datum.strokeWidth;
            rect.fillShadow = _this.shadow;
            rect.visible = datum.height > 0; // prevent stroke from rendering for zero height columns
        });
        textSelection.each(function (text, datum) {
            var label = datum.label;
            if (label && labelEnabled) {
                text.fontStyle = label.fontStyle;
                text.fontWeight = label.fontWeight;
                text.fontSize = label.fontSize;
                text.fontFamily = label.fontFamily;
                text.text = label.text;
                text.x = label.x;
                text.y = label.y;
                text.fill = label.fill;
                text.visible = true;
            }
            else {
                text.visible = false;
            }
        });
        this.rectSelection = rectSelection;
        this.textSelection = textSelection;
    };
    BarSeries.prototype.getTooltipHtml = function (nodeDatum) {
        var html = '';
        if (this.tooltipEnabled) {
            var xField = this.xField;
            var yField = nodeDatum.yField;
            var yFields = this.yFields;
            var yFieldIndex = yFields.indexOf(yField);
            var datum = nodeDatum.seriesDatum;
            var color = this.fills[yFieldIndex % this.fills.length];
            var title = this.yFieldNames[yFieldIndex] || undefined;
            if (this.tooltipRenderer && xField) {
                html = this.tooltipRenderer({
                    datum: datum,
                    xField: xField,
                    yField: yField,
                    title: title,
                    color: color
                });
            }
            else {
                var titleStyle = "style=\"color: white; background-color: " + color + "\"";
                title = title ? "<div class=\"title\" " + titleStyle + ">" + title + "</div>" : '';
                var xValue = datum[xField];
                var yValue = datum[yField];
                var xString = typeof (xValue) === 'number' ? number_1.toFixed(xValue) : String(xValue);
                var yString = typeof (yValue) === 'number' ? number_1.toFixed(yValue) : String(yValue);
                html = title + "<div class=\"content\">" + xString + ": " + yString + "</div>";
            }
        }
        return html;
    };
    BarSeries.prototype.listSeriesItems = function (data) {
        var _this = this;
        if (this.data.length && this.xField && this.yFields.length) {
            var fills_1 = this.fills;
            var strokes_1 = this.strokes;
            var id_1 = this.id;
            this.yFields.forEach(function (yField, index) {
                data.push({
                    id: id_1,
                    itemId: yField,
                    enabled: _this.enabled.get(yField) || false,
                    label: {
                        text: _this.yFieldNames[index] || _this.yFields[index]
                    },
                    marker: {
                        fill: fills_1[index % fills_1.length],
                        stroke: strokes_1[index % strokes_1.length]
                    }
                });
            });
        }
    };
    BarSeries.prototype.toggleSeriesItem = function (itemId, enabled) {
        this.enabled.set(itemId, enabled);
        var enabledYFields = [];
        this.enabled.forEach(function (enabled, yField) {
            if (enabled) {
                enabledYFields.push(yField);
            }
        });
        this.groupScale.domain = enabledYFields;
        this.scheduleData();
    };
    BarSeries.className = 'BarSeries';
    return BarSeries;
}(series_1.Series));
exports.BarSeries = BarSeries;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/lineSeries.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/lineSeries.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __webpack_require__(/*! ../../scene/shape/path */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/path.js");
var continuousScale_1 = __webpack_require__(/*! ../../scale/continuousScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/continuousScale.js");
var selection_1 = __webpack_require__(/*! ../../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var arc_1 = __webpack_require__(/*! ../../scene/shape/arc */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js");
var array_1 = __webpack_require__(/*! ../../util/array */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js");
var palettes_1 = __webpack_require__(/*! ../palettes */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js");
var series_1 = __webpack_require__(/*! ./series */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var node_1 = __webpack_require__(/*! ../../scene/node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var LineSeries = /** @class */ (function (_super) {
    __extends(LineSeries, _super);
    function LineSeries() {
        var _this = _super.call(this) || this;
        _this.domainX = [];
        _this.domainY = [];
        _this.xData = [];
        _this.yData = [];
        _this.lineNode = new path_1.Path();
        _this.groupSelection = selection_1.Selection.select(_this.group).selectAll();
        _this._title = '';
        _this._xField = '';
        _this._yField = '';
        _this._marker = false;
        _this._markerSize = 8;
        _this._markerStrokeWidth = 2;
        _this._fill = palettes_1.default.fills[0];
        _this._stroke = palettes_1.default.strokes[0];
        _this._strokeWidth = 3;
        _this.highlightStyle = {
            fill: 'yellow'
        };
        var lineNode = _this.lineNode;
        lineNode.fill = undefined;
        lineNode.lineJoin = 'round';
        lineNode.pointerEvents = node_1.PointerEvents.None;
        _this.group.append(lineNode);
        return _this;
    }
    Object.defineProperty(LineSeries.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            if (this._chart !== chart) {
                this._chart = chart;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "xField", {
        get: function () {
            return this._xField;
        },
        set: function (value) {
            if (this._xField !== value) {
                this._xField = value;
                this.xData = [];
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "yField", {
        get: function () {
            return this._yField;
        },
        set: function (value) {
            if (this._yField !== value) {
                this._yField = value;
                this.yData = [];
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "marker", {
        get: function () {
            return this._marker;
        },
        set: function (value) {
            if (this._marker !== value) {
                this._marker = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "markerSize", {
        get: function () {
            return this._markerSize;
        },
        set: function (value) {
            if (this._markerSize !== value) {
                this._markerSize = Math.abs(value);
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "markerStrokeWidth", {
        get: function () {
            return this._markerStrokeWidth;
        },
        set: function (value) {
            if (this._markerStrokeWidth !== value) {
                this._markerStrokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    LineSeries.prototype.processData = function () {
        var chart = this.chart;
        var xField = this.xField;
        var yField = this.yField;
        var data = this.data;
        if (!(chart && chart.xAxis && chart.yAxis)) {
            return false;
        }
        if (!(xField && yField)) {
            this._data = data = [];
        }
        this.xData = data.map(function (datum) { return datum[xField]; });
        this.yData = data.map(function (datum) { return datum[yField]; });
        var continuousX = chart.xAxis.scale instanceof continuousScale_1.default;
        var domainX = continuousX ? (array_1.numericExtent(this.xData) || [0, 1]) : this.xData;
        var domainY = array_1.numericExtent(this.yData) || [0, 1];
        if (continuousX) {
            var _a = domainX, min = _a[0], max = _a[1];
            if (min === max) {
                domainX[0] = min - 1;
                domainX[1] = max + 1;
            }
        }
        {
            var _b = domainY, min = _b[0], max = _b[1];
            if (min === max) {
                domainY[0] = min - 1;
                domainY[1] = max + 1;
            }
        }
        this.domainX = domainX;
        this.domainY = domainY;
        return true;
    };
    Object.defineProperty(LineSeries.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (value) {
            if (this._fill !== value) {
                this._fill = value;
                this.stroke = ag_grid_community_1.Color.fromString(value).darker().toHexString();
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (value) {
            if (this._stroke !== value) {
                this._stroke = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            if (this._strokeWidth !== value) {
                this._strokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    LineSeries.prototype.highlightNode = function (node) {
        if (!(node instanceof arc_1.Arc)) {
            return;
        }
        this.highlightedNode = node;
        this.scheduleLayout();
    };
    LineSeries.prototype.dehighlightNode = function () {
        this.highlightedNode = undefined;
        this.scheduleLayout();
    };
    LineSeries.prototype.update = function () {
        var _this = this;
        var chart = this.chart;
        var visible = this.group.visible = this.visible;
        if (!chart || !visible || chart.dataPending || chart.layoutPending || !(chart.xAxis && chart.yAxis)) {
            return;
        }
        var xAxis = chart.xAxis;
        var yAxis = chart.yAxis;
        var xScale = xAxis.scale;
        var yScale = yAxis.scale;
        var xOffset = (xScale.bandwidth || 0) / 2;
        var yOffset = (yScale.bandwidth || 0) / 2;
        var data = this.data;
        var xData = this.xData;
        var yData = this.yData;
        var n = xData.length;
        var fill = this.fill;
        var stroke = this.stroke;
        var marker = this.marker;
        var markerSize = this.markerSize;
        var markerStrokeWidth = this.markerStrokeWidth;
        var lineNode = this.lineNode;
        var linePath = lineNode.path;
        var groupSelectionData = [];
        linePath.clear();
        for (var i = 0; i < n; i++) {
            var xDatum = xData[i];
            var yDatum = yData[i];
            var x = xScale.convert(xDatum) + xOffset;
            var y = yScale.convert(yDatum) + yOffset;
            if (!i) {
                linePath.moveTo(x, y);
            }
            else {
                linePath.lineTo(x, y);
            }
            if (marker) {
                groupSelectionData.push({
                    seriesDatum: data[i],
                    x: x,
                    y: y,
                    fill: fill,
                    stroke: stroke,
                    strokeWidth: markerStrokeWidth,
                    radius: markerSize / 2
                });
            }
        }
        lineNode.stroke = stroke;
        lineNode.strokeWidth = this.strokeWidth;
        // ------------------------------------------
        var updateGroups = this.groupSelection.setData(groupSelectionData);
        updateGroups.exit.remove();
        var enterGroups = updateGroups.enter.append(group_1.Group);
        enterGroups.append(arc_1.Arc).each(function (arc) { return arc.type = arc_1.ArcType.Chord; });
        var highlightedNode = this.highlightedNode;
        var groupSelection = updateGroups.merge(enterGroups);
        groupSelection.selectByClass(arc_1.Arc)
            .each(function (arc, datum) {
            arc.centerX = datum.x;
            arc.centerY = datum.y;
            arc.radiusX = datum.radius;
            arc.radiusY = datum.radius;
            arc.fill = arc === highlightedNode && _this.highlightStyle.fill !== undefined
                ? _this.highlightStyle.fill
                : datum.fill;
            arc.stroke = arc === highlightedNode && _this.highlightStyle.stroke !== undefined
                ? _this.highlightStyle.stroke
                : datum.stroke;
            arc.strokeWidth = datum.strokeWidth;
            arc.visible = datum.radius > 0;
        });
        this.groupSelection = groupSelection;
    };
    LineSeries.prototype.getDomainX = function () {
        return this.domainX;
    };
    LineSeries.prototype.getDomainY = function () {
        return this.domainY;
    };
    LineSeries.prototype.getTooltipHtml = function (nodeDatum) {
        var xField = this.xField;
        var yField = this.yField;
        var color = this.fill;
        var html = '';
        if (!xField || !yField) {
            return html;
        }
        var title = this.title;
        if (this.tooltipRenderer && this.xField) {
            html = this.tooltipRenderer({
                datum: nodeDatum.seriesDatum,
                xField: xField,
                yField: yField,
                title: title,
                color: color
            });
        }
        else {
            var titleStyle = "style=\"color: white; background-color: " + color + "\"";
            title = title ? "<div class=\"title\" " + titleStyle + ">" + title + "</div>" : '';
            var seriesDatum = nodeDatum.seriesDatum;
            var xValue = seriesDatum[xField];
            var yValue = seriesDatum[yField];
            var xString = typeof (xValue) === 'number' ? number_1.toFixed(xValue) : String(xValue);
            var yString = typeof (yValue) === 'number' ? number_1.toFixed(yValue) : String(yValue);
            html = title + "<div class=\"content\">" + xString + ": " + yString + "</div>";
        }
        return html;
    };
    LineSeries.prototype.listSeriesItems = function (data) {
        if (this.data.length && this.xField && this.yField) {
            data.push({
                id: this.id,
                itemId: undefined,
                enabled: this.visible,
                label: {
                    text: this.title || this.yField
                },
                marker: {
                    fill: this.fill,
                    stroke: this.stroke
                }
            });
        }
    };
    LineSeries.className = 'LineSeries';
    return LineSeries;
}(series_1.Series));
exports.LineSeries = LineSeries;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/pieSeries.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/pieSeries.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var line_1 = __webpack_require__(/*! ../../scene/shape/line */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/line.js");
var text_1 = __webpack_require__(/*! ../../scene/shape/text */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js");
var selection_1 = __webpack_require__(/*! ../../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var linearScale_1 = __webpack_require__(/*! ../../scale/linearScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/linearScale.js");
var angle_1 = __webpack_require__(/*! ../../util/angle */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js");
var palettes_1 = __webpack_require__(/*! ../palettes */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js");
var sector_1 = __webpack_require__(/*! ../../scene/shape/sector */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/sector.js");
var series_1 = __webpack_require__(/*! ./series */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js");
var node_1 = __webpack_require__(/*! ../../scene/node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var PieSeriesNodeTag;
(function (PieSeriesNodeTag) {
    PieSeriesNodeTag[PieSeriesNodeTag["Sector"] = 0] = "Sector";
    PieSeriesNodeTag[PieSeriesNodeTag["Callout"] = 1] = "Callout";
    PieSeriesNodeTag[PieSeriesNodeTag["Label"] = 2] = "Label";
})(PieSeriesNodeTag || (PieSeriesNodeTag = {}));
var PieSeries = /** @class */ (function (_super) {
    __extends(PieSeries, _super);
    function PieSeries() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radiusScale = linearScale_1.default();
        _this.groupSelection = selection_1.Selection.select(_this.group).selectAll();
        /**
         * The processed data that gets visualized.
         */
        _this.groupSelectionData = [];
        _this.enabled = [];
        _this.angleScale = (function () {
            var scale = linearScale_1.default();
            // Each slice is a ratio of the whole, where all ratios add up to 1.
            scale.domain = [0, 1];
            // Add 90 deg to start the first pie at 12 o'clock.
            scale.range = [-Math.PI, Math.PI].map(function (angle) { return angle + Math.PI / 2; });
            return scale;
        })();
        _this._title = undefined;
        /**
         * `null` means make the callout color the same as {@link strokeStyle}.
         */
        _this._calloutColors = palettes_1.default.strokes;
        _this._calloutStrokeWidth = 1;
        _this._calloutLength = 10;
        _this._labelOffset = 3; // from the callout line
        _this._labelFontStyle = undefined;
        _this._labelFontWeight = undefined;
        _this._labelFontSize = 12;
        _this._labelFontFamily = 'Verdana, sans-serif';
        _this._labelColor = 'black';
        _this._labelMinAngle = 20; // in degrees
        /**
         * The name of the numeric field to use to determine the angle (for example,
         * a pie slice angle).
         */
        _this._angleField = '';
        /**
         * The name of the numeric field to use to determine the radii of pie slices.
         * The largest value will correspond to the full radius and smaller values to
         * proportionally smaller radii. To prevent confusing visuals, this config only works
         * if {@link innerRadiusOffset} is zero.
         */
        _this._radiusField = '';
        /**
         * The value of the label field is supposed to be a string.
         * If it isn't, it will be coerced to a string value.
         */
        _this._labelField = '';
        _this._labelEnabled = true;
        _this._fills = palettes_1.default.fills;
        _this._strokes = palettes_1.default.strokes;
        _this._fillOpacity = 1;
        _this._strokeOpacity = 1;
        /**
         * The series rotation in degrees.
         */
        _this._rotation = 0;
        _this._outerRadiusOffset = 0;
        _this._innerRadiusOffset = 0;
        _this._strokeWidth = 1;
        _this._shadow = undefined;
        _this.highlightStyle = {
            fill: 'yellow'
        };
        return _this;
    }
    Object.defineProperty(PieSeries.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
            var enabled = this.enabled;
            enabled.length = data.length;
            for (var i = 0, ln = data.length; i < ln; i++) {
                enabled[i] = true;
            }
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            var _this = this;
            var oldTitle = this._title;
            if (oldTitle !== value) {
                if (oldTitle) {
                    oldTitle.onLayoutChange = undefined;
                    this.group.removeChild(oldTitle.node);
                }
                if (value) {
                    value.node.textBaseline = 'bottom';
                    value.onLayoutChange = function () { return _this.scheduleLayout(); };
                    this.group.appendChild(value.node);
                }
                this._title = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "calloutColors", {
        get: function () {
            return this._calloutColors;
        },
        set: function (value) {
            if (this._calloutColors !== value) {
                this._calloutColors = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "calloutStrokeWidth", {
        get: function () {
            return this._calloutStrokeWidth;
        },
        set: function (value) {
            if (this._calloutStrokeWidth !== value) {
                this._calloutStrokeWidth = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "calloutLength", {
        get: function () {
            return this._calloutLength;
        },
        set: function (value) {
            if (this._calloutLength !== value) {
                this._calloutLength = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelOffset", {
        get: function () {
            return this._labelOffset;
        },
        set: function (value) {
            if (this._labelOffset !== value) {
                this._labelOffset = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelFontStyle", {
        get: function () {
            return this._labelFontStyle;
        },
        set: function (value) {
            if (this._labelFontStyle !== value) {
                this._labelFontStyle = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelFontWeight", {
        get: function () {
            return this._labelFontWeight;
        },
        set: function (value) {
            if (this._labelFontWeight !== value) {
                this._labelFontWeight = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelFontSize", {
        get: function () {
            return this._labelFontSize;
        },
        set: function (value) {
            if (this._labelFontSize !== value) {
                this._labelFontSize = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelFontFamily", {
        get: function () {
            return this._labelFontFamily;
        },
        set: function (value) {
            if (this._labelFontFamily !== value) {
                this._labelFontFamily = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelColor", {
        get: function () {
            return this._labelColor;
        },
        set: function (value) {
            if (this._labelColor !== value) {
                this._labelColor = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelMinAngle", {
        get: function () {
            return this._labelMinAngle;
        },
        set: function (value) {
            if (this._labelMinAngle !== value) {
                this._labelMinAngle = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            if (this._chart !== chart) {
                this._chart = chart;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "angleField", {
        get: function () {
            return this._angleField;
        },
        set: function (value) {
            if (this._angleField !== value) {
                this._angleField = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "radiusField", {
        get: function () {
            return this._radiusField;
        },
        set: function (value) {
            if (this._radiusField !== value) {
                this._radiusField = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelField", {
        get: function () {
            return this._labelField;
        },
        set: function (value) {
            if (this._labelField !== value) {
                this._labelField = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "labelEnabled", {
        get: function () {
            return this._labelEnabled;
        },
        set: function (value) {
            if (this._labelEnabled !== value) {
                this._labelEnabled = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "fills", {
        get: function () {
            return this._fills;
        },
        set: function (values) {
            this._fills = values;
            this.strokes = values.map(function (color) { return ag_grid_community_1.Color.fromString(color).darker().toHexString(); });
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "strokes", {
        get: function () {
            return this._strokes;
        },
        set: function (values) {
            this._strokes = values;
            this.calloutColors = values;
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "fillOpacity", {
        get: function () {
            return this._fillOpacity;
        },
        set: function (value) {
            if (this._fillOpacity !== value) {
                this._fillOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "strokeOpacity", {
        get: function () {
            return this._strokeOpacity;
        },
        set: function (value) {
            if (this._strokeOpacity !== value) {
                this._strokeOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            if (this._rotation !== value) {
                this._rotation = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "outerRadiusOffset", {
        get: function () {
            return this._outerRadiusOffset;
        },
        set: function (value) {
            if (this._outerRadiusOffset !== value) {
                this._outerRadiusOffset = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "innerRadiusOffset", {
        get: function () {
            return this._innerRadiusOffset;
        },
        set: function (value) {
            if (this._innerRadiusOffset !== value) {
                this._innerRadiusOffset = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            if (this._strokeWidth !== value) {
                this._strokeWidth = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSeries.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (value) {
            if (this._shadow !== value) {
                this._shadow = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    PieSeries.prototype.highlightNode = function (node) {
        if (!(node instanceof sector_1.Sector)) {
            return;
        }
        this.highlightedNode = node;
        this.scheduleLayout();
    };
    PieSeries.prototype.dehighlightNode = function () {
        this.highlightedNode = undefined;
        this.scheduleLayout();
    };
    PieSeries.prototype.getDomainX = function () {
        return this.angleScale.domain;
    };
    PieSeries.prototype.getDomainY = function () {
        return this.radiusScale.domain;
    };
    PieSeries.prototype.processData = function () {
        var _this = this;
        var data = this.data;
        var enabled = this.enabled;
        var angleData = data.map(function (datum, index) { return enabled[index] && +datum[_this.angleField] || 0; });
        var angleDataTotal = angleData.reduce(function (a, b) { return a + b; }, 0);
        // The ratios (in [0, 1] interval) used to calculate the end angle value for every pie slice.
        // Each slice starts where the previous one ends, so we only keep the ratios for end angles.
        var angleDataRatios = (function () {
            var sum = 0;
            return angleData.map(function (datum) { return sum += datum / angleDataTotal; });
        })();
        var labelField = this.labelEnabled && this.labelField;
        var labelData = [];
        if (labelField) {
            labelData = data.map(function (datum) { return String(datum[labelField]); });
        }
        var radiusField = this.radiusField;
        var useRadiusField = !!radiusField && !this.innerRadiusOffset;
        var radiusData = [];
        if (useRadiusField) {
            radiusData = data.map(function (datum) { return Math.abs(datum[radiusField]); });
            var maxDatum_1 = Math.max.apply(Math, radiusData);
            radiusData.forEach(function (value, index, array) { return array[index] = value / maxDatum_1; });
        }
        var angleScale = this.angleScale;
        var groupSelectionData = this.groupSelectionData;
        groupSelectionData.length = 0;
        var rotation = angle_1.toRadians(this.rotation);
        var halfPi = Math.PI / 2;
        var datumIndex = 0;
        // Simply use reduce here to pair up adjacent ratios.
        angleDataRatios.reduce(function (start, end) {
            var radius = useRadiusField ? radiusData[datumIndex] : 1;
            var startAngle = angleScale.convert(start) + rotation;
            var endAngle = angleScale.convert(end) + rotation;
            var midAngle = (startAngle + endAngle) / 2;
            var span = Math.abs(endAngle - startAngle);
            var midCos = Math.cos(midAngle);
            var midSin = Math.sin(midAngle);
            var labelMinAngle = angle_1.toRadians(_this.labelMinAngle);
            var labelVisible = labelField && span > labelMinAngle;
            var midAngle180 = angle_1.normalizeAngle180(midAngle);
            // Split the circle into quadrants like so: ⊗
            var quadrantStart = -3 * Math.PI / 4; // same as `normalizeAngle180(toRadians(-135))`
            var textAlign;
            var textBaseline;
            if (midAngle180 >= quadrantStart && midAngle180 < (quadrantStart += halfPi)) {
                textAlign = 'center';
                textBaseline = 'bottom';
            }
            else if (midAngle180 >= quadrantStart && midAngle180 < (quadrantStart += halfPi)) {
                textAlign = 'left';
                textBaseline = 'middle';
            }
            else if (midAngle180 >= quadrantStart && midAngle180 < (quadrantStart += halfPi)) {
                textAlign = 'center';
                textBaseline = 'hanging';
            }
            else {
                textAlign = 'right';
                textBaseline = 'middle';
            }
            groupSelectionData.push({
                index: datumIndex,
                seriesDatum: data[datumIndex],
                radius: radius,
                startAngle: startAngle,
                endAngle: endAngle,
                midAngle: midAngle,
                midCos: midCos,
                midSin: midSin,
                label: labelVisible ? {
                    text: labelData[datumIndex],
                    textAlign: textAlign,
                    textBaseline: textBaseline
                } : undefined
            });
            datumIndex++;
            return end;
        }, 0);
        return true;
    };
    PieSeries.prototype.update = function () {
        var _this = this;
        var chart = this.chart;
        var visible = this.group.visible = this.visible && this.enabled.indexOf(true) >= 0;
        if (!chart || !visible || chart.dataPending || chart.layoutPending) {
            return;
        }
        var fills = this.fills;
        var strokes = this.strokes;
        var fillOpacity = this.fillOpacity;
        var strokeOpacity = this.strokeOpacity;
        var calloutColors = this.calloutColors;
        var outerRadiusOffset = this.outerRadiusOffset;
        var innerRadiusOffset = this.innerRadiusOffset;
        var radiusScale = this.radiusScale;
        radiusScale.range = [0, chart.radius];
        this.group.translationX = chart.centerX;
        this.group.translationY = chart.centerY;
        var title = this.title;
        if (title) {
            title.node.translationY = -chart.radius - outerRadiusOffset - 2;
            title.node.visible = title.enabled;
        }
        var updateGroups = this.groupSelection.setData(this.groupSelectionData);
        updateGroups.exit.remove();
        var enterGroups = updateGroups.enter.append(group_1.Group);
        enterGroups.append(sector_1.Sector).each(function (node) { return node.tag = PieSeriesNodeTag.Sector; });
        enterGroups.append(line_1.Line).each(function (node) {
            node.tag = PieSeriesNodeTag.Callout;
            node.pointerEvents = node_1.PointerEvents.None;
        });
        enterGroups.append(text_1.Text).each(function (node) {
            node.tag = PieSeriesNodeTag.Label;
            node.pointerEvents = node_1.PointerEvents.None;
        });
        var groupSelection = updateGroups.merge(enterGroups);
        var minOuterRadius = Infinity;
        var outerRadii = [];
        var centerOffsets = [];
        var highlightedNode = this.highlightedNode;
        groupSelection.selectByTag(PieSeriesNodeTag.Sector)
            .each(function (sector, datum, index) {
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius + outerRadiusOffset);
            if (minOuterRadius > outerRadius) {
                minOuterRadius = outerRadius;
            }
            sector.outerRadius = outerRadius;
            sector.innerRadius = Math.max(0, innerRadiusOffset ? radius + innerRadiusOffset : 0);
            sector.startAngle = datum.startAngle;
            sector.endAngle = datum.endAngle;
            sector.fill = sector === highlightedNode && _this.highlightStyle.fill !== undefined
                ? _this.highlightStyle.fill
                : fills[index % fills.length];
            sector.stroke = sector === highlightedNode && _this.highlightStyle.stroke !== undefined
                ? _this.highlightStyle.stroke
                : strokes[index % strokes.length];
            sector.fillOpacity = fillOpacity;
            sector.strokeOpacity = strokeOpacity;
            sector.centerOffset = sector === highlightedNode && _this.highlightStyle.centerOffset !== undefined
                ? _this.highlightStyle.centerOffset
                : 0;
            sector.fillShadow = _this.shadow;
            sector.strokeWidth = _this.strokeWidth;
            sector.lineJoin = 'round';
            outerRadii.push(outerRadius);
            centerOffsets.push(sector.centerOffset);
        });
        var calloutLength = this.calloutLength;
        groupSelection.selectByTag(PieSeriesNodeTag.Callout)
            .each(function (line, datum, index) {
            if (datum.label) {
                var outerRadius = centerOffsets[index] + outerRadii[index];
                line.strokeWidth = _this.calloutStrokeWidth;
                line.stroke = calloutColors[index % calloutColors.length];
                line.x1 = datum.midCos * outerRadius;
                line.y1 = datum.midSin * outerRadius;
                line.x2 = datum.midCos * (outerRadius + calloutLength);
                line.y2 = datum.midSin * (outerRadius + calloutLength);
            }
            else {
                line.stroke = undefined;
            }
        });
        var labelOffset = this.labelOffset;
        groupSelection.selectByTag(PieSeriesNodeTag.Label)
            .each(function (text, datum, index) {
            var label = datum.label;
            if (label) {
                var outerRadius = outerRadii[index];
                var labelRadius = centerOffsets[index] + outerRadius + calloutLength + labelOffset;
                text.fontStyle = _this.labelFontStyle;
                text.fontWeight = _this.labelFontWeight;
                text.fontSize = _this.labelFontSize;
                text.fontFamily = _this.labelFontFamily;
                text.text = label.text;
                text.x = datum.midCos * labelRadius;
                text.y = datum.midSin * labelRadius;
                text.fill = _this.labelColor;
                text.textAlign = label.textAlign;
                text.textBaseline = label.textBaseline;
            }
            else {
                text.fill = undefined;
            }
        });
        this.groupSelection = groupSelection;
    };
    PieSeries.prototype.getTooltipHtml = function (nodeDatum) {
        var html = '';
        var angleField = this.angleField;
        if (!angleField) {
            return html;
        }
        var title = this.title ? this.title.text : undefined;
        var color = this.fills[nodeDatum.index % this.fills.length];
        if (this.tooltipRenderer) {
            html = this.tooltipRenderer({
                datum: nodeDatum.seriesDatum,
                angleField: angleField,
                radiusField: this.radiusField,
                labelField: this.labelField,
                title: title,
                color: color
            });
        }
        else {
            var titleStyle = "style=\"color: white; background-color: " + color + "\"";
            title = title ? "<div class=\"title\" " + titleStyle + ">" + title + "</div>" : '';
            var label = this.labelField ? nodeDatum.seriesDatum[this.labelField] + ": " : '';
            var value = nodeDatum.seriesDatum[angleField];
            var formattedValue = typeof (value) === 'number' ? number_1.toFixed(value) : value.toString();
            html = title + "<div class=\"content\">" + label + formattedValue + "</div>";
        }
        return html;
    };
    PieSeries.prototype.listSeriesItems = function (data) {
        var _this = this;
        var labelField = this.labelField;
        if (this.data.length && labelField) {
            var fills_1 = this.fills;
            var strokes_1 = this.strokes;
            var id_1 = this.id;
            this.data.forEach(function (datum, index) {
                data.push({
                    id: id_1,
                    itemId: index,
                    enabled: _this.enabled[index],
                    label: {
                        text: String(datum[labelField])
                    },
                    marker: {
                        fill: fills_1[index % fills_1.length],
                        stroke: strokes_1[index % strokes_1.length]
                    }
                });
            });
        }
    };
    PieSeries.prototype.toggleSeriesItem = function (itemId, enabled) {
        this.enabled[itemId] = enabled;
        this.scheduleData();
    };
    PieSeries.className = 'PieSeries';
    return PieSeries;
}(series_1.Series));
exports.PieSeries = PieSeries;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/scatterSeries.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/scatterSeries.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var continuousScale_1 = __webpack_require__(/*! ../../scale/continuousScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/continuousScale.js");
var selection_1 = __webpack_require__(/*! ../../scene/selection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js");
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var arc_1 = __webpack_require__(/*! ../../scene/shape/arc */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js");
var array_1 = __webpack_require__(/*! ../../util/array */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js");
var palettes_1 = __webpack_require__(/*! ../palettes */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/palettes.js");
var series_1 = __webpack_require__(/*! ./series */ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var ag_grid_community_1 = __webpack_require__(/*! ag-grid-community */ "./node_modules/ag-grid-community/main.js");
var linearScale_1 = __webpack_require__(/*! ../../scale/linearScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/linearScale.js");
var ScatterSeries = /** @class */ (function (_super) {
    __extends(ScatterSeries, _super);
    function ScatterSeries() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.domainX = [];
        _this.domainY = [];
        _this.xData = [];
        _this.yData = [];
        _this.radiusData = [];
        _this.radiusScale = linearScale_1.default();
        _this.groupSelection = selection_1.Selection.select(_this.group).selectAll();
        _this._title = '';
        _this._xField = '';
        _this._yField = '';
        _this._radiusField = '';
        _this.xFieldName = 'X';
        _this.yFieldName = 'Y';
        _this.radiusFieldName = 'Radius';
        _this._marker = false;
        _this._markerSize = 8;
        _this._minMarkerSize = 4;
        _this._markerStrokeWidth = 2;
        _this._fill = palettes_1.default.fills[0];
        _this._stroke = palettes_1.default.strokes[0];
        _this._fillOpacity = 1;
        _this._strokeOpacity = 1;
        _this.highlightStyle = {
            fill: 'yellow'
        };
        return _this;
    }
    Object.defineProperty(ScatterSeries.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (chart) {
            if (this._chart !== chart) {
                this._chart = chart;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "xField", {
        get: function () {
            return this._xField;
        },
        set: function (value) {
            if (this._xField !== value) {
                this._xField = value;
                this.xData = [];
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "yField", {
        get: function () {
            return this._yField;
        },
        set: function (value) {
            if (this._yField !== value) {
                this._yField = value;
                this.yData = [];
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "radiusField", {
        get: function () {
            return this._radiusField;
        },
        set: function (value) {
            if (this._radiusField !== value) {
                this._radiusField = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "marker", {
        get: function () {
            return this._marker;
        },
        set: function (value) {
            if (this._marker !== value) {
                this._marker = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "markerSize", {
        get: function () {
            return this._markerSize;
        },
        set: function (value) {
            if (this._markerSize !== value) {
                this._markerSize = Math.abs(value);
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "minMarkerSize", {
        get: function () {
            return this._minMarkerSize;
        },
        set: function (value) {
            if (this._minMarkerSize !== value) {
                this._minMarkerSize = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "markerStrokeWidth", {
        get: function () {
            return this._markerStrokeWidth;
        },
        set: function (value) {
            if (this._markerStrokeWidth !== value) {
                this._markerStrokeWidth = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    ScatterSeries.prototype.processData = function () {
        var chart = this.chart;
        var xField = this.xField;
        var yField = this.yField;
        var radiusField = this.radiusField;
        var markerSize = this.markerSize;
        var minMarkerSize = this.minMarkerSize;
        var data = this.data;
        if (!(chart && chart.xAxis && chart.yAxis)) {
            return false;
        }
        if (!(xField && yField)) {
            this._data = data = [];
        }
        var xData = [];
        var yData = [];
        var radiusData = [];
        data.forEach(function (datum) {
            xData.push(datum[xField]);
            yData.push(datum[yField]);
            if (radiusField) {
                radiusData.push(datum[radiusField]);
            }
        });
        this.xData = xData;
        this.yData = yData;
        this.radiusData = radiusData;
        this.radiusScale.domain = array_1.numericExtent(radiusData) || [1, 1];
        this.radiusScale.range = [minMarkerSize / 2, markerSize / 2];
        var continuousX = chart.xAxis.scale instanceof continuousScale_1.default;
        var domainX = continuousX ? (array_1.numericExtent(this.xData) || [0, 1]) : this.xData;
        var domainY = array_1.numericExtent(this.yData) || [0, 1];
        if (continuousX) {
            var _a = domainX, min = _a[0], max = _a[1];
            if (min === max) {
                domainX[0] = min - 1;
                domainX[1] = max + 1;
            }
        }
        {
            var _b = domainY, min = _b[0], max = _b[1];
            if (min === max) {
                domainY[0] = min - 1;
                domainY[1] = max + 1;
            }
        }
        this.domainX = domainX;
        this.domainY = domainY;
        return true;
    };
    Object.defineProperty(ScatterSeries.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (value) {
            if (this._fill !== value) {
                this._fill = value;
                this.stroke = ag_grid_community_1.Color.fromString(value).darker().toHexString();
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (value) {
            if (this._stroke !== value) {
                this._stroke = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "fillOpacity", {
        get: function () {
            return this._fillOpacity;
        },
        set: function (value) {
            if (this._fillOpacity !== value) {
                this._fillOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterSeries.prototype, "strokeOpacity", {
        get: function () {
            return this._strokeOpacity;
        },
        set: function (value) {
            if (this._strokeOpacity !== value) {
                this._strokeOpacity = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    ScatterSeries.prototype.highlightNode = function (node) {
        if (!(node instanceof arc_1.Arc)) {
            return;
        }
        this.highlightedNode = node;
        this.scheduleLayout();
    };
    ScatterSeries.prototype.dehighlightNode = function () {
        this.highlightedNode = undefined;
        this.scheduleLayout();
    };
    ScatterSeries.prototype.update = function () {
        var _this = this;
        var chart = this.chart;
        var visible = this.group.visible = this.visible;
        if (!chart || !visible || chart.dataPending || chart.layoutPending || !(chart.xAxis && chart.yAxis)) {
            return;
        }
        var xAxis = chart.xAxis;
        var yAxis = chart.yAxis;
        var xScale = xAxis.scale;
        var yScale = yAxis.scale;
        var xOffset = (xScale.bandwidth || 0) / 2;
        var yOffset = (yScale.bandwidth || 0) / 2;
        var data = this.data;
        var xData = this.xData;
        var yData = this.yData;
        var radiusData = this.radiusData;
        var n = xData.length;
        var fill = this.fill;
        var stroke = this.stroke;
        var fillOpacity = this.fillOpacity;
        var strokeOpacity = this.strokeOpacity;
        var markerStrokeWidth = this.markerStrokeWidth;
        var markerSize = this.markerSize;
        var groupSelectionData = [];
        for (var i = 0; i < n; i++) {
            var xDatum = xData[i];
            var yDatum = yData[i];
            var x = xScale.convert(xDatum) + xOffset;
            var y = yScale.convert(yDatum) + yOffset;
            groupSelectionData.push({
                seriesDatum: data[i],
                x: x,
                y: y,
                fill: fill,
                stroke: stroke,
                strokeWidth: markerStrokeWidth,
                radius: this.radiusField ? this.radiusScale.convert(radiusData[i]) : markerSize / 2
            });
        }
        // ------------------------------------------
        var updateGroups = this.groupSelection.setData(groupSelectionData);
        updateGroups.exit.remove();
        var enterGroups = updateGroups.enter.append(group_1.Group);
        enterGroups.append(arc_1.Arc).each(function (arc) { return arc.type = arc_1.ArcType.Chord; });
        var highlightedNode = this.highlightedNode;
        var groupSelection = updateGroups.merge(enterGroups);
        groupSelection.selectByClass(arc_1.Arc)
            .each(function (arc, datum) {
            arc.centerX = datum.x;
            arc.centerY = datum.y;
            arc.radiusX = datum.radius;
            arc.radiusY = datum.radius;
            arc.fill = arc === highlightedNode && _this.highlightStyle.fill !== undefined
                ? _this.highlightStyle.fill
                : datum.fill;
            arc.stroke = arc === highlightedNode && _this.highlightStyle.stroke !== undefined
                ? _this.highlightStyle.stroke
                : datum.stroke;
            arc.fillOpacity = fillOpacity;
            arc.strokeOpacity = strokeOpacity;
            arc.strokeWidth = datum.strokeWidth;
            arc.visible = datum.radius > 0;
        });
        this.groupSelection = groupSelection;
    };
    ScatterSeries.prototype.getDomainX = function () {
        return this.domainX;
    };
    ScatterSeries.prototype.getDomainY = function () {
        return this.domainY;
    };
    ScatterSeries.prototype.getTooltipHtml = function (nodeDatum) {
        var xField = this.xField;
        var yField = this.yField;
        var radiusField = this.radiusField;
        var xFieldName = this.xFieldName;
        var yFieldName = this.yFieldName;
        var radiusFieldName = this.radiusFieldName;
        var color = this.fill;
        var html = '';
        if (!xField || !yField) {
            return html;
        }
        var title = this.title;
        if (this.tooltipRenderer && this.xField) {
            html = this.tooltipRenderer({
                datum: nodeDatum.seriesDatum,
                xField: xField,
                yField: yField,
                radiusField: radiusField,
                xFieldName: xFieldName,
                yFieldName: yFieldName,
                radiusFieldName: radiusFieldName,
                title: title,
                color: color
            });
        }
        else {
            var titleStyle = "style=\"color: white; background-color: " + color + "\"";
            title = title ? "<div class=\"title\" " + titleStyle + ">" + title + "</div>" : '';
            var seriesDatum = nodeDatum.seriesDatum;
            var xValue = seriesDatum[xField];
            var yValue = seriesDatum[yField];
            var xString = typeof (xValue) === 'number' ? number_1.toFixed(xValue) : String(xValue);
            var yString = typeof (yValue) === 'number' ? number_1.toFixed(yValue) : String(yValue);
            var fieldString = "<b>" + xFieldName + "</b>: " + xString + "<br><b>" + yFieldName + "</b>: " + yString;
            if (radiusField) {
                fieldString += "<br><b>" + radiusFieldName + "</b>: " + seriesDatum[radiusField];
            }
            html = title + "<div class=\"content\">" + fieldString + "</div>";
            // html = `${title}<div class="content">${xField}: ${xString}<br>${yField}: ${yString}</div>`;
        }
        return html;
    };
    ScatterSeries.prototype.listSeriesItems = function (data) {
        if (this.data.length && this.xField && this.yField) {
            data.push({
                id: this.id,
                itemId: undefined,
                enabled: this.visible,
                label: {
                    text: this.title || this.yField
                },
                marker: {
                    fill: this.fill,
                    stroke: this.stroke
                }
            });
        }
    };
    ScatterSeries.className = 'ScatterSeries';
    return ScatterSeries;
}(series_1.Series));
exports.ScatterSeries = ScatterSeries;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/chart/series/series.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __webpack_require__(/*! ../../scene/group */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js");
var Series = /** @class */ (function () {
    function Series() {
        this.id = this.createId();
        /**
         * The group node that contains all the nodes used to render this series.
         */
        this.group = new group_1.Group();
        this._data = [];
        this._chart = undefined;
        this._visible = true;
        this.tooltipEnabled = false;
        this._showInLegend = true;
    }
    // Uniquely identify series.
    Series.prototype.createId = function () {
        var constructor = this.constructor;
        var className = constructor.className;
        if (!className) {
            throw new Error("The " + constructor + " is missing the 'className' property.");
        }
        return className + '-' + (constructor.id = (constructor.id || 0) + 1);
    };
    Object.defineProperty(Series.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
            this.scheduleData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Series.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (this._visible !== value) {
                this._visible = value;
                this.scheduleData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Series.prototype.toggleSeriesItem = function (itemId, enabled) {
        this.visible = enabled;
    };
    Object.defineProperty(Series.prototype, "showInLegend", {
        get: function () {
            return this._showInLegend;
        },
        set: function (value) {
            if (this._showInLegend !== value) {
                this._showInLegend = value;
                this.scheduleLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Series.prototype.scheduleLayout = function () {
        if (this.chart) {
            this.chart.layoutPending = true;
        }
    };
    Series.prototype.scheduleData = function () {
        if (this.chart) {
            this.chart.dataPending = true;
        }
    };
    return Series;
}());
exports.Series = Series;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/layout/tree.js":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/layout/tree.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode = /** @class */ (function () {
    function TreeNode(label, parent, number) {
        if (label === void 0) { label = ''; }
        if (number === void 0) { number = 0; }
        this.x = 0;
        this.y = 0;
        this.subtreeLeft = NaN;
        this.subtreeRight = NaN;
        this.screenX = 0;
        this.screenY = 0;
        this.children = [];
        this.leafCount = 0;
        this.prelim = 0;
        this.mod = 0;
        this.ancestor = this;
        this.change = 0;
        this.shift = 0;
        this.label = label;
        // screenX and screenY are meant to be recomputed from (layout) x and y
        // when the tree is resized (without performing another layout)
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        this.number = number;
    }
    TreeNode.prototype.getLeftSibling = function () {
        return this.number > 0 && this.parent ? this.parent.children[this.number - 1] : undefined;
    };
    TreeNode.prototype.getLeftmostSibling = function () {
        return this.number > 0 && this.parent ? this.parent.children[0] : undefined;
    };
    // traverse the left contour of a subtree, return the successor of v on this contour
    TreeNode.prototype.nextLeft = function () {
        return this.children ? this.children[0] : this.thread;
    };
    // traverse the right contour of a subtree, return the successor of v on this contour
    TreeNode.prototype.nextRight = function () {
        return this.children ? this.children[this.children.length - 1] : this.thread;
    };
    TreeNode.prototype.getSiblings = function () {
        var _this = this;
        return this.parent ? this.parent.children.filter(function (_, i) { return i !== _this.number; }) : [];
    };
    return TreeNode;
}());
function ticksToTree(ticks, pad) {
    if (pad === void 0) { pad = true; }
    var root = new TreeNode();
    var depth = 0;
    if (pad) {
        ticks.forEach(function (tick) { return depth = Math.max(depth, tick.labels.length); });
    }
    ticks.forEach(function (tick) {
        if (pad) {
            while (tick.labels.length < depth) {
                tick.labels.unshift('');
            }
        }
        insertTick(root, tick);
    });
    return root;
}
exports.ticksToTree = ticksToTree;
function insertTick(root, tick) {
    var pathParts = tick.labels.slice().reverse(); // path elements from root to leaf label
    var lastPartIndex = pathParts.length - 1;
    pathParts.forEach(function (pathPart, partIndex) {
        var children = root.children;
        var existingNode = children.find(function (child) { return child.label === pathPart; });
        var isNotLeaf = partIndex !== lastPartIndex;
        if (existingNode && isNotLeaf) { // the isNotLeaf check is to allow duplicate leafs
            root = existingNode;
        }
        else {
            var node = new TreeNode(pathPart, root);
            node.number = children.length;
            children.push(node);
            if (isNotLeaf) {
                root = node;
            }
        }
    });
}
// Shift the subtree.
function moveSubtree(wm, wp, shift) {
    var subtrees = wp.number - wm.number;
    var ratio = shift / subtrees;
    wp.change -= ratio;
    wp.shift += shift;
    wm.change += ratio;
    wp.prelim += shift;
    wp.mod += shift;
}
function ancestor(vim, v, defaultAncestor) {
    return v.getSiblings().indexOf(vim.ancestor) >= 0 ? vim.ancestor : defaultAncestor;
}
// Spaces out the children.
function executeShifts(v) {
    var children = v.children;
    if (children) {
        var shift = 0;
        var change = 0;
        for (var i = children.length - 1; i >= 0; i--) {
            var w = children[i];
            w.prelim += shift;
            w.mod += shift;
            change += w.change;
            shift += w.shift + change;
        }
    }
}
// Moves current subtree with v as the root if some nodes are conflicting in space.
function apportion(v, defaultAncestor, distance) {
    var w = v.getLeftSibling();
    if (w) {
        var vop = v;
        var vip = v;
        var vim = w;
        var vom = vip.getLeftmostSibling();
        var sip = vip.mod;
        var sop = vop.mod;
        var sim = vim.mod;
        var som = vom.mod;
        while (vim.nextRight() && vip.nextLeft()) {
            vim = vim.nextRight();
            vip = vip.nextLeft();
            vom = vom.nextLeft();
            vop = vop.nextRight();
            vop.ancestor = v;
            var shift = (vim.prelim + sim) - (vip.prelim + sip) + distance;
            if (shift > 0) {
                moveSubtree(ancestor(vim, v, defaultAncestor), v, shift);
                sip += shift;
                sop += shift;
            }
            sim += vim.mod;
            sip += vip.mod;
            som += vom.mod;
            sop += vop.mod;
        }
        if (vim.nextRight() && !vop.nextRight()) {
            vop.thread = vim.nextRight();
            vop.mod += sim - sop;
        }
        else {
            if (vip.nextLeft() && !vom.nextLeft()) {
                vom.thread = vip.nextLeft();
                vom.mod += sip - som;
            }
            defaultAncestor = v;
        }
    }
    return defaultAncestor;
}
// Compute the preliminary x-coordinate of node and its children (recursively).
function firstWalk(node, distance) {
    var children = node.children;
    if (children.length) {
        var defaultAncestor_1 = children[0];
        children.forEach(function (child) {
            firstWalk(child, distance);
            defaultAncestor_1 = apportion(child, defaultAncestor_1, distance);
        });
        executeShifts(node);
        var midpoint = (children[0].prelim + children[children.length - 1].prelim) / 2;
        var leftSibling = node.getLeftSibling();
        if (leftSibling) {
            node.prelim = leftSibling.prelim + distance;
            node.mod = node.prelim - midpoint;
        }
        else {
            node.prelim = midpoint;
        }
    }
    else {
        var leftSibling = node.getLeftSibling();
        node.prelim = leftSibling ? leftSibling.prelim + distance : 0;
    }
}
var Dimensions = /** @class */ (function () {
    function Dimensions() {
        this.top = Infinity;
        this.right = -Infinity;
        this.bottom = -Infinity;
        this.left = Infinity;
    }
    Dimensions.prototype.update = function (node, xy) {
        var _a = xy(node), x = _a.x, y = _a.y;
        if (x > this.right) {
            this.right = x;
        }
        if (x < this.left) {
            this.left = x;
        }
        if (y > this.bottom) {
            this.bottom = y;
        }
        if (y < this.top) {
            this.top = y;
        }
    };
    return Dimensions;
}());
function secondWalk(v, m, layout) {
    v.x = v.prelim + m;
    v.y = v.depth;
    layout.update(v);
    v.children.forEach(function (w) { return secondWalk(w, m + v.mod, layout); });
}
// After the second walk the parent nodes are positioned at the center of their immediate children.
// If we want the parent nodes to be positioned at the center of the subtree for which they are roots,
// we need a third walk to adjust the positions.
function thirdWalk(v) {
    var children = v.children;
    var leafCount = 0;
    children.forEach(function (w) {
        thirdWalk(w);
        if (w.children.length) {
            leafCount += w.leafCount;
        }
        else {
            leafCount++;
        }
    });
    v.leafCount = leafCount;
    if (children.length) {
        v.subtreeLeft = children[0].subtreeLeft;
        v.subtreeRight = children[v.children.length - 1].subtreeRight;
        v.x = (v.subtreeLeft + v.subtreeRight) / 2;
    }
    else {
        v.subtreeLeft = v.x;
        v.subtreeRight = v.x;
    }
}
function treeLayout(root) {
    var layout = new TreeLayout;
    firstWalk(root, 1);
    secondWalk(root, -root.prelim, layout);
    thirdWalk(root);
    return layout;
}
exports.treeLayout = treeLayout;
var TreeLayout = /** @class */ (function () {
    function TreeLayout() {
        this.dimensions = new Dimensions;
        this.leafCount = 0;
        this.nodes = [];
        // One might want to process leaf nodes separately from the rest of the tree.
        // For example, position labels corresponding to leafs vertically, rather than horizontally.
        this.leafNodes = [];
        this.nonLeafNodes = [];
        this.depth = 0;
    }
    TreeLayout.prototype.update = function (node) {
        this.dimensions.update(node, function (node) { return ({ x: node.x, y: node.y }); });
        if (!node.children.length) {
            this.leafCount++;
            this.leafNodes.push(node);
        }
        else {
            this.nonLeafNodes.push(node);
        }
        if (node.depth > this.depth) {
            this.depth = node.depth;
        }
        this.nodes.push(node);
    };
    TreeLayout.prototype.resize = function (width, height, shiftX, shiftY) {
        if (shiftX === void 0) { shiftX = 0; }
        if (shiftY === void 0) { shiftY = 0; }
        var xSteps = this.leafCount - 1;
        var ySteps = this.depth;
        var dimensions = this.dimensions;
        var scalingX = 1;
        var scalingY = 1;
        if (width > 0 && xSteps) {
            var existingSpacingX = (dimensions.right - dimensions.left) / xSteps;
            var desiredSpacingX = width / xSteps;
            scalingX = desiredSpacingX / existingSpacingX;
        }
        if (height > 0 && ySteps) {
            var existingSpacingY = (dimensions.bottom - dimensions.top) / ySteps;
            var desiredSpacingY = height / ySteps;
            scalingY = desiredSpacingY / existingSpacingY;
        }
        var screenDimensions = new Dimensions();
        this.nodes.forEach(function (node) {
            node.screenX = node.x * scalingX;
            node.screenY = node.y * scalingY;
            screenDimensions.update(node, function (node) { return ({ x: node.screenX, y: node.screenY }); });
        });
        // Normalize so that root top and leftmost leaf left start at zero.
        var offsetX = -screenDimensions.left;
        var offsetY = -screenDimensions.top;
        this.nodes.forEach(function (node) {
            node.screenX += offsetX + shiftX;
            node.screenY += offsetY + shiftY;
        });
    };
    return TreeLayout;
}());
exports.TreeLayout = TreeLayout;
function logTree(root, formatter) {
    root.children.forEach(function (child) { return logTree(child, formatter); });
    if (formatter) {
        console.log(formatter(root));
    }
    else {
        console.log(root);
    }
}


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/bandScale.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scale/bandScale.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Maps a discrete domain to a continuous numeric range.
 * See https://github.com/d3/d3-scale#band-scales for more info.
 */
var BandScale = /** @class */ (function () {
    function BandScale() {
        /**
         * Maps datum to its index in the {@link domain} array.
         * Used to check for duplicate datums (not allowed).
         */
        this.index = new Map();
        /**
         * The output range values for datum at each index.
         */
        this.ordinalRange = [];
        /**
         * Contains unique datums only. Since `{}` is used in place of `Map`
         * for IE11 compatibility, the datums are converted `toString` before
         * the uniqueness check.
         */
        this._domain = [];
        this._range = [0, 1];
        this._bandwidth = 1;
        /**
         * The ratio of the range that is reserved for space between bands.
         */
        this._paddingInner = 0;
        /**
         * The ratio of the range that is reserved for space before the first
         * and after the last band.
         */
        this._paddingOuter = 0;
        this._round = false;
        /**
         * How the leftover range is distributed.
         * `0.5` - equal distribution of space before the first and after the last band,
         * with bands effectively centered within the range.
         */
        this._align = 0.5;
    }
    Object.defineProperty(BandScale.prototype, "domain", {
        get: function () {
            return this._domain;
        },
        set: function (values) {
            var domain = this._domain;
            domain.length = 0;
            this.index = new Map();
            var index = this.index;
            // In case one wants to have duplicate domain values, for example, two 'Italy' categories,
            // one should use objects rather than strings for domain values like so:
            // { toString: () => 'Italy' }
            // { toString: () => 'Italy' }
            values.forEach(function (value) {
                if (index.get(value) === undefined) {
                    index.set(value, domain.push(value) - 1);
                }
            });
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BandScale.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (values) {
            this._range[0] = values[0];
            this._range[1] = values[1];
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    BandScale.prototype.ticks = function () {
        return this._domain;
    };
    BandScale.prototype.convert = function (d) {
        var i = this.index.get(d);
        if (i === undefined) {
            return NaN;
        }
        var r = this.ordinalRange[i];
        if (r === undefined) {
            return NaN;
        }
        return r;
    };
    Object.defineProperty(BandScale.prototype, "bandwidth", {
        get: function () {
            return this._bandwidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BandScale.prototype, "padding", {
        get: function () {
            return this._paddingInner;
        },
        set: function (value) {
            value = Math.max(0, Math.min(1, value));
            this._paddingInner = value;
            this._paddingOuter = value;
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BandScale.prototype, "paddingInner", {
        get: function () {
            return this._paddingInner;
        },
        set: function (value) {
            this._paddingInner = Math.max(0, Math.min(1, value)); // [0, 1]
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BandScale.prototype, "paddingOuter", {
        get: function () {
            return this._paddingOuter;
        },
        set: function (value) {
            this._paddingOuter = Math.max(0, Math.min(1, value)); // [0, 1]
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BandScale.prototype, "round", {
        get: function () {
            return this._round;
        },
        set: function (value) {
            this._round = value;
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BandScale.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (value) {
            this._align = Math.max(0, Math.min(1, value)); // [0, 1]
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    BandScale.prototype.rescale = function () {
        var _a;
        var n = this._domain.length;
        if (!n) {
            return;
        }
        var _b = this._range, a = _b[0], b = _b[1];
        var reversed = b < a;
        if (reversed) {
            _a = [b, a], a = _a[0], b = _a[1];
        }
        var step = (b - a) / Math.max(1, n - this._paddingInner + this._paddingOuter * 2);
        if (this._round) {
            step = Math.floor(step);
        }
        a += (b - a - step * (n - this._paddingInner)) * this._align;
        this._bandwidth = step * (1 - this._paddingInner);
        if (this._round) {
            a = Math.round(a);
            this._bandwidth = Math.round(this._bandwidth);
        }
        var values = [];
        for (var i = 0; i < n; i++) {
            values.push(a + step * i);
        }
        this.ordinalRange = reversed ? values.reverse() : values;
    };
    return BandScale;
}());
exports.BandScale = BandScale;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/continuousScale.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scale/continuousScale.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var ContinuousScale = /** @class */ (function () {
    function ContinuousScale(reinterpolatorFactory, deinterpolatorFactory, rangeComparator) {
        this._domain = [0, 1];
        this._range = [];
        this.clamp = false;
        this.reinterpolatorFactory = reinterpolatorFactory;
        this.deinterpolatorFactory = deinterpolatorFactory;
        this.rangeComparator = rangeComparator;
    }
    Object.defineProperty(ContinuousScale.prototype, "domain", {
        get: function () {
            return this._domain;
        },
        set: function (values) {
            this._domain = values.slice();
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContinuousScale.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (values) {
            this._range = values.slice();
            this.rescale();
        },
        enumerable: true,
        configurable: true
    });
    ContinuousScale.prototype.convert = function (d) {
        if (!this.piecewiseReinterpolator) {
            if (!this.piecewiseReinterpolatorFactory) {
                throw new Error('Missing piecewiseReinterpolatorFactory');
            }
            var deinterpolatorFactory = this.clamp
                ? this.clampDeinterpolatorFactory(this.deinterpolatorOf)
                : this.deinterpolatorOf;
            this.piecewiseReinterpolator = this.piecewiseReinterpolatorFactory(this._domain, this._range, deinterpolatorFactory, this.reinterpolatorFactory);
        }
        if (!this.piecewiseReinterpolator) {
            throw new Error('Missing piecewiseReinterpolator');
        }
        return this.piecewiseReinterpolator(d);
    };
    ContinuousScale.prototype.invert = function (r) {
        if (!this.deinterpolatorFactory) {
            throw new Error('Missing deinterpolatorFactory');
        }
        if (!this.piecewiseDeinterpolator) {
            if (!this.piecewiseDeinterpolatorFactory) {
                throw new Error('Missing piecewiseDeinterpolatorFactory');
            }
            var reinterpolatorFactory = this.clamp
                ? this.clampReinterpolatorFactory(this.reinterpolatorOf)
                : this.reinterpolatorOf;
            this.piecewiseDeinterpolator = this.piecewiseDeinterpolatorFactory(this._range, this._domain, this.deinterpolatorFactory, reinterpolatorFactory);
        }
        return this.piecewiseDeinterpolator(r);
    };
    ContinuousScale.prototype.clampDeinterpolatorFactory = function (deinterpolatorOf) {
        return function (a, b) {
            var deinterpolate = deinterpolatorOf(a, b);
            return function (x) {
                if (x <= a) {
                    return 0.0;
                }
                else if (x >= b) {
                    return 1.0;
                }
                else {
                    return deinterpolate(x);
                }
            };
        };
    };
    ContinuousScale.prototype.clampReinterpolatorFactory = function (reinterpolatorOf) {
        return function (a, b) {
            var reinterpolate = reinterpolatorOf(a, b);
            return function (t) {
                if (t <= 0) {
                    return a;
                }
                else if (t >= 1) {
                    return b;
                }
                else {
                    return reinterpolate(t);
                }
            };
        };
    };
    ContinuousScale.prototype.rescale = function () {
        // TODO: uncomment the polylinear functionality here and the corresponding
        //       methods below when we have a use case fot it.
        // const isPoly = Math.min(this._domain.length, this._range.length) > 2;
        // this.piecewiseReinterpolatorFactory = isPoly ? this.polymap : this.bimap;
        // this.piecewiseDeinterpolatorFactory = isPoly ? this.polymapInvert : this.bimapInvert;
        this.piecewiseReinterpolatorFactory = this.bimap;
        this.piecewiseDeinterpolatorFactory = this.bimapInvert;
        this.piecewiseDeinterpolator = undefined;
        this.piecewiseReinterpolator = undefined;
    };
    ContinuousScale.prototype.bimap = function (domain, range, deinterpolatorOf, reinterpolatorOf) {
        var d0 = domain[0];
        var d1 = domain[1];
        var r0 = range[0];
        var r1 = range[1];
        var dt;
        var tr;
        if (d1 < d0) {
            dt = deinterpolatorOf(d1, d0);
            tr = reinterpolatorOf(r1, r0);
        }
        else {
            dt = deinterpolatorOf(d0, d1);
            tr = reinterpolatorOf(r0, r1);
        }
        return function (x) { return tr(dt(x)); };
    };
    ContinuousScale.prototype.bimapInvert = function (range, domain, deinterpolatorOf, reinterpolatorOf) {
        var r0 = range[0];
        var r1 = range[1];
        var d0 = domain[0];
        var d1 = domain[1];
        var rt;
        var td;
        if (d1 < d0) {
            rt = deinterpolatorOf(r1, r0);
            td = reinterpolatorOf(d1, d0);
        }
        else {
            rt = deinterpolatorOf(r0, r1);
            td = reinterpolatorOf(d0, d1);
        }
        return function (x) { return td(rt(x)); };
    };
    return ContinuousScale;
}());
exports.default = ContinuousScale;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/linearScale.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scale/linearScale.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var continuousScale_1 = __webpack_require__(/*! ./continuousScale */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scale/continuousScale.js");
var compare_1 = __webpack_require__(/*! ../util/compare */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/compare.js");
var ticks_1 = __webpack_require__(/*! ../util/ticks */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/ticks.js");
/**
 * Maps continuous domain to a continuous range.
 */
var LinearScale = /** @class */ (function (_super) {
    __extends(LinearScale, _super);
    function LinearScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinearScale.prototype.deinterpolatorOf = function (a, b) {
        var d = b - a;
        if (d === 0 || isNaN(d)) {
            return function () { return d; };
        }
        else {
            return function (x) { return (x - a) / d; };
        }
    };
    LinearScale.prototype.reinterpolatorOf = function (a, b) {
        var d = b - a;
        return function (t) { return a + d * t; };
    };
    LinearScale.prototype.ticks = function (count) {
        if (count === void 0) { count = 10; }
        var d = this._domain;
        return ticks_1.default(d[0], d[d.length - 1], count);
    };
    /**
     * Extends the domain so that it starts and ends on nice round values.
     * @param count Tick count.
     */
    LinearScale.prototype.nice = function (count) {
        if (count === void 0) { count = 10; }
        var d = this.domain;
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var step;
        if (stop < start) {
            step = start;
            start = stop;
            stop = step;
            step = i0;
            i0 = i1;
            i1 = step;
        }
        step = ticks_1.tickIncrement(start, stop, count);
        if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
            step = ticks_1.tickIncrement(start, stop, count);
        }
        else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
            step = ticks_1.tickIncrement(start, stop, count);
        }
        if (step > 0) {
            d[i0] = Math.floor(start / step) * step;
            d[i1] = Math.ceil(stop / step) * step;
            this.domain = d;
        }
        else if (step < 0) {
            d[i0] = Math.ceil(start * step) / step;
            d[i1] = Math.floor(stop * step) / step;
            this.domain = d;
        }
    };
    return LinearScale;
}(continuousScale_1.default));
exports.LinearScale = LinearScale;
function reinterpolateNumber(a, b) {
    var d = b - a;
    return function (t) { return a + d * t; };
}
exports.reinterpolateNumber = reinterpolateNumber;
function deinterpolateNumber(a, b) {
    var d = b - a;
    if (d === 0 || isNaN(d)) {
        return function () { return d; };
    }
    else {
        return function (x) { return (x - a) / d; };
    }
}
exports.deinterpolateNumber = deinterpolateNumber;
/**
 * Creates a continuous scale with the default interpolator and no clamping.
 */
function scaleLinear() {
    var scale = new LinearScale(reinterpolateNumber, deinterpolateNumber, compare_1.naturalOrder);
    scale.range = [0, 1];
    return scale;
}
exports.default = scaleLinear;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

// For small data structs like a bounding box, objects are superior to arrays
// in terms of performance (by 3-4% in Chrome 71, Safari 12 and by 20% in Firefox 64).
// They are also self descriptive and harder to abuse.
// For example, one has to do:
// `ctx.strokeRect(bbox.x, bbox.y, bbox.width, bbox.height);`
// rather than become enticed by the much slower:
// `ctx.strokeRect(...bbox);`
// https://jsperf.com/array-vs-object-create-access
Object.defineProperty(exports, "__esModule", { value: true });
var BBox = /** @class */ (function () {
    function BBox(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    BBox.prototype.dilate = function (value) {
        this.x -= value;
        this.y -= value;
        this.width += value * 2;
        this.height += value * 2;
    };
    BBox.prototype.containsPoint = function (x, y) {
        return x >= this.x && x <= (this.x + this.width)
            && y >= this.y && y <= (this.y + this.height);
    };
    BBox.prototype.render = function (ctx, params) {
        if (params === void 0) { params = BBox.noParams; }
        ctx.save();
        if (params.resetTransform) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        ctx.strokeStyle = params.strokeStyle || 'cyan';
        ctx.lineWidth = params.lineWidth || 1;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        if (params.label) {
            ctx.fillStyle = params.fillStyle || 'black';
            ctx.textBaseline = 'bottom';
            ctx.fillText(params.label, this.x, this.y);
        }
        ctx.restore();
    };
    BBox.noParams = {};
    return BBox;
}());
exports.BBox = BBox;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/clipRect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/clipRect.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var path2D_1 = __webpack_require__(/*! ./path2D */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js");
/**
 * Acts as `Group` node but with specified bounds that form a rectangle.
 * Any parts of the child nodes outside that rectangle will not be visible.
 * Unlike the `Group` node, the `ClipRect` node cannot be transformed.
 */
var ClipRect = /** @class */ (function (_super) {
    __extends(ClipRect, _super);
    function ClipRect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContainerNode = true;
        _this.path = new path2D_1.Path2D();
        _this._active = true;
        _this._dirtyPath = true;
        _this._x = 0;
        _this._y = 0;
        _this._width = 10;
        _this._height = 10;
        return _this;
    }
    ClipRect.prototype.isPointInNode = function (x, y) {
        var point = this.transformPoint(x, y);
        return point.x >= this.x && point.x <= this.x + this.width
            && point.y >= this.y && point.y <= this.y + this.height;
    };
    Object.defineProperty(ClipRect.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            if (this._active !== value) {
                this._active = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClipRect.prototype, "dirtyPath", {
        get: function () {
            return this._dirtyPath;
        },
        set: function (value) {
            if (this._dirtyPath !== value) {
                this._dirtyPath = value;
                if (value) {
                    this.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClipRect.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (this._x !== value) {
                this._x = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClipRect.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (this._y !== value) {
                this._y = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClipRect.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (this._width !== value) {
                this._width = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClipRect.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (this._height !== value) {
                this._height = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    ClipRect.prototype.updatePath = function () {
        var path = this.path;
        path.clear();
        path.rect(this.x, this.y, this.width, this.height);
        this.dirtyPath = false;
    };
    ClipRect.prototype.render = function (ctx) {
        if (this.active) {
            if (this.dirtyPath) {
                this.updatePath();
            }
            this.scene.appendPath(this.path);
            ctx.clip();
        }
        var children = this.children;
        var n = children.length;
        for (var i = 0; i < n; i++) {
            ctx.save();
            var child = children[i];
            if (child.visible) {
                child.render(ctx);
            }
            ctx.restore();
        }
    };
    ClipRect.className = 'ClipRect';
    return ClipRect;
}(node_1.Node));
exports.ClipRect = ClipRect;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/dropShadow.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/dropShadow.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var DropShadow = /** @class */ (function () {
    function DropShadow(options) {
        this._enabled = true;
        this._enabled = options.enabled !== undefined ? options.enabled : true;
        this._color = options.color !== undefined ? options.color : 'black';
        this._xOffset = options.xOffset !== undefined ? options.xOffset : 0;
        this._yOffset = options.yOffset !== undefined ? options.yOffset : 0;
        this._blur = options.blur !== undefined ? options.blur : 0;
    }
    Object.defineProperty(DropShadow.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled !== value) {
                this._enabled = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropShadow.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            if (this._color !== value) {
                this._color = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropShadow.prototype, "xOffset", {
        get: function () {
            return this._xOffset;
        },
        set: function (value) {
            if (this._xOffset !== value) {
                this._xOffset = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropShadow.prototype, "yOffset", {
        get: function () {
            return this._yOffset;
        },
        set: function (value) {
            if (this._yOffset !== value) {
                this._yOffset = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropShadow.prototype, "blur", {
        get: function () {
            return this._blur;
        },
        set: function (value) {
            if (this._blur !== value) {
                this._blur = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    DropShadow.prototype.update = function () {
        if (this.onChange) {
            this.onChange();
        }
    };
    return DropShadow;
}());
exports.DropShadow = DropShadow;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/group.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var bbox_1 = __webpack_require__(/*! ./bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var matrix_1 = __webpack_require__(/*! ./matrix */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/matrix.js");
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContainerNode = true;
        _this.getBBox = function () {
            var left = Infinity;
            var right = -Infinity;
            var top = Infinity;
            var bottom = -Infinity;
            if (_this.dirtyTransform) {
                _this.computeTransformMatrix();
            }
            _this.children.forEach(function (child) {
                if (!child.visible) {
                    return;
                }
                var bbox = child.getBBox();
                if (!bbox) {
                    return;
                }
                if (!(child instanceof Group)) {
                    if (child.dirtyTransform) {
                        child.computeTransformMatrix();
                    }
                    var matrix = matrix_1.Matrix.flyweight(child.matrix);
                    var parent_1 = child.parent;
                    while (parent_1) {
                        matrix.preMultiplySelf(parent_1.matrix);
                        parent_1 = parent_1.parent;
                    }
                    matrix.transformBBox(bbox, 0, bbox);
                }
                var x = bbox.x;
                var y = bbox.y;
                if (x < left) {
                    left = x;
                }
                if (y < top) {
                    top = y;
                }
                if (x + bbox.width > right) {
                    right = x + bbox.width;
                }
                if (y + bbox.height > bottom) {
                    bottom = y + bbox.height;
                }
            });
            return new bbox_1.BBox(left, top, right - left, bottom - top);
        };
        return _this;
    }
    // We consider a group to be boundless, thus any point belongs to it.
    Group.prototype.isPointInNode = function (x, y) {
        return true;
    };
    Group.prototype.render = function (ctx) {
        // A group can have `scaling`, `rotation`, `translation` properties
        // that are applied to the canvas context before children are rendered,
        // so all children can be transformed at once.
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        this.matrix.toContext(ctx);
        var children = this.children;
        var n = children.length;
        for (var i = 0; i < n; i++) {
            ctx.save();
            var child = children[i];
            if (child.visible) {
                child.render(ctx);
            }
            ctx.restore();
        }
        // debug
        // this.getBBox().render(ctx, {
        //     label: this.id,
        //     resetTransform: true,
        //     fillStyle: 'rgba(0, 0, 0, 0.5)'
        // });
    };
    Group.className = 'Group';
    return Group;
}(node_1.Node));
exports.Group = Group;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/intersection.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/intersection.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var polyRoots_1 = __webpack_require__(/*! ./polyRoots */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/polyRoots.js");
/**
 * Returns the intersection point for the given pair of line segments, or null,
 * if the segments are parallel or don't intersect.
 * Based on http://paulbourke.net/geometry/pointlineplane/
 */
function segmentIntersection(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    var d = (ax2 - ax1) * (by2 - by1) - (ay2 - ay1) * (bx2 - bx1);
    if (d === 0) { // The lines are parallel.
        return null;
    }
    var ua = ((bx2 - bx1) * (ay1 - by1) - (ax1 - bx1) * (by2 - by1)) / d;
    var ub = ((ax2 - ax1) * (ay1 - by1) - (ay2 - ay1) * (ax1 - bx1)) / d;
    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        return {
            x: ax1 + ua * (ax2 - ax1),
            y: ay1 + ua * (ay2 - ay1)
        };
    }
    return null; // The intersection point is outside either or both segments.
}
exports.segmentIntersection = segmentIntersection;
/**
 * Returns intersection points of the given cubic curve and the line segment.
 * Takes in x/y components of cubic control points and line segment start/end points
 * as parameters.
 */
function cubicSegmentIntersections(px1, py1, px2, py2, px3, py3, px4, py4, x1, y1, x2, y2) {
    var intersections = [];
    // Find line equation coefficients.
    var A = y1 - y2;
    var B = x2 - x1;
    var C = x1 * (y2 - y1) - y1 * (x2 - x1);
    // Find cubic Bezier curve equation coefficients from control points.
    var bx = bezierCoefficients(px1, px2, px3, px4);
    var by = bezierCoefficients(py1, py2, py3, py4);
    var a = A * bx[0] + B * by[0]; // t^3
    var b = A * bx[1] + B * by[1]; // t^2
    var c = A * bx[2] + B * by[2]; // t
    var d = A * bx[3] + B * by[3] + C; // 1
    var roots = polyRoots_1.cubicRoots(a, b, c, d);
    // Verify that the roots are within bounds of the linear segment.
    for (var i = 0; i < roots.length; i++) {
        var t = roots[i];
        var tt = t * t;
        var ttt = t * tt;
        // Find the cartesian plane coordinates for the parametric root `t`.
        var x = bx[0] * ttt + bx[1] * tt + bx[2] * t + bx[3];
        var y = by[0] * ttt + by[1] * tt + by[2] * t + by[3];
        // The parametric cubic roots we found are intersection points
        // with an infinite line, and so the x/y coordinates above are as well.
        // Make sure the x/y is also within the bounds of the given segment.
        var s = void 0;
        if (x1 !== x2) {
            s = (x - x1) / (x2 - x1);
        }
        else { // the line is vertical
            s = (y - y1) / (y2 - y1);
        }
        if (s >= 0 && s <= 1) {
            intersections.push({ x: x, y: y });
        }
    }
    return intersections;
}
exports.cubicSegmentIntersections = cubicSegmentIntersections;
/**
 * Returns the given coordinates vector multiplied by the coefficient matrix
 * of the parametric cubic Bézier equation.
 */
function bezierCoefficients(P1, P2, P3, P4) {
    return [
        -P1 + 3 * P2 - 3 * P3 + P4,
        3 * P1 - 6 * P2 + 3 * P3,
        -3 * P1 + 3 * P2,
        P1 //                 | 1  0  0  0| |P4|
    ];
}
exports.bezierCoefficients = bezierCoefficients;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/matrix.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/matrix.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var bbox_1 = __webpack_require__(/*! ./bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
/**
 * As of Jan 8, 2019, Firefox still doesn't implement
 * `getTransform(): DOMMatrix;`
 * `setTransform(transform?: DOMMatrix2DInit)`
 * in the `CanvasRenderingContext2D`.
 * Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=928150
 * IE11 and Edge 44 also don't have the support.
 * Thus this class, to keep track of the current transform and
 * combine transformations.
 * Standards:
 * https://html.spec.whatwg.org/dev/canvas.html
 * https://www.w3.org/TR/geometry-1/
 */
var Matrix = /** @class */ (function () {
    function Matrix(elements) {
        if (elements === void 0) { elements = [1, 0, 0, 1, 0, 0]; }
        this.elements = elements;
    }
    Matrix.prototype.setElements = function (elements) {
        var e = this.elements;
        // `this.elements = elements.slice()` is 4-5 times slower
        // (in Chrome 71 and FF 64) than manually copying elements,
        // since slicing allocates new memory.
        // The performance of passing parameters individually
        // vs as an array is about the same in both browsers, so we
        // go with a single (array of elements) parameter, because
        // `setElements(elements)` and `setElements([a, b, c, d, e, f])`
        // calls give us roughly the same performance, versus
        // `setElements(...elements)` and `setElements(a, b, c, d, e, f)`,
        // where the spread operator causes a 20-30x performance drop
        // (30x when compiled to ES5's `.apply(this, elements)`
        //  20x when used natively).
        e[0] = elements[0];
        e[1] = elements[1];
        e[2] = elements[2];
        e[3] = elements[3];
        e[4] = elements[4];
        e[5] = elements[5];
        return this;
    };
    Matrix.prototype.setIdentityElements = function () {
        var e = this.elements;
        e[0] = 1;
        e[1] = 0;
        e[2] = 0;
        e[3] = 1;
        e[4] = 0;
        e[5] = 0;
        return this;
    };
    Object.defineProperty(Matrix.prototype, "identity", {
        get: function () {
            var e = this.elements;
            return e[0] === 1 && e[1] === 0 && e[2] === 0 &&
                e[3] === 1 && e[4] === 0 && e[5] === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "a", {
        get: function () {
            return this.elements[0];
        },
        set: function (value) {
            this.elements[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "b", {
        get: function () {
            return this.elements[1];
        },
        set: function (value) {
            this.elements[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "c", {
        get: function () {
            return this.elements[2];
        },
        set: function (value) {
            this.elements[2] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "d", {
        get: function () {
            return this.elements[3];
        },
        set: function (value) {
            this.elements[3] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "e", {
        get: function () {
            return this.elements[4];
        },
        set: function (value) {
            this.elements[4] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "f", {
        get: function () {
            return this.elements[5];
        },
        set: function (value) {
            this.elements[5] = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Performs the AxB matrix multiplication and saves the result
     * to `C`, if given, or to `A` otherwise.
     */
    Matrix.prototype.AxB = function (A, B, C) {
        var m11 = A[0], m12 = A[1], m21 = A[2], m22 = A[3], m31 = A[4], m32 = A[5];
        var o11 = B[0], o12 = B[1], o21 = B[2], o22 = B[3], o31 = B[4], o32 = B[5];
        C = C || A;
        C[0] = m11 * o11 + m21 * o12;
        C[1] = m12 * o11 + m22 * o12;
        C[2] = m11 * o21 + m21 * o22;
        C[3] = m12 * o21 + m22 * o22;
        C[4] = m11 * o31 + m21 * o32 + m31;
        C[5] = m12 * o31 + m22 * o32 + m32;
    };
    /**
     * The `other` matrix gets post-multiplied to the current matrix.
     * Returns the current matrix.
     * @param other
     */
    Matrix.prototype.multiplySelf = function (other) {
        this.AxB(this.elements, other.elements);
        return this;
    };
    /**
     * The `other` matrix gets post-multiplied to the current matrix.
     * Returns a new matrix.
     * @param other
     */
    Matrix.prototype.multiply = function (other) {
        var elements = new Array(6);
        this.AxB(this.elements, other.elements, elements);
        return new Matrix(elements);
    };
    Matrix.prototype.preMultiplySelf = function (other) {
        this.AxB(other.elements, this.elements, this.elements);
        return this;
    };
    /**
     * Returns the inverse of this matrix as a new matrix.
     */
    Matrix.prototype.inverse = function () {
        var _a = this.elements, a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4], f = _a[5];
        var rD = 1 / (a * d - b * c); // reciprocal of determinant
        a *= rD;
        b *= rD;
        c *= rD;
        d *= rD;
        return new Matrix([d, -b, -c, a, c * f - d * e, b * e - a * f]);
    };
    /**
     * Save the inverse of this matrix to the given matrix.
     */
    Matrix.prototype.inverseTo = function (other) {
        var _a = this.elements, a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4], f = _a[5];
        var rD = 1 / (a * d - b * c); // reciprocal of determinant
        a *= rD;
        b *= rD;
        c *= rD;
        d *= rD;
        other.setElements([d, -b, -c, a, c * f - d * e, b * e - a * f]);
        return this;
    };
    Matrix.prototype.invertSelf = function () {
        var elements = this.elements;
        var a = elements[0], b = elements[1], c = elements[2], d = elements[3], e = elements[4], f = elements[5];
        var rD = 1 / (a * d - b * c); // reciprocal of determinant
        a *= rD;
        b *= rD;
        c *= rD;
        d *= rD;
        elements[0] = d;
        elements[1] = -b;
        elements[2] = -c;
        elements[3] = a;
        elements[4] = c * f - d * e;
        elements[5] = b * e - a * f;
        return this;
    };
    Matrix.prototype.clone = function () {
        return new Matrix(this.elements.slice());
    };
    Matrix.prototype.transformPoint = function (x, y) {
        var e = this.elements;
        return {
            x: x * e[0] + y * e[2] + e[4],
            y: x * e[1] + y * e[3] + e[5]
        };
    };
    Matrix.prototype.transformBBox = function (bbox, radius, target) {
        if (radius === void 0) { radius = 0; }
        var elements = this.elements;
        var xx = elements[0];
        var xy = elements[1];
        var yx = elements[2];
        var yy = elements[3];
        var h_w = bbox.width * 0.5;
        var h_h = bbox.height * 0.5;
        var cx = bbox.x + h_w;
        var cy = bbox.y + h_h;
        var w, h;
        if (radius) {
            h_w -= radius;
            h_h -= radius;
            var sx = Math.sqrt(xx * xx + yx * yx);
            var sy = Math.sqrt(xy * xy + yy * yy);
            w = Math.abs(h_w * xx) + Math.abs(h_h * yx) + Math.abs(sx * radius);
            h = Math.abs(h_w * xy) + Math.abs(h_h * yy) + Math.abs(sy * radius);
        }
        else {
            w = Math.abs(h_w * xx) + Math.abs(h_h * yx);
            h = Math.abs(h_w * xy) + Math.abs(h_h * yy);
        }
        if (!target) {
            target = new bbox_1.BBox(0, 0, 0, 0);
        }
        target.x = cx * xx + cy * yx + elements[4] - w;
        target.y = cx * xy + cy * yy + elements[5] - h;
        target.width = w + w;
        target.height = h + h;
        return target;
    };
    Matrix.prototype.toContext = function (ctx) {
        // It's fair to say that matrix multiplications are not cheap.
        // However, updating path definitions on every frame isn't either, so
        // it may be cheaper to just translate paths. It's also fair to
        // say, that most paths will have to be re-rendered anyway, say
        // rectangle paths in a bar chart, where an animation would happen when
        // the data set changes and existing bars are morphed into new ones.
        // Or a pie chart, where old sectors are also morphed into new ones.
        // Same for the line chart. The only plausible case where translating
        // existing paths would be enough, is the scatter chart, where marker
        // icons, typically circles, stay the same size. But if circle radii
        // are bound to some data points, even circle paths would have to be
        // updated. And thus it makes sense to optimize for fewer matrix
        // transforms, where transform matrices of paths are mostly identity
        // matrices and `x`/`y`, `centerX`/`centerY` and similar properties
        // are used to define a path at specific coordinates. And only groups
        // are used to collectively apply a transform to a set of nodes.
        // If the matrix is mostly identity (95% of the time),
        // the `if (this.isIdentity)` check can make this call 3-4 times
        // faster on average: https://jsperf.com/matrix-check-first-vs-always-set
        if (this.identity) {
            return;
        }
        var e = this.elements;
        ctx.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
    };
    Matrix.flyweight = function (elements) {
        if (elements) {
            if (elements instanceof Matrix) {
                Matrix.matrix.setElements(elements.elements);
            }
            else {
                Matrix.matrix.setElements(elements);
            }
        }
        else {
            Matrix.matrix.setIdentityElements();
        }
        return Matrix.matrix;
    };
    Matrix.matrix = new Matrix();
    return Matrix;
}());
exports.Matrix = Matrix;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var matrix_1 = __webpack_require__(/*! ./matrix */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/matrix.js");
var PointerEvents;
(function (PointerEvents) {
    PointerEvents[PointerEvents["All"] = 0] = "All";
    PointerEvents[PointerEvents["None"] = 1] = "None";
})(PointerEvents = exports.PointerEvents || (exports.PointerEvents = {}));
/**
 * Abstract scene graph node.
 * Each node can have zero or one parent and belong to zero or one scene.
 */
var Node = /** @class */ (function () {
    function Node() {
        /**
         * Unique node ID in the form `ClassName-NaturalNumber`.
         */
        this.id = this.createId();
        /**
         * Some number to identify this node, typically within a `Group` node.
         * Usually this will be some enum value used as a selector.
         */
        this.tag = NaN;
        /**
         * To simplify the type system (especially in Selections) we don't have the `Parent` node
         * (one that has children). Instead, we mimic HTML DOM, where any node can have children.
         * But we still need to distinguish regular leaf nodes from container leafs somehow.
         */
        this.isContainerNode = false;
        this._children = [];
        // Used to check for duplicate nodes.
        this.childSet = {}; // new Set<Node>()
        // These matrices may need to have package level visibility
        // for performance optimization purposes.
        this.matrix = new matrix_1.Matrix();
        this.inverseMatrix = new matrix_1.Matrix();
        // TODO: should this be `true` by default as well?
        this._dirtyTransform = false;
        this._scalingX = 1;
        this._scalingY = 1;
        /**
         * The center of scaling.
         * The default value of `null` means the scaling center will be
         * determined automatically, as the center of the bounding box
         * of a node.
         */
        this._scalingCenterX = null;
        this._scalingCenterY = null;
        this._rotationCenterX = null;
        this._rotationCenterY = null;
        /**
         * Rotation angle in radians.
         * The value is set as is. No normalization to the [-180, 180) or [0, 360)
         * interval is performed.
         */
        this._rotation = 0;
        this._translationX = 0;
        this._translationY = 0;
        /**
         * Each time a property of the node that effects how it renders changes
         * the `dirty` property of the node should be set to `true`. The change
         * to the `dirty` property of the node will propagate up to its parents
         * and eventually to the scene, at which point an animation frame callback
         * will be scheduled to rerender the scene and its nodes and reset the `dirty`
         * flags of all nodes and the {@link Scene._dirty | Scene} back to `false`.
         * Since changes to node properties are not rendered immediately, it's possible
         * to change as many properties on as many nodes as needed and the rendering
         * will still only happen once in the next animation frame callback.
         * The animation frame callback is only scheduled if it hasn't been already.
         */
        this._dirty = true;
        this._visible = true;
        this.pointerEvents = PointerEvents.All;
    }
    // Uniquely identify nodes (to check for duplicates, for example).
    Node.prototype.createId = function () {
        var constructor = this.constructor;
        var className = constructor.className;
        if (!className) {
            throw new Error("The " + constructor + " is missing the 'className' property.");
        }
        return className + '-' + (constructor.id = (constructor.id || 0) + 1);
    };
    /**
     * This is meaningfully faster than `instanceof` and should be the preferred way
     * of checking inside loops.
     * @param node
     */
    Node.isNode = function (node) {
        return node ? node.matrix !== undefined : false;
    };
    Node.prototype._setScene = function (value) {
        this._scene = value;
        var children = this.children;
        var n = children.length;
        for (var i = 0; i < n; i++) {
            children[i]._setScene(value);
        }
    };
    Object.defineProperty(Node.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype._setParent = function (value) {
        this._parent = value;
    };
    Object.defineProperty(Node.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.countChildren = function (depth) {
        if (depth === void 0) { depth = Node.MAX_SAFE_INTEGER; }
        if (depth <= 0) {
            return 0;
        }
        var children = this.children;
        var n = children.length;
        var size = n;
        for (var i = 0; i < n; i++) {
            size += children[i].countChildren(depth - 1);
        }
        return size;
    };
    /**
     * Appends one or more new node instances to this parent.
     * If one needs to:
     * - move a child to the end of the list of children
     * - move a child from one parent to another (including parents in other scenes)
     * one should use the {@link insertBefore} method instead.
     * @param nodes A node or nodes to append.
     */
    Node.prototype.append = function (nodes) {
        // Passing a single parameter to an open-ended version of `append`
        // would be 30-35% slower than this.
        if (Node.isNode(nodes)) {
            nodes = [nodes];
        }
        // The function takes an array rather than having open-ended
        // arguments like `...nodes: Node[]` because the latter is
        // transpiled to a function where the `arguments` object
        // is copied to a temporary array inside a loop.
        // So an array is created either way. And if we already have
        // an array of nodes we want to add, we have to use the prohibitively
        // expensive spread operator to pass it to the function,
        // and, on top of that, the copy of the `arguments` is still made.
        var n = nodes.length;
        for (var i = 0; i < n; i++) {
            var node = nodes[i];
            if (node.parent) {
                throw new Error(node + " already belongs to another parent: " + node.parent + ".");
            }
            if (node.scene) {
                throw new Error(node + " already belongs a scene: " + node.scene + ".");
            }
            if (this.childSet[node.id]) {
                // Cast to `any` to avoid `Property 'name' does not exist on type 'Function'`.
                throw new Error("Duplicate " + node.constructor.name + " node: " + node);
            }
            this._children.push(node);
            this.childSet[node.id] = true;
            node._setParent(this);
            node._setScene(this.scene);
        }
        this.dirty = true;
    };
    Node.prototype.appendChild = function (node) {
        if (node.parent) {
            throw new Error(node + " already belongs to another parent: " + node.parent + ".");
        }
        if (node.scene) {
            throw new Error(node + " already belongs a scene: " + node.scene + ".");
        }
        if (this.childSet[node.id]) {
            // Cast to `any` to avoid `Property 'name' does not exist on type 'Function'`.
            throw new Error("Duplicate " + node.constructor.name + " node: " + node);
        }
        this._children.push(node);
        this.childSet[node.id] = true;
        node._setParent(this);
        node._setScene(this.scene);
        this.dirty = true;
        return node;
    };
    Node.prototype.removeChild = function (node) {
        if (node.parent === this) {
            var i = this.children.indexOf(node);
            if (i >= 0) {
                this._children.splice(i, 1);
                delete this.childSet[node.id];
                node._setParent(undefined);
                node._setScene(undefined);
                this.dirty = true;
                return node;
            }
        }
        throw new Error("The node to be removed is not a child of this node.");
    };
    /**
     * Inserts the node `node` before the existing child node `nextNode`.
     * If `nextNode` is null, insert `node` at the end of the list of children.
     * If the `node` belongs to another parent, it is first removed.
     * Returns the `node`.
     * @param node
     * @param nextNode
     */
    Node.prototype.insertBefore = function (node, nextNode) {
        var parent = node.parent;
        if (node.parent) {
            node.parent.removeChild(node);
        }
        if (nextNode && nextNode.parent === this) {
            var i = this.children.indexOf(nextNode);
            if (i >= 0) {
                this._children.splice(i, 0, node);
                this.childSet[node.id] = true;
                node._setParent(this);
                node._setScene(this.scene);
            }
            else {
                throw new Error(nextNode + " has " + parent + " as the parent, "
                    + "but is not in its list of children.");
            }
            this.dirty = true;
        }
        else {
            this.append(node);
        }
        return node;
    };
    /**
     * Calculates the combined inverse transformation for this node,
     * and uses it to convert the given transformed point
     * to the untransformed one.
     * @param x
     * @param y
     */
    Node.prototype.transformPoint = function (x, y) {
        var matrix = matrix_1.Matrix.flyweight(this.matrix);
        var parent = this.parent;
        while (parent) {
            matrix.preMultiplySelf(parent.matrix);
            parent = parent.parent;
        }
        return matrix.invertSelf().transformPoint(x, y);
    };
    Object.defineProperty(Node.prototype, "dirtyTransform", {
        get: function () {
            return this._dirtyTransform;
        },
        set: function (value) {
            this._dirtyTransform = value;
            // TODO: replace this with simply `this.dirty = true`,
            //       see `set dirty` method.
            if (value) {
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "scalingX", {
        get: function () {
            return this._scalingX;
        },
        set: function (value) {
            if (this._scalingX !== value) {
                this._scalingX = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "scalingY", {
        get: function () {
            return this._scalingY;
        },
        set: function (value) {
            if (this._scalingY !== value) {
                this._scalingY = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "scalingCenterX", {
        get: function () {
            return this._scalingCenterX;
        },
        set: function (value) {
            if (this._scalingCenterX !== value) {
                this._scalingCenterX = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "scalingCenterY", {
        get: function () {
            return this._scalingCenterY;
        },
        set: function (value) {
            if (this._scalingCenterY !== value) {
                this._scalingCenterY = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "rotationCenterX", {
        get: function () {
            return this._rotationCenterX;
        },
        set: function (value) {
            if (this._rotationCenterX !== value) {
                this._rotationCenterX = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "rotationCenterY", {
        get: function () {
            return this._rotationCenterY;
        },
        set: function (value) {
            if (this._rotationCenterY !== value) {
                this._rotationCenterY = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            if (this._rotation !== value) {
                this._rotation = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "rotationDeg", {
        get: function () {
            return this.rotation / Math.PI * 180;
        },
        /**
         * For performance reasons the rotation angle's internal representation
         * is in radians. Therefore, don't expect to get the same number you set.
         * Even with integer angles about a quarter of them from 0 to 359 cannot
         * be converted to radians and back without precision loss.
         * For example:
         *
         *     node.rotationDeg = 11;
         *     console.log(node.rotationDeg); // 10.999999999999998
         *
         * @param value Rotation angle in degrees.
         */
        set: function (value) {
            this.rotation = value / 180 * Math.PI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "translationX", {
        get: function () {
            return this._translationX;
        },
        set: function (value) {
            if (this._translationX !== value) {
                this._translationX = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "translationY", {
        get: function () {
            return this._translationY;
        },
        set: function (value) {
            if (this._translationY !== value) {
                this._translationY = value;
                this.dirtyTransform = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.isPointInNode = function (x, y) {
        return false;
    };
    /**
     * Hit testing method.
     * Recursively checks if the given point is inside this node or any of its children.
     * Returns the first matching node or `undefined`.
     * Nodes that render later (show on top) are hit tested first.
     * @param x
     * @param y
     */
    Node.prototype.pickNode = function (x, y) {
        if (!this.visible || this.pointerEvents === PointerEvents.None || !this.isPointInNode(x, y)) {
            return;
        }
        var children = this.children;
        if (children.length) {
            // Nodes added later should be hit-tested first,
            // as they are rendered on top of the previously added nodes.
            for (var i = children.length - 1; i >= 0; i--) {
                var hit = children[i].pickNode(x, y);
                if (hit) {
                    return hit;
                }
            }
        }
        else if (!this.isContainerNode) { // a leaf node, but not a container leaf
            return this;
        }
    };
    Node.prototype.getBBox = function () { return; };
    Node.prototype.getBBoxCenter = function () {
        var bbox = this.getBBox && this.getBBox();
        if (bbox) {
            return [
                bbox.x + bbox.width * 0.5,
                bbox.y + bbox.height * 0.5
            ];
        }
        return [0, 0];
    };
    Node.prototype.computeTransformMatrix = function () {
        // TODO: transforms without center of scaling and rotation correspond directly
        //       to `setAttribute('transform', 'translate(tx, ty) rotate(rDeg) scale(sx, sy)')`
        //       in SVG. Our use cases will mostly require positioning elements (rects, circles)
        //       within a group, rotating groups at right angles (e.g. for axis) and translating
        //       groups. We shouldn't even need `scale(1, -1)` (invert vertically), since this
        //       can be done using D3-like scales already by inverting the output range.
        //       So for now, just assume that centers of scaling and rotation are at the origin.
        // const [bbcx, bbcy] = this.getBBoxCenter();
        var _a = [0, 0], bbcx = _a[0], bbcy = _a[1];
        var sx = this.scalingX;
        var sy = this.scalingY;
        var scx;
        var scy;
        if (sx === 1 && sy === 1) {
            scx = 0;
            scy = 0;
        }
        else {
            scx = this.scalingCenterX === null ? bbcx : this.scalingCenterX;
            scy = this.scalingCenterY === null ? bbcy : this.scalingCenterY;
        }
        var r = this.rotation;
        var cos = Math.cos(r);
        var sin = Math.sin(r);
        var rcx;
        var rcy;
        if (r === 0) {
            rcx = 0;
            rcy = 0;
        }
        else {
            rcx = this.rotationCenterX === null ? bbcx : this.rotationCenterX;
            rcy = this.rotationCenterY === null ? bbcy : this.rotationCenterY;
        }
        var tx = this.translationX;
        var ty = this.translationY;
        // The transform matrix `M` is a result of the following transformations:
        // 1) translate the center of scaling to the origin
        // 2) scale
        // 3) translate back
        // 4) translate the center of rotation to the origin
        // 5) rotate
        // 6) translate back
        // 7) translate
        //         (7)          (6)             (5)             (4)           (3)           (2)           (1)
        //     | 1 0 tx |   | 1 0 rcx |   | cos -sin 0 |   | 1 0 -rcx |   | 1 0 scx |   | sx 0 0 |   | 1 0 -scx |
        // M = | 0 1 ty | * | 0 1 rcy | * | sin  cos 0 | * | 0 1 -rcy | * | 0 1 scy | * | 0 sy 0 | * | 0 1 -scy |
        //     | 0 0  1 |   | 0 0  1  |   |  0    0  1 |   | 0 0  1   |   | 0 0  1  |   | 0  0 0 |   | 0 0  1   |
        // Translation after steps 1-4 above:
        var tx4 = scx * (1 - sx) - rcx;
        var ty4 = scy * (1 - sy) - rcy;
        this.dirtyTransform = false;
        this.matrix.setElements([
            cos * sx, sin * sx,
            -sin * sy, cos * sy,
            cos * tx4 - sin * ty4 + rcx + tx,
            sin * tx4 + cos * ty4 + rcy + ty
        ]).inverseTo(this.inverseMatrix);
    };
    Object.defineProperty(Node.prototype, "dirty", {
        get: function () {
            return this._dirty;
        },
        set: function (value) {
            // TODO: check if we are already dirty (e.g. if (this._dirty !== value))
            //       if we are, then all parents and the scene have been
            //       notified already, and we are doing redundant work
            //       (but test if this is indeed the case)
            this._dirty = value;
            if (value) {
                if (this.parent) {
                    this.parent.dirty = true;
                }
                else if (this.scene) {
                    this.scene.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (this._visible !== value) {
                this._visible = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Node.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1; // Number.MAX_SAFE_INTEGER
    return Node;
}());
exports.Node = Node;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var intersection_1 = __webpack_require__(/*! ./intersection */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/intersection.js");
var Path2D = /** @class */ (function () {
    function Path2D() {
        // The methods of this class will likely be called many times per animation frame,
        // and any allocation can trigger a GC cycle during animation, so we attempt
        // to minimize the number of allocations.
        this.commands = [];
        this.params = [];
        this._closedPath = false;
    }
    Path2D.prototype.moveTo = function (x, y) {
        if (this.xy) {
            this.xy[0] = x;
            this.xy[1] = y;
        }
        else {
            this.xy = [x, y];
        }
        this.commands.push('M');
        this.params.push(x, y);
    };
    Path2D.prototype.lineTo = function (x, y) {
        if (this.xy) {
            this.commands.push('L');
            this.params.push(x, y);
            this.xy[0] = x;
            this.xy[1] = y;
        }
        else {
            this.moveTo(x, y);
        }
    };
    Path2D.prototype.rect = function (x, y, width, height) {
        this.moveTo(x, y);
        this.lineTo(x + width, y);
        this.lineTo(x + width, y + height);
        this.lineTo(x, y + height);
        this.closePath();
    };
    /**
     * Adds an arc segment to the path definition.
     * https://www.w3.org/TR/SVG11/paths.html#PathDataEllipticalArcCommands
     * @param rx The major-axis radius.
     * @param ry The minor-axis radius.
     * @param rotation The x-axis rotation, expressed in radians.
     * @param fA The large arc flag. `1` to use angle > π.
     * @param fS The sweep flag. `1` for the arc that goes to `x`/`y` clockwise.
     * @param x2 The x coordinate to arc to.
     * @param y2 The y coordinate to arc to.
     */
    Path2D.prototype.arcTo = function (rx, ry, rotation, fA, fS, x2, y2) {
        // Convert from endpoint to center parametrization:
        // https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
        var xy = this.xy;
        if (!xy) {
            return;
        }
        if (rx < 0) {
            rx = -rx;
        }
        if (ry < 0) {
            ry = -ry;
        }
        var x1 = xy[0];
        var y1 = xy[1];
        var hdx = (x1 - x2) / 2;
        var hdy = (y1 - y2) / 2;
        var sinPhi = Math.sin(rotation);
        var cosPhi = Math.cos(rotation);
        var xp = cosPhi * hdx + sinPhi * hdy;
        var yp = -sinPhi * hdx + cosPhi * hdy;
        var ratX = xp / rx;
        var ratY = yp / ry;
        var lambda = ratX * ratX + ratY * ratY;
        var cx = (x1 + x2) / 2;
        var cy = (y1 + y2) / 2;
        var cpx = 0;
        var cpy = 0;
        if (lambda >= 1) {
            lambda = Math.sqrt(lambda);
            rx *= lambda;
            ry *= lambda;
            // me gives lambda == cpx == cpy == 0;
        }
        else {
            lambda = Math.sqrt(1 / lambda - 1);
            if (fA === fS) {
                lambda = -lambda;
            }
            cpx = lambda * rx * ratY;
            cpy = -lambda * ry * ratX;
            cx += cosPhi * cpx - sinPhi * cpy;
            cy += sinPhi * cpx + cosPhi * cpy;
        }
        var theta1 = Math.atan2((yp - cpy) / ry, (xp - cpx) / rx);
        var deltaTheta = Math.atan2((-yp - cpy) / ry, (-xp - cpx) / rx) - theta1;
        // if (fS) {
        //     if (deltaTheta <= 0) {
        //         deltaTheta += Math.PI * 2;
        //     }
        // }
        // else {
        //     if (deltaTheta >= 0) {
        //         deltaTheta -= Math.PI * 2;
        //     }
        // }
        this.cubicArc(cx, cy, rx, ry, rotation, theta1, theta1 + deltaTheta, 1 - fS);
    };
    Path2D.prototype.arcToAlt = function (rx, ry, rotation, fA, fS, x2, y2) {
        // Convert from endpoint to center parametrization. See:
        // https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
        if (!this.xy) {
            return;
        }
        if (rx < 0) {
            rx = -rx;
        }
        if (ry < 0) {
            ry = -ry;
        }
        var x1 = this.xy[0];
        var y1 = this.xy[1];
        var hdx = (x1 - x2) / 2;
        var hdy = (y1 - y2) / 2;
        var sinPhi = Math.sin(rotation);
        var cosPhi = Math.cos(rotation);
        var x1p = cosPhi * hdx + sinPhi * hdy;
        var y1p = -sinPhi * hdx + cosPhi * hdy;
        var rx_y1p = rx * rx * y1p * y1p;
        var ry_x1p = ry * ry * x1p * x1p;
        var root = Math.sqrt((rx * rx * ry * ry - rx_y1p - ry_x1p) / (rx_y1p + ry_x1p));
        var rootSign = fA === fS ? 0 : 1;
        var cxp = rootSign * root * rx * y1p / ry;
        var cyp = -rootSign * root * ry * x1p / rx;
        var cx = cosPhi * cxp - sinPhi * cyp + (x1 + x2) / 2;
        var cy = sinPhi * cxp + cosPhi * cyp + (y1 + y2) / 2;
        var theta1 = Math.acos((x1p - cxp) / rx / ((x1p - cxp) / rx));
    };
    /**
     * Approximates an elliptical arc with up to four cubic Bézier curves.
     * @param commands The string array to write SVG command letters to.
     * @param params The number array to write SVG command parameters (cubic control points) to.
     * @param cx The x-axis coordinate for the ellipse's center.
     * @param cy The y-axis coordinate for the ellipse's center.
     * @param rx The ellipse's major-axis radius.
     * @param ry The ellipse's minor-axis radius.
     * @param phi The rotation for this ellipse, expressed in radians.
     * @param theta1 The starting angle, measured clockwise from the positive x-axis and expressed in radians.
     * @param theta2 The ending angle, measured clockwise from the positive x-axis and expressed in radians.
     * @param anticlockwise The arc control points are always placed clockwise from `theta1` to `theta2`,
     * even when `theta1 > theta2`, unless this flag is set to `1`.
     */
    Path2D.cubicArc = function (commands, params, cx, cy, rx, ry, phi, theta1, theta2, anticlockwise) {
        if (anticlockwise) {
            var temp = theta1;
            theta1 = theta2;
            theta2 = temp;
        }
        var start = params.length;
        // See https://pomax.github.io/bezierinfo/#circles_cubic
        // Arc of unit circle (start angle = 0, end angle <= π/2) in cubic Bézier coordinates:
        // S = [1, 0]
        // C1 = [1, f]
        // C2 = [cos(θ) + f * sin(θ), sin(θ) - f * cos(θ)]
        // E = [cos(θ), sin(θ)]
        // f = 4/3 * tan(θ/4)
        var f90 = 0.5522847498307935; // f for θ = π/2 is 4/3 * (Math.sqrt(2) - 1)
        var sinTheta1 = Math.sin(theta1);
        var cosTheta1 = Math.cos(theta1);
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);
        var rightAngle = Math.PI / 2;
        // Since we know how to draw an arc of a unit circle with a cubic Bézier,
        // to draw an elliptical arc with arbitrary rotation and radii we:
        // 1) rotate the Bézier coordinates that represent a circular arc by θ
        // 2) scale the circular arc separately along the x/y axes, making it elliptical
        // 3) rotate elliptical arc by φ
        // |cos(φ) -sin(φ)| |sx  0| |cos(θ) -sin(θ)| -> |xx xy|
        // |sin(φ)  cos(φ)| | 0 sy| |sin(θ)  cos(θ)| -> |yx yy|
        var xx = cosPhi * cosTheta1 * rx - sinPhi * sinTheta1 * ry;
        var yx = sinPhi * cosTheta1 * rx + cosPhi * sinTheta1 * ry;
        var xy = -cosPhi * sinTheta1 * rx - sinPhi * cosTheta1 * ry;
        var yy = -sinPhi * sinTheta1 * rx + cosPhi * cosTheta1 * ry;
        // TODO: what if delta between θ1 and θ2 is greater than 2π?
        // Always draw clockwise from θ1 to θ2.
        theta2 -= theta1;
        if (theta2 < 0) {
            theta2 += Math.PI * 2;
        }
        // Multiplying each point [x, y] by:
        // |xx xy cx| |x|
        // |yx yy cy| |y|
        // | 0  0  1| |1|
        // TODO: This move command may be redundant, if we are already at this point.
        // The coordinates of the point calculated here may differ ever so slightly
        // because of precision error.
        commands.push('M');
        params.push(xx + cx, yx + cy);
        while (theta2 >= rightAngle) {
            theta2 -= rightAngle;
            commands.push('C');
            // Temp workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=993330
            // Revert this commit when fixed ^^.
            var lastX = xy + cx;
            params.push(xx + xy * f90 + cx, yx + yy * f90 + cy, xx * f90 + xy + cx, yx * f90 + yy + cy, Math.abs(lastX) < 1e-8 ? 0 : lastX, yy + cy);
            // Prepend π/2 rotation matrix.
            // |xx xy| | 0 1| -> | xy -xx|
            // |yx yy| |-1 0| -> | yy -yx|
            // [xx, yx, xy, yy] = [xy, yy, -xx, -yx];
            // Compared to swapping with a temp variable, destructuring is:
            // - 10% faster in Chrome 70
            // - 99% slower in Firefox 63
            // Temp variable solution is 45% faster in FF than Chrome.
            // https://jsperf.com/multi-swap
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1165569
            var temp = xx;
            xx = xy;
            xy = -temp;
            temp = yx;
            yx = yy;
            yy = -temp;
        }
        if (theta2) {
            var f = 4 / 3 * Math.tan(theta2 / 4);
            var sinPhi2 = Math.sin(theta2);
            var cosPhi2 = Math.cos(theta2);
            var C2x = cosPhi2 + f * sinPhi2;
            var C2y = sinPhi2 - f * cosPhi2;
            commands.push('C');
            // Temp workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=993330
            // Revert this commit when fixed ^^.
            var lastX = xx * cosPhi2 + xy * sinPhi2 + cx;
            params.push(xx + xy * f + cx, yx + yy * f + cy, xx * C2x + xy * C2y + cx, yx * C2x + yy * C2y + cy, Math.abs(lastX) < 1e-8 ? 0 : lastX, yx * cosPhi2 + yy * sinPhi2 + cy);
        }
        if (anticlockwise) {
            for (var i = start, j = params.length - 2; i < j; i += 2, j -= 2) {
                var temp = params[i];
                params[i] = params[j];
                params[j] = temp;
                temp = params[i + 1];
                params[i + 1] = params[j + 1];
                params[j + 1] = temp;
            }
        }
    };
    Path2D.prototype.cubicArc = function (cx, cy, rx, ry, phi, theta1, theta2, anticlockwise) {
        var commands = this.commands;
        var params = this.params;
        var start = commands.length;
        Path2D.cubicArc(commands, params, cx, cy, rx, ry, phi, theta1, theta2, anticlockwise);
        var x = params[params.length - 2];
        var y = params[params.length - 1];
        if (this.xy) {
            commands[start] = 'L';
            this.xy[0] = x;
            this.xy[1] = y;
        }
        else {
            this.xy = [x, y];
        }
    };
    /**
     * Returns the `[x, y]` coordinates of the curve at `t`.
     * @param points `(n + 1) * 2` control point coordinates for a Bézier curve of n-th order.
     * @param t
     */
    Path2D.prototype.deCasteljau = function (points, t) {
        var n = points.length;
        if (n < 2 || n % 2 === 1) {
            throw new Error('Fewer than two points or not an even count.');
        }
        else if (n === 2 || t === 0) {
            return points.slice(0, 2);
        }
        else if (t === 1) {
            return points.slice(-2);
        }
        else {
            var newPoints = [];
            var last = n - 2;
            for (var i = 0; i < last; i += 2) {
                newPoints.push((1 - t) * points[i] + t * points[i + 2], // x
                (1 - t) * points[i + 1] + t * points[i + 3] // y
                );
            }
            return this.deCasteljau(newPoints, t);
        }
    };
    /**
     * Approximates the given curve using `n` line segments.
     * @param points `(n + 1) * 2` control point coordinates for a Bézier curve of n-th order.
     * @param n
     */
    Path2D.prototype.approximateCurve = function (points, n) {
        var xy = this.deCasteljau(points, 0);
        this.moveTo(xy[0], xy[1]);
        var step = 1 / n;
        for (var t = step; t <= 1; t += step) {
            var xy_1 = this.deCasteljau(points, t);
            this.lineTo(xy_1[0], xy_1[1]);
        }
    };
    /**
     * Adds a quadratic curve segment to the path definition.
     * Note: the given quadratic segment is converted and stored as a cubic one.
     * @param cx x-component of the curve's control point
     * @param cy y-component of the curve's control point
     * @param x x-component of the end point
     * @param y y-component of the end point
     */
    Path2D.prototype.quadraticCurveTo = function (cx, cy, x, y) {
        if (!this.xy) {
            this.moveTo(cx, cy);
        }
        // See https://pomax.github.io/bezierinfo/#reordering
        this.cubicCurveTo((this.xy[0] + 2 * cx) / 3, (this.xy[1] + 2 * cy) / 3, // 1/3 start + 2/3 control
        (2 * cx + x) / 3, (2 * cy + y) / 3, // 2/3 control + 1/3 end
        x, y);
    };
    Path2D.prototype.cubicCurveTo = function (cx1, cy1, cx2, cy2, x, y) {
        if (!this.xy) {
            this.moveTo(cx1, cy1);
        }
        this.commands.push('C');
        this.params.push(cx1, cy1, cx2, cy2, x, y);
        this.xy[0] = x;
        this.xy[1] = y;
    };
    Object.defineProperty(Path2D.prototype, "closedPath", {
        get: function () {
            return this._closedPath;
        },
        enumerable: true,
        configurable: true
    });
    Path2D.prototype.closePath = function () {
        if (this.xy) {
            this.xy = undefined;
            this.commands.push('Z');
            this._closedPath = true;
        }
    };
    Path2D.prototype.clear = function () {
        this.commands.length = 0;
        this.params.length = 0;
        this.xy = undefined;
        this._closedPath = false;
    };
    Path2D.prototype.isPointInPath = function (x, y) {
        var commands = this.commands;
        var params = this.params;
        var cn = commands.length;
        // Hit testing using ray casting method, where the ray's origin is some point
        // outside the path. In this case, an offscreen point that is remote enough, so that
        // even if the path itself is large and is partially offscreen, the ray's origin
        // will likely be outside the path anyway. To test if the given point is inside the
        // path or not, we cast a ray from the origin to the given point and check the number
        // of intersections of this segment with the path. If the number of intersections is
        // even, then the ray both entered and exited the path an equal number of times,
        // therefore the point is outside the path, and inside the path, if the number of
        // intersections is odd. Since the path is compound, we check if the ray segment
        // intersects with each of the path's segments, which can be either a line segment
        // (one or no intersection points) or a Bézier curve segment (up to 3 intersection
        // points).
        var ox = -10000;
        var oy = -10000;
        // the starting point of the  current path
        var sx = NaN;
        var sy = NaN;
        // the previous point of the current path
        var px = 0;
        var py = 0;
        var intersectionCount = 0;
        for (var ci = 0, pi = 0; ci < cn; ci++) {
            switch (commands[ci]) {
                case 'M':
                    if (!isNaN(sx)) {
                        if (intersection_1.segmentIntersection(sx, sy, px, py, ox, oy, x, y)) {
                            intersectionCount++;
                        }
                    }
                    sx = px = params[pi++];
                    sy = py = params[pi++];
                    break;
                case 'L':
                    if (intersection_1.segmentIntersection(px, py, px = params[pi++], py = params[pi++], ox, oy, x, y)) {
                        intersectionCount++;
                    }
                    break;
                case 'C':
                    intersectionCount += intersection_1.cubicSegmentIntersections(px, py, params[pi++], params[pi++], params[pi++], params[pi++], px = params[pi++], py = params[pi++], ox, oy, x, y).length;
                    break;
                case 'Z':
                    if (!isNaN(sx)) {
                        if (intersection_1.segmentIntersection(sx, sy, px, py, ox, oy, x, y)) {
                            intersectionCount++;
                        }
                    }
                    break;
            }
        }
        return intersectionCount % 2 === 1;
    };
    Path2D.fromString = function (value) {
        var path = new Path2D();
        path.setFromString(value);
        return path;
    };
    /**
     * Split the SVG path at command letters,
     * then extract the command letter and parameters from each substring.
     * @param value
     */
    Path2D.parseSvgPath = function (value) {
        return value.trim().split(Path2D.splitCommandsRe).map(function (part) {
            var strParams = part.match(Path2D.matchParamsRe);
            return {
                command: part.substr(0, 1),
                params: strParams ? strParams.map(parseFloat) : []
            };
        });
    };
    Path2D.prettifySvgPath = function (value) {
        return Path2D.parseSvgPath(value).map(function (d) { return d.command + d.params.join(','); }).join('\n');
    };
    /**
     * See https://www.w3.org/TR/SVG11/paths.html
     * @param value
     */
    Path2D.prototype.setFromString = function (value) {
        var _this = this;
        this.clear();
        var parts = Path2D.parseSvgPath(value);
        // Current point.
        var x;
        var y;
        // Last control point. Used to calculate the reflection point
        // for `S`, `s`, `T`, `t` commands.
        var cpx;
        var cpy;
        var lastCommand;
        function checkQuadraticCP() {
            if (!lastCommand.match(Path2D.quadraticCommandRe)) {
                cpx = x;
                cpy = y;
            }
        }
        function checkCubicCP() {
            if (!lastCommand.match(Path2D.cubicCommandRe)) {
                cpx = x;
                cpy = y;
            }
        }
        // But that will make compiler complain about x/y, cpx/cpy
        // being used without being set first.
        parts.forEach(function (part) {
            var p = part.params;
            var n = p.length;
            var i = 0;
            switch (part.command) {
                case 'M':
                    _this.moveTo(x = p[i++], y = p[i++]);
                    while (i < n) {
                        _this.lineTo(x = p[i++], y = p[i++]);
                    }
                    break;
                case 'm':
                    _this.moveTo(x += p[i++], y += p[i++]);
                    while (i < n) {
                        _this.lineTo(x += p[i++], y += p[i++]);
                    }
                    break;
                case 'L':
                    while (i < n) {
                        _this.lineTo(x = p[i++], y = p[i++]);
                    }
                    break;
                case 'l':
                    while (i < n) {
                        _this.lineTo(x += p[i++], y += p[i++]);
                    }
                    break;
                case 'C':
                    while (i < n) {
                        _this.cubicCurveTo(p[i++], p[i++], cpx = p[i++], cpy = p[i++], x = p[i++], y = p[i++]);
                    }
                    break;
                case 'c':
                    while (i < n) {
                        _this.cubicCurveTo(x + p[i++], y + p[i++], cpx = x + p[i++], cpy = y + p[i++], x += p[i++], y += p[i++]);
                    }
                    break;
                case 'S':
                    checkCubicCP();
                    while (i < n) {
                        _this.cubicCurveTo(x + x - cpx, y + y - cpy, cpx = p[i++], cpy = p[i++], x = p[i++], y = p[i++]);
                    }
                    break;
                case 's':
                    checkCubicCP();
                    while (i < n) {
                        _this.cubicCurveTo(x + x - cpx, y + y - cpy, cpx = x + p[i++], cpy = y + p[i++], x += p[i++], y += p[i++]);
                    }
                    break;
                case 'Q':
                    while (i < n) {
                        _this.quadraticCurveTo(cpx = p[i++], cpy = p[i++], x = p[i++], y = p[i++]);
                    }
                    break;
                case 'q':
                    while (i < n) {
                        _this.quadraticCurveTo(cpx = x + p[i++], cpy = y + p[i++], x += p[i++], y += p[i++]);
                    }
                    break;
                case 'T':
                    checkQuadraticCP();
                    while (i < n) {
                        _this.quadraticCurveTo(cpx = x + x - cpx, cpy = y + y - cpy, x = p[i++], y = p[i++]);
                    }
                    break;
                case 't':
                    checkQuadraticCP();
                    while (i < n) {
                        _this.quadraticCurveTo(cpx = x + x - cpx, cpy = y + y - cpy, x += p[i++], y += p[i++]);
                    }
                    break;
                case 'A':
                    while (i < n) {
                        _this.arcTo(p[i++], p[i++], p[i++] * Math.PI / 180, p[i++], p[i++], x = p[i++], y = p[i++]);
                    }
                    break;
                case 'a':
                    while (i < n) {
                        _this.arcTo(p[i++], p[i++], p[i++] * Math.PI / 180, p[i++], p[i++], x += p[i++], y += p[i++]);
                    }
                    break;
                case 'Z':
                case 'z':
                    _this.closePath();
                    break;
                case 'H':
                    while (i < n) {
                        _this.lineTo(x = p[i++], y);
                    }
                    break;
                case 'h':
                    while (i < n) {
                        _this.lineTo(x += p[i++], y);
                    }
                    break;
                case 'V':
                    while (i < n) {
                        _this.lineTo(x, y = p[i++]);
                    }
                    break;
                case 'v':
                    while (i < n) {
                        _this.lineTo(x, y += p[i++]);
                    }
                    break;
            }
            lastCommand = part.command;
        });
    };
    Path2D.prototype.toString = function () {
        var c = this.commands;
        var p = this.params;
        var cn = c.length;
        var out = [];
        for (var ci = 0, pi = 0; ci < cn; ci++) {
            switch (c[ci]) {
                case 'M':
                    out.push('M' + p[pi++] + ',' + p[pi++]);
                    break;
                case 'L':
                    out.push('L' + p[pi++] + ',' + p[pi++]);
                    break;
                case 'C':
                    out.push('C' + p[pi++] + ',' + p[pi++] + ' ' +
                        p[pi++] + ',' + p[pi++] + ' ' +
                        p[pi++] + ',' + p[pi++]);
                    break;
                case 'Z':
                    out.push('Z');
                    break;
            }
        }
        return out.join('');
    };
    Path2D.prototype.toPrettyString = function () {
        return Path2D.prettifySvgPath(this.toString());
    };
    Path2D.prototype.toSvg = function () {
        return Path2D.xmlDeclaration + "\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"" + Path2D.xmlns + "\">\n    <path d=\"" + this.toString() + "\" style=\"fill:none;stroke:#000;stroke-width:0.5;\"/>\n</svg>";
    };
    Path2D.prototype.toDebugSvg = function () {
        var d = Path2D.prettifySvgPath(this.toString());
        return Path2D.xmlDeclaration + "\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" version=\"1.1\" xmlns=\"" + Path2D.xmlns + "\">\n    <path d=\"" + d + "\" style=\"fill:none;stroke:#000;stroke-width:0.5;\"/>\n</svg>";
    };
    /**
     * Returns an array of sub-paths of this Path,
     * where each sub-path is represented exclusively by cubic segments.
     */
    Path2D.prototype.toCubicPaths = function () {
        // Each sub-path is an array of `(n * 3 + 1) * 2` numbers,
        // where `n` is the number of segments.
        var paths = [];
        var params = this.params;
        // current path
        var path;
        // the starting point of the  current path
        var sx;
        var sy;
        // the previous point of the current path
        var px;
        var py;
        var i = 0; // current parameter
        this.commands.forEach(function (command) {
            switch (command) {
                case 'M':
                    path = [
                        sx = px = params[i++],
                        sy = py = params[i++]
                    ];
                    paths.push(path);
                    break;
                case 'L':
                    var x = params[i++];
                    var y = params[i++];
                    // Place control points along the line `a + (b - a) * t`
                    // at t = 1/3 and 2/3:
                    path.push((px + px + x) / 3, (py + py + y) / 3, (px + x + x) / 3, (py + y + y) / 3, px = x, py = y);
                    break;
                case 'C':
                    path.push(params[i++], params[i++], params[i++], params[i++], px = params[i++], py = params[i++]);
                    break;
                case 'Z':
                    path.push((px + px + sx) / 3, (py + py + sy) / 3, (px + sx + sx) / 3, (py + sy + sy) / 3, px = sx, py = sy);
                    break;
            }
        });
        return paths;
    };
    Path2D.cubicPathToString = function (path) {
        var n = path.length;
        if (!(n % 2 === 0 && (n / 2 - 1) / 2 >= 1)) {
            throw new Error('Invalid path.');
        }
        return 'M' + path.slice(0, 2).join(',') + 'C' + path.slice(2).join(',');
    };
    Path2D.splitCommandsRe = /(?=[AaCcHhLlMmQqSsTtVvZz])/g;
    Path2D.matchParamsRe = /-?[0-9]*\.?\d+/g;
    Path2D.quadraticCommandRe = /[QqTt]/;
    Path2D.cubicCommandRe = /[CcSs]/;
    Path2D.xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
    Path2D.xmlns = 'http://www.w3.org/2000/svg';
    return Path2D;
}());
exports.Path2D = Path2D;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/polyRoots.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/polyRoots.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore Suppress tsc error: Property 'sign' does not exist on type 'Math'
var sign = Math.sign ? Math.sign : function (x) {
    x = +x;
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0 ? 1 : -1;
};
/**
 * Finds the roots of a parametric linear equation in `t`,
 * where `t` lies in the interval of `[0,1]`.
 */
function linearRoot(a, b) {
    var t = -b / a;
    return (a !== 0 && t >= 0 && t <= 1) ? [t] : [];
}
exports.linearRoot = linearRoot;
/**
 * Finds the roots of a parametric quadratic equation in `t`,
 * where `t` lies in the interval of `[0,1]`.
 */
function quadraticRoots(a, b, c) {
    if (a === 0) {
        return linearRoot(b, c);
    }
    var D = b * b - 4 * a * c; // The polynomial's discriminant.
    var roots = [];
    if (D === 0) { // A single real root.
        var t = -b / (2 * a);
        if (t >= 0 && t <= 1) {
            roots.push(t);
        }
    }
    else if (D > 0) { // A pair of distinct real roots.
        var rD = Math.sqrt(D);
        var t1 = (-b - rD) / (2 * a);
        var t2 = (-b + rD) / (2 * a);
        if (t1 >= 0 && t1 <= 1) {
            roots.push(t1);
        }
        if (t2 >= 0 && t2 <= 1) {
            roots.push(t2);
        }
    }
    // else -> Complex roots.
    return roots;
}
exports.quadraticRoots = quadraticRoots;
/**
 * Finds the roots of a parametric cubic equation in `t`,
 * where `t` lies in the interval of `[0,1]`.
 * Returns an array of parametric intersection locations along the cubic,
 * excluding out-of-bounds intersections (before or after the end point
 * or in the imaginary plane).
 * An adaptation of http://www.particleincell.com/blog/2013/cubic-line-intersection/
 */
function cubicRoots(a, b, c, d) {
    if (a === 0) {
        return quadraticRoots(b, c, d);
    }
    var A = b / a;
    var B = c / a;
    var C = d / a;
    var Q = (3 * B - A * A) / 9;
    var R = (9 * A * B - 27 * C - 2 * A * A * A) / 54;
    var D = Q * Q * Q + R * R; // The polynomial's discriminant.
    var third = 1 / 3;
    var roots = [];
    if (D >= 0) { // Complex or duplicate roots.
        var rD = Math.sqrt(D);
        var S = sign(R + rD) * Math.pow(Math.abs(R + rD), third);
        var T = sign(R - rD) * Math.pow(Math.abs(R - rD), third);
        var Im = Math.abs(Math.sqrt(3) * (S - T) / 2); // Complex part of the root pair.
        var t = -third * A + (S + T); // A real root.
        if (t >= 0 && t <= 1) {
            roots.push(t);
        }
        if (Im === 0) {
            var t_1 = -third * A - (S + T) / 2; // The real part of a complex root.
            if (t_1 >= 0 && t_1 <= 1) {
                roots.push(t_1);
            }
        }
    }
    else { // Distinct real roots.
        var theta = Math.acos(R / Math.sqrt(-Q * Q * Q));
        var thirdA = third * A;
        var twoSqrtQ = 2 * Math.sqrt(-Q);
        var t1 = twoSqrtQ * Math.cos(third * theta) - thirdA;
        var t2 = twoSqrtQ * Math.cos(third * (theta + 2 * Math.PI)) - thirdA;
        var t3 = twoSqrtQ * Math.cos(third * (theta + 4 * Math.PI)) - thirdA;
        if (t1 >= 0 && t1 <= 1) {
            roots.push(t1);
        }
        if (t2 >= 0 && t2 <= 1) {
            roots.push(t2);
        }
        if (t3 >= 0 && t3 <= 1) {
            roots.push(t3);
        }
    }
    return roots;
}
exports.cubicRoots = cubicRoots;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/scene.js":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/scene.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var hdpiCanvas_1 = __webpack_require__(/*! ../canvas/hdpiCanvas */ "./node_modules/ag-grid-enterprise/dist/lib/charts/canvas/hdpiCanvas.js");
var Scene = /** @class */ (function () {
    function Scene(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.id = this.createId();
        this._dirty = false;
        this.animationFrameId = 0;
        this._root = null;
        this._frameIndex = 0;
        this._renderFrameIndex = false;
        this.render = function () {
            var ctx = _this.ctx;
            // start with a blank canvas, clear previous drawing
            ctx.clearRect(0, 0, _this.width, _this.height);
            if (_this.root) {
                ctx.save();
                if (_this.root.visible) {
                    _this.root.render(ctx);
                }
                ctx.restore();
            }
            _this._frameIndex++;
            if (_this.renderFrameIndex) {
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, 40, 15);
                ctx.fillStyle = 'black';
                ctx.fillText(_this.frameIndex.toString(), 0, 10);
            }
            _this.dirty = false;
        };
        this.canvas = new hdpiCanvas_1.HdpiCanvas({
            width: options.width || 300,
            height: options.height || 150,
            document: options.document || window.document
        });
        this.ctx = this.canvas.context;
    }
    Scene.prototype.createId = function () {
        return this.constructor.name + '-' + (Scene.id++);
    };
    Object.defineProperty(Scene.prototype, "parent", {
        get: function () {
            return this.canvas.parent;
        },
        set: function (value) {
            this.canvas.parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.download = function (fileName) {
        this.canvas.download(fileName);
    };
    Object.defineProperty(Scene.prototype, "width", {
        get: function () {
            return this.canvas.width;
        },
        set: function (value) {
            this.size = [value, this.height];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "height", {
        get: function () {
            return this.canvas.height;
        },
        set: function (value) {
            this.size = [this.width, value];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "size", {
        get: function () {
            return [this.width, this.height];
        },
        set: function (value) {
            var width = value[0], height = value[1];
            if (this.width !== width || this.height !== height) {
                this.canvas.resize(width, height);
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "dirty", {
        get: function () {
            return this._dirty;
        },
        set: function (dirty) {
            if (dirty && !this._dirty) {
                this.animationFrameId = requestAnimationFrame(this.render);
            }
            this._dirty = dirty;
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.cancelRender = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = 0;
            this._dirty = false;
        }
    };
    Object.defineProperty(Scene.prototype, "root", {
        get: function () {
            return this._root;
        },
        set: function (node) {
            if (node === this._root) {
                return;
            }
            if (this._root) {
                this._root._setScene(undefined);
            }
            this._root = node;
            if (node) {
                // If `node` is the root node of another scene ...
                if (node.parent === null && node.scene && node.scene !== this) {
                    node.scene.root = null;
                }
                node._setScene(this);
            }
            this.dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.appendPath = function (path) {
        var ctx = this.ctx;
        var commands = path.commands;
        var params = path.params;
        var n = commands.length;
        var j = 0;
        ctx.beginPath();
        for (var i = 0; i < n; i++) {
            switch (commands[i]) {
                case 'M':
                    ctx.moveTo(params[j++], params[j++]);
                    break;
                case 'L':
                    ctx.lineTo(params[j++], params[j++]);
                    break;
                case 'C':
                    ctx.bezierCurveTo(params[j++], params[j++], params[j++], params[j++], params[j++], params[j++]);
                    break;
                case 'Z':
                    ctx.closePath();
                    break;
            }
        }
    };
    Object.defineProperty(Scene.prototype, "frameIndex", {
        get: function () {
            return this._frameIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "renderFrameIndex", {
        get: function () {
            return this._renderFrameIndex;
        },
        set: function (value) {
            if (this._renderFrameIndex !== value) {
                this._renderFrameIndex = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Scene.id = 1;
    return Scene;
}());
exports.Scene = Scene;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/selection.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var EnterNode = /** @class */ (function () {
    function EnterNode(parent, datum) {
        this.next = null;
        this.scene = parent.scene;
        this.parent = parent;
        this.datum = datum;
    }
    EnterNode.prototype.appendChild = function (node) {
        // This doesn't work without the `strict: true` in the `tsconfig.json`,
        // so we must have two `if` checks below, instead of this single one.
        // if (this.next && !Node.isNode(this.next)) {
        //     throw new Error(`${this.next} is not a Node.`);
        // }
        if (this.next === null) {
            return this.parent.insertBefore(node, null);
        }
        if (!node_1.Node.isNode(this.next)) {
            throw new Error(this.next + " is not a Node.");
        }
        return this.parent.insertBefore(node, this.next);
    };
    EnterNode.prototype.insertBefore = function (node, nextNode) {
        return this.parent.insertBefore(node, nextNode);
    };
    return EnterNode;
}());
exports.EnterNode = EnterNode;
/**
 * G - type of the selected node(s).
 * GDatum - type of the datum of the selected node(s).
 * P - type of the parent node(s).
 * PDatum - type of the datum of the parent node(s).
 */
var Selection = /** @class */ (function () {
    function Selection(groups, parents) {
        this.groups = groups;
        this.parents = parents;
    }
    Selection.select = function (node) {
        return new Selection([[typeof node === 'function' ? node() : node]], [undefined]);
    };
    Selection.selectAll = function (nodes) {
        return new Selection([nodes == null ? [] : nodes], [undefined]);
    };
    /**
     * Creates new nodes, appends them to the nodes of this selection and returns them
     * as a new selection. The created nodes inherit the datums and the parents of the nodes
     * they replace.
     * @param Class The constructor function to use to create the new nodes.
     */
    Selection.prototype.append = function (Class) {
        return this.select(function (node) {
            return node.appendChild(new Class());
        });
    };
    /**
     * Same as the {@link append}, but accepts a custom creator function with the
     * {@link NodeSelector} signature rather than a constructor function.
     * @param creator
     */
    Selection.prototype.appendFn = function (creator) {
        return this.select(function (node, data, index, group) {
            return node.appendChild(creator(node, data, index, group));
        });
    };
    /**
     * Runs the given selector that returns a single node for every node in each group.
     * The original nodes are then replaced by the nodes returned by the selector
     * and returned as a new selection.
     * The selected nodes inherit the datums and the parents of the original nodes.
     */
    Selection.prototype.select = function (selector) {
        var groups = this.groups;
        var numGroups = groups.length;
        var subgroups = [];
        for (var j = 0; j < numGroups; j++) {
            var group = groups[j];
            var groupSize = group.length;
            var subgroup = subgroups[j] = new Array(groupSize);
            for (var i = 0; i < groupSize; i++) {
                var node = group[i];
                if (node) {
                    var subnode = selector(node, node.datum, i, group);
                    if (subnode) {
                        subnode.datum = node.datum;
                    }
                    subgroup[i] = subnode;
                }
                // else this can be a group of the `enter` selection,
                // for example, with no nodes at the i-th position,
                // only nodes at the end of the group
            }
        }
        return new Selection(subgroups, this.parents);
    };
    /**
     * Same as {@link select}, but uses the given {@param Class} (constructor) as a selector.
     * @param Class The constructor function to use to find matching nodes.
     */
    Selection.prototype.selectByClass = function (Class) {
        return this.select(function (node) {
            if (node_1.Node.isNode(node)) {
                var children = node.children;
                var n = children.length;
                for (var i = 0; i < n; i++) {
                    var child = children[i];
                    if (child instanceof Class) {
                        return child;
                    }
                }
            }
        });
    };
    Selection.prototype.selectByTag = function (tag) {
        return this.select(function (node) {
            if (node_1.Node.isNode(node)) {
                var children = node.children;
                var n = children.length;
                for (var i = 0; i < n; i++) {
                    var child = children[i];
                    if (child.tag === tag) {
                        return child;
                    }
                }
            }
        });
    };
    Selection.prototype.selectAllByClass = function (Class) {
        return this.selectAll(function (node) {
            var nodes = [];
            if (node_1.Node.isNode(node)) {
                var children = node.children;
                var n = children.length;
                for (var i = 0; i < n; i++) {
                    var child = children[i];
                    if (child instanceof Class) {
                        nodes.push(child);
                    }
                }
            }
            return nodes;
        });
    };
    Selection.prototype.selectAllByTag = function (tag) {
        return this.selectAll(function (node) {
            var nodes = [];
            if (node_1.Node.isNode(node)) {
                var children = node.children;
                var n = children.length;
                for (var i = 0; i < n; i++) {
                    var child = children[i];
                    if (child.tag === tag) {
                        nodes.push(child);
                    }
                }
            }
            return nodes;
        });
    };
    Selection.prototype.selectNone = function () {
        return [];
    };
    /**
     * Runs the given selector that returns a group of nodes for every node in each group.
     * The original nodes are then replaced by the groups of nodes returned by the selector
     * and returned as a new selection. The original nodes become the parent nodes for each
     * group in the new selection. The selected nodes do not inherit the datums of the original nodes.
     * If called without any parameters, creates a new selection with an empty group for each
     * node in this selection.
     */
    Selection.prototype.selectAll = function (selectorAll) {
        if (!selectorAll) {
            selectorAll = this.selectNone;
        }
        // Each subgroup is populated with the selector (run on each group node) results.
        var subgroups = [];
        // In the new selection that we return, subgroups become groups,
        // and group nodes become parents.
        var parents = [];
        var groups = this.groups;
        var groupCount = groups.length;
        for (var j = 0; j < groupCount; j++) {
            var group = groups[j];
            var groupLength = group.length;
            for (var i = 0; i < groupLength; i++) {
                var node = group[i];
                if (node) {
                    subgroups.push(selectorAll(node, node.datum, i, group));
                    parents.push(node);
                }
            }
        }
        return new Selection(subgroups, parents);
    };
    /**
     * Runs the given callback for every node in this selection and returns this selection.
     * @param cb
     */
    Selection.prototype.each = function (cb) {
        var groups = this.groups;
        var numGroups = groups.length;
        for (var j = 0; j < numGroups; j++) {
            var group = groups[j];
            var groupSize = group.length;
            for (var i = 0; i < groupSize; i++) {
                var node = group[i];
                if (node) {
                    cb(node, node.datum, i, group);
                }
            }
        }
        return this;
    };
    Selection.prototype.remove = function () {
        return this.each(function (node) {
            if (node_1.Node.isNode(node)) {
                var parent_1 = node.parent;
                if (parent_1) {
                    parent_1.removeChild(node);
                }
            }
        });
    };
    Selection.prototype.merge = function (other) {
        var groups0 = this.groups;
        var groups1 = other.groups;
        var m0 = groups0.length;
        var m1 = groups1.length;
        var m = Math.min(m0, m1);
        var merges = new Array(m0);
        var j = 0;
        for (; j < m; j++) {
            var group0 = groups0[j];
            var group1 = groups1[j];
            var n = group0.length;
            var merge = merges[j] = new Array(n);
            for (var i = 0; i < n; i++) {
                var node = group0[i] || group1[i];
                merge[i] = node || undefined;
            }
        }
        for (; j < m0; j++) {
            merges[j] = groups0[j];
        }
        return new Selection(merges, this.parents);
    };
    /**
     * Return the first non-null element in this selection.
     * If the selection is empty, returns null.
     */
    Selection.prototype.node = function () {
        var groups = this.groups;
        var numGroups = groups.length;
        for (var j = 0; j < numGroups; j++) {
            var group = groups[j];
            var groupSize = group.length;
            for (var i = 0; i < groupSize; i++) {
                var node = group[i];
                if (node) {
                    return node;
                }
            }
        }
        return null;
    };
    Selection.prototype.attr = function (name, value) {
        this.each(function (node) {
            node[name] = value;
        });
        return this;
    };
    Selection.prototype.attrFn = function (name, value) {
        this.each(function (node, datum, index, group) {
            node[name] = value(node, datum, index, group);
        });
        return this;
    };
    /**
     * Invokes the given function once, passing in this selection.
     * Returns this selection. Facilitates method chaining.
     * @param cb
     */
    Selection.prototype.call = function (cb) {
        cb(this);
        return this;
    };
    Object.defineProperty(Selection.prototype, "size", {
        /**
         * Returns the total number of nodes in this selection.
         */
        get: function () {
            var size = 0;
            this.each(function () { return size++; });
            return size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "data", {
        /**
         * Returns the array of data for the selected elements.
         */
        get: function () {
            var data = [];
            this.each(function (_, datum) { return data.push(datum); });
            return data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "enter", {
        get: function () {
            return new Selection(this.enterGroups ? this.enterGroups : [[]], this.parents);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "exit", {
        get: function () {
            return new Selection(this.exitGroups ? this.exitGroups : [[]], this.parents);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Binds the given value to each selected node and returns this selection
     * with its {@link GDatum} type changed to the type of the given value.
     * This method doesn't compute a join and doesn't affect indexes or the enter and exit selections.
     * This method can also be used to clear bound data.
     * @param value
     */
    Selection.prototype.setDatum = function (value) {
        return this.each(function (node) {
            node.datum = value;
        });
    };
    Object.defineProperty(Selection.prototype, "datum", {
        /**
         * Returns the bound datum for the first non-null element in the selection.
         * This is generally useful only if you know the selection contains exactly one element.
         */
        get: function () {
            var node = this.node();
            return node ? node.datum : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Binds the specified array of values with the selected nodes, returning a new selection
     * that represents the _update_ selection: the nodes successfully bound to the values.
     * Also defines the {@link enter} and {@link exit} selections on the returned selection,
     * which can be used to add or remove the nodes to correspond to the new data.
     * The `values` is an array of values of a particular type, or a function that returns
     * an array of values for each group.
     * When values are assigned to the nodes, they are stored in the {@link Node.datum} property.
     * @param values
     * @param key
     */
    Selection.prototype.setData = function (values, key) {
        if (typeof values !== 'function') {
            var data_1 = values;
            values = function () { return data_1; };
        }
        var groups = this.groups;
        var parents = this.parents;
        var numGroups = groups.length;
        var updateGroups = new Array(numGroups);
        var enterGroups = new Array(numGroups);
        var exitGroups = new Array(numGroups);
        for (var j = 0; j < numGroups; j++) {
            var group = groups[j];
            var parent_2 = parents[j];
            if (!parent_2) {
                throw new Error("Group #" + j + " has no parent: " + group);
            }
            var groupSize = group.length;
            var data = values(parent_2, parent_2.datum, j, parents);
            var dataSize = data.length;
            var enterGroup = enterGroups[j] = new Array(dataSize);
            var updateGroup = updateGroups[j] = new Array(dataSize);
            var exitGroup = exitGroups[j] = new Array(groupSize);
            if (key) {
                this.bindKey(parent_2, group, enterGroup, updateGroup, exitGroup, data, key);
            }
            else {
                this.bindIndex(parent_2, group, enterGroup, updateGroup, exitGroup, data);
            }
            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for (var i0 = 0, i1 = 0; i0 < dataSize; i0++) {
                var previous = enterGroup[i0];
                if (previous) {
                    if (i0 >= i1) {
                        i1 = i0 + 1;
                    }
                    var next = void 0;
                    while (!(next = updateGroup[i1]) && i1 < dataSize) {
                        i1++;
                    }
                    previous.next = next || null;
                }
            }
        }
        var result = new Selection(updateGroups, parents);
        result.enterGroups = enterGroups;
        result.exitGroups = exitGroups;
        return result;
    };
    Selection.prototype.bindIndex = function (parent, group, enter, update, exit, data) {
        var groupSize = group.length;
        var dataSize = data.length;
        var i = 0;
        for (; i < dataSize; i++) {
            var node = group[i];
            if (node) {
                node.datum = data[i];
                update[i] = node;
            }
            else { // more datums than group nodes
                enter[i] = new EnterNode(parent, data[i]);
            }
        }
        // more group nodes than datums
        for (; i < groupSize; i++) {
            var node = group[i];
            if (node) {
                exit[i] = node;
            }
        }
    };
    Selection.prototype.bindKey = function (parent, group, enter, update, exit, data, key) {
        var groupSize = group.length;
        var dataSize = data.length;
        var keyValues = new Array(groupSize);
        var nodeByKeyValue = {};
        // Compute the key for each node.
        // If multiple nodes have the same key, the duplicates are added to exit.
        for (var i = 0; i < groupSize; i++) {
            var node = group[i];
            if (node) {
                var keyValue = keyValues[i] = Selection.keyPrefix + key(node, node.datum, i, group);
                if (keyValue in nodeByKeyValue) {
                    exit[i] = node;
                }
                else {
                    nodeByKeyValue[keyValue] = node;
                }
            }
        }
        // Compute the key for each datum.
        // If there is a node associated with this key, join and add it to update.
        // If there is not (or the key is a duplicate), add it to enter.
        for (var i = 0; i < dataSize; i++) {
            var keyValue = Selection.keyPrefix + key(parent, data[i], i, data);
            var node = nodeByKeyValue[keyValue];
            if (node) {
                update[i] = node;
                node.datum = data[i];
                nodeByKeyValue[keyValue] = undefined;
            }
            else {
                enter[i] = new EnterNode(parent, data[i]);
            }
        }
        // Add any remaining nodes that were not bound to data to exit.
        for (var i = 0; i < groupSize; i++) {
            var node = group[i];
            if (node && (nodeByKeyValue[keyValues[i]] === node)) {
                exit[i] = node;
            }
        }
    };
    Selection.keyPrefix = '$'; // Protect against keys like '__proto__'.
    return Selection;
}());
exports.Selection = Selection;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/arc.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(/*! ./shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var path2D_1 = __webpack_require__(/*! ../path2D */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js");
var bbox_1 = __webpack_require__(/*! ../bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var angle_1 = __webpack_require__(/*! ../../util/angle */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js");
var object_1 = __webpack_require__(/*! ../../util/object */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/object.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var ArcType;
(function (ArcType) {
    ArcType[ArcType["Open"] = 0] = "Open";
    ArcType[ArcType["Chord"] = 1] = "Chord";
    ArcType[ArcType["Round"] = 2] = "Round";
})(ArcType = exports.ArcType || (exports.ArcType = {}));
/**
 * Elliptical arc node.
 */
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc() {
        var _this = _super.call(this) || this;
        // Declare a path to retain for later rendering and hit testing
        // using custom Path2D class. It's pure TypeScript and works in all browsers.
        _this.path = new path2D_1.Path2D();
        /**
         * It's not always that the path has to be updated.
         * For example, if transform attributes (such as `translationX`)
         * are changed, we don't have to update the path. The `dirtyFlag`
         * is how we keep track if the path has to be updated or not.
         */
        _this._dirtyPath = true;
        _this._centerX = 0;
        _this._centerY = 0;
        _this._radiusX = 10;
        _this._radiusY = 10;
        _this._startAngle = 0;
        _this._endAngle = Math.PI * 2;
        _this._counterClockwise = false;
        /**
         * The type of arc to render:
         * - {@link ArcType.Open} - end points of the arc segment are not connected (default)
         * - {@link ArcType.Chord} - end points of the arc segment are connected by a line segment
         * - {@link ArcType.Round} - each of the end points of the arc segment are connected
         *                           to the center of the arc
         * Arcs with {@link ArcType.Open} do not support hit testing, even if they have their
         * {@link Shape.fillStyle} set, because they are not closed paths. Hit testing support
         * would require using two paths - one for rendering, another for hit testing - and there
         * doesn't seem to be a compelling reason to do that, when one can just use {@link ArcType.Chord}
         * to create a closed path.
         */
        _this._type = ArcType.Open;
        _this.getBBox = function () {
            // Only works with full arcs (circles) and untransformed ellipses.
            return new bbox_1.BBox(_this.centerX - _this.radiusX, _this.centerY - _this.radiusY, _this.radiusX * 2, _this.radiusY * 2);
        };
        _this.restoreOwnStyles();
        return _this;
    }
    Arc.create = function (centerX, centerY, radiusX, radiusY, startAngle, endAngle, counterClockwise) {
        if (radiusY === void 0) { radiusY = radiusX; }
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (counterClockwise === void 0) { counterClockwise = false; }
        var arc = new Arc();
        arc.centerX = centerX;
        arc.centerY = centerY;
        arc.radiusX = radiusX;
        arc.radiusY = radiusY;
        arc.startAngle = startAngle;
        arc.endAngle = endAngle;
        arc.counterClockwise = counterClockwise;
        return arc;
    };
    Object.defineProperty(Arc.prototype, "dirtyPath", {
        get: function () {
            return this._dirtyPath;
        },
        set: function (value) {
            if (this._dirtyPath !== value) {
                this._dirtyPath = value;
                if (value) {
                    this.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "centerX", {
        get: function () {
            return this._centerX;
        },
        set: function (value) {
            if (this._centerX !== value) {
                this._centerX = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "centerY", {
        get: function () {
            return this._centerY;
        },
        set: function (value) {
            if (this._centerY !== value) {
                this._centerY = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "radiusX", {
        get: function () {
            return this._radiusX;
        },
        set: function (value) {
            if (this._radiusX !== value) {
                this._radiusX = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "radiusY", {
        get: function () {
            return this._radiusY;
        },
        set: function (value) {
            if (this._radiusY !== value) {
                this._radiusY = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "startAngle", {
        get: function () {
            return this._startAngle;
        },
        set: function (value) {
            if (this._startAngle !== value) {
                this._startAngle = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "endAngle", {
        get: function () {
            return this._endAngle;
        },
        set: function (value) {
            if (this._endAngle !== value) {
                this._endAngle = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "fullPie", {
        get: function () {
            return number_1.isEqual(angle_1.normalizeAngle360(this.startAngle), angle_1.normalizeAngle360(this.endAngle));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "counterClockwise", {
        get: function () {
            return this._counterClockwise;
        },
        set: function (value) {
            if (this._counterClockwise !== value) {
                this._counterClockwise = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (this._type !== value) {
                this._type = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Arc.prototype.updatePath = function () {
        if (!this.dirtyPath) {
            return;
        }
        var path = this.path;
        path.clear(); // No need to recreate the Path, can simply clear the existing one.
        // This is much faster than the native Path2D implementation even though this `cubicArc`
        // method is pure TypeScript and actually produces the definition of an elliptical arc,
        // where you can specify two radii and rotation, while Path2D's `arc` method simply produces
        // a circular arc. Maybe it's due to the experimental nature of the Path2D class,
        // maybe it's because we have to create a new instance of it on each render, who knows...
        path.cubicArc(this.centerX, this.centerY, this.radiusX, this.radiusY, 0, this.startAngle, this.endAngle, this.counterClockwise ? 1 : 0);
        if (this.type === ArcType.Chord) {
            path.closePath();
        }
        else if (this.type === ArcType.Round && !this.fullPie) {
            path.lineTo(this.centerX, this.centerY);
            path.closePath();
        }
        this.dirtyPath = false;
    };
    Arc.prototype.isPointInPath = function (x, y) {
        var point = this.transformPoint(x, y);
        var bbox = this.getBBox();
        return this.type !== ArcType.Open
            && bbox.containsPoint(point.x, point.y)
            && this.path.isPointInPath(point.x, point.y);
    };
    Arc.prototype.isPointInStroke = function (x, y) {
        return false;
    };
    Arc.prototype.render = function (ctx) {
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        this.matrix.toContext(ctx);
        this.updatePath();
        this.scene.appendPath(this.path);
        this.fillStroke(ctx);
        this.dirty = false;
    };
    Arc.className = 'Arc';
    Arc.defaultStyles = object_1.chainObjects(shape_1.Shape.defaultStyles, {
        lineWidth: 1,
        fillStyle: null
    });
    return Arc;
}(shape_1.Shape));
exports.Arc = Arc;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/line.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/line.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(/*! ./shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var object_1 = __webpack_require__(/*! ../../util/object */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/object.js");
var bbox_1 = __webpack_require__(/*! ../bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super.call(this) || this;
        _this._x1 = 0;
        _this._y1 = 0;
        _this._x2 = 0;
        _this._y2 = 0;
        _this.getBBox = function () {
            return new bbox_1.BBox(_this.x1, _this.y1, _this.x2 - _this.x1, _this.y2 - _this.y1);
        };
        _this.restoreOwnStyles();
        return _this;
    }
    Line.create = function (x1, y1, x2, y2) {
        var line = new Line();
        line.x1 = x1;
        line.y1 = y1;
        line.x2 = x2;
        line.y2 = y2;
        return line;
    };
    Object.defineProperty(Line.prototype, "x1", {
        get: function () {
            // TODO: Investigate getter performance further in the context
            //       of the scene graph.
            //       In isolated benchmarks using a getter has the same
            //       performance as a direct property access in Firefox 64.
            //       But in Chrome 71 the getter is 60% slower than direct access.
            //       Direct read is 4.5+ times slower in Chrome than it is in Firefox.
            //       Property access and direct read have the same performance
            //       in Safari 12, which is 2+ times faster than Firefox at this.
            // https://jsperf.com/es5-getters-setters-versus-getter-setter-methods/18
            // This is a know Chrome issue. They say it's not a regression, since
            // the behavior is observed since M60, but jsperf.com history shows the
            // 10x slowdown happened between Chrome 48 and Chrome 57.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=908743
            return this._x1;
        },
        set: function (value) {
            if (this._x1 !== value) {
                this._x1 = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "y1", {
        get: function () {
            return this._y1;
        },
        set: function (value) {
            if (this._y1 !== value) {
                this._y1 = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "x2", {
        get: function () {
            return this._x2;
        },
        set: function (value) {
            if (this._x2 !== value) {
                this._x2 = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "y2", {
        get: function () {
            return this._y2;
        },
        set: function (value) {
            if (this._y2 !== value) {
                this._y2 = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.isPointInPath = function (x, y) {
        return false;
    };
    Line.prototype.isPointInStroke = function (x, y) {
        return false;
    };
    Line.prototype.render = function (ctx) {
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        this.matrix.toContext(ctx);
        var x1 = this.x1;
        var y1 = this.y1;
        var x2 = this.x2;
        var y2 = this.y2;
        // Align to the pixel grid if the line is strictly vertical
        // or horizontal (but not both, i.e. a dot).
        if (x1 === x2) {
            var x = Math.round(x1) + Math.floor(this.strokeWidth) % 2 / 2;
            x1 = x;
            x2 = x;
        }
        else if (y1 === y2) {
            var y = Math.round(y1) + Math.floor(this.strokeWidth) % 2 / 2;
            y1 = y;
            y2 = y;
        }
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        this.fillStroke(ctx);
        this.dirty = false;
    };
    Line.className = 'Line';
    Line.defaultStyles = object_1.chainObjects(shape_1.Shape.defaultStyles, {
        fill: undefined,
        strokeWidth: 1
    });
    return Line;
}(shape_1.Shape));
exports.Line = Line;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/path.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/path.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(/*! ./shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var path2D_1 = __webpack_require__(/*! ../path2D */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js");
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Make sure to set {@link dirty} to `true` after changing the path.
         */
        _this.path = new path2D_1.Path2D();
        /**
         * Path definition in SVG path syntax:
         * https://www.w3.org/TR/SVG11/paths.html#DAttribute
         */
        _this._svgPath = '';
        return _this;
    }
    Object.defineProperty(Path.prototype, "svgPath", {
        get: function () {
            return this._svgPath;
        },
        set: function (value) {
            if (this._svgPath !== value) {
                this._svgPath = value;
                this.path.setFromString(value);
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Path.prototype.isPointInPath = function (x, y) {
        var point = this.transformPoint(x, y);
        return this.path.closedPath && this.path.isPointInPath(point.x, point.y);
    };
    Path.prototype.isPointInStroke = function (x, y) {
        return false;
    };
    Path.prototype.render = function (ctx) {
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        this.matrix.toContext(ctx);
        this.scene.appendPath(this.path);
        this.fillStroke(ctx);
        this.dirty = false;
    };
    Path.className = 'Path';
    return Path;
}(shape_1.Shape));
exports.Path = Path;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/rect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/rect.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(/*! ./shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var path2D_1 = __webpack_require__(/*! ../path2D */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js");
var bbox_1 = __webpack_require__(/*! ../bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var RectSizing;
(function (RectSizing) {
    RectSizing[RectSizing["Content"] = 0] = "Content";
    RectSizing[RectSizing["Border"] = 1] = "Border";
})(RectSizing = exports.RectSizing || (exports.RectSizing = {}));
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = new path2D_1.Path2D();
        _this._dirtyPath = true;
        _this._x = 0;
        _this._y = 0;
        _this._width = 10;
        _this._height = 10;
        _this._radius = 0;
        /**
         * If `true`, the rect is aligned to the pixel grid for crisp looking lines.
         * Animated rects may not look nice with this option enabled, for example
         * when a rect is translated by a sub-pixel value on each frame.
         */
        _this._crisp = false;
        _this.effectiveStrokeWidth = shape_1.Shape.defaultStyles.strokeWidth;
        _this._sizing = RectSizing.Content;
        _this.getBBox = function () {
            return new bbox_1.BBox(_this.x, _this.y, _this.width, _this.height);
        };
        return _this;
    }
    Rect.create = function (x, y, width, height, radius) {
        if (radius === void 0) { radius = 0; }
        var rect = new Rect();
        rect.x = x;
        rect.y = y;
        rect.width = width;
        rect.height = height;
        rect.radius = radius;
        return rect;
    };
    Object.defineProperty(Rect.prototype, "dirtyPath", {
        get: function () {
            return this._dirtyPath;
        },
        set: function (value) {
            if (this._dirtyPath !== value) {
                this._dirtyPath = value;
                if (value) {
                    this.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (this._x !== value) {
                this._x = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (this._y !== value) {
                this._y = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (this._width !== value) {
                this._width = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (this._height !== value) {
                this._height = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (this._radius !== value) {
                this._radius = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "crisp", {
        get: function () {
            return this._crisp;
        },
        set: function (value) {
            if (this._crisp !== value) {
                this._crisp = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            if (this._strokeWidth !== value) {
                this._strokeWidth = value;
                // Normally, when the `lineWidth` changes, we only need to repaint the rect
                // without updating the path. If the `isCrisp` is set to `true` however,
                // we need to update the path to make sure the new stroke aligns to
                // the pixel grid. This is the reason we override the `lineWidth` setter
                // and getter here.
                if (this.crisp || this.sizing === RectSizing.Border) {
                    this.dirtyPath = true;
                }
                else {
                    this.effectiveStrokeWidth = value;
                    this.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "sizing", {
        get: function () {
            return this._sizing;
        },
        set: function (value) {
            if (this._sizing !== value) {
                this._sizing = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.updatePath = function () {
        if (!this.dirtyPath) {
            return;
        }
        var borderSizing = this.sizing === RectSizing.Border;
        var path = this.path;
        path.clear();
        var x = this.x;
        var y = this.y;
        var width = this.width;
        var height = this.height;
        var strokeWidth;
        if (borderSizing) {
            var halfWidth = width / 2;
            var halfHeight = height / 2;
            strokeWidth = Math.min(this.strokeWidth, halfWidth, halfHeight);
            x = Math.min(x + strokeWidth / 2, x + halfWidth);
            y = Math.min(y + strokeWidth / 2, y + halfHeight);
            width = Math.max(width - strokeWidth, 0);
            height = Math.max(height - strokeWidth, 0);
        }
        else {
            strokeWidth = this.strokeWidth;
        }
        this.effectiveStrokeWidth = strokeWidth;
        if (this.crisp && !borderSizing) {
            var alignment = Math.floor(strokeWidth) % 2 / 2;
            path.rect(Math.floor(x) + alignment, Math.floor(y) + alignment, Math.floor(width) + Math.floor(x % 1 + width % 1), Math.floor(height) + Math.floor(y % 1 + height % 1));
        }
        else {
            path.rect(x, y, width, height);
        }
        this.dirtyPath = false;
    };
    Rect.prototype.isPointInPath = function (x, y) {
        var point = this.transformPoint(x, y);
        var bbox = this.getBBox();
        return bbox.containsPoint(point.x, point.y);
    };
    Rect.prototype.isPointInStroke = function (x, y) {
        return false;
    };
    Rect.prototype.render = function (ctx) {
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        this.matrix.toContext(ctx);
        this.updatePath();
        this.scene.appendPath(this.path);
        this.fillStroke(ctx);
        this.dirty = false;
    };
    Rect.prototype.fillStroke = function (ctx) {
        if (!this.scene) {
            return;
        }
        var pixelRatio = this.scene.canvas.pixelRatio || 1;
        if (this.fill) {
            ctx.fillStyle = this.fill;
            ctx.globalAlpha = this.opacity * this.fillOpacity;
            // The canvas context scaling (depends on the device's pixel ratio)
            // has no effect on shadows, so we have to account for the pixel ratio
            // manually here.
            var fillShadow = this.fillShadow;
            if (fillShadow && fillShadow.enabled) {
                ctx.shadowColor = fillShadow.color;
                ctx.shadowOffsetX = fillShadow.xOffset * pixelRatio;
                ctx.shadowOffsetY = fillShadow.yOffset * pixelRatio;
                ctx.shadowBlur = fillShadow.blur * pixelRatio;
            }
            ctx.fill();
        }
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        if (this.stroke && this.effectiveStrokeWidth) {
            ctx.strokeStyle = this.stroke;
            ctx.globalAlpha = this.opacity * this.strokeOpacity;
            ctx.lineWidth = this.effectiveStrokeWidth;
            if (this.lineDash) {
                ctx.setLineDash(this.lineDash);
            }
            if (this.lineDashOffset) {
                ctx.lineDashOffset = this.lineDashOffset;
            }
            if (this.lineCap) {
                ctx.lineCap = this.lineCap;
            }
            if (this.lineJoin) {
                ctx.lineJoin = this.lineJoin;
            }
            var strokeShadow = this.strokeShadow;
            if (strokeShadow && strokeShadow.enabled) {
                ctx.shadowColor = strokeShadow.color;
                ctx.shadowOffsetX = strokeShadow.xOffset * pixelRatio;
                ctx.shadowOffsetY = strokeShadow.yOffset * pixelRatio;
                ctx.shadowBlur = strokeShadow.blur * pixelRatio;
            }
            ctx.stroke();
        }
    };
    Rect.className = 'Rect';
    return Rect;
}(shape_1.Shape));
exports.Rect = Rect;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/sector.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/sector.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(/*! ./shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var path2D_1 = __webpack_require__(/*! ../path2D */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/path2D.js");
var angle_1 = __webpack_require__(/*! ../../util/angle */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js");
var number_1 = __webpack_require__(/*! ../../util/number */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js");
var bbox_1 = __webpack_require__(/*! ../bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var Sector = /** @class */ (function (_super) {
    __extends(Sector, _super);
    function Sector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = new path2D_1.Path2D();
        _this._dirtyPath = true;
        _this._centerX = 0;
        _this._centerY = 0;
        _this._centerOffset = 0;
        _this._innerRadius = 10;
        _this._outerRadius = 20;
        _this._startAngle = 0;
        _this._endAngle = Math.PI * 2;
        _this._angleOffset = 0;
        _this.getBBox = function () {
            var radius = _this.outerRadius;
            return new bbox_1.BBox(_this.centerX - radius, _this.centerY - radius, radius * 2, radius * 2);
        };
        return _this;
    }
    Sector.create = function (centerX, centerY, innerRadius, outerRadius, startAngle, endAngle) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        var sector = new Sector();
        sector.centerX = centerX;
        sector.centerY = centerY;
        sector.innerRadius = innerRadius;
        sector.outerRadius = outerRadius;
        sector.startAngle = startAngle;
        sector.endAngle = endAngle;
        return sector;
    };
    Object.defineProperty(Sector.prototype, "dirtyPath", {
        get: function () {
            return this._dirtyPath;
        },
        set: function (value) {
            if (this._dirtyPath !== value) {
                this._dirtyPath = value;
                if (value) {
                    this.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "centerX", {
        get: function () {
            return this._centerX;
        },
        set: function (value) {
            if (this._centerX !== value) {
                this._centerX = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "centerY", {
        get: function () {
            return this._centerY;
        },
        set: function (value) {
            if (this._centerY !== value) {
                this._centerY = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "centerOffset", {
        get: function () {
            return this._centerOffset;
        },
        set: function (value) {
            if (this._centerOffset !== value) {
                this._centerOffset = Math.max(0, value);
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "innerRadius", {
        get: function () {
            return this._innerRadius;
        },
        set: function (value) {
            if (this._innerRadius !== value) {
                this._innerRadius = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "outerRadius", {
        get: function () {
            return this._outerRadius;
        },
        set: function (value) {
            if (this._outerRadius !== value) {
                this._outerRadius = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "startAngle", {
        get: function () {
            return this._startAngle;
        },
        set: function (value) {
            if (this._startAngle !== value) {
                this._startAngle = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "endAngle", {
        get: function () {
            return this._endAngle;
        },
        set: function (value) {
            if (this._endAngle !== value) {
                this._endAngle = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sector.prototype, "angleOffset", {
        get: function () {
            return this._angleOffset;
        },
        set: function (value) {
            if (this._angleOffset !== value) {
                this._angleOffset = value;
                this.dirtyPath = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Sector.prototype.isPointInPath = function (x, y) {
        var point = this.transformPoint(x, y);
        return this.path.isPointInPath(point.x, point.y);
    };
    Sector.prototype.isPointInStroke = function (x, y) {
        return false;
    };
    Object.defineProperty(Sector.prototype, "fullPie", {
        get: function () {
            return number_1.isEqual(angle_1.normalizeAngle360(this.startAngle), angle_1.normalizeAngle360(this.endAngle));
        },
        enumerable: true,
        configurable: true
    });
    Sector.prototype.updatePath = function () {
        if (!this.dirtyPath) {
            return;
        }
        var path = this.path;
        var angleOffset = this.angleOffset;
        var startAngle = Math.min(this.startAngle, this.endAngle) + angleOffset;
        var endAngle = Math.max(this.startAngle, this.endAngle) + angleOffset;
        var midAngle = (startAngle + endAngle) * 0.5;
        var innerRadius = Math.min(this.innerRadius, this.outerRadius);
        var outerRadius = Math.max(this.innerRadius, this.outerRadius);
        var centerOffset = this.centerOffset;
        var fullPie = this.fullPie;
        var radiiGap = outerRadius - innerRadius;
        // const tipOffset = radiiGap / 3;
        // const showTip = radiiGap < outerRadius / 2;
        var centerX = this.centerX;
        var centerY = this.centerY;
        path.clear();
        if (centerOffset) {
            centerX += centerOffset * Math.cos(midAngle);
            centerY += centerOffset * Math.sin(midAngle);
        }
        if (!fullPie) {
            path.moveTo(centerX + innerRadius * Math.cos(startAngle), centerY + innerRadius * Math.sin(startAngle));
            // if (showTip) {
            //     path.lineTo(
            //         centerX + 0.5 * (innerRadius + outerRadius) * Math.cos(startAngle) + tipOffset * Math.cos(startAngle + Math.PI / 2),
            //         centerY + 0.5 * (innerRadius + outerRadius) * Math.sin(startAngle) + tipOffset * Math.sin(startAngle + Math.PI / 2)
            //     );
            // }
            path.lineTo(centerX + outerRadius * Math.cos(startAngle), centerY + outerRadius * Math.sin(startAngle));
        }
        path.cubicArc(centerX, centerY, outerRadius, outerRadius, 0, startAngle, endAngle, 0);
        // path[fullPie ? 'moveTo' : 'lineTo'](
        //     centerX + innerRadius * Math.cos(endAngle),
        //     centerY + innerRadius * Math.sin(endAngle)
        // );
        if (fullPie) {
            path.moveTo(centerX + innerRadius * Math.cos(endAngle), centerY + innerRadius * Math.sin(endAngle));
        }
        else {
            // if (showTip) {
            //     path.lineTo(
            //         centerX + 0.5 * (innerRadius + outerRadius) * Math.cos(endAngle) + tipOffset * Math.cos(endAngle + Math.PI / 2),
            //         centerY + 0.5 * (innerRadius + outerRadius) * Math.sin(endAngle) + tipOffset * Math.sin(endAngle + Math.PI / 2)
            //     );
            // }
            // Temp workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=993330
            // Revert this commit when fixed ^^.
            var x = centerX + innerRadius * Math.cos(endAngle);
            path.lineTo(Math.abs(x) < 1e-8 ? 0 : x, centerY + innerRadius * Math.sin(endAngle));
        }
        path.cubicArc(centerX, centerY, innerRadius, innerRadius, 0, endAngle, startAngle, 1);
        path.closePath();
        this.dirtyPath = false;
    };
    Sector.prototype.render = function (ctx) {
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        this.matrix.toContext(ctx);
        this.updatePath();
        this.scene.appendPath(this.path);
        this.fillStroke(ctx);
        this.dirty = false;
    };
    Sector.className = 'Sector';
    return Sector;
}(shape_1.Shape));
exports.Sector = Sector;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! ../node */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/node.js");
var object_1 = __webpack_require__(/*! ../../util/object */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/object.js");
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fillOpacity = 1;
        _this._strokeOpacity = 1;
        _this._fill = Shape.defaultStyles.fill; //| CanvasGradient | CanvasPattern;
        /**
         * Note that `strokeStyle = null` means invisible stroke,
         * while `lineWidth = 0` means no stroke, and sometimes this can mean different things.
         * For example, a rect shape with an invisible stroke may not align to the pixel grid
         * properly because the stroke affects the rules of alignment, and arc shapes forming
         * a pie chart will have a gap between them if they have an invisible stroke, whereas
         * there would be not gap if there was no stroke at all.
         * The preferred way of making the stroke invisible is setting the `lineWidth` to zero,
         * unless specific looks that is achieved by having an invisible stroke is desired.
         */
        _this._stroke = Shape.defaultStyles.stroke;
        _this._strokeWidth = Shape.defaultStyles.strokeWidth;
        _this._lineDash = Shape.defaultStyles.lineDash;
        _this._lineDashOffset = Shape.defaultStyles.lineDashOffset;
        _this._lineCap = Shape.defaultStyles.lineCap;
        _this._lineJoin = Shape.defaultStyles.lineJoin;
        _this._opacity = Shape.defaultStyles.opacity;
        _this._fillShadow = Shape.defaultStyles.fillShadow;
        _this._strokeShadow = Shape.defaultStyles.strokeShadow;
        return _this;
    }
    /**
     * Restores the default styles introduced by this subclass.
     */
    Shape.prototype.restoreOwnStyles = function () {
        var styles = this.constructor.defaultStyles;
        var keys = Object.getOwnPropertyNames(styles);
        // getOwnPropertyNames is about 2.5 times faster than
        // for..in with the hasOwnProperty check and in this
        // case, where most properties are inherited, can be
        // more then an order of magnitude faster.
        for (var i = 0, n = keys.length; i < n; i++) {
            var key = keys[i];
            this[key] = styles[key];
        }
    };
    Shape.prototype.restoreAllStyles = function () {
        var styles = this.constructor.defaultStyles;
        for (var property in styles) {
            this[property] = styles[property];
        }
    };
    /**
     * Restores the base class default styles that have been overridden by this subclass.
     */
    Shape.prototype.restoreOverriddenStyles = function () {
        var styles = this.constructor.defaultStyles;
        var protoStyles = Object.getPrototypeOf(styles);
        for (var property in styles) {
            if (styles.hasOwnProperty(property) && protoStyles.hasOwnProperty(property)) {
                this[property] = styles[property];
            }
        }
    };
    Object.defineProperty(Shape.prototype, "fillOpacity", {
        get: function () {
            return this._fillOpacity;
        },
        set: function (value) {
            if (this._fillOpacity !== value) {
                this._fillOpacity = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "strokeOpacity", {
        get: function () {
            return this._strokeOpacity;
        },
        set: function (value) {
            if (this._strokeOpacity !== value) {
                this._strokeOpacity = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (value) {
            if (this._fill !== value) {
                this._fill = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (value) {
            if (this._stroke !== value) {
                this._stroke = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            if (this._strokeWidth !== value) {
                this._strokeWidth = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "lineDash", {
        get: function () {
            return this._lineDash;
        },
        set: function (value) {
            var oldValue = this._lineDash;
            if (oldValue !== value) {
                if (oldValue && value && oldValue.length === value.length) {
                    var identical = true;
                    var n = value.length;
                    for (var i = 0; i < n; i++) {
                        if (oldValue[i] !== value[i]) {
                            identical = false;
                            break;
                        }
                    }
                    if (identical) {
                        return;
                    }
                }
                this._lineDash = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "lineDashOffset", {
        get: function () {
            return this._lineDashOffset;
        },
        set: function (value) {
            if (this._lineDashOffset !== value) {
                this._lineDashOffset = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "lineCap", {
        get: function () {
            return this._lineCap;
        },
        set: function (value) {
            if (this._lineCap !== value) {
                this._lineCap = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "lineJoin", {
        get: function () {
            return this._lineJoin;
        },
        set: function (value) {
            if (this._lineJoin !== value) {
                this._lineJoin = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (value) {
            value = Math.min(1, Math.max(0, value));
            if (this._opacity !== value) {
                this._opacity = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "fillShadow", {
        get: function () {
            return this._fillShadow;
        },
        set: function (value) {
            var _this = this;
            var fillShadow = this._fillShadow;
            if (fillShadow !== value) {
                if (fillShadow) {
                    fillShadow.onChange = undefined;
                }
                if (value) {
                    value.onChange = function () { return _this.dirty = true; };
                }
                this._fillShadow = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "strokeShadow", {
        get: function () {
            return this._strokeShadow;
        },
        set: function (value) {
            var _this = this;
            var strokeShadow = this._strokeShadow;
            if (strokeShadow !== value) {
                if (strokeShadow) {
                    strokeShadow.onChange = undefined;
                }
                if (value) {
                    value.onChange = function () { return _this.dirty = true; };
                }
                this._strokeShadow = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.fillStroke = function (ctx) {
        if (!this.scene) {
            return;
        }
        var pixelRatio = this.scene.canvas.pixelRatio || 1;
        if (this.fill) {
            ctx.fillStyle = this.fill;
            ctx.globalAlpha = this.opacity * this.fillOpacity;
            // The canvas context scaling (depends on the device's pixel ratio)
            // has no effect on shadows, so we have to account for the pixel ratio
            // manually here.
            var fillShadow = this.fillShadow;
            if (fillShadow && fillShadow.enabled) {
                ctx.shadowColor = fillShadow.color;
                ctx.shadowOffsetX = fillShadow.xOffset * pixelRatio;
                ctx.shadowOffsetY = fillShadow.yOffset * pixelRatio;
                ctx.shadowBlur = fillShadow.blur * pixelRatio;
            }
            ctx.fill();
        }
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        if (this.stroke && this.strokeWidth) {
            ctx.strokeStyle = this.stroke;
            ctx.globalAlpha = this.opacity * this.strokeOpacity;
            ctx.lineWidth = this.strokeWidth;
            if (this.lineDash) {
                ctx.setLineDash(this.lineDash);
            }
            if (this.lineDashOffset) {
                ctx.lineDashOffset = this.lineDashOffset;
            }
            if (this.lineCap) {
                ctx.lineCap = this.lineCap;
            }
            if (this.lineJoin) {
                ctx.lineJoin = this.lineJoin;
            }
            var strokeShadow = this.strokeShadow;
            if (strokeShadow && strokeShadow.enabled) {
                ctx.shadowColor = strokeShadow.color;
                ctx.shadowOffsetX = strokeShadow.xOffset * pixelRatio;
                ctx.shadowOffsetY = strokeShadow.yOffset * pixelRatio;
                ctx.shadowBlur = strokeShadow.blur * pixelRatio;
            }
            ctx.stroke();
        }
    };
    Shape.prototype.isPointInNode = function (x, y) {
        return this.isPointInPath(x, y);
    };
    /**
     * Defaults for style properties. Note that properties that affect the position
     * and shape of the node are not considered style properties, for example:
     * `x`, `y`, `width`, `height`, `radius`, `rotation`, etc.
     * Can be used to reset to the original styling after some custom styling
     * has been applied (using the `restoreOwnStyles` and `restoreAllStyles` methods).
     * These static defaults are meant to be inherited by subclasses.
     */
    Shape.defaultStyles = object_1.chainObjects({}, {
        fill: 'black',
        stroke: undefined,
        strokeWidth: 0,
        lineDash: undefined,
        lineDashOffset: 0,
        lineCap: null,
        lineJoin: null,
        opacity: 1,
        fillShadow: undefined,
        strokeShadow: undefined
    });
    return Shape;
}(node_1.Node));
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/text.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(/*! ./shape */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/shape/shape.js");
var object_1 = __webpack_require__(/*! ../../util/object */ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/object.js");
var bbox_1 = __webpack_require__(/*! ../bbox */ "./node_modules/ag-grid-enterprise/dist/lib/charts/scene/bbox.js");
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._x = 0;
        _this._y = 0;
        _this.lineBreakRe = /\r?\n/g;
        _this.lines = [];
        _this._text = '';
        _this._dirtyFont = true;
        _this._fontStyle = undefined;
        _this._fontWeight = undefined;
        _this._fontSize = 10;
        _this._fontFamily = 'sans-serif';
        _this._textAlign = Text.defaultStyles.textAlign;
        _this._textBaseline = Text.defaultStyles.textBaseline;
        _this._lineHeight = 14;
        return _this;
    }
    Object.defineProperty(Text.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (this._x !== value) {
                this._x = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (this._y !== value) {
                this._y = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.splitText = function () {
        this.lines = this._text.split(this.lineBreakRe);
    };
    Object.defineProperty(Text.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            var str = String(value); // `value` can be an object here
            if (this._text !== str) {
                this._text = str;
                this.splitText();
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "font", {
        get: function () {
            if (this.dirtyFont) {
                this.dirtyFont = false;
                return this._font = [
                    this.fontStyle || '',
                    this.fontWeight || '',
                    this.fontSize + 'px',
                    this.fontFamily
                ].join(' ').trim();
            }
            return this._font;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "dirtyFont", {
        get: function () {
            return this._dirtyFont;
        },
        set: function (value) {
            if (this._dirtyFont !== value) {
                this._dirtyFont = value;
                if (value) {
                    this.dirty = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (value) {
            if (this._fontStyle !== value) {
                this._fontStyle = value;
                this.dirtyFont = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "fontWeight", {
        get: function () {
            return this._fontWeight;
        },
        set: function (value) {
            if (this._fontWeight !== value) {
                this._fontWeight = value;
                this.dirtyFont = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (value) {
            if (!isFinite(value)) {
                value = 10;
            }
            if (this._fontSize !== value) {
                this._fontSize = value;
                this.dirtyFont = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily;
        },
        set: function (value) {
            if (this._fontFamily !== value) {
                this._fontFamily = value;
                this.dirtyFont = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "textAlign", {
        get: function () {
            return this._textAlign;
        },
        set: function (value) {
            if (this._textAlign !== value) {
                this._textAlign = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "textBaseline", {
        get: function () {
            return this._textBaseline;
        },
        set: function (value) {
            if (this._textBaseline !== value) {
                this._textBaseline = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "lineHeight", {
        get: function () {
            return this._lineHeight;
        },
        set: function (value) {
            // Multi-line text is complicated because:
            // - Canvas does not support it natively, so we have to implement it manually
            // - need to know the height of each line -> need to parse the font shorthand ->
            //   generally impossible to do because font size may not be in pixels
            // - so, need to measure the text instead, each line individually -> expensive
            // - or make the user provide the line height manually for multi-line text
            // - getBBox should use the lineHeight for multi-line text but ignore it otherwise
            // - textBaseline kind of loses its meaning for multi-line text
            if (this._lineHeight !== value) {
                this._lineHeight = value;
                this.dirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.getBBox = function () {
        return this.scene
            ? this.scene.canvas.has.textMetrics
                ? this.getPreciseBBox()
                : this.getApproximateBBox()
            : undefined;
    };
    Text.prototype.getPreciseBBox = function () {
        var metrics = this.scene.canvas.measureText(this.text, this.font, this.textBaseline, this.textAlign);
        return new bbox_1.BBox(this.x - metrics.actualBoundingBoxLeft, this.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
    };
    Text.prototype.getApproximateBBox = function () {
        var size = this.scene.canvas.getTextSize(this.text, this.font);
        var x = this.x;
        var y = this.y;
        switch (this.textAlign) {
            case 'end':
            case 'right':
                x -= size.width;
                break;
            case 'center':
                x -= size.width / 2;
        }
        switch (this.textBaseline) {
            case 'alphabetic':
                y -= size.height * 0.7;
                break;
            case 'middle':
                y -= size.height * 0.45;
                break;
            case 'ideographic':
                y -= size.height;
                break;
            case 'hanging':
                y -= size.height * 0.2;
                break;
            case 'bottom':
                y -= size.height;
                break;
        }
        return new bbox_1.BBox(x, y, size.width, size.height);
    };
    Text.prototype.isPointInPath = function (x, y) {
        var point = this.transformPoint(x, y);
        var bbox = this.getBBox();
        return bbox ? bbox.containsPoint(point.x, point.y) : false;
    };
    Text.prototype.isPointInStroke = function (x, y) {
        return false;
    };
    Text.prototype.render = function (ctx) {
        if (!this.scene || !this.lines.length) {
            return;
        }
        if (this.dirtyTransform) {
            this.computeTransformMatrix();
        }
        // this.matrix.transformBBox(this.getBBox!()).render(ctx); // debug
        this.matrix.toContext(ctx);
        if (this.opacity < 1) {
            ctx.globalAlpha = this.opacity;
        }
        ctx.font = this.font;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;
        var pixelRatio = this.scene.canvas.pixelRatio || 1;
        if (this.fill) {
            ctx.fillStyle = this.fill;
            var fillShadow = this.fillShadow;
            if (fillShadow && fillShadow.enabled) {
                ctx.shadowColor = fillShadow.color;
                ctx.shadowOffsetX = fillShadow.xOffset * pixelRatio;
                ctx.shadowOffsetY = fillShadow.yOffset * pixelRatio;
                ctx.shadowBlur = fillShadow.blur * pixelRatio;
            }
            ctx.fillText(this.text, this.x, this.y);
            // this.lines.forEach((text, index) => {
            //     ctx.fillText(text, this.x, this.y + index * this.lineHeight);
            // });
        }
        if (this.stroke && this.strokeWidth) {
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = this.strokeWidth;
            if (this.lineDash) {
                ctx.setLineDash(this.lineDash);
            }
            if (this.lineDashOffset) {
                ctx.lineDashOffset = this.lineDashOffset;
            }
            if (this.lineCap) {
                ctx.lineCap = this.lineCap;
            }
            if (this.lineJoin) {
                ctx.lineJoin = this.lineJoin;
            }
            var strokeShadow = this.strokeShadow;
            if (strokeShadow && strokeShadow.enabled) {
                ctx.shadowColor = strokeShadow.color;
                ctx.shadowOffsetX = strokeShadow.xOffset * pixelRatio;
                ctx.shadowOffsetY = strokeShadow.yOffset * pixelRatio;
                ctx.shadowBlur = strokeShadow.blur * pixelRatio;
            }
            ctx.strokeText(this.text, this.x, this.y);
        }
        this.dirty = false;
    };
    Text.className = 'Text';
    Text.defaultStyles = object_1.chainObjects(shape_1.Shape.defaultStyles, {
        textAlign: 'start',
        fontStyle: undefined,
        fontWeight: undefined,
        fontSize: 10,
        fontFamily: 'sans-serif',
        textBaseline: 'alphabetic'
    });
    return Text;
}(shape_1.Shape));
exports.Text = Text;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/angle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var twoPi = Math.PI * 2;
/**
 * Normalize the given angle to be in the [0, 2π) interval.
 * @param radians Angle in radians.
 */
function normalizeAngle360(radians) {
    radians %= twoPi;
    radians += twoPi;
    radians %= twoPi;
    return radians;
}
exports.normalizeAngle360 = normalizeAngle360;
function normalizeAngle360Inclusive(radians) {
    radians %= twoPi;
    radians += twoPi;
    if (radians !== twoPi) {
        radians %= twoPi;
    }
    return radians;
}
exports.normalizeAngle360Inclusive = normalizeAngle360Inclusive;
/**
 * Normalize the given angle to be in the [-π, π) interval.
 * @param radians Angle in radians.
 */
function normalizeAngle180(radians) {
    radians %= twoPi;
    if (radians < -Math.PI) {
        radians += twoPi;
    }
    else if (radians >= Math.PI) {
        radians -= twoPi;
    }
    return radians;
}
exports.normalizeAngle180 = normalizeAngle180;
function toRadians(degrees) {
    return degrees / 180 * Math.PI;
}
exports.toRadians = toRadians;
function toDegrees(radians) {
    return radians / Math.PI * 180;
}
exports.toDegrees = toDegrees;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the minimum and maximum value in the given iterable using natural order.
 * If the iterable contains no comparable values, returns `[undefined, undefined]`.
 * @param values
 */
function extent(values) {
    var n = values.length;
    var i = -1;
    var value;
    var min;
    var max;
    while (++i < n) { // Find the first comparable value.
        if ((value = values[i]) != null && value >= value) {
            min = max = value;
            while (++i < n) { // Compare the remaining values.
                if ((value = values[i]) != null) {
                    if (min > value) {
                        min = value;
                    }
                    if (max < value) {
                        max = value;
                    }
                }
            }
        }
    }
    return [min, max];
}
exports.extent = extent;
function find(arr, predicate) {
    for (var i = 0, ln = arr.length; i < ln; i++) {
        var value = arr[i];
        if (predicate(value, i, arr)) {
            return value;
        }
    }
}
exports.find = find;
// This method will only return `undefined`, if there's not a single valid finite number
// in the given array of values.
function numericExtent(values) {
    var _a = extent(values), min = _a[0], max = _a[1];
    if (typeof min === 'number' && isFinite(min) && typeof max === 'number' && isFinite(max)) {
        return [min, max];
    }
}
exports.numericExtent = numericExtent;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/compare.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/compare.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
function naturalOrder(a, b) {
    return a - b;
}
exports.naturalOrder = naturalOrder;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/number.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
function isEqual(a, b, epsilon) {
    if (epsilon === void 0) { epsilon = 1e-10; }
    return Math.abs(a - b) < epsilon;
}
exports.isEqual = isEqual;
/**
 * `Number.toFixed(n)` always formats a number so that it has `n` digits after the decimal point.
 * For example, `Number(0.00003427).toFixed(2)` returns `0.00`.
 * That's not very helpful, because all the meaningful information is lost.
 * In this case we would want the formatted value to have at least two significant digits: `0.000034`,
 * not two fraction digits.
 * @param value
 * @param fractionOrSignificantDigits
 */
function toFixed(value, fractionOrSignificantDigits) {
    if (fractionOrSignificantDigits === void 0) { fractionOrSignificantDigits = 2; }
    var power = Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    if (power >= 0) {
        return value.toFixed(fractionOrSignificantDigits); // fraction digits
    }
    return value.toFixed(Math.abs(power) - 1 + fractionOrSignificantDigits); // significant digits
}
exports.toFixed = toFixed;
var numberUnits = ["", "K", "M", "B", "T"];
function toReadableNumber(value, fractionDigits) {
    if (fractionDigits === void 0) { fractionDigits = 2; }
    // For example: toReadableNumber(10550000000) yields "10.6B"
    var prefix = '';
    if (value <= 0) {
        value = -value;
        prefix = '-';
    }
    var thousands = ~~(Math.log10(value) / Math.log10(1000)); // discard the floating point part
    return prefix + (value / Math.pow(1000.0, thousands)).toFixed(fractionDigits) + numberUnits[thousands];
}
exports.toReadableNumber = toReadableNumber;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/object.js":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/object.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
function chainObjects(parent, child) {
    var obj = Object.create(parent);
    for (var prop in child) {
        if (child.hasOwnProperty(prop)) {
            obj[prop] = child[prop];
        }
    }
    return obj;
}
exports.chainObjects = chainObjects;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/padding.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

Object.defineProperty(exports, "__esModule", { value: true });
var Padding = /** @class */ (function () {
    function Padding(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = top; }
        if (bottom === void 0) { bottom = top; }
        if (left === void 0) { left = right; }
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    Padding.prototype.clear = function () {
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
    };
    return Padding;
}());
exports.Padding = Padding;


/***/ }),

/***/ "./node_modules/ag-grid-enterprise/dist/lib/charts/util/ticks.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ag-grid-enterprise/dist/lib/charts/util/ticks.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ag-grid-enterprise v21.2.2

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(a, b, count) {
    var step = tickStep(a, b, count);
    a = Math.ceil(a / step) * step;
    b = Math.floor(b / step) * step + step / 2;
    // Add half a step here so that the array returned by `range` includes the last tick.
    return range(a, b, step);
}
exports.default = default_1;
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickStep(a, b, count) {
    var rawStep = Math.abs(b - a) / Math.max(0, count);
    var step = Math.pow(10, Math.floor(Math.log(rawStep) / Math.LN10)); // = Math.log10(rawStep)
    var error = rawStep / step;
    if (error >= e10) {
        step *= 10;
    }
    else if (error >= e5) {
        step *= 5;
    }
    else if (error >= e2) {
        step *= 2;
    }
    return b < a ? -step : step;
}
function tickIncrement(a, b, count) {
    var rawStep = (b - a) / Math.max(0, count);
    var power = Math.floor(Math.log(rawStep) / Math.LN10);
    var error = rawStep / Math.pow(10, power);
    return power >= 0
        ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
        : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
exports.tickIncrement = tickIncrement;
var NumericTicks = /** @class */ (function (_super) {
    __extends(NumericTicks, _super);
    function NumericTicks(fractionDigits, size) {
        if (size === void 0) { size = 0; }
        var _this = _super.call(this, size) || this;
        _this.fractionDigits = fractionDigits;
        return _this;
    }
    return NumericTicks;
}(Array));
exports.NumericTicks = NumericTicks;
function range(a, b, step) {
    if (step === void 0) { step = 1; }
    var absStep = Math.abs(step);
    var fractionDigits = (absStep > 0 && absStep < 1)
        ? Math.abs(Math.floor(Math.log(absStep) / Math.LN10))
        : 0;
    var f = Math.pow(10, fractionDigits);
    var n = Math.max(0, Math.ceil((b - a) / step)) || 0;
    var values = new NumericTicks(fractionDigits, n);
    for (var i = 0; i < n; i++) {
        var value = a + step * i;
        values[i] = Math.round(value * f) / f;
    }
    return values;
}


/***/ })

}]);
//# sourceMappingURL=default~admin-components-admin-module~resource-resource-module.js.map