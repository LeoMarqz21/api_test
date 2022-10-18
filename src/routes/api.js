const { Router } = require('express');
const router = Router();
const os = require('os');
const nktInterfaces = os.networkInterfaces();

router.get('/api', (req, res)=>{
    res.json({
        "welcome":"Hello World !!"
    });
});

router.get('/api/ip', (req, res)=>{
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
        "message":"bienvenido, aqui estan mis interfaces de red y sus respectivas IPv4",
        "data": data
    });
});

router.get('/api/posts', (req, res)=>{
    res.json(
        {
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

router.get('/api/users', (req, res)=>{
    res.json(
        {
            "data":[
                {
                    "id":1001,
                    "fullname":"Diego Francisco",
                    "username":"dieguillo",
                    "edad":25,
                    "created_at":"25/05/2022"
                },
                {
                    "id":1005,
                    "fullname":"Lucas Perez",
                    "username":"perezgil",
                    "edad":45,
                    "created_at":"25/10/2022"
                },
                {
                    "id":1010,
                    "fullname":"Antonio Guillermo",
                    "username":"capi",
                    "edad":18,
                    "created_at":"25/11/2022"
                },
            ],
        }
    );
});

module.exports = router;
