import { Link } from "react-router-dom";




const Header = () => {
    return (
        <header className="header">
            <Link to="/Home">Home</Link>
            <Link to="/AdicionarPost">Adicionar um post</Link>
            <Link to="/ListaPost">Lista de post</Link>
        </header>);
};


export default Header; 