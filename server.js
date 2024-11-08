import app from './app';
import { startSequelizeConnection } from "./src/utils/utils";

try{
    app.listen(3000, () => {
        startSequelizeConnection();
        console.log(`Server listening on port 3000!`);
    });
}catch(error){
    console.log(error);
}
