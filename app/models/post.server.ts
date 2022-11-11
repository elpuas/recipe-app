type Recetas = {
    id: number;
    title: string;
    description: string;
    slug: string;
    ingredients: string[];
    steps: string[];
};

export async function getRecetas(): Promise<Array<Recetas>> {
    return [
        {
            id: 1,
            title: "Tacos",
            slug: "tacos",
            description: "Tacos de carne",
            ingredients: ["tortillas", "carne", "cebolla", "cilantro"],
            steps: ["hacer la carne", "hacer la salsa", "hacer los tacos"],
        },
        {
            id: 2,
            slug: "tacos-de-pescado",
            title: "Tacos de pescado",
            description: "Tacos de pescado",
            ingredients: ["tortillas", "pescado", "cebolla", "cilantro"],
            steps: ["hacer el pescado", "hacer la salsa", "hacer los tacos"],
        },
    ];
}