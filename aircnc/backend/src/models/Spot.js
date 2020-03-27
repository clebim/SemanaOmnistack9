const mongoose = require ('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail : String, // imagem
    company: String, // empresa
    price: Number, //Valor
    techs: [String], // tecnologias
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},{
    toJSON:{
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:4000/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);