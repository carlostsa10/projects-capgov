const { errors } = require("../messages/error");

const fieldsToUser = (name, username, password) => {
  if (!name) {
    const response = {
      message: errors.nameX,
      ok: false,
    };
    return response;
  }

  if (!username) {
    const response = {
      message: errors.usernameX,
      ok: false,
    };
    return response;
  }

  if (!password) {
    const response = {
      message: errors.passwordX,
      ok: false,
    };
    return response;
  }

  return { ok: true };
};

const fieldsToLogin = ({ username, password }) => {
  if (!username) {
    const response = {
      message: errors.usernameX,
      ok: false,
    };
    return response;
  }

  if (!password) {
    const response = {
      message: errors.passwordX,
      ok: false,
    };
    return response;
  }

  return { ok: true };
};

module.exports = {
  fieldsToLogin,
  fieldsToUser,
};
