import app from './app';
import { startSequelizeConnection } from "./src/utils/utils";

//Start da aplicação após a conexão com a base
startSequelizeConnection().
    then(res => {
        if (res){
            app.listen(3000, () => {
                console.log(`Server listening on port 3000!`);
            });
        }
    }).
    catch((err) => console.error(err))
