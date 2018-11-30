import app from './instance'
import { PORT } from './env'

app.listen(PORT)

console.log(`Server is listening on http://localhost:${PORT}`)
