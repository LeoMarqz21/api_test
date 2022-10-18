
const mysql2 = require('mysql2');

class Database 
{
    #config = {}
    #connection = null;
    constructor()
    {
        this.#config = {
            host : 'localhost',
            port : 3306,
            database : 'db_example_for_aws',
            user : 'root',
            password : 'root'
        }
        
    }

    getConnection()
    {
        this.#connection = mysql2.createConnection(this.#config);
        this.#connection.connect((error)=>console.log(error));
        return this.#connection;
    }

    close()
    {
        if(this.#connection != null)
        {
            this.#connection.end();
        }
    }

}


exports.Database = Database;