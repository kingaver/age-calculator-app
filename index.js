const thirtyDays = [09, 04, 06, 11]

function isBefore (user_month, user_day, month, day) {
    // Returning "True" from this function means that the user's month/day
    // came before the current month/day, meaning that the age_year needs to
    // have 1 subtracted from it.
    if (month == user_month) {
        if (user_day > day) {
            return true;
        }
    } else if (user_month > month) {
        return true;
    } else {
        return false;
    }
}

function month_delta(user_month, user_day, month, day) {
    if (isBefore(user_month, user_day, month, day)) {

    }else {
        
    }
}

function calcDays(day, user_day, user_month, year, age_month) {
    user_month += 1;
    var numDays = day;
    if (thirtyDays.includes(user_month)) {
        numDays += (30 - day);   
        if (numDays > 30) {
            age_month += 1;
            numDays -= 30; 
        } 
    } else if (user_month != 02){
        console.log(`thirty-one days`);
        console.log(`${day}`);
        numDays += (31 - user_day);
        if (numDays > 31) {
            age_month += 1;
            numDays -= 31;
        }
    } else {
        if (year.toString().slice(-2) == "00") {
            if (year % 400 == 0) {
                numDays += (29 - user_day)
                if (numDays > 29) {
                    age_month += 1;
                    numDays -= 29; 
                }
            } 
        } else if (year % 4 == 0) {
            numDays += (29 - user_day);
            if (numDays > 29) {
                age_month += 1;
                numDays -= 29; 
            }
        } else {
            numDays += (28 - user_day);
            if (numDays > 28) {
                age_month += 1;
                numDays -= 28; 
            }
        }
    }
    console.log(`numDays: ${numDays}`);
    return numDays
}

function displayDate() {
    today = new Date();
    console.log(today);
    day = today.getDate();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    // These are strings, not the fucking element!
    user_day = document.getElementById('day').value;
    user_mo = document.getElementById('month').value;
    user_yr = document.getElementById('year').value;
    if (user_day.length != 2) {
        document.getElementById('day').classList.add("error");
        console.log(document.getElementById('day').classList);
    }
    // Clear the fields
    console.log(`month: ${month}`);
    console.log(`Day: ${day}`);
    console.log(user_mo);
    age_year = year - user_yr;
    let age_month = 11 - Math.abs(month - user_mo);
    if (isBefore(user_mo, user_day, month, day)) {
        age_year -= 1;
    }
    age_days = calcDays(day, user_day, user_mo, year, age_month);
    document.getElementById('day').value = '';
    document.getElementById('month').value = ''; 
    document.getElementById('year').value = ''; 
    formatted_day = day.toString();
    if (day.length == 1) {
        day = "0" + day;
    }
    console.log(age_year);
    console.log(age_days);
    document.getElementById('display-yrs').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${age_year}</span> years`
    document.getElementById('display-mos').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${age_month}</span> months`
    document.getElementById('display-days').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${age_days}</span> days`
}



/*  
    If if today's month-day falls before the user-entered month-day, subtract one from the year.


    date_2 = date entered 
    date_1 = today's date
    year = date_1.year - date_2.year
    if date_1.month > date_2.month:
        month = date_1.month - date_2.month
    else:
        month = date_2.month - date_1.month
    day = Math.abs()

    Need to account for the remaining days in the month to get total # of days
    */