import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars2.githubusercontent.com/u/55412817?s=460&u=1047698ec90a5d068efaa36c316ff880fc22135e&v=4"
        alt="Bruno Fernandes"
      />
      <div>
        <strong>Bruno Fernandes</strong>
        <span>Física</span>
      </div>
    </header>
    <p>
      Empresa planeja financiar empreendedores negros, pequenas e médias
      empresas impactadas pela crise do coronavírus
      <br /> <br />
      além da construção de moradias populares e causas ambientais.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$100,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
