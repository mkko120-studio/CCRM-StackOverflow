export default interface DatabaseOptions {
    url?: string,
    user?: string,
    password?: string,
    port?: number,
    database?: string,
    file?: string | Buffer,
    ssl?: {
        ca?: string | Buffer,
        cert: string | Buffer,
        key: string | Buffer,
        passprase?: string,
    }
}