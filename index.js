const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNexticon = document.querySelectorAll(".icons span");

let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December",];


const renderCalendar = () => {
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;

    let lastDatesofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();  // last date of current month31

    let firstdaysofMonth = new Date(currentYear, currentMonth, 1).getDay(); // first day of month

    let lastdateofPreviousMonth = new Date(currentYear, currentMonth + 0, 0).getDate();

    let lastDayofMonth = new Date(currentYear, currentMonth, lastDatesofMonth).getDay();  // last day of current month

   
    let liTag = "";

    for (let i = firstdaysofMonth; i > 0; i--) {
        liTag = liTag + `<li class="inactive">${lastdateofPreviousMonth - i + 1}</li>`; // creating previous month last days
    }

    for (let i = 1; i <= lastDatesofMonth; i++) { // full of days
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        liTag = liTag + `<li class=${isToday}>${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag = liTag + `<li class="inactive">${i - lastDayofMonth + 1}</li>`;  // creating next month first days
        console.log(i);
    }
    daysTag.innerHTML = liTag;
}

renderCalendar();


prevNexticon.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

        if (currentMonth < 0 || currentMonth > 11) {   //creating for next year of months
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();

        } else {
            date = new Date();
        }
        renderCalendar();

    })

});