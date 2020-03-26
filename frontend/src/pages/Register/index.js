import React from 'react';

// for not reload page
import { Link } from 'react-router-dom';

// import fonts packages
import { FiArrowLeft } from 'react-icons/fi';

// importing styles file
import './styles.css';

/**
 * import images
 */
import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" /> 
                        Não tenho cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}