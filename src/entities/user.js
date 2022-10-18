const { Database } = require("../database/database");

class User extends Database
{
    constructor()
    {
        super();
    }

    async getAll()
    {
        let response = [];
        let query = "SELECT * FROM users";
        let con = this.getConnection();
        con.query(query,(error, data)=>{
            if(error)
                throw error;
                console.log(data);
            response.push(data);
        })
        console.log(response);
        return await response;
    }
}


exports.User = User;