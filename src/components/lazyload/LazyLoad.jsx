import './lazyload.css';
import images from '../../imageData'; // Importing the generated image data

export default function Usage() {

    return (
        <>
            <main>
                <swiper-container
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}
                    pagination-clickable="true"
                    navigation="true"
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <swiper-slide key={index} lazy="true">
                            <img src={image} loading="lazy" alt={`Slide ${index + 1}`} />
                        </swiper-slide>
                    ))}
                </swiper-container>
            </main>
        </>
    );
}
