const students = [
    {
        firstName: 'Олег',
        lastName: 'Филимонов',
        middleName: 'Александрович',
        birthDate: 1996,
        startYear: 2000,
        faculty: 'Исторический'
    },

    {
        firstName: 'Ирина',
        lastName: 'Балуевская',
        middleName: 'Алексеевна',
        birthDate: 1985,
        startYear: 2001,
        faculty: 'Филологический'
    },

    {
        firstName: 'Иван',
        lastName: 'Туваев',
        middleName: 'Николаевич',
        birthDate: 1990,
        startYear: 2002,
        faculty: 'Энергетический'
    },

    {
        firstName: 'Дмитрий',
        lastName: 'Шин',
        middleName: 'Валерьевич',
        birthDate: 1987,
        startYear: 2000,
        faculty: 'Математический'
    },

    {
        firstName: 'Евгений',
        lastName: 'Козлов',
        middleName: 'Петрович',
        birthDate: 1998,
        startYear: 2003,
        faculty: 'Исторический'
    }
];


const buttonAddStudent = document.getElementById('addStudentClass');
buttonAddStudent.addEventListener('click', addStudent);

function addStudent() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;

    const birthDate = document.getElementById('birthDate').value;

    const startYear = document.getElementById('startYear').value;

    const faculty = document.getElementById('faculty').value;


    console.log(firstName, lastName, middleName, startYear, birthDate, faculty);
}


// Функция для добавления студентов в таблицу
function addStudentsToTable(students) {
    // Находим элемент <tbody> в таблице
    const tbody = document.querySelector('#studentTable tbody');
    tbody.classList.add('stroke')

    // Очищаем таблицу перед добавлением новых данных (опционально)
    tbody.innerHTML = '';

    // Создаем строки таблицы для каждого студента
    students.forEach(student => {
        // Создаем элемент <tr> для строки
        const row = document.createElement('tr');

        // Создаем ячейки <td> 
        const nameCell = document.createElement('td');
        nameCell.textContent = `${student.lastName} ${student.firstName} ${student.middleName}`;
        const facultyCell = document.createElement('td');
        facultyCell.textContent = student.faculty;
        const birthDateCell = document.createElement('td');
        birthDateCell.textContent = student.birthDate;
        const startYearCell = document.createElement('td');
        startYearCell.textContent = student.startYear;

        // Добавляем ячейки в строку
        row.appendChild(nameCell);
        row.appendChild(facultyCell);
        row.appendChild(birthDateCell);
        row.appendChild(startYearCell);

        // Добавляем строку в <tbody>
        tbody.appendChild(row);
    });
}

addStudentsToTable(students);


