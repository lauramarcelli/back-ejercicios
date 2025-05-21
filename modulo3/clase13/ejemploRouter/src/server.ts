//importamos app
import app from "./app";

const PORT = 3000

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el http://localhost:${PORT}/users`)
})