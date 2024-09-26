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
// buttonAddStudent.addEventListener('click', onAddBtn);
buttonAddStudent.addEventListener('mouseover', onAddBtn);


// Находим элемент <tbody> в таблице
const tbody = document.querySelector('#studentTable tbody');
tbody.classList.add('stroke')

function onAddBtn() {
    addStudentToTable();
    clearForm();
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('startYear').value = '';
    document.getElementById('faculty').value = '';
}

function addStudentToTable(firstNameMock, lastNameMock, middleNameMock, birthDateMock, startYearMock, facultyMock) {
    let firstName;
    let lastName;
    let middleName;
    let birthDate;
    let startYear;
    let faculty;

    if (firstNameMock && lastNameMock && middleNameMock && birthDateMock && startYearMock && facultyMock) {
        //азполняем таблицу из данных которые хранятся в мокдат
        firstName = firstNameMock;
        lastName = lastNameMock;
        middleName = middleNameMock;
        birthDate = birthDateMock;
        startYear = startYearMock;
        faculty = facultyMock;
    } else {
        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
        middleName = document.getElementById('middleName').value;
        birthDate = document.getElementById('birthDate').value;
        startYear = document.getElementById('startYear').value;
        faculty = document.getElementById('faculty').value;
    }


    // Создаем ячейки <td>
    const nameCell = document.createElement('td');
    nameCell.textContent = `${lastName} ${firstName} ${middleName}`;

    const facultyCell = document.createElement('td');
    facultyCell.textContent = faculty;

    const birthDateCell = document.createElement('td');
    birthDateCell.textContent = birthDate;

    const startYearCell = document.createElement('td');
    startYearCell.textContent = startYear;

    const row = document.createElement('tr');

    // Добавляем ячейки в строку
    row.appendChild(nameCell);
    row.appendChild(facultyCell);
    row.appendChild(birthDateCell);
    row.appendChild(startYearCell);

    // Добавляем строку в <tbody>
    tbody.appendChild(row);
}

// const validateStudents = (a,b,c,d...)
//  [{ fullname error}, {faculti error}]

// Функция для добавления студентов в таблицу
function initialTableDataMock(students) {
    // Очищаем таблицу перед добавлением новых данных (опционально)
    tbody.innerHTML = '';
    // Создаем строки таблицы для каждого студента
    students.forEach((student) => {
        const {
            lastName,
            firstName,
            middleName,
            faculty,
            birthDate,
            startYear,
        } = student;

        addStudentToTable(firstName, lastName, middleName, birthDate, startYear, faculty)
    });
}


initialTableDataMock(students);


