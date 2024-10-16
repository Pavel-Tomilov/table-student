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
  startYearCell.textContent = student.year + ' ' + '(' + student.status + ')';
  const row = document.createElement('tr');

  // Добавляем ячейки в строку
  row.appendChild(nameCell);
  row.appendChild(facultyCell);
  row.appendChild(birthDateCell);
  row.appendChild(startYearCell);

  return (row)
}

const filterForm = document.getElementById('filter-form');
const fioFilterInp = document.getElementById('filter-fio');
const startYearFilterInp = document.getElementById('filter-startYear');
const endYearFilterInp = document.getElementById('filter-endYear');
const facultyFilterInp = document.getElementById('filter-faculty')

// Функция фильтрации

function filter(arr, prop, value) {
  if (prop === 'startYear') {
      // Фильтрация по году начала обучения
      return arr.filter(student => student.startYear === parseInt(value.trim()));
  } else if (prop === 'endYear') {
      // Фильтрация по году окончания обучения
      return arr.filter(student => student.endYear === parseInt(value.trim()));
  } else if (prop === 'FIO') {
      // Фильтрация по ФИО
      return arr.filter(student => student.FIO.toLowerCase().includes(value.trim().toLowerCase()));
  } else {
      // Фильтрация по строковым значениям
      return arr.filter(student => student[prop].toLowerCase().includes(value.trim().toLowerCase()));
  }
}

function render(arrData) {

  tbody.innerHTML = '';

  let copyStudents = [...arrData]

  for (const student of copyStudents) {
      student.FIO = student.lastName + ' ' + student.firstName + ' ' + student.middleName;
      const currentYear = new Date().getFullYear();
      student.well = currentYear - student.startYear + 1;
      student.year = `${student.startYear} - ${student.startYear + 4}`;
      student.endYear = student.startYear + 4 ;
      student.age = calculateAge(student.birthDate)

      if (currentYear > student.endYear || (currentYear === student.endYear && new Date().getMonth() >= 8)) {
        
        student.status = 'Закончил';
    } else {
        
        student.status = `${student.well} курс`;
    }
  } 

  if (fioFilterInp.value.trim() !== "") {
      copyStudents = filter(copyStudents, 'FIO', fioFilterInp.value)
  }

  if (startYearFilterInp.value.trim() !== "") {
      copyStudents = filter(copyStudents, 'startYear', startYearFilterInp.value)
  }

  if (endYearFilterInp.value.trim() !== "") {
      copyStudents = filter(copyStudents, 'endYear', endYearFilterInp.value)
  }

  if (facultyFilterInp.value.trim() !== "") {
      copyStudents = filter(copyStudents, 'faculty', facultyFilterInp.value)
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
const errorMessage = document.getElementById('error-message');




addForm.addEventListener('submit', function (event) {
  event.preventDefault()

  function isValidBirthDate(birthDate) {
    const minDate = new Date('01.01.1900');
    const currentDate = new Date();
    
  
    return birthDate >= minDate && birthDate <= currentDate;
  }
  
  // Функция для валидации года начала обучения
  function isValidStartYear(startYear) {
    return startYear >= 2000 && startYear <= currentYear;
  } 
  
  // Валидация

  if (lastName.value.trim() == '') {
      alert('Фамилия не введена!')
      return
  }

  if (firstName.value.trim() == '') {
      alert('Имя не введено!')
      return
  }

  if (middleName.value.trim() == '') {
      alert('Отчество не введено!')
      return
  }

  if (birthDate.value.trim() == '') {
      alert('Дата рождения не введена!')
      return
  }

  if (startYear.value.trim() == '') {
      alert('Год начала обучения не введен!')
      return
  }

  if (faculty.value.trim() == '') {
      alert('Факультет не введен!')
      return
  }

  if (!isValidBirthDate(birthDate)) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Дата рождения должна быть в диапазоне от 01.01.1900 до текущей даты.';
    return;
}

// Валидация года начала обучения
if (!isValidStartYear(startYear)) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = `Год начала обучения должен быть в диапазоне от 2000 до ${currentYear}.`;
    return;
}

// Если все проверки пройдены, добавляем студента
errorMessage.style.display = 'none'; // Скрываем ошибку, если всё ок

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



const headers = document.querySelectorAll('th[data-sort]');
let sortDirection = 'asc';

function sortStudents(key) {
  students.sort((a, b) => {
      const valueA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const valueB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

      if (sortDirection === 'asc') {
          return valueA > valueB ? 1 : -1;
      } else {
          return valueA < valueB ? 1 : -1;
      }
  });
}

// Функция для обработки кликов на заголовки таблицы
headers.forEach(header => {
  header.addEventListener('click', () => {
      const key = header.getAttribute('data-sort');

      // Определение направления сортировки
      if (header.classList.contains('asc')) {
          sortDirection = 'desc';
      } else {
          sortDirection = 'asc';
      }

      // Удаляем классы сортировки со всех заголовков
      headers.forEach(h => h.classList.remove('asc', 'desc'));

      // Добавляем класс направления сортировки на текущий заголовок
      header.classList.add(sortDirection);

      // Сортировка студентов по выбранному ключу
      sortStudents(key);

      // Перерисовка таблицы после сортировки
      render(students);
  });
});


filterForm.addEventListener('submit', function(event) {
  event.preventDefault()
})

fioFilterInp.addEventListener('input', function() {
  render(students)
})
startYearFilterInp.addEventListener('input', function() {
  render(students)
})
endYearFilterInp.addEventListener('input', function() {
  render(students)
})
facultyFilterInp.addEventListener('input', function() {
  render(students)
})

const resetButton = document.getElementById('btnFilter');
resetButton.addEventListener('click', () => {
  filterForm.reset(); 
  render(students)
});


