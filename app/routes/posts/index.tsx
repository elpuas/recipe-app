import { json } from "@remix-run/node";
import Navigation from "~/components/Navigation";
import  { db } from "~/util/db.server";

export async function getPosts() {
    const querySnapshot = await db.collection('recetas').get();
    const data: { id: string; }[] = [];
    querySnapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));

    return data;
}

export default function Posts() {
let posts = getPosts();

return (
    <div>
        <h1>Posts</h1>

        <ul>
            {posts.map( ( post ) => (
            <li key={ post.slug }>
                <Link to={post.slug}>{post.title}</Link>
            </li>
            ))}
        </ul>
    </div>
    );
}
