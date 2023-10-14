import { en } from "@/lang";
import classes from "./style.module.scss";
import { companies } from "@/static";

const ListCompanies = () => (
  <div className={classes.container}>
    <h2 className={classes.title}>{en.featuredOn}</h2>
    <div className={classes.companiesContainer}>
      {companies.map((company, index) => (
        <div key={index}>
          <img src={company.img} alt={company.name} />
        </div>
      ))}
    </div>
  </div>
);

export default ListCompanies;
