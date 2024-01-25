import React, { useCallback, useEffect } from "react";
import { ReviewsPageContainer, ReviewsPageReviewBox } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "reducers/reviewsPageSlice";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviewsPageStore.reviews);
  const dispatch = useDispatch();

  const handleGetReviews = useCallback(async () => {
    await dispatch(getReviews());
  }, [dispatch]);

  useEffect(() => {
    handleGetReviews();
  }, [handleGetReviews]);

  return (
    <ReviewsPageContainer>
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        initialSlide={3}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide>
            <ReviewsPageReviewBox>{review.body}</ReviewsPageReviewBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </ReviewsPageContainer>
  );
};

export default Reviews;
