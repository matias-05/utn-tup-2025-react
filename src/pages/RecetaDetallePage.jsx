import { RecetasProvider } from '../contexts/RecetasContext'
import RecetasDetalle from '../components/recetas/RecetaDetalle'
import { useState } from "react";
import { Container, Alert } from "@mui/material";

function RecetasDetallePage() {
    const [productos, setProductos] = useState([]);
    const [hasError, setError] = useState(false);

    return (
        <RecetasProvider>
            <Container>
                    <RecetasDetalle />
            </Container>
        </RecetasProvider>
    )
}

export default RecetasDetallePage