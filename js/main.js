const students = [{
        firstName: 'Олег',
        lastName: 'Филимонов',
        middleName: 'Александрович',
        birthDate: '31.12.1985',
        startYear: 2020,
        faculty: 'Исторический'
    },

    {
        firstName: 'Ирина',
        lastName: 'Балуевская',
        middleName: 'Алексеевна',
        birthDate: '22.11.1987',
        startYear: 2021,
        faculty: 'Филологический'
    },

    {
        firstName: 'Иван',
        lastName: 'Туваев',
        middleName: 'Николаевич',
        birthDate: '23.09.1990',
        startYear: 2022,
        faculty: 'Энергетический'
    },

    {
        firstName: 'Дмитрий',
        lastName: 'Шин',
        middleName: 'Валерьевич',
        birthDate: '22.08.1987',
        startYear: 2020,
        faculty: 'Математический'
    },

    {
        firstName: 'Евгений',
        lastName: 'Козлов',
        middleName: 'Петрович',
        birthDate: '30.07.1998',
        startYear: 2023,
        faculty: 'Исторический'
    }
];
const buttonAddStudent = document.getElementById('addStudentClass');

// buttonAddStudent.addEventListener('click', onAddBtn);
const addForm = document.getElementById('add-form');
const tbody = document.querySelector('#studentTable tbody');
tbody.classList.add('stroke')

// Очищаем форму после отправки

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('startYear').value = '';
    document.getElementById('faculty').value = '';
}

// Функция, которая считает возраст
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate.split('.').reverse().join('-')); // Преобразование строки в объект Date

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    // Если месяц текущий меньше месяца рождения или день еще не наступил, уменьшаем возраст на 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}


function render() {

    tbody.innerHTML = '';

    const copyStudents = [...students]

    for (const student of copyStudents) {
        student.FIO = student.lastName + ' ' + student.firstName + ' ' + student.middleName;
        student.well = 2024 - student.startYear;
        student.year = student.startYear + '-' + '2024'
        student.age = calculateAge(student.birthDate)
    }



    copyStudents.forEach(student => {
        // Создаем ячейки <td>
        const nameCell = document.createElement('td');
        nameCell.textContent = student.FIO;
        const facultyCell = document.createElement('td');
        facultyCell.textContent = student.faculty;
        const birthDateCell = document.createElement('td');
        birthDateCell.textContent = student.birthDate + ' ' + '(' + student.age + ' ' + 'лет' + ')';
        const startYearCell = document.createElement('td');
        startYearCell.textContent = student.year + ' ' + '(' + student.well + ' ' + 'курс' + ')';
        const row = document.createElement('tr');

        // Добавляем ячейки в строку
        row.appendChild(nameCell);
        row.appendChild(facultyCell);
        row.appendChild(birthDateCell);
        row.appendChild(startYearCell);

        // Добавляем строку в <tbody>
        tbody.appendChild(row);
    });

}

render()

// Добавляем студента из формы в массив

addForm.addEventListener('submit', function (event) {
    event.preventDefault()

    students.push({
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        middleName: document.getElementById('middleName').value,
        birthDate: document.getElementById('birthDate').value,
        startYear: document.getElementById('startYear').value,
        faculty: document.getElementById('faculty').value,
    })


    render()
    clearForm();
})


// const validateStudents = (a,b,c,d...)
//  [{ fullname error}, {faculti error}]