import React from 'react';

// for not reload page
import { Link } from 'react-router-dom';

// import fonts packages
import { FiPower, FiTrash2 } from 'react-icons/fi';

// importing styles file
import './styles.css';

/**
 * import images
 */
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size="18" color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}