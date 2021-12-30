import React, { useState } from 'react';

const OnepageMenuItems = (props) => {
    const { menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6, menuItem7 } = props;

    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)
    const [service, setService] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [team, setTeam] = useState(false)
    const [blog, setBlog] = useState(false)
    const [contact, setContact] = useState(false)

    const addActiveClass = (menu) => {

        if (menu == 'home') {
            setHome(!home)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if (menu == 'about') {
            setHome(false)
            setAbout(!home)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if (menu == 'service') {
            setHome(false)
            setAbout(false)
            setService(!home)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if (menu == 'portfolio') {
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(!home)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if (menu == 'team') {
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(!home)
            setBlog(false)
            setContact(false)
        }
        else if (menu == 'blog') {
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(!home)
            setContact(false)
        }
        else if (menu == 'contact') {
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(!home)
        }
    };

    return (
        <React.Fragment>
            {
                menuItem1 ?
                    <li className={home ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('home'); document.getElementById("rs-header").scrollIntoView({behavior: 'smooth'}) } } >
                            {menuItem1} 
                        </a>
                    </li> : ''
            }
            {
                menuItem2 ?
                    <li className={about ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('about'); document.getElementById("rs-about").scrollIntoView({behavior: 'smooth'}); } } >
                            {menuItem2} 
                        </a>
                    </li> : ''
            }

            {
                menuItem3 ?
                    <li className={service ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('service'); document.getElementById("rs-service").scrollIntoView({behavior: 'smooth'}); } } >
                            {menuItem3} 
                        </a>
                    </li> : ''
            }

            {
                menuItem4 ?
                    <li className={portfolio ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('portfolio'); document.getElementById("rs-portfolio").scrollIntoView({behavior: 'smooth'}); } } >
                            {menuItem4} 
                        </a>
                    </li> : ''
            }

            {
                menuItem5 ?
                    <li className={team ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('team'); document.getElementById("rs-team").scrollIntoView({behavior: 'smooth'}); } } >
                            {menuItem5} 
                        </a>
                    </li> : ''
            }

            {
                menuItem6 ?
                    <li className={blog ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('blog'); document.getElementById("rs-blog").scrollIntoView({behavior: 'smooth'}); } } >
                            {menuItem6} 
                        </a>
                    </li> : ''
            }

            {
                menuItem7 ?
                    <li className={contact ? "current-menu-item" : ""}>
                        <a onClick={() => { addActiveClass('contact'); document.getElementById("rs-contact").scrollIntoView({behavior: 'smooth'}); } } >
                            {menuItem7} 
                        </a>
                    </li> : ''
            }

        </React.Fragment>
    );
}

export default OnepageMenuItems;