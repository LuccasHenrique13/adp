import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";
import ipe from '../assets/ipe.png'
import cambuci from '../assets/cambuci.png'
import damaDaNoite from '../assets/dama.png'
import escova from '../assets/escova.png'
import noivinha from '../assets/noivinha.png'
import oiti from '../assets/oiti.png'
import quaresmeira from '../assets/quaresmeira.webp'
import patadevaca from '../assets/pata.webp'


const Embed = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="TextPraca">
        <div>
            <h2 id='sobre' className="titulos">{t('title.abijaudi')}</h2>
            <p id="p" className="text popup">{t('text.abijaudi')}</p>
            <h2 id='arborea' className="titulos">{t('titleTress.abijaudi')}</h2>
            <p id="p" className="text popup">{t('tress.abijaudi')}</p>
            <h2 className='Stitulos'>{t('SubTress.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress1.abijaudi')}</p>
            <div className='project-image'>
                <img src={ipe}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress2.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress2.abijaudi')}</p>
            <div className='project-image'>
                <img src={cambuci}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress3.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress3.abijaudi')}</p>
            <div className='project-image'>
                <img  src={damaDaNoite}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress4.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress4.abijaudi')}</p>
            <div className='project-image'>
                <img src={escova}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress5.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress5.abijaudi')}</p>
            <div className='project-image'>
                <img src={noivinha}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress6.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress6.abijaudi')}</p>
            <div className='project-image'>
                <img  src={oiti}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress7.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress7.abijaudi')}</p>
            <div className='project-image'>
                <img src={quaresmeira}></img>
            </div>
            <h2 className='Stitulos'>{t('SubTress8.abijaudi')}</h2>
            <p id="p" className="text popup">{t('texttress8.abijaudi')}</p>
            <div className='project-image'>
                <img  src={patadevaca}></img>
            </div>
            <div id='maps'>
            <h2 className="titulos">{t('maps')}</h2>
            </div>
            <div className='maps'>            
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14825.233880905287!2d-48.11442415804!3d-21.729563748540034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f6495cc2e11d%3A0x83bd0efc600cb727!2sPra%C3%A7a%20Paulo%20Abi%20Jaudi%2C%20Am%C3%A9rico%20Brasiliense%20-%20SP%2C%2014820-000!5e0!3m2!1spt-BR!2sbr!4v1694006307492!5m2!1spt-BR!2sbr"
                width="400"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
           ></iframe>
          </div>

          <h2 className="titulos">{t('titleConclusao')}</h2>
          <p id="p" className="text popup">{t('conclusao.abijaudi')}</p>
          
      </div>
    </div>
  );
};

export default Embed;
