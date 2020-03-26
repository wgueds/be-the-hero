import React from 'react';

// for not reload page
import { Link } from 'react-router-dom';

// import fonts packages
import { FiLogIn } from 'react-icons/fi';

// importing styles file
import './styles.css';

/**
 * import images
 */
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" /> 
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
};