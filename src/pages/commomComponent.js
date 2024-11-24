const {homeCSS}=require('./component/home')
const {projectCSS} = require('./component/project')
const {introductCss} = require('./component/home/introduceCpn')
const headLink  = `
    <link rel="icon" href="https://ik.imagekit.io/fyhbxzra7/portpolio__journey/journey__image/helm.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675947577572" />
    <title>Dev Vỹ</title>
    <style>${homeCSS}</style>
    <style>${projectCSS}</style>
    <style>${introductCss}</style>

`

module.exports = {
    headLink
}