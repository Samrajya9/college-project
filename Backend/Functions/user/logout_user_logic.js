const logout_user_logic = (res, cookieName) => {
  return new Promise((resolve, reject) => {
    if (cookieName == `access_token`) {
      res.clearCookie(cookieName);
      resolve({ message: `logout successful please login again` });
    } else {
      reject(new Error(`failed to log out`));
    }
  });
};
module.exports = logout_user_logic;
