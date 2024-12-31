"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviewData = [
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#"
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#"
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#"
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#"
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#"
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#"
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="reviews-container" id="reviews">
      <h2 className="reviews-heading">REVIEWS</h2>
      <div className="reviews-grid">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviewData.map((review, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2">
                <div className="review-card">
                  <div className="card-header">
                    <h3 className="card-title">{review.title}</h3>
                    <p className="card-subtitle">{review.subtitle}</p>
                  </div>
                  <div className="card-content">
                    <p className="card-text">
                      {review.content}
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href={review.link} className="card-link">
                      read full story
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-arrow" />
          <CarouselNext className="right-arrow" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
