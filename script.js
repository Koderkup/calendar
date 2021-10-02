let days = document.querySelectorAll('.day');
let date = new Date();
let m = date.getMonth();
let y = date.getFullYear();
let firstMonthDay = new Date(y, m, 1).getDay();
let year = document.querySelector('.year');
let mounth = document.querySelector('.mounth');
m12 = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь",
    "декабрь"
]



function isLeapYear(year) {
    if (new Date(year, 1, 29).getDate() === 29) {
        return true;
    } else {
        return false;
    }
};


function fillWrapper(m, y, firstMonthDay) {
    mounth.innerHTML = m12[m];
    year.innerHTML = y;

    let zero;
    if (firstMonthDay == 0) {
        zero = 7;
    } else {
        zero = firstMonthDay;
    }
    let flag = 0;
    let count = 1;
    switch (m) {
        case
        0:
            flag = 31;
            break;
        case
        1:
            flag = 28;
            break;
        case
        2:
            flag = 31;
            break;
        case
        3:
            flag = 30;
            break;
        case
        4:
            flag = 31;
            break;
        case
        5:
            flag = 30;
            break;
        case
        6:
            flag = 31;
            break;
        case
        7:
            flag = 31;
            break;
        case 8:
            flag = 30;
            break;
        case
        9:
            flag = 31;
            break;
        case
        10:
            flag = 30;
            break;
        case
        11:
            flag = 31;
            break;

        default:
            break;
    }

    console.log(flag, m, firstMonthDay);
    for (let i = 0; i < days.length; i++) {

        if (zero !== 0) {
            days[i].innerHTML = '';
            zero--;
        }
        if (count <= flag &&
            zero == 0) {
            days[i].innerHTML = count;
            count++;
        } else {
            days[i].innerHTML = '';
        }
    }
}

fillWrapper(m, y, firstMonthDay);


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

function prevFill() {
    m--;
    if (m < 0) {
        m = 11;
        y--;
    }

    firstMonthDay = new Date(y, m, 1).getDay();
    fillWrapper(m, y, firstMonthDay);
}

function nextFill() {
    m++;
    if (m > 11) {
        m = 0;
        y++;
    }
    firstMonthDay = new Date(y, m, 1).getDay();
    console.log(firstMonthDay)
    fillWrapper(m, y, firstMonthDay);

}
prev.onclick = prevFill;
next.onclick = nextFill;