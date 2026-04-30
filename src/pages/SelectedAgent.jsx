import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAgentById } from "@/api/valoagent";
import AbilityCard from "@/components/AbilityCard";
import { useFavorites } from "@/context/FavoritesContext";

export default function SelectedAgent() {

    const id = useParams().id;

    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isFavorite, toggleFavorite } = useFavorites();

    useEffect(() => {
        async function fetchAgent() {
            try {
                const data = await getAgentById(id);
                setAgent(data);
            } catch (error) {
                setError("No se pudo cargar el agente");
            }finally{
                setLoading(false);
            }
        }
        fetchAgent();
    }, [id]);


    if (loading) {
        return (
            <main className="page-shell selected-agent-page">
                <section className="status-card">
                    <h1>Detalles del agente</h1>
                    <p>Cargando agente...</p>
                </section>
            </main>
        );
    }

    if (error) {
        return (
            <main className="page-shell selected-agent-page">
                <section className="status-card">
                    <h1>Detalles del agente</h1>
                    <p>Error: {error}</p>
                </section>
            </main>
        );
    }

    if (!agent) {
        return (
            <main className="page-shell selected-agent-page">
                <section className="status-card">
                    <h1>Detalles del agente</h1>
                    <p>Agente no encontrado</p>
                    <Link className="back-link" to="/items">Volver a la lista de agentes</Link>
                </section>
            </main>
        );
    }

    return (
        <main className="page-shell selected-agent-page">
            <Link className="back-link" to="/items">Volver a la lista de agentes</Link>
            <section className="agent-hero">
                <div className="agent-portrait-card">
                    <img
                        className="agent-portrait"
                        src={agent.fullPortrait || agent.displayIcon}
                        alt={agent.displayName}
                    />
                </div>

                <div className="agent-summary">
                    <h1>{agent.displayName}</h1>
                    <button
                        className={`favorite-btn${isFavorite(agent.uuid) ? " is-active" : ""}`}
                        type="button"
                        onClick={() => toggleFavorite(agent)}
                    >
                        {isFavorite(agent.uuid) ? "Quitar de favoritos" : "Agregar a favoritos"}
                    </button>
                    <p>{agent.description}</p>

                    {agent.role && (
                    <div className="agent-role">
                        <h2>Rol: {agent.role.displayName}</h2>
                        <p>{agent.role.description}</p>
                    </div>
                    )}
                </div>
            </section>

            <section className="abilities-section">
                <h2>Habilidades</h2>
                <div className="abilities-grid">
                    {agent.abilities.map((ability) => (
                        <AbilityCard key={ ability.slot } ability={ability} />
                    ))}
                </div>
            </section>
        </main>
    );
}
