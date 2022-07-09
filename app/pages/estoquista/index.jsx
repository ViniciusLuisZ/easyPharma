import ResponsiveAppBar from "../../components/header";
import DataTable from "../../components/tabela"
import Button from '@mui/material/Button';


function Estoquista() {

    return (
        <div>
            <ResponsiveAppBar/>
            <div>
                <DataTable/>
                <Button variant="contained">Voltar</Button>
            </div>
        </div>

       

    )
}

export default Estoquista