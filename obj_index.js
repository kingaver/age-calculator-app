const thirtyDays = [09, 04, 06, 11];

today = new Date();

const todaysDate = {month: today.getMonth() + 1,
                    day: today.getDate(),
                    year: today.getFullYear()};

let BIRTH_DATE = {month: null,
                day: null,
                year: null};

let AGE = {month: null,
            day: null,
            year: null}

function displayDate() {
    BIRTH_DATE.month = document.getElementById('month').value;
    BIRTH_DATE.day = document.getElementById('day').value;
    BIRTH_DATE.year = document.getElementById('year').value;
    console.log(todaysDate);
    console.log(BIRTH_DATE);
}