import { useState } from "react";

export default function Dashboard() {
    const count = useState;

    return (
        <section className="page">
            <h1>Admin Dashboard</h1>
            <article>
                <p>Bought Items: {count}</p>
                <span></span>
            </article>
        </section>
    );
}
