const {homeElement}=require('./component/home')
const { headLink } = require('./commomComponent')
const express = require('express');
const router = express.Router();

// Define the homepage route
router.get('/', (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
        <html>
            <head>
               ${headLink}
            </head>
            <body>
                <div id="root">
                    ${homeElement}
                </div>
              
            </body>
        </html>
        `
    );
});

module.exports = router;