//to list and display the dogs information and photos
module.exports = function(sequelize, DataTypes) {
  const pet = sequelize.define("pet", {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [01] 
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [01]
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [01]
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [01]
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [01]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      validate: {
        len: [05]
      }
    },
    // owner_id: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     len: [01]
    //   },
    //   allowNull: false
    // },
    size: {
      type: DataTypes.INTEGER,
      validate: {
        len: [01]
      },
      allowNull: false
    },
    neutered: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [01]
    },
    
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Lets Hang"
    },
    
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      },
      allowNull: true
    }
  });

  pet.associate = function(models) {
    pet.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      },
    });
  };

  return petPage;
;