import { useNavigate } from "react-router-dom";
import { useRecetas } from "../../contexts/RecetasContext";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
  Container,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PeopleIcon from "@mui/icons-material/People";
import IngredientesList from "./IngredientesList"

export default function RecetaDetalle({ receta }) {
  const navigate = useNavigate();
  const {isLoading} = useRecetas();
  

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }


  if (!receta) {
    return <Typography align="center">Receta no encontrada.</Typography>;
  }

  return (
    <Container>
      <Paper elevation={3} sx={{ maxWidth: 900, mx: "auto", mt: 4, mb: 6, p: 3 }}>
        {/* Botón de volver arriba */}
        <IconButton onClick={() => navigate("/recetas")} color="primary" sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>

        {/* Imagen destacada */}
        <Card sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height="400"
            image={receta.imagen}
            alt={receta.titulo}
            sx={{
              objectFit: "cover",
              height: { xs: 200, sm: 300, md: 400, lg: 500 }, // altura cambia según el tamaño de pantalla
              borderRadius: 2,
            }}
          />
        </Card>

        {/* Título y descripción */}
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {receta.titulo}
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          {receta.descripcion}
        </Typography>

        {/* Información general con Chips */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 3, flexWrap: "wrap" }}
        >
          <Chip
            icon={<AccessTimeIcon />}
            label={`Tiempo: ${receta.tiempoPreparacion}`}
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<FitnessCenterIcon />}
            label={`Dificultad: ${receta.dificultad}`}
            color="secondary"
            variant="outlined"
          />
          <Chip
            icon={<PeopleIcon />}
            label={`Porciones: ${receta.porciones}`}
            color="success"
            variant="outlined"
          />
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Lista de ingredientes */}
          <IngredientesList receta={receta}></IngredientesList>

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

        
      </Paper>
    </Container>
  );
}
