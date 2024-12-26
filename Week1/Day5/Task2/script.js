document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('autoSaveForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const status = document.getElementById('status');

    const LOCAL_STORAGE_KEY = 'autoSaveFormData';
    const DEBOUNCE_DELAY = 300;
    let saveTimeout;

    // Load saved data from Local Storage (optimized with destructuring and default values)
    const { name = '', email = '' } = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    nameInput.value = name;
    emailInput.value = email;

    // Debounce function (using a closure to avoid global variables)
    const debounce = (func, delay) => {
        return (...args) => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => func(...args), delay);
        };
    };

    // Save form data to Local Storage (optimized with a single object creation)
    const saveFormData = () => {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
        };

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
        showStatus();
    };

    // Show auto-save status (optimized with CSS class toggle for better control)
    const showStatus = () => {
        status.classList.add('visible');
        setTimeout(() => status.classList.remove('visible'), 1000);
    };

    // Attach event listener to the form with debounced save function
    form.addEventListener('input', debounce(saveFormData, DEBOUNCE_DELAY));
});
