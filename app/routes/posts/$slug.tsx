import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRecetas } from "~/models/post.server";

export const loader: LoaderFunction = async ({ params,}) => {
    const receta = await getRecetas();
    return json({ receta });
};

export default function RecetaSlug() {
    const { slug } = useLoaderData();
    return (
        <main>
            <h1>
                Some Post: {slug}
            </h1>
        </main>
    );
}