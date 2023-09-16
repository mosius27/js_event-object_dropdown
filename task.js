// Находим все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события click для каждого элемента
dropdowns.forEach((dropdown) => {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');

  // Обработчик события для кнопки
  valueElement.addEventListener('click', () => {
    // Переключаем класс "dropdown__list_active" для открытия/закрытия списка
    listElement.classList.toggle('dropdown__list_active');
  });

  // Обработчик события для элементов списка
  listElement.addEventListener('click', (event) => {
    event.preventDefault(); // Запрещаем переход по ссылке

    const selectedItem = event.target.closest('.dropdown__item');

    if (selectedItem) {
      // Устанавливаем новое значение в элемент с классом "dropdown__value"
      valueElement.textContent = selectedItem.querySelector('.dropdown__link').textContent;
      // Закрываем список
      listElement.classList.remove('dropdown__list_active');
    }
  });
});