import api from "./api";
const PORT = 8080;
api.listen(PORT, () => {
  console.log("the application Running on this ", PORT);
});
