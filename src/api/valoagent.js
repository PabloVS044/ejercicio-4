const API_URL = "https://valorant-api.com/v1/agents";

export async function getAgents() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch agents");
    }

    const data = await response.json();
    return data.data;
}

export async function getAgentById(id) {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch agent with id: ${id}`);
    }

    const data = await response.json();
    return data.data;
}