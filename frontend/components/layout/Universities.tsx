"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const universityData = [
  {
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    tuition: "53790",
    acceptanceRate: "6.7",
    placement: "94",
    salary: "95000",
    gpa: "4.17",
    image: "/images/university.jpg"
  },
  {
    name: "Stanford University",
    location: "Stanford, CA",
    tuition: "56000",
    acceptanceRate: "4.4",
    placement: "92",
    salary: "91000",
    gpa: "4.18",
    image: "/images/university.jpg"
  },
  {
    name: "Harvard University",
    location: "Cambridge, MA",
    tuition: "52500",
    acceptanceRate: "4.0",
    placement: "91",
    salary: "90000",
    gpa: "4.15",
    image: "/images/university.jpg"
  },
  {
    name: "California Institute of Technology",
    location: "Pasadena, CA",
    tuition: "54300",
    acceptanceRate: "6.4",
    placement: "89",
    salary: "89000",
    gpa: "4.19",
    image: "/images/university.jpg"
  },
  {
    name: "University of Chicago",
    location: "Chicago, IL",
    tuition: "58500",
    acceptanceRate: "7.3",
    placement: "87",
    salary: "87000",
    gpa: "4.12",
    image: "/images/university.jpg"
  },
  {
    name: "Princeton University",
    location: "Princeton, NJ",
    tuition: "51000",
    acceptanceRate: "5.8",
    placement: "88",
    salary: "88000",
    gpa: "4.16",
    image: "/images/university.jpg"
  },
  {
    name: "Columbia University",
    location: "New York, NY",
    tuition: "61000",
    acceptanceRate: "6.1",
    placement: "86",
    salary: "85000",
    gpa: "4.14",
    image: "/images/university.jpg"
  },
  {
    name: "University of California, Berkeley",
    location: "Berkeley, CA",
    tuition: "45000",
    acceptanceRate: "17.5",
    placement: "84",
    salary: "82000",
    gpa: "3.90",
    image: "/images/university.jpg"
  }
];


export const Universities: React.FC = () => {
  return (
    <div className="universities" id="universities">
      <h2 className="universities-title">UNIVERSITIES</h2>
      <div className="universities-container">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-4">
            {universityData.map((university, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2">
                <div className="university-card-wrapper">
                  <div className="university-card">
                    <div className="university-image-container">
                      <Image
                        src={university.image}
                        width={250}
                        height={250}
                        alt={`${university.name} campus`}
                      />
                      <div className="tuition-box">
                        <p className="tuition-label">TUITION FEES</p>
                        <p className="tuition-value">${university.tuition}</p>
                      </div>
                    </div>
                    <div className="university-content">
                      <div className="university-header">
                        <h3 className="university-name">{university.name}</h3>
                        <p className="university-location">{university.location}</p>
                      </div>
                      <div className="university-stats">
                        <div className="stat-item">
                          <p className="stat-label">ACCEPTANCE RATE</p>
                          <p className="stat-value">{university.acceptanceRate}%</p>
                        </div>
                        <div className="stat-item">
                          <p className="stat-label">AVG. PLACEMENT</p>
                          <p className="stat-value">{university.placement}%</p>
                        </div>
                        <div className="stat-item">
                          <p className="stat-label">AVG. SALARY</p>
                          <p className="stat-value">${university.salary}</p>
                        </div>
                        <div className="stat-item">
                          <p className="stat-label">AVG. GPA</p>
                          <p className="stat-value">{university.gpa}</p>
                        </div>
                      </div>
                      <div className="university-buttons">
                        <button className="apply-btn">APPLY</button>
                        <button className="view-more-btn">VIEW MORE</button>
                      </div>
                    </div>
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

export default Universities;
