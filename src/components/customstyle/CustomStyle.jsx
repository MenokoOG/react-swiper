import './customstyle.css'
import images from '../../imageData'; // Importing the generated image data


export default function Usage() {
    return (
        <>
            <main>
                <swiper-container syle={
                    {
                        "--swiper-navigation-color": "#ff",
                        "--swiper-pagination-color": "#ff"
                    }
                }
                    pagination-clickable="true"
                    navigation="true"
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