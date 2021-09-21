const validate = (values) => {
  const errors = {};
  const { title, description } = values;
  if (!title) {
    errors.title = "Title must be non-empty";
  } else if (title.trim().length < 5) {
    errors.title = "Title must be 5 characters";
  }

  return errors;
};

export default validate;
