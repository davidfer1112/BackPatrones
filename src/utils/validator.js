const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isPhoneValid = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
};

const isPasswordValid = (password) => {
    return password && password.length >= 8; // Ejemplo de validación básica de contraseña
};

module.exports = { isEmailValid, isPhoneValid, isPasswordValid };
