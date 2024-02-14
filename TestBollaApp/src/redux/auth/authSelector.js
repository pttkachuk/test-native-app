export const selectLogin = (state) => state.auth.user.login;
export const selectPassword = (state) => state.auth.user.password;
export const selectUserName = (state) => state.auth.user.userName;
export const selectIsAuth = (state) => state.auth.token;
//export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;