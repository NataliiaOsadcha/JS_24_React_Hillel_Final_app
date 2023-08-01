import './style.css'
import Input from '../../components/Input'
import logo from '../../assets/logo_main.svg';


const Card = () => {
    return (
    
        <div className='card-container' >
        <div>
        <img className='img-logo'
        src={logo} 
        alt="logo"/>
        </div>
        <Input />
        <Input />
        <button>Login</button>
        </div>

    )
}

export default Card;