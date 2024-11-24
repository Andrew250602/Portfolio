const {projectElement}=require('./component/project')
const {homeElement}=require('./component/home')
const { headLink } = require('./commomComponent')
const express = require('express');
const router = express.Router();

// Define the homepage route
router.get('/project', (req, res) => {
     res.send(`
    <!DOCTYPE html>
    <html>
        <head>
           ${headLink}
        </head>
        <body>
            <div id="root">
                ${homeElement}
                ${projectElement}
            </div>
        </body>
    </html>
    `)
});

module.exports = router;