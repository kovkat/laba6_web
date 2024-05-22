// Функція для генерації випадкового кольору у форматі HEX
const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

// Отримуємо елементи з DOM
const input = document.querySelector('#controls input');
const container = document.getElementById('boxes');
const [createBtn, destroyBtn] = document.querySelectorAll('#controls button');

// Додаємо обробник подій для кнопки "Create"
createBtn.addEventListener('click', () => createBoxes(input.value));

// Додаємо обробник подій для кнопки "Destroy"
destroyBtn.addEventListener('click', clearBoxes);

// Функція для створення квадратів
function createBoxes(amount) {
    // Перевіряємо, чи введене значення знаходиться в допустимому діапазоні
    if (amount < 1 || amount > 100) {
        alert("Please enter a value between 1 and 100 inclusive!");
        return;
    }
    // Очищаємо контейнер перед створенням нових квадратів
    clearBoxes();
    // Створюємо нові квадрати
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const color = generateRandomColor();
        // Додаємо текст та стилі до кожного
        box.innerHTML = ` Box ${i + 1}`;
        //ширину та довжину збільшуємо порівняно з попереднім
        box.style.width = `${30 + (10 * i)}px`;
        box.style.height = `${30 + (10 * i)}px`;
        box.style.backgroundColor = color;
        container.append(box);
    }
}

// Функція для видалення всіх коробок
function clearBoxes() {
    // Видаляємо всі дочірні елементи контейнера
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}