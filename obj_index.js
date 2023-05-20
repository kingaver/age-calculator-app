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
            year: null};

function displayDate() {

    function calculateAge(todaysDate, BIRTH_DATE, AGE) {
        AGE.year = todaysDate.year - BIRTH_DATE.year;
        AGE.month = 11 - Math.abs(todaysDate.month - BIRTH_DATE.month);
        if (todaysDate.month == BIRTH_DATE.month) {
            if (BIRTH_DATE.day > todaysDate.day) {
                AGE.year -= 1;
            }
        } else if (BIRTH_DATE.month > todaysDate.month) {
            AGE.year -= 1;
        }

        // Get days
        AGE.day = todaysDate.day;
        if (thirtyDays.includes(BIRTH_DATE.month)) {
            AGE.day += (30 - BIRTH_DATE.day);   
            if (AGE.day > 30) {
                AGE.month += 1;
                AGE.day -= 30; 
            } 
        } else if (BIRTH_DATE.month != 02){
            console.log(`thirty-one days`);
            console.log(`${day}`);
            AGE.day += (31 - BIRTH_DATE.day);
            if (AGE.day > 31) {
                AGE.month += 1;
                AGE.day -= 31;
            }
        } else {
            if (todaysDate.year.toString().slice(-2) == "00") {
                if (todaysDate.year % 400 == 0) {
                    AGE.day += (29 - BIRTH_DATE.day)
                    if (AGE.day > 29) {
                        AGE.month += 1;
                        AGE.day -= 29; 
                    }
                } 
            } else if (todaysDate.year % 4 == 0) {
                AGE.day += (29 - BIRTH_DATE.day);
                if (AGE.day > 29) {
                    AGE.month += 1;
                    AGE.day -= 29; 
                }
            } else {
                AGE.day += (28 - BIRTH_DATE.day);
                if (AGE.day > 28) {
                    AGE.month += 1;
                    AGE.day -= 28; 
                }
            }
        }
        return AGE
    }

    BIRTH_DATE.month = document.getElementById('month').value;
    BIRTH_DATE.day = document.getElementById('day').value;
    BIRTH_DATE.year = document.getElementById('year').value;
    const val_date_str = `${BIRTH_DATE.year}-${BIRTH_DATE.month}-${BIRTH_DATE.day}`;
    const val_date = new Date(val_date_str);
    console.log(BIRTH_DATE);
    AGE = calculateAge(todaysDate, BIRTH_DATE, AGE);
    document.getElementById('day').value = '';
    document.getElementById('month').value = ''; 
    document.getElementById('year').value = '';
    document.getElementById('display-yrs').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${AGE.year}</span> years`
    document.getElementById('display-mos').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${AGE.month}</span> months`
    document.getElementById('display-days').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${AGE.day}</span> days`
}