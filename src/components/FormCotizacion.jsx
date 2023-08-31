import React, { Fragment } from 'react';
import FormCotizacionStyle from '../styles/FormCotizacionStyle.css';
import { TextInputField } from 'evergreen-ui';
import { BiArrowToRight } from 'react-icons/bi';

function FormCotizacion() {
  return (
    <Fragment>
        <div className='main-container'>
            <div className='form-container'>
                <div className='form-header'>
                    <p className='form-title'>Realiza tu cotización</p>
                </div>
                <div className='form-body'>
                    <TextInputField
                        label="Ejemplo de input"
                        placeholder="Ejemplo"
                        type="text"
                        required
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                        width="100%"
                        inputWidth="100%"
                    />
                    <div className='button'>
                        <span>
                        Enviar 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default FormCotizacion