const {homeElement}=require('../pages/component/home')
const { headLink } = require('../pages/commomComponent')
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
                    <div class="head">
                        ${homeElement}
                    </div>
                </div>
                <script>
                    const buttonOpen = document.getElementById('buttonOpenOcean');
                    const buttonClose = document.getElementById('buttonCloseOcean');
                    const openComponent = document.getElementById('navigationOcean');
                    const closeComponent = document.getElementById('navigationChoose');
                    closeComponent.style.display = 'none';
                    buttonOpen.addEventListener('click', () => {
                        openComponent.style.display = 'none';
                        closeComponent.style.display = 'block';
                    });
                    buttonClose.addEventListener('click', () => {
                        closeComponent.style.display = 'none';
                        openComponent.style.display = 'block';
                    });
                </script>
            </body>
        </html>
        `
    );
});

module.exports = router;