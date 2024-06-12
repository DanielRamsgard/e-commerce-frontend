import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SmallCard from './SmallCard';


const CustomCarousel = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 5
        },
        desktopSmall: {
            breakpoint: { max: 1400, min: 1200 },
            items: 4
          },
        tablet: {
          breakpoint: { max: 1200, min: 850 },
          items: 3
        },
        tabletSmall: {
            breakpoint: { max: 850, min: 560 },
            items: 2
          },
        mobile: {
          breakpoint: { max: 560, min: 0 },
          items: 1
        }
      };

    return (
        <> 
            <div className="slider-container-2">
                <div className="slider-container">
                    <Carousel responsive={responsive} infinite={true}>
                        <SmallCard img="/static/media/chanel.jpeg" title="Boy De Chanel Toning Lotion" price="$65"/>
                        <SmallCard img="/static/media/dome.jpeg" title="Matt Black Dome Pendant" price="$460"/>
                        <SmallCard img="/static/media/spanish2.jpeg" title="Natural Leather Spanish Chair" price="$5040"/>
                        <SmallCard img="/static/media/skin.jpeg" title="Blue Lagoon Skincare Lotion" price="$60"/>
                        <SmallCard img="/static/media/cow2.jpg" title="Authentic Cowhide Leather Chair" price="$1158"/>
                        <SmallCard img="/static/media/chairspecial.jpeg" title="Kaydan Chair" price="$1598"/>
                        <SmallCard img="/static/media/vase.jpeg" title="Cube Lolo Vase Black" price="$263"/>
                        <SmallCard img="/static/media/shelve.jpeg" title="Insight Series Four Shelf" price="$148"/>
                        <SmallCard img="/static/media/china.jpeg" title="Oneida Moda 65-Piece Set" price="$145"/>
                        <SmallCard img="/static/media/light1.jpeg" title="Here Comes the Sun Pendant" price="$1304"/>
                        <SmallCard img="/static/media/tv2.jpeg" title="FHD Flat-Screem Moniter" price="$143"/>
                        <SmallCard img="/static/media/gold2.jpg" title="Gold Globe Light Fixture" price="$599"/>
                        <SmallCard img="/static/media/key.jpeg" title="Wireless Mechanical Keyboard" price="$49"/>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default CustomCarousel;