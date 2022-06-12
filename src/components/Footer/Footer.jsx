import React from "react";
import "./Footer.css";
import leafImage from "../../assets/leaf.png";

const PublicidadLink =
  "https://www.google.es/#:~:text=Espa%C3%B1a-,Publicidad,-Empresa";
const EmpresaLink =
  "https://www.google.es/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1";
const ComoFuncionaBusquedaLink =
  "https://www.google.es/#:~:text=C%C3%B3mo%20funciona%20la%20B%C3%BAsqueda";
const EmisionNeutraLink =
  "https://www.google.es/#:~:text=Emisi%C3%B3n%20neutra%20de%20carbono%20desde%20el%202007";
const PrivadidadLink =
  "https://www.google.es/#:~:text=desde%20el%202007-,Privacidad,-T%C3%A9rminos";
const TerminosLink =
  "https://www.google.es/#:~:text=Privacidad-,T%C3%A9rminos,-Configuraci%C3%B3n";
const ConfiguracionLink =
  "https://www.google.es/#:~:text=T%C3%A9rminos-,Configuraci%C3%B3n";

const Footer = (links) => {
  return (
    <div>
      <div className="footer">
        <div> España </div>
      </div>
      <hr />
      <div className="footer">
        <div className="links">
          <div>
            <a href={PublicidadLink}> {links.items.link1}</a>
            <a href={EmpresaLink}> {links.items.link2}</a>
            <a href={ComoFuncionaBusquedaLink}> {links.items.link3}</a>
          </div>
          <div>
            <a href={EmisionNeutraLink}>
              <img className="leaf" src={leafImage} />
              {links.items.link4}
            </a>
          </div>
          <div>
            <a href={PrivadidadLink}> {links.items.link5}</a>
            <a href={TerminosLink}> {links.items.link6}</a>
            <a href={ConfiguracionLink}> {links.items.link7}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
