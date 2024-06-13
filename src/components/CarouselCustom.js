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
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/chanel.jpeg" imgTwo="/static/media/chanel1.jpeg" imgThree="/static/media/chanel2.jpeg" title="Boy De Chanel Toning Lotion" price={65} texture="Plastic" weight="1kg" size="5cm x 4cm" description="Boy De Chanel Toning Lotion revitalizes and refreshes your skin, leaving it hydrated and balanced. Infused with soothing ingredients, it minimizes pores and controls excess oil, offering a matt finish. Perfect for daily use, enhancing your skincare routine effortlessly."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/dome.jpeg" imgTwo="/static/media/dome1.jpeg" imgThree="/static/media/dome2.jpeg" title="Matt Black Dome Pendant" price={460} texture="Clay" weight="20kg" size="30cm x 30cm" description="The Matt Black Dome Pendant adds a touch of modern elegance to any space. Its sleek, matte finish and minimalist design provide a sophisticated ambiance. Perfect for kitchens, dining areas, or living rooms, enhancing your home's contemporary aesthetic beautifully."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/spanish2.jpeg" imgTwo="/static/media/spanish1.jpeg" imgThree="/static/media/spanish.jpeg" title="Natural Leather Spanish Chair" price={5040} texture="Leather" weight="30kg" size="70cm x 60cm" description="The Natural Leather Spanish Chair combines timeless craftsmanship with modern comfort. Featuring high-quality leather and a sturdy wooden frame, it exudes elegance and durability. Ideal for living rooms or offices, it adds a touch of classic Spanish charm to any interior."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/skin.jpeg" imgTwo="/static/media/skin1.jpeg" imgThree="/static/media/skin2.jpeg" title="Blue Lagoon Skincare Lotion" price={60} texture="Plastic" weight="2kg" size="4cm x 4cm" description="Blue Lagoon Skincare Lotion hydrates and rejuvenates your skin with natural minerals. Infused with algae extracts, it promotes a radiant, youthful complexion. Suitable for all skin types, this lotion provides deep moisture and revitalization for a healthy, glowing look."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/cow2.jpg" imgTwo="" imgThree="" title="Authentic Cowhide Leather Chair" price={1158} texture="Leather" weight="35kg" size="50cm x 50cm" description="The Authentic Cowhide Leather Chair blends rustic charm with modern comfort. Made from genuine cowhide and a sturdy wooden frame, it offers durability and style. Perfect for any room, this chair adds a unique, natural touch to your décor."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/chairspecial.jpeg" imgTwo="/static/media/chairspecial1.jpeg" imgThree="" title="Kaydan Chair" price={1598} texture="Cloth" weight="40kg" size="74cm x 66cm" description="The Kaydan Chair combines contemporary design with ergonomic comfort. Upholstered in plush fabric and supported by a sleek metal frame, it offers both style and support. Ideal for modern living spaces, bringing sophistication and relaxation together seamlessly."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/vase.jpeg" imgTwo="" imgThree="" title="Cube Lolo Vase Black" price={263} texture="Clay" weight="10kg" size="14cm x 14cm" description="The Cube Lolo Vase in Black epitomizes modern elegance with its sleek, minimalist design. Crafted from high-quality ceramic, it adds a touch of sophistication to any space. Perfect for showcasing your favorite flowers or as a standalone decor piece, enhancing your home with understated charm."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/shelve.jpeg" imgTwo="" imgThree="" title="Insight Series Four Shelf" price={148} texture="Steel" weight="15kg" size="100cm x 15cm" description="The Insight Series Four Shelf unit combines contemporary design with practical functionality. Crafted from durable materials, it offers ample storage and display space. Ideal for organizing books, decor, or media, it enhances any room with modern style and versatility."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/china.jpeg" imgTwo="" imgThree="" title="Oneida Moda 65-Piece Set" price={145} texture="Porcelain" weight="10kg" size="20cm x 20cm" description="The Oneida Moda 65-Piece Set offers timeless elegance and practicality. Crafted from fine china, it includes essential dining pieces for 12 settings. Perfect for formal occasions or everyday use, it elevates dining experiences with sophisticated style and lasting quality."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/light1.jpeg" imgTwo="/static/media/light.jpeg" imgThree="/static/media/light2.jpeg" title="Here Comes the Sun Pendant" price={1304} texture="Clay" weight="15kg" size="12cm x 12cm" description="The Here Comes the Sun Pendant radiates warmth and charm with its sun-inspired design. Crafted from durable materials, its artistic silhouette enhances any space with a touch of celestial elegance. Ideal for lighting up dining areas or cozy nooks, creating a welcoming ambiance wherever it shines."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/tv2.jpeg" imgTwo="/static/media/tv1.jpeg" imgThree="/static/media/tv.jpeg" title="FHD Flat-Screem Moniter" price={143} texture="Plastics" weight="8kg" size="30cm x 15cm" description="The FHD Flat-Screen Monitor combines crisp Full HD resolution with sleek, space-saving design. Ideal for work or entertainment, its vibrant display ensures clarity and detail. Perfect for enhancing productivity or enjoying multimedia, providing a modern visual experience with minimal footprint."/>
                        <SmallCard updateProduct={props.updateProduct} imgOne="/static/media/key.jpeg" imgTwo="/static/media/key1.jpeg" imgThree="/static/media/key2.jpeg" title="Wireless Mechanical Keyboard" price={49} texture="Plastics" weight="3kg" size="30cm x 10cm" description="The Wireless Mechanical Keyboard combines responsive typing with cable-free convenience. Featuring tactile switches for a satisfying keystroke feel, it offers freedom of movement without sacrificing performance. Perfect for gamers and professionals alike, ensuring seamless connectivity and precise control in any workspace."/>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default CustomCarousel;