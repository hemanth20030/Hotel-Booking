/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports={
    images: {
        domains:["links.papareact.com"],

    },
    env:{
        mapbox_key:['pk.eyJ1IjoiaGVtYW50aDAxMDciLCJhIjoiY2xpOGVmMXd0MXJocTNrbWxqYzlsazhuNSJ9.Os9sP_3WBIX-pyS6WY8k9w'],
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.html$/,
          use: 'html-loader',
        });
    
        return config;
      },
};
