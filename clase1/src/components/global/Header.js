import NavLink from '../NavLink';

function Header() {

    const links = [
        {name: 'Home', link: '#home'},
        {name: 'About', link: '#about'},
        {name: 'Contact', link: '#contact'},
        {name: 'Otro', link: '#otro'}
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          {links.map((props, i) => (<NavLink name={props.name} link={props.link} key={i}/>))}
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Header;
