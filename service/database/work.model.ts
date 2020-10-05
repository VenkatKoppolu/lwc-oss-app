import {sequelize, Model,DataTypes} from "./connection";

import  {IObject} from "./object.model";

// These are all the attributes in the User model

  
  
  
  export class Work extends Model<IObject> implements IObject {
    public id!: string; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public createDate!: Date; // for nullable fields
    public lastModifiedDate!: Date;    
  }


  Work.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      createDate: {
        type: new DataTypes.DATE,
        allowNull: false,
      },
      lastModifiedDate:{
        type: new DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      tableName: "works",
      sequelize, // passing the `sequelize` instance is required
    }
  );