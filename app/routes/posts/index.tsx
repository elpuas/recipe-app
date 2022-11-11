import { json } from "@remix-run/node";
import Navigation from "~/components/Navigation";

export const loader = async () => {
    return json({
        posts: [
        {
            slug: "my-first-post",
            title: "My First Post",
        },
        {
            slug: "90s-mixtape",
            title: "A Mixtape I Made Just For You",
        },
        ],
    });
    };

export default function Posts() {
    return (
        <div className="container">
            <Navigation />
            <h1>Posts</h1>
        </div>
    )
}
