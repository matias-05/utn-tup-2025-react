import RecetasDetalle from '../components/recetas/RecetaDetalle'
import { useParams } from 'react-router-dom';
import { useRecetas } from '../contexts/RecetasContext';


function RecetasDetallePage() {
    const { id } = useParams();
    const { getRecetaById } = useRecetas();
    const receta = getRecetaById(id);

    return (
        <RecetasDetalle receta={receta}/>
    )
}

export default RecetasDetallePage