import { useParams, useNavigate } from "react-router-dom";
import { useRecetas } from "../../contexts/RecetasContext";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function RecetaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recetas, isLoading, getRecetaById } = useRecetas();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  const receta = getRecetaById(id);

  if (!receta) {
    return <Typography align="center">Receta no encontrada.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, mb: 6, px: 2 }}>
      {/* Imagen destacada */}
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="400"
          image={receta.imagen}
          alt={receta.titulo}
          sx={{ objectFit: "cover" }}
        />
      </Card>

      {/* Título y descripción */}
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {receta.titulo}
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        {receta.descripcion}
      </Typography>

      {/* Información general */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">
            ⏱️ Tiempo: {receta.tiempoPreparacion}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">
            💪 Dificultad: {receta.dificultad}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">
            🍽️ Porciones: {receta.porciones}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Lista de ingredientes */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Ingredientes
      </Typography>
      <List>
        {receta.ingredientes.map((ing, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={`${ing.cantidad} ${ing.unidad} de ${ing.nombre}`}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Proceso de preparación */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Preparación
      </Typography>
      <List>
        {receta.pasos.map((paso, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={`Paso ${index + 1}`}
              secondary={paso}
              sx={{ mb: 1 }}
            />
          </ListItem>
        ))}
      </List>

      {/* Botón volver */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/recetas")}
        >
          Volver al Listado
        </Button>
      </Box>
    </Box>
  );
}
