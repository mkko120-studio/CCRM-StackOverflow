export type QueryArgs =
    |[query: string, callback: (error, results, fields) => void]
    |[query: string, params: string[], callback: (error, results, fields) => void]

export type SelectArgs = |
    []