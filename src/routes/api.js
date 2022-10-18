const { Router } = require('express');
const router = Router();
const os = require('os');
const { Database } = require('../database/database');
const nktInterfaces = os.networkInterfaces();

router.get('/api', (req, res)=>{
    res.json({
        "welcome":"Hello World !!"
    });
});

router.get('/api/users', async (req, res)=>{
    const db = new Database();
    const con = db.getConnection();
    const query = "SELECT * FROM users";
    con.query(query, (error, result)=>{
        if(error)
            throw error;
        res.json(
            {
                "message":"Aqui se hace uso de una base de datos mysql",
                "data": result
            }
                
        );
    });
});

router.get('/api/v1/ip', (req, res)=>{
    let data = [];
    let alias = 0;
    Object.keys(nktInterfaces).forEach((interfaceName)=>{
        nktInterfaces[interfaceName].forEach((interface)=>{
            if('IPv4' !== interface.family || interface.internal !== false)
                return;
            if(alias >= 1)
            {
                // this single interface has multiple ipv4 addresses
                console.log(interfaceName + ':' + alias, interface.address);
            }else
            {
                // this interface has only one ipv4 adress
                data.push(`Interface: ${interfaceName} - IPv4: ${interface.address} `)
                console.log(`Interface: ${interfaceName} - IPv4: ${interface.address} `);
            }
        })
    });
    res.json({
        "version":"1",
        "message":"bienvenido, aqui estan mis interfaces de red y sus respectivas IPv4",
        "data": data
    });
});

router.get('/api/v2/ip', (req, res)=>{
    res.json({
        "version":"2",
        "message":"bienvenido, aqui estan mis interfaces de red y sus respectivas IPv4 v2",
        "data": nktInterfaces
    });
});

router.get('/api/posts', (req, res)=>{
    res.json(
        {
            "message":"datos staticos",
            "data":[
                {
                    "id":1,
                    "title":"hello world",
                    "content":"hello world from NodeJs"
                },
                {
                    "id":2,
                    "title":"hello world 2",
                    "content":"hello world from NodeJs 2"
                },
                {
                    "id":3,
                    "title":"hello world 3",
                    "content":"hello world from NodeJs 3"
                },
            ],
        }
    );
});



module.exports = router;
