import { useEffect, useState } from "react";
import { getAgents } from "@/api/valoagent";
import { useNavigate } from "react-router-dom";
import AgentCard from "@/components/AgentCard";

export default function Agents() {

    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAgents() {
            try {
                const data = await getAgents();
                setAgents(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAgents();
    }, []);

    const filteredAgents = agents.filter((agent) =>
        agent.displayName.toLowerCase().includes(search.toLowerCase())
    );

    function goToRandom(){
        if (agents.length === 0) return;

        const randomIndex = Math.floor(Math.random() * agents.length);
        const randomAgent = agents[randomIndex];

        navigate(`/items/${randomAgent.uuid}`);
    }

    return (
        <main className="page-shell agents-page">
            <section className="agents-header">
                <p className="agents-kicker">Roster</p>
                <h1>Agentes</h1>
                <p className="agents-copy">
                    Busca un agente y entra a su perfil para revisar rol, descripción y habilidades.
                </p>

                <input
                    className="agents-search"
                    type="text"
                    placeholder="Buscar agente..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <button onClick={goToRandom} disabled={loading  || agents.length === 0} className="agents-random-btn">
                    Agente Aleatorio
                </button>

            </section>

            {loading && (
                <section className="status-card">
                    <p>Cargando agentes...</p>
                </section>
            )}

            {error && (
                <section className="status-card">
                    <p>Error: {error}</p>
                </section>
            )}

            {!loading && !error && (
            <section className="agents-grid">
                {filteredAgents.map((agent) => (
                    <AgentCard key={agent.uuid} agent={agent} />
                ))}
            </section>
            )}
        </main>
    );
}
