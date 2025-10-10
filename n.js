let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // استبدال × بـ * للحساب
        let expression = display.value.replace('×', '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'خطأ';
    }
}

// إضافة event listener للوحة المفاتيح
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if ('0123456789+-*/.'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});