/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'localhost',
                port:'1337'
            },
            {
                protocol:'https',
                hostname:'lh3.googleusercontent.com',
                
            },
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
                
            }
        ]
      },

     
};

export default nextConfig;
