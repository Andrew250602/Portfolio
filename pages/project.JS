const {projectElement}=require('../pages/component/project')
const {homeElement}=require('../pages/component/home')
const { headLink } = require('../pages/commomComponent')
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
            <script>
                const navigationOcean = document.getElementById('navigationOcean');
                const bannerProject = document.getElementById('bannerProject');
                const navigationChooseContact = document.getElementById('navigationChooseContact');

                const buttonContact = document.getElementById('buttonContact');
                const buttonBlog = document.getElementById('buttonBlog');
                const buttonAbout = document.getElementById('buttonAbout');
                const buttonService = document.getElementById('buttonService');
                const buttonProject = document.getElementById('buttonProject');

                const projectClick = false;
                
                buttonProject.addEventListener('click', () => {
                    openComponent.style.display = 'none';
                    closeComponent.style.display = 'block';
                });

                buttonProject.addEventListener('click', () => {
                    projectClick = true;
                    bannerProject.style.display = 'block';
                })

                projectClick ? navigationChooseContact.style.display = 'none' : 
                navigationChooseContact.style.display = 'block';
                
                
                


            </script>
        </body>
    </html>
    `)
});

module.exports = router;