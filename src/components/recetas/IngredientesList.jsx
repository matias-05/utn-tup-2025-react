import {
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

export default function IngredientesList({ receta }) {
  return (
    <>
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
    </>
  );
}
