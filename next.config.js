/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

module.exports = withVideos({
    images : {
        domains : ['8seneca.com','s3.us-west-2.amazonaws.com'] ,
      }
})
