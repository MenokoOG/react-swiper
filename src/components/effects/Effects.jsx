import './effects.css'
import images from '../../imageData'; // Importing the generated image data


export default function Usage() {

    return (
        <>
            <main>
                <swiper-container style={
                    {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }
                }

                    pagination-clickable="true"
                    navigation="true"
                    effect="cube"
                    grab-cursor="true"
                    cube-effect-shadow="true"
                    cube-effect-slide-shadows="true"
                    cube-effect-shadow-offset="20"
                    cube-effect-shadow-scale="0.94"

                    className="mySwiper">
                    {images.map((image, index) => (
                        <swiper-slide key={index} lazy="true">
                            <img src={image} loading="lazy" alt={`Slide ${index + 1}`} />
                        </swiper-slide>
                    ))}
                </swiper-container>
            </main>
        </>
    )
}