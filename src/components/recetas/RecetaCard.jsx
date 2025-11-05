import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { useNavigate } from 'react-router-dom';
export default function RecetaCard({ receta }) {
  
    const navigate = useNavigate();
    const handleVerReceta = () => {
      navigate(`/recetas/${receta.id}`);
    };

    return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        boxShadow: 10,
        borderRadius: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      {/* Imagen */}
      <CardMedia component="img" height="200" image={receta.imagen} alt={receta.titulo} sx={{ objectFit: "cover" }}/>

      {/* Contenido */}
      <CardContent>

        <Typography gutterBottom variant="h6" component="div">
          {receta.titulo}
        </Typography>

      {/* Chips de información */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>

          {/* Chips de tiempo */}
          <Chip icon={<AccessTimeIcon />} label={receta.tiempoPreparacion} size="small" color="primary" variant="outlined"/>

          {/* Chips de dificultad */}
          <Chip icon={<SignalCellularAltIcon />} label={receta.dificultad} size="small" color="secondary" variant="outlined"/>

          {/* Chips porciones */}
          <Chip icon={<RestaurantIcon />} label={`${receta.porciones} porciones`} size="small" color="success" variant="outlined"/>

        </Box>
      {/* Chips de información */}

      </CardContent>

      {/* Botón para ver receta */}
      <CardActions>
        <Button size="small" color="primary" onClick={handleVerReceta}> Ver Receta</Button>
      </CardActions>  
      {/* Botón para ver receta*/}

    </Card>
  );
}

