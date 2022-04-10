// 判断用户名是否存在
export default (arr, username) => {
  if (arr == null) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (username == arr[i].username) {
        console.log("用户名已存在");
        return true;
      }
    }
    return false;
  }
};
