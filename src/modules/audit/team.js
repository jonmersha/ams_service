const express = require("express");
//const app = express();
const router = express.Router();

//Crud Opearions
const insertOP = require("../../utils/insert");
const selectOP = require("../../utils/select");
const updateOP = require("../../utils/update");
const deleteOP = require("../../utils/delete");
const callFunc = require("../func/call_backs");

//Functinality List
  //list all
  //get by id
  //get by type
  //add
  //update,
  //delete
//list all
router.get("/", async (req, res) => {
  const stm = selectOP.selectAll("audit_object");
  callFunc.addDataCallBack(stm, res);
});
//get By ID
router.get("/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("audit_object",id,"id");
  callFunc.addDataCallBack(stm, res);
});
//by type
router.get("/type/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("videos",id,"object_type");
  callFunc.addDataCallBack(stm, res);
});

router.post("/add", (req, res) => {
  let stm = insertOP.insert("audit_object", req.body);
  callFunc.addDataCallBack(stm, res);
});





module.exports = router;
