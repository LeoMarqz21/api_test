
const { Router } = require('express');
const router = Router();

router.get('/api', (req, res)=>{
    res.json({
        "welcome":"Hello World !!"
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
