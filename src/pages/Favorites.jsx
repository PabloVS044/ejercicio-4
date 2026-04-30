import AgentCard from "@/components/AgentCard";
import { useFavorites } from "@/context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="page-shell agents-page">
      <section className="agents-header">
        <p className="agents-kicker">Coleccion</p>
        <h1>Favoritos</h1>
        <p className="agents-copy">
          Aqui puedes ver los agentes que marcaste como favoritos.
        </p>
      </section>

      {favorites.length === 0 ? (
        <section className="status-card">
          <p>No has agregado agentes a favoritos todavia.</p>
        </section>
      ) : (
        <section className="agents-grid">
          {favorites.map((agent) => (
            <AgentCard key={agent.uuid} agent={agent} />
          ))}
        </section>
      )}
    </main>
  );
}
