const calendarContainer = document.getElementById('calendar-container');
const calendarHeader = document.getElementById('calendar-header');
const calendar = document.getElementById('calendar');
const dayTemplate = document.getElementById('day-template').content;
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

const tasks = {
    '2024-06-01': ['Công việc 1'],
    '2024-06-05': ['Công việc 3'],
    '2024-06-12': ['Công việc 4'],
    '2024-06-15': ['Công việc 6'],
    '2024-06-20': ['Công việc 7'],
    '2024-06-25': ['Công việc 9'],
};

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getStartDay(year, month) {
    return new Date(year, month, 1).getDay();
}

function renderCalendar(year, month) {
    calendar.innerHTML = '';
    currentMonthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    const daysInMonth = getDaysInMonth(year, month);
    const startDay = getStartDay(year, month);

    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = dayTemplate.cloneNode(true);
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        dayElement.querySelector('.day-header').textContent = `${day}`;
        const taskList = dayElement.querySelector('.tasks');
        
        if (tasks[dateKey]) {
            tasks[dateKey].forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task');
                taskItem.textContent = task;
                taskList.appendChild(taskItem);
            });
        }

        calendar.appendChild(dayElement);
    }
}

prevMonthButton.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar(currentYear, currentMonth);
});

nextMonthButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar(currentYear, currentMonth);
});

renderCalendar(currentYear, currentMonth);
