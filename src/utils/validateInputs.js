import isEmail from "validator/lib/isEmail";

export default (email, password, name = "Not used!") => {
  const errors = {};

  if (!isEmail(email)) {
    errors.email = "Invalid Email";
  }

  if (password.length < 6) {
    errors.password = "Password length cannot be less than 6 characters";
  }

  if (!name.trim()) {
    errors.name = "Cannot be blank";
  }

  return errors;
};

export const checkProductReliable = (title, desc, price, photos) => {
  let errors = {};
  if (title.length <= 0) {
    errors.title = "Title cannot be blank";
  }

  if (desc.length <= 0) {
    errors.desc = "Description cannot be blank";
  }

  if (+price <= 0) {
    errors.price = "Price cannot be 0";
  }

  return errors;
};
