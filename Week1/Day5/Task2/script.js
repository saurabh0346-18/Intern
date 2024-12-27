document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('autoSaveForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const status = document.getElementById('status');

    const LOCAL_STORAGE_KEY = 'autoSaveFormData';
    const DEBOUNCE_DELAY = 300;
    let saveTimeout;

    // Load saved data from localStorage
    const loadSavedData = () => {
        const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
        nameInput.value = savedData.name || '';
        emailInput.value = savedData.email || '';
    };

    // Debounce function to limit the rate of function execution
    const debounce = (func, delay) => {
        return (...args) => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => func(...args), delay);
        };
    };

    // Save form data to localStorage
    const saveFormData = () => {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
        showStatus();
    };

    const showStatus = () => {
        status.classList.add('visible');
        setTimeout(() => status.classList.remove('visible'), 1000);
    };
    loadSavedData();

    form.addEventListener('input', debounce(saveFormData, DEBOUNCE_DELAY));
});
