import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-shell selected-agent-page">
      <section className="status-card">
        <p className="agents-kicker">404</p>
        <h1>Ruta no encontrada</h1>
        <p>
          La pagina que intentaste abrir no existe o fue movida. Puedes volver
          al inicio o seguir explorando el listado de agentes.
        </p>

        <div className="home-actions">
          <Link className="home-primary-link" to="/">
            Ir al inicio
          </Link>
          <Link className="back-link" to="/items">
            Ver agentes
          </Link>
        </div>
      </section>
    </main>
  );
}
