import Banner from 'componentes/Banner'
import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css'
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo} >
                Olá, eu sou o Vitor Lucas!
            </h3>

            <img 
                src = {fotoSobreMim}
                alt = "Foto do vitor"
                className={styles.fotoSobreMim}
            />
        <p className={styles.paragrafo} >
            Depois eu escrevo essa parada
        </p>

    </PostModelo>
  )
}
