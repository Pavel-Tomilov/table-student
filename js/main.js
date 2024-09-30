const students = [
    {
        firstName: 'Олег',
        lastName: 'Филимонов',
        middleName: 'Александрович',
        Date: '31.12.1985',
        startYear: 2020,
        faculty: 'Исторический'
    },

    {
        firstName: 'Ирина',
        lastName: 'Балуевская',
        middleName: 'Алексеевна',
        Date: '05.111987',
        startYear: 2021,
        faculty: 'Филологический'
    },

    {
        firstName: 'Иван',
        lastName: 'Туваев',
        middleName: 'Николаевич',
        Date: '23.09.1990',
        startYear: 2022,
        faculty: 'Энергетический'
    },

    {
        firstName: 'Дмитрий',
        lastName: 'Шин',
        middleName: 'Валерьевич',
        Date: '22.08.1987',
        startYear: 2020,
        faculty: 'Математический'
    },

    {
        firstName: 'Евгений',
        lastName: 'Козлов',
        middleName: 'Петрович',
        Date: '30.07.1998',
        startYear: 2023,
        faculty: 'Исторический'
    }
];
const buttonAddStudent = document.getElementById('addStudentClass');
// buttonAddStudent.addEventListener('click', onAddBtn);
buttonAddStudent.addEventListener('click', onAddBtn);

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

// Функция, которая считает возраст
function calculateAge(birthDate) {
    const currentDate = new Date();
    const birth = new Date(birthDate);
    let age = currentDate.getFullYear() - birth.getFullYear();
    const monthDiff = currentDate.getMonth() - birth.getMonth();
    const dayDiff = currentDate.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

const copyStudents = [...students]

for (const student of copyStudents) {
    student.FIO = student.lastName + ' ' + student.firstName + ' ' + student.middleName ;
    student.well = 2024 - student.startYear;
    student.year = student.startYear + '-' +  '2024' 
    
}

function addStudentToTable() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.classList.add('stroke')

    copyStudents.forEach(student => {

        const age = calculateAge(student.Date) 
        
    // Создаем ячейки <td>
    const nameCell = document.createElement('td');
    nameCell.textContent = student.FIO;

    const facultyCell = document.createElement('td');
    facultyCell.textContent = student.faculty;
    
    const birthDateCell = document.createElement('td');
    birthDateCell.textContent = student.Date + ' ' + '('  + age + 'лет' + ')';

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
    addStudentToTable()




    // const validateStudents = (a,b,c,d...)
//  [{ fullname error}, {faculti error}]