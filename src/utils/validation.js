export function validateStep1({ fullName, email }) {
  const errors = {};
  if (!fullName.trim()) errors.fullName = "Full Name is required";
  if (!email) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Invalid email format";
  return errors;
}

export function validateStep2({ password, confirmPassword }) {
  const errors = {};
  if (!password) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters";
  if (!confirmPassword) errors.confirmPassword = "Please confirm your password";
  else if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
  return errors;
}
