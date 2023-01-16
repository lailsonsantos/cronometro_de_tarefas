import React from "react";
import style from './Botao.module.scss';

interface Props{
    children?: React.ReactNode;
    type?: "button" | "submit";
    onClick?: () => void;
}

export default function Botao( {children, type, onClick}: Props ){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

/*class Botao extends React.Component<{
    children?: React.ReactNode;
    type?: "button" | "submit";
    onClick?: () => void;
}>{
    render() {
        const isActive = true;
        const {type = "button", onClick} = this.props;
        const styles = {
            backgroundColor: isActive ? 'green' : 'red'
        }
        
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }

}*/