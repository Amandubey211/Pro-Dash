// emailvalidation
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

//password Validation
export const validatePassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/.test(
    password
  );
};

export const validateMobileNumber = (mobileNumber) => {
  return /^\d{10}$/.test(mobileNumber);
};
//user name validation
export const validateUsername = (userName) => {
  return /^[a-zA-Z0-9_]{3,20}$/.test(userName);
};
