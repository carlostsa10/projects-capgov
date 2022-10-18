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

const fieldsToProjects = ({ title, zip_code, cost, deadline }) => {
  if (!title) {
    const response = {
      message: errors.titleX,
      ok: false,
    };
    return response;
  }

  if (!zip_code) {
    const response = {
      message: errors.zipcodeX,
      ok: false,
    };
    return response;
  }

  if (!cost) {
    const response = {
      message: errors.costX,
      ok: false,
    };
    return response;
  }
  if (!deadline) {
    const response = {
      message: errors.deadlineX,
      ok: false,
    };
    return response;
  }

  return { ok: true };
};

module.exports = {
  fieldsToLogin,
  fieldsToUser,
  fieldsToProjects,
};
