import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SmallCard from './SmallCard';


const CustomCarousel = (props) => {
    const responsive = {
        superLargerDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 2000 },
            items: 6
          },
        desktop: {
          breakpoint: { max: 2000, min: 1400 },
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
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/chanel.jpeg" imgTwo="/static/media/chanel1.jpeg" imgThree="/static/media/chanel2.jpeg" title="Boy De Chanel Toning Lotion" price="65" texture="Plastic" weight="1kg" size="5cm x 4cm" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/dome.jpeg" imgTwo="/static/media/dome1.jpeg" imgThree="/static/media/dome2.jpeg" title="Matt Black Dome Pendant" price="460" texture="Clay" weight="20kg" size="30cm x 30cm" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/spanish2.jpeg" imgTwo="/static/media/spanish1.jpeg" imgThree="/static/media/spanish.jpeg" title="Natural Leather Spanish Chair" price="5040" texture="Leather" weight="30kg" size="70cm x 60cm" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/skin.jpeg" imgTwo="/static/media/skin1.jpeg" imgThree="/static/media/skin2.jpeg" title="Blue Lagoon Skincare Lotion" price="60" texture="Plastic" weight="2kg" size="4cm x 4cm" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/cow.jpg" imgTwo="/static/media/cow1.jpg" imgThree="/static/media/cow2.jpg" title="Authentic Cowhide Leather Chair" price="1158" texture="Leather" weight="35kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/chairspecial.jpeg" imgTwo="/static/media/chairspecial1.jpeg" imgThree="/static/media/chairspecial2.jpeg" title="Kaydan Chair" price="1598" texture="Cloth" weight="40kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/vase.jpeg" imgTwo="/static/media/vase1.jpeg" imgThree="/static/media/vase2.jpeg" title="Cube Lolo Vase Black" price="263" texture="Clay" weight="10kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/shelve.jpeg" imgTwo="/static/media/shelve1.jpeg" imgThree="/static/media/shelve2.jpeg" title="Insight Series Four Shelf" price="148" texture="Steel" weight="15kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/china.jpeg" imgTwo="/static/media/china1.jpeg" imgThree="/static/media/china2.jpeg" title="Oneida Moda 65-Piece Set" price="145" texture="Porcelain" weight="10kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/light1.jpeg" imgTwo="/static/media/light.jpeg" imgThree="/static/media/light2.jpeg" title="Here Comes the Sun Pendant" price="1304" texture="Clay" weight="15kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/tv2.jpeg" imgTwo="/static/media/tv1.jpeg" imgThree="/static/media/tv.jpeg" title="FHD Flat-Screem Moniter" price="$143" texture="Plastics" weight="8kg" size="" description=""/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/key.jpeg" imgTwo="/static/media/key1.jpeg" imgThree="/static/media/key2.jpeg" title="Wireless Mechanical Keyboard" price="49" texture="Plastics" weight="3kg" size="" description=""/>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default CustomCarousel;