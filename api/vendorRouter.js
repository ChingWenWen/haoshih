const express = require("express");
const vendorRouter = express.Router();
const {
  queryAsync,
  hashPW,
  updateVendorProfile,
} = require("../src/utils/utils.js");
var config = require("./databaseConfig.js");
var conn = config.connection;

// --------測試路由用----------
// vendorRouter.get('/', function(req,res){res.send('OK')})

// vendorRouter.get('/test', function(req,res){
//     conn.query("SELECT * FROM member WHERE uid = 1",function(err,result){res.json(result)})
// })
// --------測試路由用----------

vendorRouter.get("/", (req, res) => {
  res.send("vendor page");
});

// 會員資料 API
vendorRouter.get("/profile/:vid", (req, res) => {
  conn.query(
    "select * from vendor where vid = ?",
    [req.params.vid],
    (err, result) => {
      res.json(result[0]);
    }
  );
});

// 編輯會員資料 --React--
vendorRouter.put("/profile/:vid", async (req, res) => {
  try {
    const { first_name, last_name, phone, email, address, password } = req.body;
    const vid = req.params.vid;

    // 有被填寫的欄位才會傳入 value
    let updateFields = {};
    if (first_name) updateFields.first_name = first_name;
    if (last_name) updateFields.last_name = last_name;
    if (phone) updateFields.phone = phone;
    if (email) updateFields.email = email;
    if (address) updateFields.address = address;
    // 有被填寫的密碼才會被雜湊加密並傳入
    if (password) {
      var hashedPW = await hashPW(password);
      updateFields.password = hashedPW;
    }

    // 假如有欄位被填寫才會 update到資料庫，否則就是回到原畫面
    if (Object.keys(updateFields).length > 0) {
      await updateVendorProfile(conn, vid, updateFields);
      res.status(200).json({
        message: "Profile updated successfully",
        updatedFields: Object.keys(updateFields),
      });
    } else {
      res.status(200).json({ message: "No fields to update" });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send("An error occurred while updating the profile");
  }
});

// 攤位資訊
vendorRouter.get("/info/:vid", (req, res) => {
  res.send("<h1>shop info here</h1>");
});

// 交易設定 API
vendorRouter.get("/bankInfo/:vid", (req, res) => {
  conn.query(
    "select bank_code, bank_account from vendor where vid = ?",
    [req.params.vid],
    (err, result) => {
      res.json(result[0]);
    }
  );
});

// 編輯交易設定
vendorRouter.put("/bankInfo/:vid", (req, res) => {
  res.send("Go for it");
});

module.exports = vendorRouter;
