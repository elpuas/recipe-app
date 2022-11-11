import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import { getRecetas } from "~/models/post.server";

type LoaderData = {
  recetas: Awaited<ReturnType<typeof getRecetas>>;
};

export const loader = async () => {
  return json<LoaderData>({
    recetas: await getRecetas(),
  });
};

export default function Index() {
  const { recetas } = useLoaderData() as LoaderData;
  return (
    <div className="container">
      <Navigation />
      <h1>Recipe App</h1>
      <ul>
        {recetas.map((receta : any) => (
          <li key={receta.id}>
            <h2>{receta.title}</h2>
          </li>
          ))}
      </ul>
    </div>
  );
}


