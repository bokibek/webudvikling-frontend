import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HomePageSlider({ options }) {
    return (
      <section>
        <Slider {...options}>
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fexample1.webp?alt=media&token=44671e7e-a74c-4b01-887a-3236c9baffb3" alt="img1" />
          </article>
          <article>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fexample3.webp?alt=media&token=34e4cbda-21a5-47dd-b878-c06645c3a4f0"
              alt="img2"
            />
          </article>
          <article>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fexample4.webp?alt=media&token=e0d477aa-a34a-46bf-9a01-07fa8b3e8070"
              alt="img3"
            />
          </article>
          <article>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fexample5.webp?alt=media&token=41dfc863-2b14-45d9-93e0-917d4e302162"
              alt="img4"
            />
          </article>
          <article>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fexample7.webp?alt=media&token=60a20a8f-98f9-42db-a4b3-ec3d92bc31a4"
              alt="img5"
            />
          </article>
          <article>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eksamens-projekt-d596b.appspot.com/o/slider%2Fexample8.webp?alt=media&token=ceede943-1385-4b5f-b2da-31aaae7df2d0"
              alt="img6"
            />
          </article>
        </Slider>
      </section>
    );
}
