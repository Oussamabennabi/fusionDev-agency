/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        remotePatterns:[{hostname:"cdn.sanity.io"},{hostname:"assets.aceternity.com"},{hostname:"images.unsplash.com"}]
    }
};

export default nextConfig;
