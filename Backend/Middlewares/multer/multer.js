const multer = require('multer');
const path = require('path');
const destinationDirectory = path.join(__dirname, '../../files');

const FileStorageEngine = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,destinationDirectory)
    },
    filename : (req,file,cb)=>{
        // cb(null,Date.now()+path.extname(String(file.originalname)))
        cb(null, Date.now()+'--'+file.originalname)
    }
})
const upload = multer({storage: FileStorageEngine})
module.exports =upload ;