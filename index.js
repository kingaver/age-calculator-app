function displayDate() {
    today = new Date();
    day = today.getDay();
    user_day = document.getElementById('day').value.toString();
    user_mo = document.getElementById('month').value.toString();
    user_yr = document.getElementById('year').value.toString();
    user_date = user_mo + "." + user_day + "." + user_yr;
    console.log(user_date)
    // document.getElementById('display-yrs').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${user_yr}</span> months`;
    // document.getElementById('display-mos').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${user_mo}</span> months`;
    // document.getElementById('display-days').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${user_day}</span> days`;
    if (user_day.length != 2) {
        document.getElementById('day').classList.add("error");
        console.log(document.getElementById('day').classList);
    }
    console.log(user_day.value);
    document.getElementById('day').value = "";
    user_mo.value = '00'; 
    user_yr.value = '00'; 
    console.log(user_day.value);
}

/*  date_2 = date entered 
    date_1 = today's date
    year = date_1.year - date_2.year
    if date_1.month > date_2.month:
        month = date_1.month - date_2.month
    else:
        month = date_2.month - date_1.month
    day = Math.abs()
    */