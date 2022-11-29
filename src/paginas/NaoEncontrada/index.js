import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png'

export default function NaoEncontrada(){
    return(
        <>
            <div className={styles.conteudoContainer} >
                <span className={styles.texto404} >
                    404
                </span>
                <h1 className={styles.titulo} >
                    Página não encontrada!
                </h1>
                <p className={styles.paragrafo} >
                    Recarregue a página
                </p>
                <div className={styles.botaoContainer} >
                    <button>Voltar</button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                />
            </div>

            <div className={styles.espacoEmBranco} >

            </div>
        </>
    )
}