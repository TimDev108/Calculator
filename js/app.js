const res = (event) => {
	if (!input.value) return
	else if (event.target.dataset.actions === 'equal') {
		input.value = eval(input.value)
	}
	else if (event.target.dataset.actions === 'clear') {
		input.value = ''
	}
	else if (event.target.dataset.actions === 'delete') {
		input.value = input.value.slice(0, -1)
	}
}


const operation = document.querySelectorAll('[data-actions]')
operation.forEach(el => {
	el.onclick = res
})


number.forEach(el => el.addEventListener('click', event  => {
	const symbol = event.target.dataset.num
	if (symbol) {
		input.value += symbol
	}
}))
operator.forEach(el => el.addEventListener('click', event  => {  //сделать проверку что если после оператора вводится другой оператор то сделать замену этого оператора а не выводить два разных оператора
	const operator = event.target.dataset.operator
	
	if (!input.value && operator === '/' || !input.value && operator === '*' || !input.value && operator === '+') return // операторы можно вводить только после того как ввели любое число
	if (operator) {
		input.value += operator
		if (input.value.includes(operator)) {
			console.log ('true')
			input.value[3] = 'ff'
		}
	}
}))
