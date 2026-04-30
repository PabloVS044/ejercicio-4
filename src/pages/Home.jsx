import { Link } from "react-router-dom";
export default function Home() {
    return (
        <main className="page-shell home-page">
            <section className="home-hero">
                <p className="home-kicker">Valorant API</p>
                <h1>Conoce a cada agente y sus habilidades</h1>
                <p className="home-copy">
                    Explora el roster completo de Valorant, revisa sus roles y entra al detalle
                    de cada habilidad en una interfaz simple.
                </p>

                <div className="home-actions">
                    <Link className="home-primary-link" to="/items">
                        Ver agentes
                    </Link>
                </div>
            </section>
        </main>
    );
}
