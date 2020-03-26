import React from 'react';

// import fonts packages
import { FiLogIn } from 'react-icons/fi';

import './styles.css'

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

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
};