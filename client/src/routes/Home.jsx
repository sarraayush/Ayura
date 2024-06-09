import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import Landing from "../components/Landing/Landing";
import { TabTitle } from "../utils/General";


const Home = () => {
    const [featuredItems, setFeaturedItems] = useState(null);
    const [loading, setLoading] = useState(true);
    TabTitle("Home - Ayura");

    useEffect(() => {
        axios.get("https://shema-backend.vercel.app/api/items")
            .then(res => {
                setFeaturedItems(res.data);
                setLoading(false); // set loading to false once data is loaded
            })
            .catch(err => {
                console.log(err);
                setLoading(false); // set loading to false even if there is an error
            });

        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <div>Loading...</div>; // display a loading message or spinner
    }

    return ( 
        <Fragment>
            <Landing />
            <FeaturedCategories />
            <FeaturedItems items={featuredItems}/>
        </Fragment>
    );
}

export default Home;