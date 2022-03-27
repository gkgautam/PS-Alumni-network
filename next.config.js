/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodb_uri:"mongodb+srv://root:Mymongodb@cluster0.sywiw.mongodb.net/butter?retryWrites=true&w=majority",
    token_secret_key:"hsdbfhkasbdfbasdhbfaberbarbtjwrjbnsdjkvnjksfg",
    admin_email:"admin@gmail.com",
    admin_pass:"123"
  }
}

module.exports = nextConfig


