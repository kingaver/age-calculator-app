function displayDate() {
    today = new Date();
    day = today.getDay();
    user_day = document.getElementById('day').value.toString();
    user_mo = document.getElementById('month').value.toString();
    user_yr = document.getElementById('year').value.toString();
    // document.getElementById('display-yrs').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${user_yr}</span> months`;
    // document.getElementById('display-mos').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${user_mo}</span> months`;
    // document.getElementById('display-days').innerHTML = `<span style="color: hsl(259, 100%, 65%);">${user_day}</span> days`;
if user_day.length() != 2
}