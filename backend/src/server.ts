import api from "./api";
const PORT = 8080;
api.listen(PORT, '192.168.3.16', () => {
  console.log("the application Running on this ", PORT);
});
