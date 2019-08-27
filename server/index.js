const express = require("express");
const app = express();
const path = require('path')

app.use(express.static(path.resolve(__dirname, "../dist")))

app.listen(process.env.PORT ||3000 , function() {
    console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
    );
  });