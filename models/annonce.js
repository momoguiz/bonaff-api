const mongoose=require('mongoose')

const Schema = mongoose.Schema

const Annonce =new Schema({ 
      titre: {
        type: String,
        minLength: 1,
        maxLength: 25,
        required: true
      },
      categorie: {
        type: String,
        //required: true,
        enum :['Multimédia', 'Maison', 'Mode', 'Empoi', 'Immobilier', 'Véhicule', 'Autres',]
      },
      description: {
        type: String,
        minLength: 0,
        maxLength: 500,
        default: "",
        //required: true
      },
      prix: {
        type: Number,
        min: 0,
        default: 0,
        required: true
      },
      image:String,
      // images: {
      //   type: Array,
      //   default: []
      // },
     
      annonce: {
        type: String,
        enum: ['Offre', 'Demande']
      },
      createur: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        //required: true
      },
      region: {
        type:String ,
        enum:['Région Boké', 'Région Conakry', 'Région Faranah', 'Région Kankan', 'Région_Kindia', 'Région Labé', 'Région Mamou', "Région N'Zérékoré",]
        },
      ville: {
          type:String,
          enum: ["Beyla",
            "Boffa",
            "Boké",
            "Conakry",
            "Coyah",
            "Dabola",
            "Dalaba",
          "Dinguiraye",
           "Dubreka",
            "Faranah",
            "Forecariah",
            "Fria",
            "Gaoual",
            "Gueckedou",
            "Kamsar",
            "Kankan",
            "Koulaboui",
            "Kérouane",
            "Kindia",
            "Kissidougou", 
            "Koubia",
            "Koundara",
            "Kouroussa",
            "Labé",
            "Lélouma",
            "Lola",
            "Macenta",
            "Mali",
            "Mamou",
            "Mandiana",
            "N'Zérékoré",
            "Pita",
            "Sangaredi",
            "Siguiri",
            "Télimélé",
            "Tougué",
            "Yomou",
            "Youkounkoun",
            "Annexes"]
        },
      cree_le: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model('Annonce', Annonce)