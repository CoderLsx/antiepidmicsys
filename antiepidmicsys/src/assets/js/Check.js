// 判断登录用户名或密码是否正确
export default (arr, username, password) => {
  if (arr == null) {
    return true;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (username == arr[i].username && password == arr[i].password) {
        return false;
      }
    }
    return true;
  }
};
