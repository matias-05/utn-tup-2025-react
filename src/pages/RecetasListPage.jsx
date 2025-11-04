import { RecetasProvider } from '../contexts/RecetasContext'
import RecetasList from '../components/recetas/RecetasList'
import { useEffect, useState } from "react";
import { Container, Typography, Alert } from "@mui/material";

function RecetasListPage() {
    const [productos, setProductos] = useState([]);
    const [hasError, setError] = useState(false);

    return (
        <RecetasProvider>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    gutterBottom 
                    align="center"
                    sx={{ mb: 4 }}
                >
                    Mis Recetas
                </Typography>
                
                {hasError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        ¡Ha ocurrido un error al cargar la receta!
                    </Alert>
                )}

                <RecetasList />
            </Container>
        </RecetasProvider>
    )
}

export default RecetasListPage