import { RecetasProvider } from '../contexts/RecetasContext'
import RecetasList from '../components/recetas/RecetasList'

function RecetasListPage() {
    return (
        <RecetasProvider>    
             <RecetasList />
        </RecetasProvider>
    )
}

export default RecetasListPage