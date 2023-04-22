import './user.css'

export const UserCard = (props) => {
    return (
        <div className="user">
            <img src={props.imgUrl} alt="Girl in a jacket"/>
            <label>{props.nome}</label><br/>
            <label>{props.cargo}</label>
        </div>
    )
}