import { Form, Hero, Services, Us, Equipment } from "@/pages/(page-lib)/components";
import { type NextPageWithLayout } from "@/pages/_app.page";
import Head from "next/head";
import { Navbar, Footer } from "@/pages/(page-lib)/layouts";

const Home: NextPageWithLayout = () => (
  <>
    <Hero />
    <Services />
    <Us />
    <Equipment />
    <Form />
  </>
);

Home.getLayout = (page) => (
  <>
    <Head>
      <title>Naranjo Express | Servicios técnicos y acabados</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Servicios de sonido, CCTV, PVC, WPC, espejos LED, electricidad, tarimas, luminarias y mantenimiento." />
      <link rel="icon" type="image/png" href="/logo-naranjo-express.png" />
    </Head>
    <Navbar />
    {page}
    <Footer />
  </>
);

export default Home;
