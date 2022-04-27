import { useState } from "react";

import { Redirect } from "react-router-dom";

import { Container } from "./styles";

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar"
import ModalAdd from "../../Components/ModalAdd";
import Card from "../../Components/Card"



const Dashboard = ({authenticated, setAuthenticated}) => {
    const [tecnologias, setTecnologias] = useState([]);

    const [modalOpenClose, setModalOpenClose] = useState(false);


   

    if(!authenticated){
        return <Redirect to="/" />
    }

    return (
        <Container>

            <Navbar setAuthenticated = {setAuthenticated}/>
            <hr></hr>


            <header className="header">
                <h2>Olá, dev</h2>
                <p>Imagem</p>
                <p>Modulo</p>
            </header>
            <hr></hr>


            <main>

                <div className="topo">
                    <h2>Tecnologias</h2>
                    <Button whiteSchema onClick={() => setModalOpenClose(true)}>
                        +
                    </Button>
                </div>

                <section className="vitrine">
                    {tecnologias.length === 0 ? (
                        <div className="noCard">
                            <h2>Você ainda não possui tecnologias</h2>
                        </div>
                    ) : (
                        <Card tecnologias = {tecnologias}/>
                    )}
                </section>

            </main>


            {modalOpenClose && <ModalAdd tecnologias={tecnologias} setTecnologias={setTecnologias} setModalOpenClose={setModalOpenClose} />}


        </Container>
    );
};

export default Dashboard;
