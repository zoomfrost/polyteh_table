



window.addEventListener("DOMContentLoaded", () => {

    const getBaseLog = (x, y) => { // функция которая возвращает логарифм из Y по основанию X
        return Math.log(y) / Math.log(x)
    }
    

    const number = 71;
    
    function Data(x, y) {
        this.x = x;
        this.y = y;
    }

    let startPoint = +prompt('Введите начальное значение Х, дробные числа следует вводить через точку');
    let endPoint = +prompt('Введите конечное значение Х, дробные числа следует вводить через точку');
    let deltaX = +prompt('Введите шаг изменения переменной Х, дробные числа следует вводить через точку');


    if (typeof startPoint || endPoint || deltaX != 'number') {
        console.log('Вводите только числа')
    }
    let start = [];

    // let startPoint = 1;
    // let endPoint = 1000;
    // let deltaX = 2.7;
    // let start = [];
    

    const firstNum = (x) => {
        const base = Math.abs((number/10)+4);
        const argLog = (1 - number)/Math.cos(x - 71);
        return getBaseLog(base, argLog)
    }

    const secondNum = (x) => {
        const base = Math.abs((number/10)+4);
        const argLog = Math.sin(x)/number
        return getBaseLog(base, argLog)
    }

    

    let x = startPoint;

    if(startPoint === endPoint) {
        let first = firstNum(x);
            let second = secondNum(x);
    
        let y
        if (isNaN(first) && isNaN(second)) {
            y = NaN;
        } else if (isNaN(second)) {
            y = first
        } else if (isNaN(first)) {
            y = second
        } else if (!isNaN(first) && !isNaN(second)) {
            y = Math.min(first, second)
        } else if (true) {
            y = NaN
        }
        start.push(new Data(x, y));
    }

    if(deltaX === 0 || deltaX < 0) {
        console.log('Шаг не может быть нулевым или отрицательным');
    }  else {
        for(let i = 0; x < endPoint; i++) {
        
            if (i !== 0) {
                x = x + deltaX
            }
            let first = firstNum(x);
            let second = secondNum(x);
    
            let y
            if (isNaN(first) && isNaN(second)) {
                y = NaN;
            } else if (isNaN(second)) {
                y = first
            } else if (isNaN(first)) {
                y = second
            } else if (!isNaN(first) && !isNaN(second)) {
                y = Math.min(first, second)
            } else if (true) {
                y = NaN
            }
            start.push(new Data(x, y));
        }
    }

    const table = [...start];

    console.table(table)
})

