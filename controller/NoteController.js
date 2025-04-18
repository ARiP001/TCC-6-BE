import Note from  "../models/NoteModel.js";
import { Op } from "sequelize";

//halo
//get all (done)
export const getNotes = async (req,res) => {
    try {
        const response = await Note.findAll({
            attributes:['id','title','owner']
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ pesan: "Terjadi kesalahan pada server" });
    }
}

//get by name (done)
export const getNoteByName = async (req, res) => {
    try {
        const response = await Note.findAll({
            where: {
                owner: { [Op.like]: `%${req.params.owner}%` }
            },
            attributes: ['id', 'title', 'owner']
        });
        if (response.length === 0) {
            return res.status(404).json({ pesan: "Note tidak ditemukan" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ pesan: "Terjadi kesalahan pada server" });
    }
};

//get 1 note (done)
export const getNote = async (req, res) => {
    try {
        const response = await Note.findOne({
            where:{
                id: req.params.id
            }
        })

        if (!response) {
            return res.status(404).json({ pesan: "Note tidak ditemukan" });
        };

        // res.status(200).json({ pesan: "Note ditemukan" , note: response});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ pesan: "Terjadi kesalahan pada server" });
    }
}

//create note (done)
export const createNote = async (req,res) => {
    try {
        await Note.create(req.body);
        res.status(201).json({pesan: "Note ditambahkan"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ pesan: "Terjadi kesalahan pada server" });
    }
}

//delete note (done)
export const deleteNote = async (req, res) => {
    try { 
        const response = await Note.destroy({
            where:{
                id: req.params.id
            }
        })
        if (!response) {
            return res.status(404).json({ pesan: "Note tidak ditemukan" });
        }
        res.status(200).json({ pesan: "Note telah dihapus" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ pesan: "Terjadi kesalahan pada server" });
    }
}


// Update a note
export const updateNote = async (req, res) => {
    try {
        await Note.update(req.body,{
            where:{
                id: req.params.id
            }
        });

        // if (!response) {
        //     return res.status(404).json({ pesan: "Note tidak ditemukan" });
        // }

        res.status(200).json({ pesan: "Note berhasil diupdate"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ pesan: "Terjadi kesalahan pada server" });
    }
}