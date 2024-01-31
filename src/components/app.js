// App.js
import React from 'react';
import './css/style.css';
import amazonLogo from './assets/images/amazon_logo.png'; // Import Amazon logo image
import hero_image from './assets/images/hero_image.jpg';
import box1Image from './assets/images/box1_image.jpg'; // Import box1 image
import box2Image from './assets/images/box2_image.jpg'; // Import box2 image
import box3Image from './assets/images/box3_image.jpg'; // Import box3 image
import box4Image from './assets/images/box4_image.jpg'; // Import box4 image
import box5Image from './assets/images/box5_image.jpg'; // Import box5 image
import box6Image from './assets/images/box6_image.jpg'; // Import box6 image
import box7Image from './assets/images/box7_image.jpg'; // Import box7 image
import box8Image from './assets/images/box8_image.jpg'; // Import box8 image



const App = () => {
    return (
        <div>
            <header>
                {/* Navbar section */}
                <div className="navbar">
                    {/* Amazon logo */}
                    <div className="nav-logo border">
                        <div className="logo" style={{ backgroundImage: `url(${amazonLogo})` }}></div>
                    </div>

                    {/* Deliver to section */}
                    <div className="nav-address border">
                        <p className="Deliver">Deliver to</p>
                        <div className="add-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="India">India</p>
                        </div>
                    </div>

                    {/* Search section */}
                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input" />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    {/* Sign in section */}
                    <div className="nav-signin border">
                        <p><span>Hello, sign in</span></p>
                        <p className="nav-second">Account & Lists</p>
                    </div>

                    {/* Returns & Orders section */}
                    <div className="nav-returns border">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders</p>
                    </div>

                    {/* Cart section */}
                    <div className="nav-cart border">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </div>
                </div>

                {/* Panel section */}
                <div className="panel">
                    <div className="panel-all border">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops">
                        <p className="border">Todays Deals</p>
                        <p className="border">Customer Services</p>
                        <p className="border">Registry</p>
                        <p className="border">Gift Cards</p>
                        <p className="border">Sell</p>
                    </div>
                    <div className="panel-deals border">
                        Shop deals in electronics
                    </div>
                </div>
            </header>

            {/* Hero section */}
            <div className="hero-section">
            <div style={{ backgroundImage: `url(${hero_image})` }}></div>


            </div>

            {/* Shop section */}
            <div className="shop-section">
                {/* Box 1 */}
                <Box
                    title="Health & Personal Care"
                    image={box1Image}
                />
                {/* Box 2 */}
                <Box
                    title="Health & Personal Care"
                    image={box2Image}
                />
                {/* Add other Box components similarly */}
                 {/* Box 3 */}
                 <Box
                    title="Health & Personal Care"
                    image={box3Image}
                />
                {/* Box 4 */}
                <Box
                    title="Health & Personal Care"
                    image={box4Image}
                />
                {/* Add other Box components similarly */}
                 {/* Box 5 */}
                 <Box
                    title="Health & Personal Care"
                    image={box5Image}
                />
                {/* Box 6 */}
                <Box
                    title="Health & Personal Care"
                    image={box6Image}
                />
                {/* Add other Box components similarly */}
                 {/* Box 7 */}
                 <Box
                    title="Health & Personal Care"
                    image={box7Image}
                />
                {/* Box 8 */}
                <Box
                    title="Health & Personal Care"
                    image={box8Image}
                />
                {/* Add other Box components similarly */}
            </div>
        </div>
    );
};

// Box component for individual product boxes
const Box = ({ title, image }) => {
    return (
        <div className="box">
            <div className="box-content">
                <h2>{title}</h2>
                <div className="box-img" style={{ backgroundImage: `url(${image})` }}></div>
                <p>see more</p>
            </div>
        </div>
    );
};

export default App;

