import moment from "moment";

class Dates {
  static NewsDate(date) {
    return moment(date).format("DD-MM-YYYY");
  }
  static newTime(date) {
    return moment(date).format("HH:MM");
  }

  static Monthago(date) { 
    return moment(date).fromNow()
  }
}

export default Dates;
