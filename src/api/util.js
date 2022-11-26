export function setLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function formatDay(day) {
    if (day >= 10) return day.toString();
    else return '0' + day;
}

export function nameOfMonth(month) {
    switch (month) {
        case 0:
            return 'ENE';
        case 1:
            return 'FEB';
        case 2:
            return 'MAR';
        case 3:
            return 'ABR';
        case 4:
            return 'MAY';
        case 5:
            return 'JUN';
        case 6:
            return 'JUL';
        case 7:
            return 'AGO';
        case 8:
            return 'SEP';
        case 9:
            return 'OCT';
        case 10:
            return 'NOV';
        case 11:
            return 'DIC';
        default:
            return 'ERROR';
    }
}
