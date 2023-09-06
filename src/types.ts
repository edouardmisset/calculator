import { z } from 'zod'

export const operatorSchema = z.enum(['+', '-', '/', '*', '%', '^'])
export type Operator = z.infer<typeof operatorSchema>
