import './customslider.css'
import images from '../../imageData'; // Importing the generated image data

export default function Usage() {

    return (
        <>
            <main className="slider-main-container">
                <swiper-container

                    navigation-next-el=".custom-next-button"
                    navigation-prev-el=".custom-prev-button"
                    pagination-clickable="true"
                    pagination-dynamic-bullets="true"
                    autoplay-delay="2000"
                    autoplay-disable-on-interaction="false"
                    center-slides="true"

                    style={
                        {
                            "--swiper-pagination-color": "#fff",
                            "--swiper-pagination-bullet-size": "15px",
                        }
                    }
                >
                    {images.map((image, index) => (
                        <swiper-slide key={index} lazy="true">
                            <img src={image} loading="lazy" alt={`Slide ${index + 1}`} />
                        </swiper-slide>
                    ))}

                    {/* Navigations */}
                </swiper-container>

                <div className="nav-btn custom-prev-button">
                    {/* <!-- https://feathericons.dev/?search=arrow-left&iconset=feather --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <line x1="19" x2="5" y1="12" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                </div>

                <div className="nav-btn custom-next-button">
                    {/* <!-- https://feathericons.dev/?search=arrow-right&iconset=feather --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <line x1="5" x2="19" y1="12" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </div>
            </main>
        </>
    )
}
