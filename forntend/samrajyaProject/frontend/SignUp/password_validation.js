const one_uppercase = /(?=.*[A-Z])/
const one_digit = /(?=.*[0-9])/
const one_symbol = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/
const more_than_four_letter_long = /.{5,}/

const validatePassword = (password) => {
  const errors = []

  if (!one_uppercase.test(password)) {
    errors.push("Password should contain at least one uppercase letter.")
  }

  if (!one_digit.test(password)) {
    errors.push("Password should contain at least one digit.")
  }

  if (!one_symbol.test(password)) {
    errors.push("Password should contain at least one symbol.")
  }

  if (!more_than_four_letter_long.test(password)) {
    errors.push("Password should be more than 4 characters long.")
  }

  if (errors.length === 0) {
    // All conditions passed
    return true
  } else {
    // Display error messages
    errors.forEach((error) => alert(error))
    return false
  }
}
export { validatePassword }
