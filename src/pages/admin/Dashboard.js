export default function Dashboard({productCount}) {

    return (
      <section className="page">
        <article className="dashboard-page">
          <h1 className="text-center">Admin Dashboard</h1>
          <h2 className="text-center">
            Items Sold: <span>{productCount}</span></h2>
        </article>
      </section>
    );
}
