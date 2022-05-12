import { useState } from "react";

const badgeValid = [
  {
    title: "abeille",
    image: "src/assets/badge/abeille.png",
  },
  {
    title: "arbre",
    image: "src/assets/badge/arbre.png",
  },
  {
    title: "arcenciel",
    image: "src/assets/badge/arcenciel.png",
  },
  {
    title: "bois",
    image: "src/assets/badge/bois.png",
  },
  {
    title: "cocinelle",
    image: "src/assets/badge/cocinelle.png",
  },
  {
    title: "eclair",
    image: "src/assets/badge/eclair.png",
  },
  {
    title: "escargot",
    image: "src/assets/badge/escargot.png",
  },
  {
    title: "feuille",
    image: "src/assets/badge/feuille.png",
  },
  {
    title: "hibou",
    image: "src/assets/badge/hibou.png",
  },
  {
    title: "lune",
    image: "src/assets/badge/lune.png",
  },
  {
    title: "margerite",
    image: "src/assets/badge/margerite.png",
  },
];
const badgeNotValid = [
  {
    title: "oeufs",
    image: "src/assets/badge/oeufs.png",
  },
  {
    title: "orange",
    image: "src/assets/badge/orange.png",
  },
  {
    title: "orni",
    image: "src/assets/badge/orni.png",
  },
  {
    title: "papillon",
    image: "src/assets/badge/margerite.png",
  },
  {
    title: "pigeon",
    image: "src/assets/badge/pigeon.png",
  },
  {
    title: "pluie",
    image: "src/assets/badge/pluie.png",
  },
  {
    title: "poire",
    image: "src/assets/badge/poire.png",
  },
  {
    title: "pomme",
    image: "src/assets/badge/pomme.png",
  },
  {
    title: "pommier",
    image: "src/assets/badge/pommier.png",
  },
  {
    title: "poussin",
    image: "src/assets/badge/poussin.png",
  },
  {
    title: "sapin",
    image: "src/assets/badge/sapin.png",
  },
  {
    title: "soleil",
    image: "src/assets/badge/soleil.png",
  },
  {
    title: "tournesol",
    image: "src/assets/badge/tournesol.png",
  },
  {
    title: "tulipe",
    image: "src/assets/badge/tulipe.png",
  },
];

export default function Panel() {
  const [badgesearch, setbadgeSearch] = useState("");
  const [badgecheckedValid, setbadgeCheckedValid] = useState(true);
  const [badgecheckedNotValid, setbadgeCheckedNotValid] = useState(true);

  const handleChangeValid = () => {
    setbadgeCheckedValid(!badgecheckedValid);
  };

  const handleChangeNotValid = () => {
    setbadgeCheckedNotValid(!badgecheckedNotValid);
  };

  return (
    <>
      <label htmlFor="badgesearch-bar">
        <div className="trichecentre">
          <input
            id="badgesearch-bar"
            type="text"
            value={badgesearch}
            onChange={(e) => setbadgeSearch(e.target.value)}
          />
        </div>
        <div className="check">
          <div>
            Valide
            <input
              className="checkandtitle"
              type="checkbox"
              checked={badgecheckedValid}
              onChange={handleChangeValid}
            />
          </div>
          <div>
            Invalide
            <input
              className="checkandtitle"
              type="checkbox"
              checked={badgecheckedNotValid}
              onChange={handleChangeNotValid}
            />
          </div>
        </div>
      </label>
      <div className="trichecentre">
        <div className="allcomp">
          <ul className="licomp">
            {badgeValid
              .filter(
                (comp) => badgecheckedValid && comp.title.includes(badgesearch)
              )
              .map((badge) => (
                <li>
                  <img
                    className="imgbadgeOk"
                    src={badge.image}
                    alt={badge.title}
                  />
                </li>
              ))}
          </ul>
          <ul className="licomp">
            {badgeNotValid
              .filter(
                (comp) =>
                  badgecheckedNotValid && comp.title.includes(badgesearch)
              )
              .map((badge) => (
                <li className="badgeNotValid">
                  <img
                    className="imgbadgeOk"
                    src={badge.image}
                    alt={badge.title}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
