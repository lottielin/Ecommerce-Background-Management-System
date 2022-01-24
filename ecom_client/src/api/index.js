import ajax from "./ajax";

const HOST = "http://localhost:5000";

const getUrl = (url) => HOST + url;

const reqLogin = (username, password) => {
  let url = getUrl("login");
  ajax(url, { username, password }, "POST");
};

const reqAddUser = (user) => {
  let url = getUrl("/manage/user/add");
  ajax(url, user, "POST");
};

export { reqLogin, reqAddUser };
