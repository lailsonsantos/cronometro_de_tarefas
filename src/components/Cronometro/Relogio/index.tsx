import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Relogio ({tempo = 0} : Props){

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    console.log(segundos)

    const minutoDecimal = String(minutos)[0].padStart(1, '0');
    const minutoUnidade = String(minutos)[1];

    const segundoDecimal = String(segundos)[0].padStart(1, '0');
    const segundoUnidade = String(segundos)[1];

    return(
        <>
            <span className={style.relogioNumero}>{minutoDecimal}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDecimal}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}