const inputElem = document.querySelector('.input-wrap__input-elem');
const addBtn = document.querySelector('.input-wrap__add-btn');
const tasksList = document.querySelector('.tasks-list');
let classCounter;

if (!localStorage.getItem('counter')) {
	classCounter = 1;
} else {

	classCounter = +localStorage.getItem('counter');

}

for (let i = 1; i < 30; i++) {

	if (localStorage.getItem(`tasks-list__item${i}`)) {

		const li = document.createElement('li');
		const span = document.createElement('span');
		span.innerText = 'х';

		li.textContent = `${localStorage.getItem(`tasks-list__item${i}`)}`;
		tasksList.insertAdjacentElement('beforeend', li);
		li.append(span);
	}

}

addBtn.addEventListener('click', e => {

	let elemClassName = `tasks-list__item${classCounter}`;

	if (inputElem.value !== '') {
		const listItem = document.createElement('li');
		const span = document.createElement('span');

		listItem.textContent = inputElem.value;
		span.textContent = 'х';
		listItem.append(span);

		listItem.classList.add(elemClassName);

		tasksList.insertAdjacentElement('beforeend', listItem);

		localStorage.setItem(elemClassName, inputElem.value);

		inputElem.value = '';
		classCounter = classCounter + 1;
		localStorage.setItem('counter', classCounter);
	}
})

tasksList.addEventListener('click', e => {

	const target = e.target;
	const targetParrent = target.closest('li');

	if (target.tagName !== 'SPAN') return;

	console.log(targetParrent.innerText);

	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);

		if (`${localStorage.getItem(key)}` === targetParrent.innerText.slice(0, -1)) {
			console.log(`${localStorage.removeItem(key)}`);
		}

	}

	targetParrent.remove();
	target.remove();

})
