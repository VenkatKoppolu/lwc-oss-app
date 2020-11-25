import * as compression from "compression";
import * as helmet from  "helmet";
import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import {sequelize} from "./database/connection";


const app = express();
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3002;
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

/*
app.use('/service/associates',require('./associates'));
app.use('/service/works',require('./works'));*/

const server =app.listen(PORT, () =>{
    console.log(`✅  Server started: http://${HOST}:${PORT}`);
    sequelize.authenticate().then(async()=>{
        console.log('connection established to database');
        await sequelize.sync({force:true});

    }).catch((e: any)=>{
        console.log(e.message);
    });
});

/**
 * Webpack HMR Activation
 */
/*
type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
*/
