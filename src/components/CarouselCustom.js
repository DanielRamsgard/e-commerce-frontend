import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SmallCard from './SmallCard';


const CustomCarousel = (props) => {
    
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
        tablet: {
          breakpoint: { max: 0, min: 0 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 0, min: 0 },
          items: 5
        }
      };

    return (
        <> 
            <div className="slider-container-2">
                <div className="slider-container">
                    <Carousel responsive={responsive} infinite={true}>
                        <SmallCard img="/static/media/vase.jpeg" title="Cube Lolo Vase Black" price="$263"/>
                        <SmallCard img="/static/media/shelve.jpeg" title="Insight Series Four Shelf" price="$148"/>
                        <SmallCard img="/static/media/light1.jpeg" title="Here Comes the Sun Pendant" price="$1304"/>
                        <SmallCard img="/static/media/spanish2.jpeg" title="Natural Leather Spanish Chair" price="$5040"/>
                        <SmallCard img="/static/media/tv2.jpeg" title="FHD Flat-Screem Moniter" price="$143"/>
                        <SmallCard img="/static/media/gold2.jpg" title="Gold Globe Light Fixture" price="$599"/>
                        <SmallCard img="/static/media/key.jpeg" title="Wireless Mechanical Keyboard" price="$49"/>
                        <SmallCard img="/static/media/whitechair.jpg" title="Traditional Armchair" price="$93"/>
                        <SmallCard img="/static/media/oil.jpeg" title="Jimmy Boyd Body oil 2000ml" price="$30"/>
                        <SmallCard img="/static/media/toaster.jpeg" title="GE Stainless Steel Toaster" price="$49"/>
                        <SmallCard img="/static/media/cabinet2.jpeg" title="Oak Sauder Collection Bookcase" price="$649"/>
                        <SmallCard img="/static/media/cutting.jpeg" title="Ironwood Charleston Board" price="$117"/>
                        <SmallCard img="/static/media/whitechair.jpg" title="Traditional Armchair" price="$93"/>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default CustomCarousel;