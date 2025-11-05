import { useRecetas } from "../../contexts/RecetasContext";
import RecetaCard from "./RecetaCard";
import {
  Grid,
  CircularProgress,
  Typography,
  Alert,
  Container,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

function RecetasList(props) {
  const { recetas, isLoading } = useRecetas();
  const [productos, setProductos] = useState([]);
  const [hasError, setError] = useState(false);

  if (isLoading)
    return (
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <CircularProgress />
      </Grid>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      <Stack spacing={5} alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Mis Recetas
        </Typography>

        {hasError && (
          <Alert severity="error" sx={{ width: "100%", maxWidth: 600 }}>
            ¡Ha ocurrido un error al cargar la receta!
          </Alert>
        )}

        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 600 }}
        >
          {props.titulo || "Listado de Recetas"}
        </Typography>
      </Stack>

      <Grid container spacing={2} justifyContent="center">
        {recetas.map((receta) => (
          <Grid item key={receta.id}>
            <RecetaCard
              receta={receta}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecetasList;