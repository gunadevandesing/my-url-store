import { linksAvailable } from "../../assets/data";
import "./linksHomePage.scss";

const LinksHomePage = () => {
  return (
    <main>
      <div>
        <h1 className="welcome-header">Welcome !</h1>
      </div>
      <div className="categories" id="link-container">
        {linksAvailable.map((categoryItem) => (
          <div key={categoryItem.category} className="category-wrapper">
            <div className="category">{categoryItem.category}</div>
            <ol className="link-list">
              {categoryItem.links.map((link) => (
                <li className="link-item" key={link.id}>
                  <a href={link.url} target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LinksHomePage;
