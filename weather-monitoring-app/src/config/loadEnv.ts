import { z } from 'zod'


interface IEnvs {
    key: string
    baseUrl: string
    authUrl: string
}


const schema = z.object({
    key: z.string(),
    baseUrl: z.string(),
    authUrl: z.string().default('http://localhost:3000/auth/')
})

const { error, data, success } = schema.safeParse(process.env)


if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

let envs: IEnvs

if (success) {
    envs = data as IEnvs
}

export { envs }