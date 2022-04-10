export default (arr, username, password) => {
  if (arr == null) {
    return true;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (username == arr[i].adminname && password == arr[i].adminpassword) {
        return false;
      }
    }
    return true;
  }
};