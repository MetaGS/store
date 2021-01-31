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
  if (isNaN(price)) {
    errors.price = "Price should be number";
  }

  return errors;
};

export const validateCommentInput = (comment, phoneNumber, rating) => {
  let errors = {};

  if (comment.length > 800) {
    errors.comment = "Comment cannot be more than 800 characters";
  } else if (comment.length === 0) {
    errors.comment = "Comment cannot be blank";
  }

  if (isNaN(phoneNumber)) {
    errors.phoneNumber = "Phone should be only numbers";
  }

  if (rating == 0) {
    errors.rating = "You did not rate the product";
  }

  return errors;
};
