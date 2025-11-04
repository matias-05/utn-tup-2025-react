import { useRecetas } from "../../contexts/RecetasContext";
import RecetaCard from "./RecetaCard";
import { Grid, CircularProgress, Typography } from "@mui/material";

function RecetasList(props) {
  const { recetas, isLoading } = useRecetas();

  if (isLoading)
    return (
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <CircularProgress />
      </Grid>
    );

  return (
    <>
      {/* Título opcional */}
      <Typography
        variant="h5"
        align="center"
        sx={{ my: 3, fontWeight: 600 }}
      >
        {props.titulo || "Listado de Recetas"}
      </Typography>

      {/* Contenedor de cards */}
      <Grid container spacing={2} justifyContent="center">
        {recetas.map((receta) => (
          <Grid item key={receta.id}>
            <RecetaCard
              id={receta.id}
              imagen={receta.imagen}
              titulo={receta.titulo}
              tiempoPreparacion={receta.tiempoPreparacion}
              dificultad={receta.dificultad}
              porciones={receta.porciones}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default RecetasList;