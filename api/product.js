const express = require("express");
const router = express.Router();
global.isLogin = 0;
global.login = false;
/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    return res.status(200).render("index.ejs", { isLogin: isLogin, login: login });
  } 
  catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
    
  }
});

module.exports = router;
