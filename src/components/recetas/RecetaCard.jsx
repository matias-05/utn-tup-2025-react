import * as React from "react";
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
import { Link } from "react-router-dom";

export default function RecetaCard({
  id,
  imagen,
  titulo,
  tiempoPreparacion,
  dificultad,
  porciones,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        boxShadow: 3,
        borderRadius: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        height="200"
        image={imagen}
        alt={titulo}
        sx={{ objectFit: "cover" }}
      />

      {/* Contenido */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {titulo}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          <Chip
            icon={<AccessTimeIcon />}
            label={tiempoPreparacion}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<SignalCellularAltIcon />}
            label={dificultad}
            size="small"
            color="secondary"
            variant="outlined"
          />
          <Chip
            icon={<RestaurantIcon />}
            label={`${porciones} porciones`}
            size="small"
            color="success"
            variant="outlined"
          />
        </Box>
      </CardContent>

      {/* Botón */}
      <CardActions>
        <Link to={`/recetas/${id}`} >
            <Button        
                size="small"
                color="primary"
                >
                Ver detalle
            </Button>
        </Link>
      </CardActions>  
    </Card>
  );
}
