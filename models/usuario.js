
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    uid:{
        type: String,
        require: true,
        unique: true
      },
      cedula: {
        type: String,
        require: true,
        trim: true,
        unique: true
      },
      fullname: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
      },
      birthday: {
        type: Date,
        require: false
      },
      movil: {
        type: String,
        require: true,
        unique: true
      },
      phone: {
        type: String,
        require: false,
      },
      email: {
        type: String,
        require: false,
        trim: true,
        lowercase: true,
        unique: true
      },
      address: {
        string: String,
        maps: {
          description: String,
          place_id: String
        },
      },
      voting: {
        departament: String,
        municipality: String,
        point: String,
        table: String,
      },
      leader: {
        type: String,
        require: false,
      },
      locked: Boolean,
      family: {
        adults: String,
        partners: String,
      },
      counts: {
        followers: {
          type: Number,
          default: 0
        },
        movement: {
          type: Number,
          default: 0
        }
      },
      level: {
        type: Number,
        default: 0
      },
      social: [
        {
          name: String,
          link: String
        }
      ]
    })
    


UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );
