import React from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/TemBilheteLogo.png'; 
import './styles.css'; 
interface PageHeaderProps
{
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => 
{
    return(
        <header className="headerArea">
        <div className="logo">
          <img src={logo} alt=""/>
      </div>
        <nav className="menuArea">
            <ul className="Menu">
                <li><Link to={'/home'}>Home</Link></li>
                <li>Cadastros
                    <ul>
                        <li><Link to={'/studentRegister'}>Aluno</Link></li>
                        <li><Link to={'/classRegister'}>Turma</Link></li>
                        <li><Link to={'/teacherRegister'}>Professor</Link></li>
                    </ul>
                </li>
                <li>Listas
                    <ul>
                    
                        <li><Link to={'/studentsList'}>Alunos</Link></li>
                        <li><Link to={'/classesList'}>Turmas</Link></li>
                        <li><Link to={'/teachersList'}>Professores</Link></li>
                        <li><Link to={'/scrapsList'}>Bilhetes</Link></li>
                    </ul>
                </li>
                <li>Envios
                    <ul>
                        <li><Link to={'/Announcements'}>Bilhetes</Link></li>
                        <li><Link to={'/scraps'}>Recados</Link></li>
                    </ul>
                </li>
                <li><Link to={'/requests'}>Solicitações</Link></li>
                <li><Link to={'/'}> Sair</Link></li>
            </ul>
        </nav>
        <div className="headerTitle">
         <p>
             {props.title}
         </p> 
        </div>
        </header>
    )
}

export default PageHeader; 