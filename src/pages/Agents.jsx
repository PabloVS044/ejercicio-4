import { useEffect, useState } from "react";
import { getAgents } from "@/api/valoagent";
import { Link } from "react-router-dom";

export default function Agents() {

    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

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

    return (
        <main>
            <h1>Agentes</h1>
            
            <input
                type="text"
                placeholder="Buscar agente..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />  

            {loading && <p>Loading agents...</p>}

            {error && <p>Error: {error}</p>}


        <section>
            {filteredAgents.map(agent => (
                <article key={agent.uuid}>
                    <img src={agent.displayIcon} alt={agent.displayName} />
                    <h2>{agent.displayName}</h2>
                    <p>{agent.description}</p>
                    <Link to={`/items/${agent.uuid}`}>Ver Detalle de Agente</Link>
                </article>
            ))}
        </section>

        </main>

    );
    
}