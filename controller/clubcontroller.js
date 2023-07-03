const express = require ('express')
const clubModel = require('../model/clubmodel')
const cloudinary = require('cloudinary').v2

const createclub = async(req,res)=>{
    try {
        const {league, club }= req.body;
        const result = await cloudinary.uploader.upload(req.file.path)
        const newClub = new clubModel(
            {
                league,
                club,
                logo: result.secure_url,
            }
        )
        const savedClub = await newClub.save();
        return res.status(201).json({
            data:savedClub
        })        

        
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

//get all clubs
const allclubs = async (req, res)=>{
    const all = await clubModel.find()
    try {
        if(all.length === 0){
            res.status(404).json({message:"no profile found"})
        }else {
            res.status(200).json({message:"all profiles are ", data:all})
        }
        
    } catch (error) {
        res.status(400).json(error.message)
    }

}


//get 1 club
const getoneclub = async ( req, res ) => {
    const profileId = req.params.id;
    const profile = await clubModel.findById( profileId );
    try {
        if ( !profile) {
            res.status( 404 ).json( {
                message: "No profile found."
            })
        } else {
            res.status( 200 ).json( {
                data: profile,
            })
        }
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        })
    }
}
//update club

// updating profile
const updateclub = async ( req, res ) => {
    
    try {
        const {league, club} = req.body
    const clubId = req.params.id
     const clubs = await clubModel.findById(clubId)
    
        const bodyData = {
            league:league || clubs.league,
            club:club || clubs.club,
            logo:clubs.logo

        }
          const result = await cloudinary.uploader.upload(req.file.path)
        if ( req.files) {
            await cloudinary.uploader.destroy(club.logo)
            bodyData.logo = result.secure_url
        } else {
            const updateclub = await clubModel.findByIdAndUpdate(clubId, bodyData, {new:true})
            res.status( 200 ).json( {
                data:updateclub
            })
        }
} catch ( e ) {
    res.status( 500 ).json( {
        message: e.message
    })
}
}

const deleteclub = async ( req, res ) => {
    const profileId = req.params.id;
    const profile = await clubModel.findById( profileId );
    try {
          
        const deletedclub= await clubModel.findByIdAndDelete( profileId );
        if ( deletedclub ) {
            res.status( 200 ).json( {
                message: "Deleted successfully"
            })
        } else {
            res.status( 404 ).json( {
                message: "no club found"
            })
        }
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        })
    }
}


module.exports= {
    createclub,
    allclubs,
    getoneclub,
    updateclub,
    deleteclub
}