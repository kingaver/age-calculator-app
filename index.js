function isBefore (user_month, user_day, month, day) {
    console.log(user_day);
    console.log(day);
    // Returning "True" from this function means that the user's month/day
    // came before the current month/day, meaning that the age_year needs to
    // have 1 subtracted from it.
    if (month == user_month) {
        if (user_day < day) {
            return true;
        }
    } else if (user_month > month) {
        return true;
    } else {
        return false;
    }
}

function displayDate() {
    today = new Date();
    day = today.getDay();
    month = today.getMonth();
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
    age_year = year - user_yr;
    age_month = 
    if (isBefore(user_mo, user_day, month, day)) {
        age_year -= 1;
    }
    console.log(year);
    console.log(user_yr);
    document.getElementById('day').value = '';
    document.getElementById('month').value = ''; 
    document.getElementById('year').value = ''; 
    formatted_day = day.toString();
    if (day.length == 1) {
        day = "0" + day;
    }
    console.log(age_year);
    document.getElementById('display-yrs').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${age_year}</span> years`
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
    */