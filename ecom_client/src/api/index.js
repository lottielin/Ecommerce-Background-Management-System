import ajax from "./ajax";

const HOST = "http://localhost:5500";

const getUrl = (url) => HOST + url;

const reqLogin = (username, password) => {
  let url = getUrl("/login");
  return ajax(url, { username, password }, "POST");
};

const reqAddUser = (user) => {
  let url = getUrl("/manage/user/add");
  return ajax(url, user, "POST");
};

export { reqLogin, reqAddUser };
