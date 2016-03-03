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
        var _defaultColorSet = [
            // A700
            '#D50000',
            '#C51162',
            '#AA00FF',
            '#6200EA',
            '#304FFE',
            '#2962FF',
            '#0091EA',
            '#00B8D4',
            '#00BFA5',
            '#00C853',
            '#64DD17',
            '#AEEA00',
            '#FFD600',
            '#FFAB00',
            '#FF6D00',
            '#DD2C00',
            // A400
            '#FF1744',
            '#F50057',
            '#D500F9',
            '#651FFF',
            '#3D5AFE',
            '#2979FF',
            '#00B0FF',
            '#00E5FF',
            '#1DE9B6',
            '#00E676',
            '#76FF03',
            '#C6FF00',
            '#FFEA00',
            '#FFC400',
            '#FF9100',
            '#FF3D00',
            // A200
            '#FF5252',
            '#FF4081',
            '#E040FB',
            '#7C4DFF',
            '#536DFE',
            '#448AFF',
            '#40C4FF',
            '#18FFFF',
            '#64FFDA',
            '#69F0AE',
            '#B2FF59',
            '#EEFF41',
            '#FFFF00',
            '#FFD740',
            '#FFAB40',
            '#FF6E40',
            // 900
            '#B71C1C',
            '#880E4F',
            '#4A148C',
            '#311B92',
            '#1A237E',
            '#0D47A1',
            '#01579B',
            '#006064',
            '#004D40',
            '#1B5E20',
            '#33691E',
            '#827717',
            '#F57F17',
            '#FF6F00',
            '#E65100',
            '#BF360C',
            '#3E2723',
            '#212121',
            '#263238',
            // 700
            '#D32F2F',
            '#C2185B',
            '#7B1FA2',
            '#512DA8',
            '#303F9F',
            '#1976D2',
            '#0288D1',
            '#0097A7',
            '#00796B',
            '#388E3C',
            '#689F38',
            '#AFB42B',
            '#FBC02D',
            '#FFA000',
            '#F57C00',
            '#E64A19',
            '#5D4037',
            '#616161',
            '#455A64',
            // 500
            '#F44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
            '#3F51B5',
            '#2196F3',
            '#03A9F4',
            '#00BCD4',
            '#009688',
            '#4CAF50',
            '#8BC34A',
            '#CDDC39',
            '#FFEB3B',
            '#FFC107',
            '#FF9800',
            '#FF5722',
            '#795548',
            '#9E9E9E',
            '#607D8B',
            // 300
            '#E57373',
            '#F06292',
            '#BA68C8',
            '#9575CD',
            '#7986CB',
            '#64B5F6',
            '#4FC3F7',
            '#4DD0E1',
            '#4DB6AC',
            '#81C784',
            '#AED581',
            '#DCE775',
            '#FFF176',
            '#FFD54F',
            '#FFB74D',
            '#FF8A65',
            '#A1887F',
            '#E0E0E0',
            '#90A4AE'
        ];

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
