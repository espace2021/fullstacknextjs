/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com","static.vecteezy.com"]
        },
        env:{
            NEXT_PUBLIC_API_URL : "http://localhost:3000/api",
            NEXT_PUBLIC_GOOGLE_CLIENTID : "31017781977-c2mev6djp0jd9dte3hcqal7v8ha2tp27.apps.googleusercontent.com",
            NEXT_PUBLIC_GOOGLE_CLIENTSECRET : "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",
            NEXT_PUBLIC_AUTH_SECRET : "secret",
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : "pk_test_51KtYRUD3HS4vNAwatvmqAEXLKKX11UOcpkHfLnw9UPI9kZ7AJCOeLkqik61wHFXLmRGHUd4aNBvp45v82DpskKl300bMfznwlE",
            STRIPE_SECRET_KEY : "sk_test_51KtYRUD3HS4vNAwa7ANL32HQqRTywhV3JHWIp3BxAIHv04bWoz22aKlRs9Q1L6znSX2i5fu5i3Xkl9i2Goz7jAkC00LL0T3lTL",
            NEXT_PUBLIC_URL : "http://localhost:3000",
            NEXT_PUBLIC_DATABASE_URL:"mongodb+srv://hassan:messk2015@cluster0.yfhhu.mongodb.net/bibliothequedb?retryWrites=true&w=majority"
        },
    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              { key: 'Access-Control-Allow-Origin', value: '*' },
              { key: 'Access-Control-Allow-Methods', value: 'GET, DELETE, PATCH, POST, PUT' },
              { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
            ],
          },
        ];
      },
}

module.exports = nextConfig