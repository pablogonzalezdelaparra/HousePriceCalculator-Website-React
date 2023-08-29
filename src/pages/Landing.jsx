import React from 'react';
import LandingStyles from '../styles/LandingStyles.css';

function Landing() {
  return (
    <div className='landing-main-container'>
        <div className='main-text'>
            <h1 className='title'>Tu propiedad,<br/>tus reglas</h1>
            <p className='description'>Descubre al instante el valor de cualquier propiedad con nuestra plataforma de cálculo inmobiliario. </p>
        </div>
        <div className='second-text'>
            <h2 className='title'><span className='first-title'>Precios justos</span><br/><span className='second-title'>Sin complicaciones</span></h2>
            <p className='description'>Al introducir las características más relevantes de una propiedad, desvela su valor más equitativo. Obtén información precisa y resultados instantáneos que te respaldarán al tomar decisiones informadas sobre compra, venta o inversión inmobiliaria.</p>
            <button className='call-to-action'>Descubre cómo</button>
        </div>
    </div>
  )
}

export default Landing