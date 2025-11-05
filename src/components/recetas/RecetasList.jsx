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

  if (isLoading)
  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <CircularProgress />
    </Grid>
  );

  if (!recetas || recetas.length === 0) {
    return (
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <Alert severity="error" sx={{ width: "100%", maxWidth: 600 }}>
          ¡No se encontraron recetas!
        </Alert>
      </Grid>
    );
  }
    

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      <Stack spacing={3} alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center"> Mis Recetas </Typography>
        <Typography variant="h5" align="center" sx={{ fontWeight: 600 }}> Listado de Recetas </Typography>
      </Stack>

      <Grid container spacing={2} justifyContent="center">
        {recetas.map((receta) => (
          <Grid item key={receta.id}>
            <RecetaCard receta={receta}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecetasList;