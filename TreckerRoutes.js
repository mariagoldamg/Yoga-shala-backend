const {Router} = require ('express');
const { getLog,saveLog, deleteLog, editLog } = require('./TreckerController');
const router = Router();


router.get ('/', getLog);
router.post ('/saveLog', saveLog);
router.post ('/deleteLog', deleteLog);
router.post ('/editLog', editLog); 


module.exports=router;