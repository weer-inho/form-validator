const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = 'form-control error';
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // метод тест выполняет поиск сопоставления регулярного выражения
    // указанной строке, возвращает тру или фолз
    // ре - наша эталонная строка и мы передаем в ее тест строку из инпута
    // значение ре взято со стакОверфлоу
    return re.test(String(email).toLowerCase());	
}

function getFieldName(input) {
	// charAt() возвращает указанный символ из строки
	// slice() режет строчку с указанного элемента
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray) {
	inputArray.forEach((input) => {
		if (input.value.trim() === '') {

			showError(input, `${getFieldName(input)} is requied`);
		} else {
			showSuccess(input);
		}
	})
}

form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	checkRequired([username, email, password, password2]);	
})