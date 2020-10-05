
  import {sequelize, Model,DataTypes} from "./connection";

  import  {IObject} from "./object.model";


  //const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");
// These are all the attributes in the User model

  
  
  
  export class Associate extends Model<IObject> implements IObject {
    public id!: string; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public createDate!: Date; // for nullable fields
    public lastModifiedDate!: Date;    
  }


  Associate.init(
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
      tableName: "associates",
      sequelize, // passing the `sequelize` instance is required
    }
  );