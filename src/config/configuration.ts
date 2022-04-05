interface Config {
    port: number,
    mongoUrl: string
}

export const configuration = (): Config => ({
    port: 3030,
    mongoUrl: process.env.MONGO_URL
});