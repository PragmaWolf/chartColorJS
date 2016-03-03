# chartColorJS

# English

Generator Material Design colors or colors lists for the charts. It was planned to be used with [Chart.js](http://www.chartjs.org/).
Sorry for my English :(

## Setup

    <script src="/js/chart-colors.min.js" type="text/javascript">
    
    <script type="text/javascript">
        // infinitely - How to implement sorting colors.
        // TRUE - endless enumeration existing set (array) color.
        // FALSE - too much color is carried out only until the end of the existing set (array).
        var chartColor = new ChartColors(infinitely);
    </script>
    
## Options

### infinitely

How to implement sorting colors.

**TRUE** - endless enumeration existing set (array) color.

`new ChartColors(true)`

**FALSE** - too much color is carried out only until the end of the existing set (array).

`new ChartColors(true)`

## Methods

### DefaultColorSet

Reset the set of colors used in the color set by default from the current object.

    chartColor.DefaultColorSet();
    // return ChartColors Object

### UserColorSet

Installing a custom set (array) color.

    chartColor.UserColorSet(['#FF0000', '#00FF00', '#0000FF']);
    // return ChartColors Object

### GetNext

Preparation of the first color in the list of unused colors.
    
    var color = chartColor.GetNextGetList;
    // return '#00FF00' - selected color

### GetList

Generate a list (array) color of a given length.
    
    var list = chartColor.GetList();
    // return ['#FF0000', '#00FF00', '#0000FF'] - array of colors

### GetRandom

Preparation of a set of random color (solid) colors in the current object.
    
    var color = chartColor.GetRandom();
    // return '#FF0000' - a randomly selected color

### GetRandomList

Generate a list (array) of random colors.

    var list = chartColor.GetRandomList();
    // return ['#FF0000', '#00FF00', '#0000FF'] - the array of randomly selected colors

### ConvertRGBToHEX

Converting RGB or RGBA values ​​in HEX

    var color = chartColor.ConvertRGBToHEX('rgba(255, 255, 255, 0.8)');
    // return '#ffffff' - the color of the converted in HEX format

### ConvertHEXToRGB

Converting colors from HEX format to the RGB format.

    var color = chartColor.ConvertHEXToRGB('#ffffff');
    // return 'rgb(255, 255, 255)' - the color converted to RGB format

### ConvertHEXToRGBA

Converting colors from HEX format into the RGBA format.

    var color = chartColor.ConvertHEXToRGBA('#ffffff', 0.8);
    // return 'rgba(255, 255, 255, 0.8)' - the color converted to RGBA format

### ConvertList

Converting an array to a set of colors in HEX, RGB or RGBA format.

    var list = chartColor.ConvertList(['#ffffff', '#ffffff', '#ffffff'], rgba, 0.8);
    // return ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.8)'] - An array of colors converted to the specified format

### Reset

Reset the object to the default state. Not only will reset option infinitely.
    
    chartColor.Reset();
    // return ChartColors Object

### GetColorSet

Getting the current set of colors.
    
    var list = chartColor.GetColorSet();
    // return ['#FF0000', '#00FF00', '#0000FF'] - a set of colors used in the selection of individual colors and list generation

### GetUsedColors

Getting an array of colors used.
    
    var list = chartColor.GetUsedColors();
    // return ['#FF0000', '#00FF00', '#0000FF'] - a list of used colors

### GetUnusedColors

Getting an array of unused colors.
    
    var list = chartColor.GetUnusedColors();
    // return ['#FF0000', '#00FF00', '#0000FF'] - the array of the remaining colors, which can be used

# Русский

Генератор цветов или списков цветов Material Design для использования в диаграммах и графиках. Планировалось использовать совместно с [Chart.js](http://www.chartjs.org/).

## Установка

    <script src="/js/chart-colors.min.js" type="text/javascript">
    
    <script type="text/javascript">
        // infinitely - Как осуществлять перебор цветов.
        // TRUE - бесконечный перебор существующего набора (массива) цветов.
        // FALSE - перебор цветов осуществляется только до конца существующего набора (массива).
        var chartColor = new ChartColors(infinitely);
    </script>
    
## Параметры

### infinitely

Как осуществлять перебор цветов.

**TRUE** - бесконечный перебор существующего набора (массива) цветов.

`new ChartColors(true)`

**FALSE** - перебор цветов осуществляется только до конца существующего набора (массива).

`new ChartColors(true)`

## Методы

### DefaultColorSet

Сброс используемого набора цветов на набор цветов по-умолчанию из текущего объекта.

    chartColor.DefaultColorSet();
    // return ChartColors Object

### UserColorSet

Установка пользовательского набора (массива) цветов.

    chartColor.UserColorSet(['#FF0000', '#00FF00', '#0000FF']);
    // return ChartColors Object

### GetNext

Получение первого цвета в списке неиспользованных цветов.
    
    var color = chartColor.GetNextGetList;
    // return '#00FF00' - выбранный цвет 

### GetList

Генерация списка (массива) цветов заданной длины.
    
    var list = chartColor.GetList();
    // return ['#FF0000', '#00FF00', '#0000FF'] - массив цветов

### GetRandom

Получение случайного цвета из набора (массива) цветов в текущем объекте.
    
    var color = chartColor.GetRandom();
    // return '#FF0000' - случайно выбранный цвет

### GetRandomList

Генерация списка (массива) случайных цветов.

    var list = chartColor.GetRandomList();
    // return ['#FF0000', '#00FF00', '#0000FF'] - массив из случайно выбранных цветов

### ConvertRGBToHEX

Преобразование RGB или RGBA значений в HEX.

    var color = chartColor.ConvertRGBToHEX('rgba(255, 255, 255, 0.8)');
    // return '#ffffff' - цвет преобразованный в формат HEX

### ConvertHEXToRGB

Преобразование цвета из формата HEX в формат RGB.

    var color = chartColor.ConvertHEXToRGB('#ffffff');
    // return 'rgb(255, 255, 255)' - цвет преобразованный в формат RGB

### ConvertHEXToRGBA

Преобразование цвета из формата HEX в формат RGBA.

    var color = chartColor.ConvertHEXToRGBA('#ffffff', 0.8);
    // return 'rgba(255, 255, 255, 0.8)' - цвет преобразованный в формат RGBA

### ConvertList

Преобразование массива с набором цветов в HEX, RGB или RGBA формат.

    var list = chartColor.ConvertList(['#ffffff', '#ffffff', '#ffffff'], rgba, 0.8);
    // return ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.8)'] - Массив цветов преобразованный в указанный формат.

### Reset

Сброс объекта до состояния по-умолчанию. Не будет сброшен только параметр infinitely.
    
    chartColor.Reset();
    // return ChartColors Object

### GetColorSet

Получение текущего набора цветов.
    
    var list = chartColor.GetColorSet();
    // return ['#FF0000', '#00FF00', '#0000FF'] - набор цветов используемый при выборе отдельных цветов и генерации списков

### GetUsedColors

Получение массива использованных цветов.
    
    var list = chartColor.GetUsedColors();
    // return ['#FF0000', '#00FF00', '#0000FF'] - список уже использованных цветов

### GetUnusedColors

Получение массива неиспользованных цветов.
    
    var list = chartColor.GetUnusedColors();
    // return ['#FF0000', '#00FF00', '#0000FF'] - массив оставшихся цветов, которые можно использовать
