import React, { useState } from 'react';

// for not reload page
import { Link, useHistory } from 'react-router-dom';

// import fonts packages
import { FiArrowLeft } from 'react-icons/fi';

// importing service api
import api from '../../services/api';

// importing styles file
import './styles.css';

/**
 * import images
 */
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handRegister(e) {
        e.preventDefault();

        // reciving form values
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            // send to server
            const response = await api.post('ongs', data);

            alert(`Seus ID de acesso: ${response.data.id}`);

            // sending user to home
            history.push('/');
        } catch (err) {
            console.log(err);

            alert('Erro no cadastro, tente nocamente');
        }
    }

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

                <form onSubmit={handRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}