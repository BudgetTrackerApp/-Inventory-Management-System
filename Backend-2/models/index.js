const mongoose = require("mongoose");
const uri =
  "mongodb+srv://tspsparasuram:thiru96@inventory.wm7o0qm.mongodb.net/?retryWrites=true&w=majority";
// // const uri =
//   "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";

function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
