import React, { useEffect, useState } from 'react';

// for not reload page
import { Link, useHistory } from 'react-router-dom';

// import fonts packages
import { FiPower, FiTrash2 } from 'react-icons/fi';

// importing service api
import api from '../../services/api';

// importing styles file
import './styles.css';

/**
 * import images
 */
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    /**
     * Method responsible for load data
     */
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);

    /**
     * Method responsible for delete the incident
     * 
     * @param {int} id 
     */
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            // remove incident of front
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar o caso, tento novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size="18" color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRICAO: </strong>
                        <p>{incident.description}</p>

                        <strong>VALOR: </strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size="20" color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}