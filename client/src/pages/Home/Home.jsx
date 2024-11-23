import { useAuth } from "../../context/auth";
import ScrollToTopOnRouteChange from "../../utils/ScrollToTopOnRouteChange";
import Categories from "../../components/header/Categories";
import Banner from "./Banner/Banner";
import DealSlider from "./DealSlider/DealSlider";
import ProductSlider from "./ProductsListing/ProductSlider";
import { electronicProducts } from "../../utils/electronics";
import { accessories } from "../../utils/accessories";
import { fashionProducts } from "../../utils/fashion";
import { applianceProducts } from "../../utils/appliances";
import { furnitureProducts } from "../../utils/furniture";
import electronics from "../../assets/images/electronics-card.jpg";
import accessoryCard from "../../assets/images/accessory-card.jpg";
import fashionCard from "../../assets/images/fashion-card.jpg";
import applianceCard from "../../assets/images/appliance-card.jpg";
import furnitureCard from "../../assets/images/furniture-card.jpg";
import Suggestion from "./Suggestions/Suggestion";
import SeoData from "../../SEO/SeoData";

const Home = () => {
    return (
        <>
            <SeoData title="Maicao Marketplace" />
            <ScrollToTopOnRouteChange />
            <Categories />
            <main className="flex flex-col items-center gap-3 px-2 pb-5 sm:mt-2">
                {/* <pre className="min-h-[60vh]">
                    {JSON.stringify(auth, null, 3)}
                </pre> */}
                <Banner />
                <DealSlider title={"Descuentos para ti"} />
                <ProductSlider
                    title={"Lo mejor de la electrónica"}
                    products={electronicProducts}
                    logo={electronics}
                />
                <ProductSlider
                    title={"Belleza, juguetes y más"}
                    products={accessories}
                    logo={accessoryCard}
                />
                <Suggestion
                    title={"Sugerencias para usted"}
                    tagline={"Basado en su actividad"}
                />

                <ProductSlider
                    title={"Las mejores ofertas de moda"}
                    products={fashionProducts}
                    logo={fashionCard}
                />
                <ProductSlider
                    title={"Televisores y electrodomésticos"}
                    products={applianceProducts}
                    logo={applianceCard}
                />
                <ProductSlider
                    title={"Muebles y más"}
                    products={furnitureProducts}
                    logo={furnitureCard}
                />
            </main>
        </>
    );
};

export default Home;
