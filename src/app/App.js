import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';



//Custom Components

import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import HomeFour from '../pages/home-4';
import HomeFive from '../pages/home-5';
import HomeSix from '../pages/home-6';
import HomeSeven from '../pages/home-7';
import HomeEight from '../pages/home-8';
import HomeNine from '../pages/home-9';
import HomeTen from '../pages/home-10';
import HomeEleven from '../pages/home-11';
import HomeTwelve from '../pages/home-12';
import HomeThirteen from '../pages/home-13';
import HomeOnePage from '../pages/onepage-1';
import HomeTwoOnePage from '../pages/onepage-2';
import HomeThreeOnePage from '../pages/onepage-3';
import HomeFourOnePage from '../pages/onepage-4';
import HomeFiveOnePage from '../pages/onepage-5';
import HomeSixOnePage from '../pages/onepage-6';
import HomeSevenOnePage from '../pages/onepage-7';
import HomeEightOnePage from '../pages/onepage-8';
import HomeNineOnePage from '../pages/onepage-9';
import HomeTenOnePage from '../pages/onepage-10';
import HomeElevenOnePage from '../pages/onepage-11';
import HomeTwelveOnePage from '../pages/onepage-12';
import HomeThirteenOnePage from '../pages/onepage-13';
import About from '../pages/about';
import Team from '../pages/team';
import TeamDetails from '../pages/team/team-details';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Services from '../pages/service';
import ServiceOne from '../pages/service/service-1';
import ServiceTwo from '../pages/service/service-2';
import ServiceThree from '../pages/service/service-3';
import ServiceDetails from '../pages/service/service-details';
import SoftwareDevelopment from '../pages/service/software-development';
import WebDevelopment from '../pages/service/web-development';
import AnalyticSolutions from '../pages/service/analytic-solutions';
import cloudAndDevops from '../pages/service/cloud-and-devops';
import ProjectDesign from '../pages/service/project-design';
import DataCenter from '../pages/service/data-center';
import CaseStudtyStyleOne from '../pages/case-study/style-1';
import CaseStudtyStyleTwo from '../pages/case-study/style-2';
import CaseStudtyStyleThree from '../pages/case-study/style-3';
import CaseStudtyStyleFour from '../pages/case-study/style-4';
import CaseStudtyStyleFive from '../pages/case-study/style-5';
import CaseStudtyStyleSix from '../pages/case-study/style-6';
import CaseStudtyStyleSeven from '../pages/case-study/style-7';
import Shop from '../pages/shop';
import ShopSingle from '../pages/shop/shop-single';
import Cart from '../pages/shop/cart';
import Checkout from '../pages/shop/checkout';
import MyAccount from '../pages/shop/my-account';
import Faq from '../pages/faq';
import Pricing from '../pages/pricing';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/Common/ScrollTop/LoadTop'


const App = () => {
    return (
        <div className='App'>
            <Router>  
                <LoadTop />          
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/home-2" component={HomeTwo} />
                    <Route path="/home-3" component={HomeThree} />
                    <Route path="/home-4" component={HomeFour} />
                    <Route path="/home-5" component={HomeFive} />
                    <Route path="/home-6" component={HomeSix} />
                    <Route path="/home-7" component={HomeSeven} />
                    <Route path="/home-8" component={HomeEight} />
                    <Route path="/home-9" component={HomeNine} />
                    <Route path="/home-10" component={HomeTen} />
                    <Route path="/home-11" component={HomeEleven} />
                    <Route path="/home-12" component={HomeTwelve} />
                    <Route path="/home-13" component={HomeThirteen} />
                    <Route path="/onepage-1" component={HomeOnePage} />
                    <Route path="/onepage-2" component={HomeTwoOnePage} />
                    <Route path="/onepage-3" component={HomeThreeOnePage} />
                    <Route path="/onepage-4" component={HomeFourOnePage} />
                    <Route path="/onepage-5" component={HomeFiveOnePage} />
                    <Route path="/onepage-6" component={HomeSixOnePage} />
                    <Route path="/onepage-7" component={HomeSevenOnePage} />
                    <Route path="/onepage-8" component={HomeEightOnePage} />
                    <Route path="/onepage-9" component={HomeNineOnePage} />
                    <Route path="/onepage-10" component={HomeTenOnePage} />
                    <Route path="/onepage-11" component={HomeElevenOnePage} />
                    <Route path="/onepage-12" component={HomeTwelveOnePage} />
                    <Route path="/onepage-13" component={HomeThirteenOnePage} />
                    <Route path="/about" component={About} />
                    <Route path="/service" exact component={Services} />
                    <Route path="/service/service-1" component={ServiceOne} />
                    <Route path="/service/service-2" component={ServiceTwo} />
                    <Route path="/service/service-3" component={ServiceThree} />
                    <Route path="/service/service-details" component={ServiceDetails} />
                    <Route path="/service/software-development" component={SoftwareDevelopment} />
                    <Route path="/service/web-development" component={WebDevelopment} />
                    <Route path="/service/analytic-solutions" component={AnalyticSolutions} />
                    <Route path="/service/cloud-and-devops" component={cloudAndDevops} />
                    <Route path="/service/project-design" component={ProjectDesign} />
                    <Route path="/service/data-center" component={DataCenter} />
                    <Route path="/team" exact component={Team} />
                    <Route path="/team/team-details" component={TeamDetails} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/blog-details" component={BlogDetails} />
                    <Route path="/case-study/style-1" component={CaseStudtyStyleOne} />
                    <Route path="/case-study/style-2" component={CaseStudtyStyleTwo} />
                    <Route path="/case-study/style-3" component={CaseStudtyStyleThree} />
                    <Route path="/case-study/style-4" component={CaseStudtyStyleFour} />
                    <Route path="/case-study/style-5" component={CaseStudtyStyleFive} />
                    <Route path="/case-study/style-6" component={CaseStudtyStyleSix} />
                    <Route path="/case-study/style-7" component={CaseStudtyStyleSeven} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/shop-single" component={ShopSingle} />
                    <Route path="/shop/cart" component={Cart} />
                    <Route path="/shop/checkout" component={Checkout} />
                    <Route path="/shop/my-account" component={MyAccount} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
