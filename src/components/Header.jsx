import { Link } from "react-router-dom";




const Header = () => {
    return (
        <header className="header">
            <Link className="head" to="/">Home</Link>
            <Link className="head" to="/AdicionarPost">Buscar post</Link>
            <Link className="head" to="/ListaPost">Lista de post</Link>
        </header>);
};


export default Header; 