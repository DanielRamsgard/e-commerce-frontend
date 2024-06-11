import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SmallCard from './SmallCard';


const CustomCarousel = (props) => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <> 
            <div className="trend-container">
                <div className="trend">
                    <div className="trend-text">
                        {props.widthPhone ? "Trending" : "Trending Now" }
                    </div>
                    <div className="trend-buttons-container">
                        <div className="button-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                        </div>
                        <div className="button-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className="spacer-2"></div>
            <Carousel responsive={responsive}>
                <SmallCard img="/static/media/vase.jpeg" title="Cube Lolo Vase Black" price="$263"/>
                <SmallCard img="/static/media/shelve.jpeg" title="Ceramic Whisper Pendant Lamp" price="$148"/>
                <SmallCard img="/static/media/test.jpeg" title="Anti-Aging, Microbiome Cream" price="$68"/>
                <SmallCard img="/static/media/oil.jpeg" title="Jimmy Boyd Body oil 2000ml" price="$30"/>
                <SmallCard img="/static/media/toaster.jpeg" title="GE Stainless Steel Toaster" price="$49"/>
                <SmallCard img="/static/media/cabinet2.jpeg" title="Oak Sauder Collection Bookcase" price="$649"/>
                <SmallCard img="/static/media/cutting.jpeg" title="Ironwood Charleston Board" price="$117"/>
                <SmallCard img="/static/media/whitechair.jpg" title="Traditional Armchair" price="$93"/>
            </Carousel>
        </>
    );
}

export default CustomCarousel;