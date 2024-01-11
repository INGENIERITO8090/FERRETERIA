

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

const Nav_bar=( ) => {
  return (
<div className="nav_bar">
<><nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Ferretería XYZ</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#productos">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contacto">Contacto</a>
      </li>
    </ul>
  </div>
</nav>

<div className="container mt-3">
  <div className="jumbotron">
    <h1 className="display-4">Bienvenido a Ferretería XYZ</h1>
    <p className="lead">Tu tienda de confianza para herramientas y materiales de construcción.</p>
    <hr className="my-4" />
    <p>Explora nuestra amplia gama de productos de ferretería de alta calidad.</p>
    <a className="btn btn-primary btn-lg" href="#productos" role="button">Ver productos</a>
  </div>

  <section id="productos">
    <h2>Nuestros Productos</h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src="imagen1.jpg" className="card-img-top" alt="Producto 1" />
          <div className="card-body">
            <h5 className="card-title">Herramienta 1</h5>
            <p className="card-text">Descripción corta del producto. Precio: $XX.XX</p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
      { /* Repite este bloque para más productos */ }
    </div>
  </section>

  <section id="contacto" className="mt-4">
    <h2>Contacto</h2>
    <p>¡Contáctanos para más información!</p>
    <form>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" className="form-control" id="correo" placeholder="tucorreo@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea className="form-control" id="mensaje" rows={4} placeholder="Escribe tu mensaje aqu\xED" />
      </div>
      <button type="submit" className="btn btn-primary">Enviar mensaje</button>
    </form>
  </section>

</div></>
</div>
  );
}

export default Nav_bar;