import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import './landing.styles.css';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const {total} = response.data;

      setTotalConnections(total);
    })
  }, []);

  return(
    <div className="page-content">
        <div className="logo">
          <div className="img-container">
            <img src={logoImg} alt="Logo do aplicativo" />
          </div>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero"
        />

        <div className="buttons">
          <Link to="/study" className="study">
            <div className="img-container">
              <img src={studyIcon} alt="Estudar"/>
            </div>
            <span>Estudar</span>
          </Link>
          
          <Link to="/give-classes" className="give-classes">
            <div className="img-container">
              <img src={giveClassesIcon} alt="Dar aulas"/>
            </div>
            <span>Dar aulas</span>
          </Link>
        </div>

        <span className="total-connections">
          Total de { totalConnections } conexões já realizadas 
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
    </div>
  )
}

export default Landing;