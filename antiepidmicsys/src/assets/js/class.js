export default class Getdate {
  constructor(date) {
    this.date = date;
  }
  getYear() {
    return this.date.getFullYear();
  }
  getMonth() {
    if (this.date.getMonth() < 10) {
      return "0" + (this.date.getMonth() + 1);
    } else {
      return this.date.getMonth() + 1;
    }
  }
  getDate() {
    if (this.date.getDate() < 10) {
      return "0" + this.date.getDate();
    } else {
      return this.date.getDate();
    }
  }
  getHours() {
    if (this.date.getHours() < 10) {
      return "0" + this.date.getHours();
    } else {
      return this.date.getHours();
    }
  }
  getMinutes() {
    if (this.date.getMinutes() < 10) {
      return "0" + this.date.getMinutes();
    } else {
      return this.date.getMinutes();
    }
  }
  getSeconds() {
    if (this.date.getSeconds() < 10) {
      return "0" + this.date.getSeconds();
    } else {
      return this.date.getSeconds();
    }
  }
}






