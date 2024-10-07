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

function createOneStudent(student) {
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

    return (row)
}

function render(arrData) {

    tbody.innerHTML = '';

    const copyStudents = [...arrData]

    for (const student of copyStudents) {
        student.FIO = student.lastName + ' ' + student.firstName + ' ' + student.middleName;
        student.well = 2024 - student.startYear;
        student.year = student.startYear + '-' + '2024'
        student.age = calculateAge(student.birthDate)

    }

    copyStudents.forEach(student => {
        // Создаем ячейки <td>
        const newTr = createOneStudent(student)
        // Добавляем строку в <tbody>
        tbody.appendChild(newTr);
    });

}

render(students)

// Добавляем студента из формы в массив

addForm.addEventListener('submit', function (event) {
    event.preventDefault()

// Валидация

    if(lastName.value.trim() == '') {
        alert('Фамилия не введена!')
        return
    }

    if(firstName.value.trim() == '') {
        alert('Имя не введено!')
        return
    }

    if(middleName.value.trim() == '') {
        alert('Отчество не введено!')
        return
    }

    if(birthDate.value.trim() == '') {
        alert('Дата рождения не введена!')
        return
    }

    if(startYear.value.trim() == '') {
        alert('Год начала обучения не введен!')
        return
    }

    if(faculty.value.trim() == '') {
        alert('Факультет не введен!')
        return
    }


    students.push({
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        middleName: document.getElementById('middleName').value.trim(),
        birthDate: document.getElementById('birthDate').value.trim(),
        startYear: document.getElementById('startYear').value.trim(),
        faculty: document.getElementById('faculty').value.trim(),
    })


    render(students)

    clearForm();
})


// const validateStudents = (a,b,c,d...)
//  [{ fullname error}, {faculti error}]

studentTable.onclick = function(e) {
    if(e.target.tagName != 'TH') return
    let th = e.target
    sortTable(th.cellIndex, th.dataset.type)
}

function sortTable(colNum, type) {
    let tbody = studentTable.querySelector('tbody')
    let copyStudents =Array.from(tbody.rows)
    let compare;
    switch(type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
            }
            break;
            case 'string':
                compare = function(rowA, rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
    }
    break;

}
copyStudents.sort(compare)
tbody.append(...copyStudents)
}