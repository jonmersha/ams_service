const express = require("express");
const app = express();
var cors = require('cors')

const port = 3000;
app.use(cors())
app.use(express.json());
app.use("/static", express.static("public"));
app.use("/movie", express.static("public/movie"));

app.get("/test", (req, res) => {
  res.send(
    "This Is my task to test every thing again testing continued on the activityy"
  );
});
///Gojo serivice
const audit_object = require("./src/modules/audit/object");
app.use("/ams/object", audit_object);


// app.listen();
//Loca service Configurations
app.listen(port, () => {
  console.log(`Server Statrted @ ${port}`);
});
