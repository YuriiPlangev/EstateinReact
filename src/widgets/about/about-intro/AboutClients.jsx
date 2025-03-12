import AboutClientsCards from "../../../entities/About/AboutClientsCards"

function AboutClients () {
    return (
        <section className="clients ">
  <h2 className="clients__title">Our Valued Clients</h2>
  <p className="clients__description">
    At Estatein, we have had the privilege of working with a diverse range of
    clients across various industries. Here are some of the clients we've had
    the pleasure of serving
  </p>
  <AboutClientsCards />
        </section>
    )
}
export default AboutClients