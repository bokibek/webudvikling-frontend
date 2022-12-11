import HomePageSlider from "../components/HomePageSlider";

export default function HomePage() {
    return (
        <section>
            <div>
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
                        autoplaySpeed: 2000
                    }}
                />
            </div>
        </section>
    );
}
