import { useState } from "react";

const compostValid = [
  {
    number: 2,
    title: "agrumes",
    image: "src/assets/imgcompost/agrumes.png",
  },
  {
    number: 3,
    title: "brandescie",
    image: "src/assets/imgcompost/brandescie.png",
  },
  {
    number: 3,
    title: "cendre",
    image: "src/assets/imgcompost/cendre.png",
  },
  {
    number: 3,
    title: "cheveux",
    image: "src/assets/imgcompost/cheveux.png",
  },
  {
    number: 3,
    title: "copeauxdebois",
    image: "src/assets/imgcompost/copeauxdebois.png",
  },
  {
    number: 3,
    title: "coquillesoeuf",
    image: "src/assets/imgcompost/coquillesoeuf.png",
  },
  {
    number: 3,
    title: "essuie-tout",
    image: "src/assets/imgcompost/essuie-tout.png",
  },
  {
    number: 3,
    title: "feuillemortes",
    image: "src/assets/imgcompost/feuillemortes.png",
  },
  {
    number: 3,
    title: "fleurs",
    image: "src/assets/imgcompost/fleurs.png",
  },
  {
    number: 3,
    title: "fruits-abimés",
    image: "src/assets/imgcompost/fruits-abimés.png",
  },
  {
    number: 3,
    title: "journal",
    image: "src/assets/imgcompost/journal.png",
  },
  {
    number: 3,
    title: "légumes",
    image: "src/assets/imgcompost/légumes.png",
  },
  {
    number: 3,
    title: "marcdecafé",
    image: "src/assets/imgcompost/marcdecafé.png",
  },
  {
    number: 3,
    title: "noyaux",
    image: "src/assets/imgcompost/noyaux.png",
  },
  {
    number: 3,
    title: "paille",
    image: "src/assets/imgcompost/paille.png",
  },
  {
    number: 3,
    title: "pain",
    image: "src/assets/imgcompost/pain.png",
  },
  {
    number: 3,
    title: "pelures",
    image: "src/assets/imgcompost/pelures.png",
  },
  {
    number: 3,
    title: "petitesbranche",
    image: "src/assets/imgcompost/petitesbranche.png",
  },
  {
    number: 3,
    title: "plumes",
    image: "src/assets/imgcompost/plumes.png",
  },
  {
    number: 3,
    title: "restes",
    image: "src/assets/imgcompost/restes.png",
  },
  {
    number: 3,
    title: "riz",
    image: "src/assets/imgcompost/riz.png",
  },
  {
    number: 3,
    title: "sacdethé",
    image: "src/assets/imgcompost/sacdethé.png",
  },
  {
    number: 3,
    title: "terre",
    image: "src/assets/imgcompost/terre.png",
  },
  {
    number: 3,
    title: "trognonsdechoux",
    image: "src/assets/imgcompost/trognonsdechoux.png",
  },
  {
    number: 3,
    title: "mauvaisherbes",
    image: "src/assets/imgcompost/mauvaisherbes.png",
  },
];

const compostNotValid = [
  {
    number: 3,
    title: "matiereinorganique",
    image: "src/assets/imgcompost/matiereinorganique.png",
  },
  {
    number: 3,
    title: "mauvaisherbegrainé",
    image: "src/assets/imgcompost/mauvaisherbegrainé.png",
  },
  {
    number: 3,
    title: "liquides",
    image: "src/assets/imgcompost/liquides.png",
  },
  {
    number: 3,
    title: "litière",
    image: "src/assets/imgcompost/litière.png",
  },

  {
    number: 3,
    title: "ancrecouleur",
    image: "src/assets/imgcompost/ancrecouleur.png",
  },
  {
    number: 3,
    title: "plantesmalade",
    image: "src/assets/imgcompost/plantesmalade.png",
  },
  {
    number: 3,
    title: "bouchons",
    image: "src/assets/imgcompost/bouchons.png",
  },
  {
    number: 3,
    title: "excrement",
    image: "src/assets/imgcompost/excrement.png",
  },
  {
    number: 3,
    title: "os",
    image: "src/assets/imgcompost/os.png",
  },
  {
    number: 3,
    title: "viande",
    image: "src/assets/imgcompost/viande.png",
  },
  {
    number: 3,
    title: "poisson",
    image: "src/assets/imgcompost/poisson.png",
  },
  {
    number: 3,
    title: "produitschimique",
    image: "src/assets/imgcompost/produitschimique.png",
  },
];

export default function Compost() {
  const [search, setSearch] = useState("");
  const [checkedValid, setCheckedValid] = useState(true);
  const [checkedNotValid, setCheckedNotValid] = useState(true);

  const handleChangeValid = () => {
    setCheckedValid(!checkedValid);
  };

  const handleChangeNotValid = () => {
    setCheckedNotValid(!checkedNotValid);
  };

  return (
    <>
      <label htmlFor="search-bar">
        Rechercher :
        <input
          id="search-bar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        Compostable :
        <input
          type="checkbox"
          checked={checkedValid}
          onChange={handleChangeValid}
        />
        <br />
        Non Compostable :
        <input
          type="checkbox"
          checked={checkedNotValid}
          onChange={handleChangeNotValid}
        />
      </label>
      <div className="trichecentre">
        <div className="allcomp">
          <ul className="licomp">
            {compostValid
              .filter((comp) => checkedValid && comp.title.includes(search))
              .map((compost) => (
                <li>
                  <img
                    className="imgCompostOk"
                    src={compost.image}
                    alt={compost.title}
                  />
                </li>
              ))}
          </ul>
          <ul className="licomp">
            {compostNotValid
              .filter((comp) => checkedNotValid && comp.title.includes(search))
              .map((compost) => (
                <li>
                  <img
                    className="imgCompostOk"
                    src={compost.image}
                    alt={compost.title}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
