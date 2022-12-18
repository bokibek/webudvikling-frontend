import HomePageSlider from "../components/Slider";
import { SocialIcon } from "react-social-icons";

export default function HomePage() {
  return (
    <section>
      <article className="slider">
        <HomePageSlider
          options={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            arrows: false,
          }}
        />
      </article>

      <article>
        <h2>Shop By Category</h2>
        <article className="grid-container">
          <div>
            <a href="/products">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fearring.webp?alt=media&token=f2d025b1-9a31-4c1b-b6ea-44d5e1f9e0a7"
                alt="earrings"
              ></img>
            </a>
            <h3>
              <a href="/products">Earrings &rarr;</a>
            </h3>
          </div>

          <div>
            <a
              href="https://eur.shein.com/pdsearch/Necklace/?ici=s1`SuggestionSearchCategory`Necklace%20in%20Necklaces`_fb`d0`PageSearchResult&scici=Search~~SuggestionCategorySearch~~1~~Necklace~~SPcSearchWordsSuggest~~0&search_cat=Necklaces&search_id=1755&src_identifier=st%3D7%60sc%3DNecklace%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1670846198222"
              target="blank"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fnecklace1.webp?alt=media&token=713e5198-e9b4-4d91-a5d0-a32b27f3cae0.webp"
                alt="necklaces"
              ></img>
            </a>
            <h3>
              <a
                href="https://eur.shein.com/pdsearch/Necklace/?ici=s1`SuggestionSearchCategory`Necklace%20in%20Necklaces`_fb`d0`PageSearchResult&scici=Search~~SuggestionCategorySearch~~1~~Necklace~~SPcSearchWordsSuggest~~0&search_cat=Necklaces&search_id=1755&src_identifier=st%3D7%60sc%3DNecklace%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1670846198222"
                target="blank"
              >
                Necklaces &rarr;
              </a>
            </h3>
          </div>

          <div>
            <a
              href="https://eur.shein.com/pdsearch/Rings/?ici=s1`SuggestionSearchCategory`Rings%20in%20Rings`_fb`d0`PageSearchResult&scici=Search~~SuggestionCategorySearch~~1~~Rings~~SPcSearchWordsSuggest~~0&search_cat=Rings&search_id=1759&src_identifier=st%3D7%60sc%3DRings%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1670846211456"
              target="blank"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fring1.webp?alt=media&token=031582cb-7355-4df0-9418-59c1d030bac0.webp"
                alt="necklaces"
              ></img>
            </a>
            <h3>
              <a
                href="https://eur.shein.com/pdsearch/Rings/?ici=s1`SuggestionSearchCategory`Rings%20in%20Rings`_fb`d0`PageSearchResult&scici=Search~~SuggestionCategorySearch~~1~~Rings~~SPcSearchWordsSuggest~~0&search_cat=Rings&search_id=1759&src_identifier=st%3D7%60sc%3DRings%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1670846211456"
                target="blank"
              >
                Rings &rarr;
              </a>
            </h3>
          </div>

          <div>
            <a
              href="https://eur.shein.com/pdsearch/Accessories/?ici=s1%60SuggestionSearch%60Accessories%60_fb%60d0%60PageSearchResult&scici=Search~~SuggestionSearch~~1~~Accessories~~SPcSearchWordsSuggest~~0&src_identifier=st%3D4%60sc%3DAccessories%60sr%3D0%60ps%3D5&src_module=search&src_tab_page_id=page_search1670846334504&child_cat_id=3337"
              target="blank"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Faccessories1.webp?alt=media&token=82d84e5b-d158-4824-ac58-4c297d58d572.webp"
                alt="necklaces"
              ></img>
            </a>
            <h3>
              <a
                href="https://eur.shein.com/pdsearch/Accessories/?ici=s1%60SuggestionSearch%60Accessories%60_fb%60d0%60PageSearchResult&scici=Search~~SuggestionSearch~~1~~Accessories~~SPcSearchWordsSuggest~~0&src_identifier=st%3D4%60sc%3DAccessories%60sr%3D0%60ps%3D5&src_module=search&src_tab_page_id=page_search1670846334504&child_cat_id=3337"
                target="blank"
              >
                Accessories &rarr;
              </a>
            </h3>
          </div>
        </article>
      </article>

      <article className="footer-article">
        <footer className="footer">
          <h2>Quick Links</h2>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>This is a footer</p>

          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://www.facebook.com/" />
          <SocialIcon url="https://www.instagram.com/" />
          <SocialIcon url="https://linkedin.com" />
        </footer>
      </article>
    </section>
  );
}
