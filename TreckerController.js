const TreckerModel = require ('./TreckerModel');

module.exports.getLog = async (req,res)=>{
    const myTrecker = await TreckerModel.find();
    res.send(myTrecker);
};

module.exports.saveLog = async (req,res)=>{
    const { name } = req.body;
    TreckerModel.create({ name })
    .then ((data)=> {console.log('Log added')
    res.send (data)})
}

module.exports.deleteLog = async (req,res)=>{
    const { _id } = req.body;
    TreckerModel.findByIdAndDelete(_id)
    .then(()=>res.send('Deleted a log'))
}

module.exports.editLog = async (req,res)=>{
    const { _id, name} = req.body;
    TreckerModel.findByIdAndUpdate(_id, {name})
    .then(()=>res.send('Edited a log'))
}