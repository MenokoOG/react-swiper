export default function Usage() {
    return (
        <>
            <main>
                👉  <swiper-container breakpoints={
                    JSON.stringify({

                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },

                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    })
                }>
                    <swiper-slide>Slide1</swiper-slide>
                    <swiper-slide>Slide2</swiper-slide>
                    <swiper-slide>Slide3</swiper-slide>
                    <swiper-slide>Slide4</swiper-slide>
                    <swiper-slide>Slide5</swiper-slide>
                    <swiper-slide>Slide6</swiper-slide>
                    <swiper-slide>Slide7</swiper-slide>
                    <swiper-slide>Slide8</swiper-slide>
                    <swiper-slide>Slide9</swiper-slide>
                </swiper-container>
            </main>
        </>
    )
}