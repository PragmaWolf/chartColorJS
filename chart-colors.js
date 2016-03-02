/*jshint strict: false */

/*!
 * ChartColors.js for Chart.js
 * Version: 1.0.0
 *
 * Copyright 2016 Dmitry Furman
 * Released under the MIT license
 */

(function() {
    'use strict';

    /**
     * Класс для получения цветов для вывода на диаграммах ChartJS
     *
     * @param {boolean} infinitely Использовать ли бесконечный перебор набора цветов.
     * @constructor
     */
    this.ChartColors = function(infinitely) {
        /**
         * Текущий объект.
         * @type {ChartColors|{DefaultColorSet, UserColorSet, GetRandom, GetRandomList, GetColorSet, GetUsedColors, GetUnusedColors, GetNext, GetList, Reset}}
         */
        var self = this;

        /**
         * Как осуществлять перебор цветов.
         * TRUE - бесконечный перебор существующего набора (массива) цветов.
         * FALSE - перебор цветов осуществляется только до конца существующего набора (массива).
         * @type {boolean}
         * @private
         */
        var _infinitely = !!infinitely;

        /**
         * Предустановленный набор цветов. Взять из Google Material Colors.
         * @type {string[]}
         * @private
         */
        var _defaultColorSet = ['#004D40', '#006064', '#00695C', '#00796B', '#00838F', '#00897B', '#0091EA', '#009688', '#0097A7', '#00ACC1', '#00B0FF', '#00B8D4', '#00BCD4', '#00BFA5', '#00C853', '#00E5FF', '#00E676', '#01579B', '#0277BD', '#0288D1', '#039BE5', '#03A9F4', '#0D47A1', '#1565C0', '#18FFFF', '#1976D2', '#1A237E', '#1B5E20', '#1DE9B6', '#1E88E5', '#2196F3', '#26A69A', '#26C6DA', '#283593', '#2962FF', '#2979FF', '#29B6F6', '#2E7D32', '#303F9F', '#304FFE', '#311B92', '#33691E', '#37474F', '#388E3C', '#3949AB', '#3D5AFE', '#3E2723', '#3F51B5', '#40C4FF', '#424242', '#42A5F5', '#43A047', '#448AFF', '#4527A0', '#455A64', '#4A148C', '#4CAF50', '#4DB6AC', '#4DD0E1', '#4E342E', '#4FC3F7', '#512DA8', '#536DFE', '#546E7A', '#558B2F', '#5C6BC0', '#5D4037', '#5E35B1', '#607D8B', '#616161', '#6200EA', '#64B5F6', '#64DD17', '#64FFDA', '#651FFF', '#66BB6A', '#673AB7', '#689F38', '#69F0AE', '#6A1B9A', '#6D4C41', '#757575', '#76FF03', '#78909C', '#795548', '#7986CB', '#7B1FA2', '#7C4DFF', '#7CB342', '#7E57C2', '#80CBC4', '#80D8FF', '#80DEEA', '#81C784', '#81D4FA', '#827717', '#82B1FF', '#84FFFF', '#880E4F', '#8BC34A', '#8C9EFF', '#8D6E63', '#8E24AA', '#90A4AE', '#90CAF9', '#9575CD', '#9C27B0', '#9CCC65', '#9E9D24', '#9E9E9E', '#9FA8DA', '#A1887F', '#A5D6A7', '#A7FFEB', '#AA00FF', '#AB47BC', '#AD1457', '#AED581', '#AEEA00', '#AFB42B', '#B0BEC5', '#B2DFDB', '#B2EBF2', '#B2FF59', '#B388FF', '#B39DDB', '#B3E5FC', '#B71C1C', '#B9F6CA', '#BA68C8', '#BBDEFB', '#BCAAA4', '#BDBDBD', '#BF360C', '#C0CA33', '#C2185B', '#C51162', '#C5CAE9', '#C5E1A5', '#C62828', '#C6FF00', '#C8E6C9', '#CCFF90', '#CDDC39', '#CE93D8', '#CFD8DC', '#D1C4E9', '#D32F2F', '#D4E157', '#D50000', '#D500F9', '#D7CCC8', '#D81B60', '#D84315', '#DCE775', '#DCEDC8', '#DD2C00', '#E040FB', '#E0E0E0', '#E1BEE7', '#E53935', '#E57373', '#E64A19', '#E65100', '#E6EE9C', '#E91E63', '#EA80FC', '#EC407A', '#EEEEEE', '#EEFF41', '#EF5350', '#EF6C00', '#EF9A9A', '#F06292', '#F0F4C3', '#F44336', '#F4511E', '#F48FB1', '#F4FF81', '#F50057', '#F57C00', '#F57F17', '#F5F5F5', '#F8BBD0', '#F9A825', '#FB8C00', '#FBC02D', '#FDD835', '#FF1744', '#FF3D00', '#FF4081', '#FF5252', '#FF5722', '#FF6D00', '#FF6E40', '#FF6F00', '#FF7043', '#FF80AB', '#FF8A65', '#FF8A80', '#FF8F00', '#FF9100', '#FF9800', '#FF9E80', '#FFA000', '#FFA726', '#FFAB00', '#FFAB40', '#FFAB91', '#FFB300', '#FFB74D', '#FFC107', '#FFC400', '#FFCA28', '#FFCC80', '#FFCCBC', '#FFCDD2', '#FFD180', '#FFD54F', '#FFD600', '#FFD740', '#FFE082', '#FFE0B2', '#FFE57F', '#FFEA00', '#FFEB3B', '#FFECB3', '#FFEE58', '#FFF176', '#FFF59D', '#FFF9C4', '#FFFF00', '#FFFF8D'];

        /**
         * Набор цветов который используется при генерации.
         * Если не передан пользовательский набор, то будет использоваться набор по-умолчанию из текущего объекта.
         * @type {Array}
         * @private
         */
        var _colorSet = _defaultColorSet.slice();

        /**
         * Массив с уже использованными цветами.
         * @type {Array}
         * @private
         */
        var _usedColors = [];

        /**
         * Массив с еще не использованными цветами.
         * @type {Array}
         * @private
         */
        var _unusedColors = _colorSet.slice();

        /**
         * Сброс используемого набора цветов на набор цветов по-умолчанию из текущего объекта.
         * @type {DefaultColorSet}
         */
        self.DefaultColorSet = DefaultColorSet;

        /**
         * Установка пользовательского набора (массива) цветов.
         * @type {UserColorSet}
         */
        self.UserColorSet = UserColorSet;

        /**
         * Получение случайного цвета из набора (массива) цветов в текущем объекте.
         * @type {GetRandom}
         */
        self.GetRandom = GetRandom;

        /**
         * Генерация списка (массива) случайных цветов.
         * @type {GetRandomList}
         */
        self.GetRandomList = GetRandomList;

        /**
         * Получение текущего набора цветов.
         * @type {GetColorSet}
         */
        self.GetColorSet = GetColorSet;

        /**
         * Получение массива использованных цветов.
         * @type {GetUsedColors}
         */
        self.GetUsedColors = GetUsedColors;

        /**
         * Получение массива неиспользованных цветов.
         * @type {GetUnusedColors}
         */
        self.GetUnusedColors = GetUnusedColors;

        /**
         * Получение первого цвета в списке неиспользованных цветов.
         * @type {GetNext}
         */
        self.GetNext = GetNext;

        /**
         * Генерация списка (массива) цветов заданной длины.
         * @type {GetList}
         */
        self.GetList = GetList;

        /**
         * Сброс объекта до состояния по-умолчанию. Не будет сброшен только параметр infinitely.
         * @type {Reset}
         */
        self.Reset = Reset;

        /**
         * Проверка переданного массива.
         * Проверяет является ли переданный параметр массивом.
         *
         * @param {Array} arr Массив для проверки
         * @returns {boolean} FALSE - переданный параметр не является массивом или является пустым массивом.
         * TRUE - переданный параметр является не пустым массивом.
         */
        function CheckArray(arr) {
            var isArray = true;

            // не должно быть пустым
            if (!arr) {
                isArray = false;
            }

            // проверка на то что передан массив
            if (!(arr instanceof Array) ||
                Object.prototype.toString.call(arr) !== '[object Array]' ||
                !(arr.splice instanceof Function) ||
                arr.length === 0) {

                isArray = false;
            }

            // в массиве должны быть элементы
            if (isArray && arr.length === 0) {
                isArray = false;
            }

            return isArray;
        }

        /**
         * Обновляет набор (массив) используемых цветов, когда тот пустеет.
         */
        function InfinitelyColors() {
            if (_infinitely && _unusedColors.length === 0) {
                _unusedColors = _colorSet.slice();
            }
        }

        /**
         * Сброс используемого набора цветов на набор цветов по-умолчанию из текущего объекта.
         *
         * @returns {ChartColors} Текущий объект.
         */
        function DefaultColorSet() {
            _colorSet = _defaultColorSet.slice();
            _unusedColors = _colorSet.slice();
            return self;
        }

        /**
         * Установка пользовательского набора (массива) цветов.
         * Если пользовательский набор не передан, то будет взят набор по-умолчанию из текущего объекта.
         *
         * @param {Array} colors
         * @returns {ChartColors} Текущий объект.
         */
        function UserColorSet(colors) {
            if (CheckArray(colors)) {
                _colorSet = colors;
                _unusedColors = _colorSet.slice();
            }

            return self;
        }

        /**
         * Получение случайного цвета из набора (массива) цветов в текущем объекте.
         *
         * @returns {string} Строка с цветом. По-умолчанию используются HEX-формат представления цвета.
         */
        function GetRandom() {
            // если используется бесконечный перебор цветов
            InfinitelyColors();
            // вычисление индекса цвета
            var random = Math.floor(Math.random() * _unusedColors.length);
            var color = _unusedColors[random];
            // помещение цвета в использованные
            _usedColors.push(color);
            // удаление цвета из доступных
            _unusedColors.splice(random, 1);
            // возврат значения полученного цвета
            return color;
        }

        /**
         * Генерация списка (массива) случайных цветов заданной длины.
         *
         * @param {number} length Длина списка (массива).
         * @returns {Array} Массив со случайно полученными цветами.
         */
        function GetRandomList(length) {
            // формирование списка случайных цветов
            var list = [];
            for (var i = 0; i < length; i++) {
                list.push(self.GetRandom());
            }
            // возврат полученного списка
            return list;
        }

        /**
         * Получение текущего набора цветов.
         *
         * @returns {Array}
         */
        function GetColorSet() {
            return _colorSet;
        }

        /**
         * Получение массива использованных цветов.
         *
         * @returns {Array} Массив с использованными цветами.
         */
        function GetUsedColors() {
            return _usedColors;
        }

        /**
         * Получение массива неиспользованных цветов.
         *
         * @returns {Array} Массив с неиспользованными цветами.
         */
        function GetUnusedColors() {
            return _unusedColors;
        }

        /**
         * Получение первого цвета в списке неиспользованных цветов.
         *
         * @returns {string} Строка с цветом. По-умолчанию используются HEX-формат представления цвета.
         */
        function GetNext() {
            // если используется бесконечный перебор цветов набора
            InfinitelyColors();
            // получение первого цвета в наборе
            var color = _unusedColors[0];
            // помещение цвета в использованные
            _usedColors.push(color);
            // удаление цвета из доступных
            _unusedColors.splice(0, 1);
            // возврат значения полученного цвета
            return color;
        }

        /**
         * Генерация списка (массива) цветов заданной длины.
         *
         * @param {number} length Длина списка (массива).
         * @returns {Array} Массив с полученными цветами.
         */
        function GetList(length) {
            // формирование списка цветов
            var list = [];
            for (var i = 0; i < length; i++) {
                list.push(self.GetNext());
            }
            // возврат полученного списка
            return list;
        }

        /**
         * Сброс объекта до состояния по-умолчанию. Не будет сброшен только параметр infinitely.
         *
         * @returns {ChartColors}
         */
        function Reset() {
            _usedColors = [];
            _colorSet = _defaultColorSet.slice();
            _unusedColors = _colorSet.slice();
            return self;
        }

        return self;
    };
}).call(this);
