import classes from "./App.module.scss";
import {
  DiscountNotification,
  HeaderMenu,
  PromoGoods,
  BigPromo,
  SizeMatters,
  PromoCardContainer,
  Stories,
  ListCompanies,
  Mail,
  Footer,
  Optics,
} from "./components";

function App() {
  return (
    <>
      <header className={classes.block1440}>
        <DiscountNotification />
        <HeaderMenu />
        <PromoGoods />
      </header>

      <section className={classes.block1440}>
        <BigPromo />
      </section>

      <section className={classes.block1440}>
        <PromoCardContainer />
      </section>

      <section className={classes.block1440}>
        <SizeMatters />
      </section>

      <section className={classes.block1440}>
        <Stories />
      </section>

      <section className={classes.block1440}>
        <ListCompanies />
      </section>

      <section className={classes.block1440}>
        <Mail />
      </section>

      <Footer />

      <section className={classes.block1440}>
        <Optics/>
      </section>
    </>
  );
}

export default App;
