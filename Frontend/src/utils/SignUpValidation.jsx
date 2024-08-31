export const validateName = (name) => {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name)
    ? ""
    : "Name must only contain alphabetic characters and spaces.";
};

export const validatePhoneNumber = (number) => {
  const regex = /^\d{10}$/;
  return regex.test(number) ? "" : "Phone number must be exactly 10 digits.";
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? "" : "Please enter a valid email address.";
};

export const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password)
    ? ""
    : "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
};
