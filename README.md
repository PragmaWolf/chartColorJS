# chartColorJS
Generator colors for the charts. It was planned to be used with Chart.js

## Install

    <script src="/js/chart-colors.min.js" type="text/javascript">
    
    <script type="text/javascript">
        // infinitely - Как осуществлять перебор цветов.
        // TRUE - бесконечный перебор существующего набора (массива) цветов.
        // FALSE - перебор цветов осуществляется только до конца существующего набора (массива).
        var chartColor = new ChartColors(infinitely);
    </script>

## Methods

**DefaultColorSet**

Сброс используемого набора цветов на набор цветов по-умолчанию из текущего объекта.

    chartColor.DefaultColorSet();
    // return ChartColors Object

**UserColorSet**

Установка пользовательского набора (массива) цветов.

    chartColor.UserColorSet(['#FF0000', '#00FF00', '#0000FF']);
    // return ChartColors Object

**GetRandom**

Получение случайного цвета из набора (массива) цветов в текущем объекте.
    
    var color = chartColor.GetRandom();
    // return '#FF0000' - случайно выбранный цвет

**GetRandomList**

Генерация списка (массива) случайных цветов.

    var list = chartColor.GetRandomList();
    // return ['#FF0000', '#00FF00', '#0000FF'] - массив из случайно выбранных цветов

**GetColorSet**

Получение текущего набора цветов.
    
    var list = chartColor.GetColorSet();
    // return ['#FF0000', '#00FF00', '#0000FF'] - набор цветов используемый при выборе отдельных цветов и генерации списков

**GetUsedColors**

Получение массива использованных цветов.
    
    var list = chartColor.GetUsedColors();
    // return ['#FF0000', '#00FF00', '#0000FF'] - список уже использованных цветов

**GetUnusedColors**

Получение массива неиспользованных цветов.
    
    var list = chartColor.GetUnusedColors();
    // return ['#FF0000', '#00FF00', '#0000FF'] - массив оставшихся цветов, которые можно использовать

**GetNext**

Получение первого цвета в списке неиспользованных цветов.
    
    var color = chartColor.GetNextGetList;
    // return '#00FF00' - выбранный цвет 

**GetList**

Генерация списка (массива) цветов заданной длины.
    
    var list = chartColor.GetList();
    // return ['#FF0000', '#00FF00', '#0000FF'] - массив цветов

**Reset**

Сброс объекта до состояния по-умолчанию. Не будет сброшен только параметр infinitely.
    
    chartColor.Reset();
    // return ChartColors Object
