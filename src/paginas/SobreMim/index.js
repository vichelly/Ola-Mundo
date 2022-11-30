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
            Meu nome é Vitor Lucas Fujita Felício e tenho 19 anos. Meus hobbies são praticar esportes, jogar video game e sair com meus amigos e família. Moro em Santo André, estudo Ciência da Computação na FEI e atualmente estou estagiando na Agile Inc.  
        </p>
        <p className={styles.paragrafo} >
            Comecei a programar em 2020 com cursos gratuitos na plataforma DIO, aprendi o básico de lógica de programação e tive meu primeiro contato com HTML e CSS.
        </p>
        <p className={styles.paragrafo} >
            Em 2021, ano de pandemia, eu tive um contato mais intenso com a linguagem python e me apaixonei por programação, foi quando definitivamente decidi virar desenvolvedor e prestar vestibular para Ciência da Computação.
        </p>
        <p className={styles.paragrafo} >
            Após uma dificil decisão optei por estudar na FEI, lá me aprofundei mais no desenvolvimento web e decidi que era essa área a que eu gostaria me aprimorar e ganhar maestria. Porém para me desenvolver mais percebi que seria necessário procurar um bom estágio na área
        </p>
        <p className={styles.paragrafo} >
            Consegui a minha primeira entrevista na Agile Inc e consegui passar, agradeço aos meus pais, e aos empresa pela aposta que fizeram em mim. E pretendo evoluir muito mais profissionalmente, pessoalmente e espiritualmente daqui pra frente!
        </p>

    </PostModelo>
  )
}
