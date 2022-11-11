import { Link } from "@remix-run/react";


export default function Navigation() {
    return (
        <ul>
            <li className="menuItem">
            <Link
                to="/"
                className="menuLink"
            >
                Home
            </Link>
            <Link
                to="/posts"
                className="menuLink"
            >
                Posts
            </Link>
            </li>
        </ul>
    )
}
