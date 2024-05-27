"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _nepaliDateConverter = require("@sbmdkl/nepali-date-converter");
var _Toaster = _interopRequireDefault(require("../../constants/Toaster"));
var _Helper = _interopRequireDefault(require("./Helper"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var yearList = [{
  "id": "300",
  "title": ""
}, {
  "id": "0",
  "title": "1955",
  "totalMonth": 12,
  "value": 1955
}, {
  "id": "1",
  "title": "1956",
  "totalMonth": 12,
  "value": 1956
}, {
  "id": "2",
  "title": "1957",
  "totalMonth": 12,
  "value": 1957
}, {
  "id": "3",
  "title": "1958",
  "totalMonth": 12,
  "value": 1958
}, {
  "id": "4",
  "title": "1959",
  "totalMonth": 12,
  "value": 1959
}, {
  "id": "5",
  "title": "1960",
  "totalMonth": 12,
  "value": 1960
}, {
  "id": "6",
  "title": "1961",
  "totalMonth": 12,
  "value": 1961
}, {
  "id": "7",
  "title": "1962",
  "totalMonth": 12,
  "value": 1962
}, {
  "id": "8",
  "title": "1963",
  "totalMonth": 12,
  "value": 1963
}, {
  "id": "9",
  "title": "1964",
  "totalMonth": 12,
  "value": 1964
}, {
  "id": "10",
  "title": "1965",
  "totalMonth": 12,
  "value": 1965
}, {
  "id": "11",
  "title": "1966",
  "totalMonth": 12,
  "value": 1966
}, {
  "id": "12",
  "title": "1967",
  "totalMonth": 12,
  "value": 1967
}, {
  "id": "13",
  "title": "1968",
  "totalMonth": 12,
  "value": 1968
}, {
  "id": "14",
  "title": "1969",
  "totalMonth": 12,
  "value": 1969
}, {
  "id": "15",
  "title": "1970",
  "totalMonth": 12,
  "value": 1970
}, {
  "id": "16",
  "title": "1971",
  "totalMonth": 12,
  "value": 1971
}, {
  "id": "17",
  "title": "1972",
  "totalMonth": 12,
  "value": 1972
}, {
  "id": "18",
  "title": "1973",
  "totalMonth": 12,
  "value": 1973
}, {
  "id": "19",
  "title": "1974",
  "totalMonth": 12,
  "value": 1974
}, {
  "id": "20",
  "title": "1975",
  "totalMonth": 12,
  "value": 1975
}, {
  "id": "21",
  "title": "1976",
  "totalMonth": 12,
  "value": 1976
}, {
  "id": "22",
  "title": "1977",
  "totalMonth": 12,
  "value": 1977
}, {
  "id": "23",
  "title": "1978",
  "totalMonth": 12,
  "value": 1978
}, {
  "id": "24",
  "title": "1979",
  "totalMonth": 12,
  "value": 1979
}, {
  "id": "25",
  "title": "1980",
  "totalMonth": 12,
  "value": 1980
}, {
  "id": "26",
  "title": "1981",
  "totalMonth": 12,
  "value": 1981
}, {
  "id": "27",
  "title": "1982",
  "totalMonth": 12,
  "value": 1982
}, {
  "id": "28",
  "title": "1983",
  "totalMonth": 12,
  "value": 1983
}, {
  "id": "29",
  "title": "1984",
  "totalMonth": 12,
  "value": 1984
}, {
  "id": "30",
  "title": "1985",
  "totalMonth": 12,
  "value": 1985
}, {
  "id": "31",
  "title": "1986",
  "totalMonth": 12,
  "value": 1986
}, {
  "id": "32",
  "title": "1987",
  "totalMonth": 12,
  "value": 1987
}, {
  "id": "33",
  "title": "1988",
  "totalMonth": 12,
  "value": 1988
}, {
  "id": "34",
  "title": "1989",
  "totalMonth": 12,
  "value": 1989
}, {
  "id": "35",
  "title": "1990",
  "totalMonth": 12,
  "value": 1990
}, {
  "id": "36",
  "title": "1991",
  "totalMonth": 12,
  "value": 1991
}, {
  "id": "37",
  "title": "1992",
  "totalMonth": 12,
  "value": 1992
}, {
  "id": "38",
  "title": "1993",
  "totalMonth": 12,
  "value": 1993
}, {
  "id": "39",
  "title": "1994",
  "totalMonth": 12,
  "value": 1994
}, {
  "id": "40",
  "title": "1995",
  "totalMonth": 12,
  "value": 1995
}, {
  "id": "41",
  "title": "1996",
  "totalMonth": 12,
  "value": 1996
}, {
  "id": "42",
  "title": "1997",
  "totalMonth": 12,
  "value": 1997
}, {
  "id": "43",
  "title": "1998",
  "totalMonth": 12,
  "value": 1998
}, {
  "id": "44",
  "title": "1999",
  "totalMonth": 12,
  "value": 1999
}, {
  "id": "45",
  "title": "2000",
  "totalMonth": 12,
  "value": 2000
}, {
  "id": "46",
  "title": "2001",
  "totalMonth": 12,
  "value": 2001
}, {
  "id": "47",
  "title": "2002",
  "totalMonth": 12,
  "value": 2002
}, {
  "id": "48",
  "title": "2003",
  "totalMonth": 12,
  "value": 2003
}, {
  "id": "49",
  "title": "2004",
  "totalMonth": 12,
  "value": 2004
}, {
  "id": "50",
  "title": "2005",
  "totalMonth": 12,
  "value": 2005
}, {
  "id": "51",
  "title": "2006",
  "totalMonth": 12,
  "value": 2006
}, {
  "id": "52",
  "title": "2007",
  "totalMonth": 12,
  "value": 2007
}, {
  "id": "53",
  "title": "2008",
  "totalMonth": 12,
  "value": 2008
}, {
  "id": "54",
  "title": "2009",
  "totalMonth": 12,
  "value": 2009
}, {
  "id": "55",
  "title": "2010",
  "totalMonth": 12,
  "value": 2010
}, {
  "id": "56",
  "title": "2011",
  "totalMonth": 12,
  "value": 2011
}, {
  "id": "57",
  "title": "2012",
  "totalMonth": 12,
  "value": 2012
}, {
  "id": "58",
  "title": "2013",
  "totalMonth": 12,
  "value": 2013
}, {
  "id": "59",
  "title": "2014",
  "totalMonth": 12,
  "value": 2014
}, {
  "id": "60",
  "title": "2015",
  "totalMonth": 12,
  "value": 2015
}, {
  "id": "61",
  "title": "2016",
  "totalMonth": 12,
  "value": 2016
}, {
  "id": "62",
  "title": "2017",
  "totalMonth": 12,
  "value": 2017
}, {
  "id": "63",
  "title": "2018",
  "totalMonth": 12,
  "value": 2018
}, {
  "id": "64",
  "title": "2019",
  "totalMonth": 12,
  "value": 2019
}, {
  "id": "65",
  "title": "2020",
  "totalMonth": 12,
  "value": 2020
}, {
  "id": "66",
  "title": "2021",
  "totalMonth": 12,
  "value": 2021
}, {
  "id": "67",
  "title": "2022",
  "totalMonth": 12,
  "value": 2022
}, {
  "id": "68",
  "title": "2023",
  "totalMonth": 12,
  "value": 2023
}, {
  "id": "69",
  "title": "2024",
  "totalMonth": 12,
  "value": 2024
}, {
  "id": "70",
  "title": "2025",
  "totalMonth": 12,
  "value": 2025
}, {
  "id": "71",
  "title": "2026",
  "totalMonth": 12,
  "value": 2026
}, {
  "id": "72",
  "title": "2027",
  "totalMonth": 12,
  "value": 2027
}, {
  "id": "73",
  "title": "2028",
  "totalMonth": 12,
  "value": 2028
}, {
  "id": "74",
  "title": "2029",
  "totalMonth": 12,
  "value": 2029
}, {
  "id": "75",
  "title": "2030",
  "totalMonth": 12,
  "value": 2030
}, {
  "id": "76",
  "title": "2031",
  "totalMonth": 12,
  "value": 2031
}, {
  "id": "77",
  "title": "2032",
  "totalMonth": 12,
  "value": 2032
}, {
  "id": "78",
  "title": "2033",
  "totalMonth": 12,
  "value": 2033
}, {
  "id": "79",
  "title": "2034",
  "totalMonth": 12,
  "value": 2034
}, {
  "id": "80",
  "title": "2035",
  "totalMonth": 12,
  "value": 2035
}, {
  "id": "81",
  "title": "2036",
  "totalMonth": 12,
  "value": 2036
}, {
  "id": "82",
  "title": "2037",
  "totalMonth": 12,
  "value": 2037
}, {
  "id": "83",
  "title": "2038",
  "totalMonth": 12,
  "value": 2038
}, {
  "id": "84",
  "title": "2039",
  "totalMonth": 12,
  "value": 2039
}, {
  "id": "85",
  "title": "2040",
  "totalMonth": 12,
  "value": 2040
}, {
  "id": "86",
  "title": "2041",
  "totalMonth": 12,
  "value": 2041
}, {
  "id": "87",
  "title": "2042",
  "totalMonth": 12,
  "value": 2042
}, {
  "id": "88",
  "title": "2043",
  "totalMonth": 12,
  "value": 2043
}, {
  "id": "89",
  "title": "2044",
  "totalMonth": 12,
  "value": 2044
}, {
  "id": "90",
  "title": "2045",
  "totalMonth": 12,
  "value": 2045
}, {
  "id": "91",
  "title": "2046",
  "totalMonth": 12,
  "value": 2046
}, {
  "id": "92",
  "title": "2047",
  "totalMonth": 12,
  "value": 2047
}, {
  "id": "93",
  "title": "2048",
  "totalMonth": 12,
  "value": 2048
}, {
  "id": "94",
  "title": "2049",
  "totalMonth": 12,
  "value": 2049
}, {
  "id": "95",
  "title": "2050",
  "totalMonth": 12,
  "value": 2050
}, {
  "id": "96",
  "title": "2051",
  "totalMonth": 12,
  "value": 2051
}, {
  "id": "97",
  "title": "2052",
  "totalMonth": 12,
  "value": 2052
}, {
  "id": "98",
  "title": "2053",
  "totalMonth": 12,
  "value": 2053
}, {
  "id": "99",
  "title": "2054",
  "totalMonth": 12,
  "value": 2054
}, {
  "id": "100",
  "title": "2055",
  "totalMonth": 12,
  "value": 2055
}, {
  "id": "101",
  "title": "2056",
  "totalMonth": 12,
  "value": 2056
}, {
  "id": "102",
  "title": "2057",
  "totalMonth": 12,
  "value": 2057
}, {
  "id": "103",
  "title": "2058",
  "totalMonth": 12,
  "value": 2058
}, {
  "id": "104",
  "title": "2059",
  "totalMonth": 12,
  "value": 2059
}, {
  "id": "105",
  "title": "2060",
  "totalMonth": 12,
  "value": 2060
}, {
  "id": "106",
  "title": "2061",
  "totalMonth": 12,
  "value": 2061
}, {
  "id": "107",
  "title": "2062",
  "totalMonth": 12,
  "value": 2062
}, {
  "id": "108",
  "title": "2063",
  "totalMonth": 12,
  "value": 2063
}, {
  "id": "109",
  "title": "2064",
  "totalMonth": 12,
  "value": 2064
}, {
  "id": "110",
  "title": "2065",
  "totalMonth": 12,
  "value": 2065
}, {
  "id": "111",
  "title": "2066",
  "totalMonth": 12,
  "value": 2066
}, {
  "id": "112",
  "title": "2067",
  "totalMonth": 12,
  "value": 2067
}, {
  "id": "113",
  "title": "2068",
  "totalMonth": 12,
  "value": 2068
}, {
  "id": "114",
  "title": "2069",
  "totalMonth": 12,
  "value": 2069
}, {
  "id": "115",
  "title": "2070",
  "totalMonth": 12,
  "value": 2070
}, {
  "id": "116",
  "title": "2071",
  "totalMonth": 12,
  "value": 2071
}, {
  "id": "117",
  "title": "2072",
  "totalMonth": 12,
  "value": 2072
}, {
  "id": "118",
  "title": "2073",
  "totalMonth": 12,
  "value": 2073
}, {
  "id": "119",
  "title": "2074",
  "totalMonth": 12,
  "value": 2074
}, {
  "id": "120",
  "title": "2075",
  "totalMonth": 12,
  "value": 2075
}, {
  "id": "121",
  "title": "2076",
  "totalMonth": 12,
  "value": 2076
}, {
  "id": "122",
  "title": "2077",
  "totalMonth": 12,
  "value": 2077
}, {
  "id": "123",
  "title": "2078",
  "totalMonth": 12,
  "value": 2078
}, {
  "id": "124",
  "title": "2079",
  "totalMonth": 12,
  "value": 2079
}, {
  "id": "125",
  "title": "2080",
  "totalMonth": 12,
  "value": 2080
}, {
  "id": "126",
  "title": "2081",
  "totalMonth": 12,
  "value": 2081
}, {
  "id": "127",
  "title": "2082",
  "totalMonth": 12,
  "value": 2082
}, {
  "id": "128",
  "title": "2083",
  "totalMonth": 12,
  "value": 2083
}, {
  "id": "129",
  "title": "2084",
  "totalMonth": 12,
  "value": 2084
}, {
  "id": "130",
  "title": "2085",
  "totalMonth": 12,
  "value": 2085
}, {
  "id": "131",
  "title": "2086",
  "totalMonth": 12,
  "value": 2086
}, {
  "id": "132",
  "title": "2087",
  "totalMonth": 12,
  "value": 2087
}, {
  "id": "133",
  "title": "2088",
  "totalMonth": 12,
  "value": 2088
}, {
  "id": "134",
  "title": "2089",
  "totalMonth": 12,
  "value": 2089
}, {
  "id": "135",
  "title": "2090",
  "totalMonth": 12,
  "value": 2090
}, {
  "id": "303",
  "title": ""
}];
var monthList = [{
  id: "300",
  title: ""
}, {
  id: "0",
  title: "Baishakh",
  totalDays: 31,
  value: 1
}, {
  id: "1",
  title: "Jestha",
  totalDays: 30,
  value: 2
}, {
  id: "2",
  title: "Ashar",
  totalDays: 32,
  value: 3
}, {
  id: "3",
  title: "Shrawan",
  totalDays: 30,
  value: 4
}, {
  id: "4",
  title: "Bhadra",
  totalDays: 31,
  value: 5
}, {
  id: "5",
  title: "Ashwin",
  totalDays: 31,
  value: 6
}, {
  id: "6",
  title: "Kartik",
  totalDays: 31,
  value: 7
}, {
  id: "7",
  title: "Mangsir",
  totalDays: 31,
  value: 8
}, {
  id: "8",
  title: "Poush",
  totalDays: 31,
  value: 9
}, {
  id: "9",
  title: "Magh",
  totalDays: 31,
  value: 10
}, {
  id: "10",
  title: "Falgun",
  totalDays: 31,
  value: 11
}, {
  id: "11",
  title: "Chaitra",
  totalDays: 31,
  value: 12
}, {
  id: "303",
  title: ""
}];
var dayList = [{
  "id": "300",
  "title": ""
}, {
  "id": "0",
  "title": "1",
  "value": 1
}, {
  "id": "1",
  "title": "2",
  "value": 2
}, {
  "id": "2",
  "title": "3",
  "value": 3
}, {
  "id": "3",
  "title": "4",
  "value": 4
}, {
  "id": "4",
  "title": "5",
  "value": 5
}, {
  "id": "5",
  "title": "6",
  "value": 6
}, {
  "id": "6",
  "title": "7",
  "value": 7
}, {
  "id": "7",
  "title": "8",
  "value": 8
}, {
  "id": "8",
  "title": "9",
  "value": 9
}, {
  "id": "9",
  "title": "10",
  "value": 10
}, {
  "id": "10",
  "title": "11",
  "value": 11
}, {
  "id": "11",
  "title": "12",
  "value": 12
}, {
  "id": "12",
  "title": "13",
  "value": 13
}, {
  "id": "13",
  "title": "14",
  "value": 14
}, {
  "id": "14",
  "title": "15",
  "value": 15
}, {
  "id": "15",
  "title": "16",
  "value": 16
}, {
  "id": "16",
  "title": "17",
  "value": 17
}, {
  "id": "17",
  "title": "18",
  "value": 18
}, {
  "id": "18",
  "title": "19",
  "value": 19
}, {
  "id": "19",
  "title": "20",
  "value": 20
}, {
  "id": "20",
  "title": "21",
  "value": 21
}, {
  "id": "21",
  "title": "22",
  "value": 22
}, {
  "id": "22",
  "title": "23",
  "value": 23
}, {
  "id": "23",
  "title": "24",
  "value": 24
}, {
  "id": "24",
  "title": "25",
  "value": 25
}, {
  "id": "25",
  "title": "26",
  "value": 26
}, {
  "id": "26",
  "title": "27",
  "value": 27
}, {
  "id": "27",
  "title": "28",
  "value": 28
}, {
  "id": "28",
  "title": "29",
  "value": 29
}, {
  "id": "29",
  "title": "30",
  "value": 30
}, {
  "id": "30",
  "title": "31",
  "value": 31
}, {
  "id": "31",
  "title": "32",
  "value": 32
}, {
  "id": "303",
  "title": ""
}];
var NepaliCalander = function NepaliCalander(_ref) {
  var currentDate = _ref.currentDate,
    label = _ref.label,
    onOk = _ref.onOk,
    textStyle = _ref.textStyle,
    tableStyle = _ref.tableStyle,
    customYearList = _ref.customYearList,
    customMonthList = _ref.customMonthList,
    customDayList = _ref.customDayList;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showCalendar = _useState2[0],
    setShowCalendar = _useState2[1];
  var toggleCalendar = function toggleCalendar() {
    setShowCalendar(!showCalendar);
  };
  var parseDate = function parseDate(dateString) {
    if (dateString) {
      var _dateString$split = dateString.split('-'),
        _dateString$split2 = _slicedToArray(_dateString$split, 3),
        year = _dateString$split2[0],
        month = _dateString$split2[1],
        day = _dateString$split2[2];
      return {
        year: year,
        month: month,
        day: day
      };
    }
    return {
      year: null,
      month: null,
      day: null
    };
  };
  var initialParsedDate = parseDate(currentDate || (0, _nepaliDateConverter.adToBs)(_Helper["default"].dateFormatter(new Date())));
  var _useState3 = (0, _react.useState)(initialParsedDate.year || null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedYear = _useState4[0],
    setSelectedYear = _useState4[1];
  var _useState5 = (0, _react.useState)(initialParsedDate.month || null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedMonth = _useState6[0],
    setSelectedMonth = _useState6[1];
  var _useState7 = (0, _react.useState)(initialParsedDate.day || null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDay = _useState8[0],
    setSelectedDay = _useState8[1];
  function convertToTwoDigits(num) {
    // Use string formatting to add leading zero if necessary
    return num < 10 ? '0' + num : '' + num;
  }
  var handleCancel = function handleCancel() {
    setSelectedYear(initialParsedDate.year);
    setSelectedMonth(initialParsedDate.month);
    setSelectedDay(initialParsedDate.day);
    setShowCalendar(false);
  };
  var handleOk = function handleOk() {
    if (selectedYear !== null && selectedMonth !== null && selectedDay !== null) {
      var selectedDate = selectedYear + '-' + convertToTwoDigits(selectedMonth) + '-' + convertToTwoDigits(selectedDay);
      if (typeof selectedDate !== 'string') {
        console.error('Invalid date format: typeof', selectedDate);
        return; // Exit early if date is not a string
      }
      var parts = selectedDate.split("-");
      if (parts.length !== 3) {
        console.error('Invalid date format: parts', selectedDate);
        return; // Exit early if date format is incorrect
      }
      var _parts = _slicedToArray(parts, 3),
        year = _parts[0],
        month = _parts[1],
        day = _parts[2];
      if (!year || !month || !day) {
        console.error('Invalid date parts:', year, month, day);
        return; // Exit early if any part is missing
      }
      try {
        (0, _nepaliDateConverter.bsToAd)(selectedDate);
      } catch (e) {
        console.log("Error", e);
        _Toaster["default"].customToast("!!!  Date doesn't exist.");
        return;
      }
      setShowCalendar(false);
      onOk(selectedDate);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: toggleCalendar,
    style: tableStyle
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: textStyle
  }, currentDate ? currentDate : label ? label : 'मिति चयन गर्नुहोस्।')), /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    visible: showCalendar,
    animationType: "slide",
    transparent: true
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.calendarContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(Spinner, {
    name: "day",
    setValue: setSelectedDay,
    initialScrollIndex: selectedDay,
    itemHeight: 60,
    fontSize: 16,
    style: {
      flex: 1
    },
    data: customDayList || dayList,
    onSelect: setSelectedDay
  })), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(Spinner, {
    name: "month",
    setValue: setSelectedMonth,
    initialScrollIndex: selectedMonth,
    itemHeight: 60,
    fontSize: 16,
    style: {
      flex: 2
    },
    data: customMonthList || monthList,
    onSelect: setSelectedMonth
  })), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(Spinner, {
    name: "year",
    setValue: setSelectedYear,
    initialScrollIndex: selectedYear,
    itemHeight: 60,
    fontSize: 16,
    style: {
      flex: 1
    },
    data: customYearList || yearList,
    onSelect: setSelectedYear
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.buttonContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleCancel,
    style: [styles.button, styles.cancelButton]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "CANCEL")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleOk,
    style: [styles.button, styles.okButton]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "OK"))))))));
};
var Spinner = function Spinner(props) {
  var scrollViewRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (props.data && props.initialScrollIndex && props.itemHeight) {
      var foundIndex = props.data.findIndex(function (p) {
        return p.value == props.initialScrollIndex;
      });
      // Scroll to index after initial render
      scrollToIndex(foundIndex - 1);
    }
  }, []);
  var scrollToIndex = function scrollToIndex(index) {
    // Calculate the position of the item based on its index
    var positionY = index * props.itemHeight; // Replace ITEM_HEIGHT with your item's height

    // Scroll to the calculated position after a delay
    setTimeout(function () {
      scrollViewRef.current.scrollTo({
        y: positionY,
        animated: true
      });
    }, 100); // Adjust the delay time as needed
  };
  var handleScroll = function handleScroll(event) {
    var offsetY = event.nativeEvent.contentOffset.y;
    var index = Math.round(offsetY / props.itemHeight) + 1;
    props.setValue(props.data[index].value);
    // setSelectedValue(props.data[index].value);
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      height: props.itemHeight * 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.ScrollView, {
    ref: scrollViewRef,
    showsVerticalScrollIndicator: false,
    snapToInterval: props.itemHeight,
    onScroll: handleScroll,
    decelerationRate: "fast",
    snapToAlignment: "center"
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      height: props.itemHeight * props.data.length
    }
  }, props.data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: [styles.item, {
        height: props.itemHeight || 200
      }]
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: [styles.title, {
        fontSize: props.fontSize || 24
      }]
    }, item.title)));
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      top: 50,
      width: '95%',
      borderWidth: 1,
      borderBottomColor: 'black'
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      top: 100,
      width: '95%',
      borderWidth: 1,
      borderBottomColor: 'black'
    }
  }));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  datePicker: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'grey'
  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 5,
    width: 250,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: '5%',
    alignSelf: 'flex-end',
    marginEnd: 10
  },
  button: {
    padding: 10,
    borderRadius: 5
  },
  okButton: {
    backgroundColor: 'white',
    marginRight: 0
  },
  cancelButton: {
    backgroundColor: 'white',
    marginEnd: 5
  },
  buttonText: {
    color: 'green',
    fontWeight: 'bold'
  },
  item: {
    paddingHorizontal: 20,
    paddingTop: 5
  },
  title: {
    fontSize: 32
  }
});
var _default = exports["default"] = NepaliCalander;