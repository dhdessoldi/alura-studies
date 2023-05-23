import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    children?: React.ReactNode
}

export default function Button({ onClick, type, children }: Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>{children}</button>
    )
}


//Abaixo fica o exemplo desta mesma aplicação utilizando class component

// class Button1 extends React.Component<{
//     children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }>{
//     render() {
//         const { type = "button", onClick } = this.props
//         return (
//             <button onClick={onClick} type={type} className={style.botao}>{this.props.children}</button>
//         )
//     }
// }
