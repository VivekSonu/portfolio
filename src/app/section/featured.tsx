
import  featuredData  from "@/app/data/featured";
import Heading from "../components/heading/heading";
import FeaturedCard from "../components/cards/featured/featured-card";
import ExpandableFeatured from "../components/expandables/expandable-featured";

const MainFeatured=featuredData[0];
export default function FeaturedSection() {
  return (
    <div id="Gallery" className="pt-24 px-3 lg:px-8">
        {/* Heading */}
        <Heading number="02" title_1="Gallery" title_2=""/>
        {/* Main Featured Card */}
        <FeaturedCard active title={MainFeatured.title} tag={MainFeatured.tag} video={MainFeatured.video} />
        <div className="mt-24">
          <ExpandableFeatured/>
        </div>
    </div>
  )
}
