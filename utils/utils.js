const cloudinary =  require("cloudinary").v2
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const multer = require('multer')


cloudinary.config({ 
    cloud_name: 'dsml73vio', 
    api_key: '855818916975188', 
    api_secret: 'dIVo-elNdAeGOALdA_AIPIaRXO4' 
  });



  const storage = new CloudinaryStorage (
    {
        cloudinary  
    }
  )

  const upload = multer(
    {
        storage

    }
  )

module.exports = upload;