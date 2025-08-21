import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Ruta inicial (flujo poético)
app.get('/', (_req, res) => {
  res.send('🌿 Bienvenido al Camino Interno de las Ocho Joyas 🌿');
});

app.listen(PORT, () => {
  console.log(`Servidor ChiKung API corriendo en http://localhost:${PORT}`);
});
