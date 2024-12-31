"use client";

import React from "react";

const Services: React.FC = () => {
  return (
    <div className="services-container" id="services">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3 className="service-heading">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15L9 12M12 15C13.3968 14.4687 14.7369 13.7987 16 13M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13M9 12L4 12C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002M4.5 16.5001C3 17.7601 2.5 21.5001 2.5 21.5001C2.5 21.5001 6.24 21.0001 7.5 19.5001C8.21 18.6601 8.2 17.3701 7.41 16.5901C7.02131 16.2191 6.50929 16.0047 5.97223 15.9881C5.43516 15.9715 4.91088 16.1538 4.5 16.5001Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Visa Guidance
          </h3>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        <div className="service-card">
          <h3 className="service-heading">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 9C17.5 7.5 18.74 7 20.5 7C21.9587 7 23.3576 7.57946 24.3891 8.61091C25.4205 9.64236 26 11.0413 26 12.5C26 14.79 24.49 16.54 23 18L16 25L9 18C7.5 16.55 6 14.8 6 12.5C6 11.0413 6.57946 9.64236 7.61091 8.61091C8.64236 7.57946 10.0413 7 11.5 7C13.26 7 14.5 7.5 16 9ZM16 9L13.0401 11.96C12.8369 12.1617 12.6757 12.4016 12.5656 12.6659C12.4556 12.9302 12.3989 13.2137 12.3989 13.5C12.3989 13.7863 12.4556 14.0698 12.5656 14.3341C12.6757 14.5984 12.8369 14.8383 13.0401 15.04C13.8601 15.86 15.1701 15.89 16.0401 15.11L18.1101 13.21C18.629 12.7392 19.3045 12.4784 20.0051 12.4784C20.7057 12.4784 21.3813 12.7392 21.9001 13.21L24.8601 15.87M22 19L20 17M19 22L17 20"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Pre/Post Admission Assistance
          </h3>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        <div className="service-card">
          <h3 className="service-heading">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9998 11L20.9998 14M8.99976 10V14M22.9998 18V22M13.9998 6V8M10.9998 12H6.99976M24.9998 20H20.9998M14.9998 7H12.9998M25.6398 7.64005L24.3598 6.36004C24.2473 6.24636 24.1133 6.15612 23.9657 6.09452C23.8181 6.03293 23.6598 6.00122 23.4998 6.00122C23.3399 6.00122 23.1815 6.03293 23.0339 6.09452C22.8863 6.15612 22.7523 6.24636 22.6398 6.36004L6.3598 22.64C6.24612 22.7526 6.15587 22.8865 6.09428 23.0341C6.03269 23.1817 6.00098 23.3401 6.00098 23.5C6.00098 23.66 6.03269 23.8184 6.09428 23.966C6.15587 24.1136 6.24612 24.2475 6.3598 24.36L7.6398 25.64C7.75162 25.755 7.88534 25.8463 8.03305 25.9087C8.18076 25.971 8.33947 26.0031 8.4998 26.0031C8.66014 26.0031 8.81885 25.971 8.96656 25.9087C9.11427 25.8463 9.24798 25.755 9.3598 25.64L25.6398 9.36005C25.7547 9.24822 25.846 9.11451 25.9084 8.9668C25.9708 8.81909 26.0029 8.66038 26.0029 8.50005C26.0029 8.33971 25.9708 8.181 25.9084 8.03329C25.846 7.88558 25.7547 7.75187 25.6398 7.64005Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Career Building Guidance
          </h3>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        <div className="service-card">
          <h3 className="service-heading">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 25C22 22.8783 21.1571 20.8434 19.6569 19.3431C18.1566 17.8429 16.1217 17 14 17M14 17C11.8783 17 9.84344 17.8429 8.34315 19.3431C6.84285 20.8434 6 22.8783 6 25M14 17C16.7614 17 19 14.7614 19 12C19 9.23858 16.7614 7 14 7C11.2386 7 9 9.23858 9 12C9 14.7614 11.2386 17 14 17ZM26 24C26 20.63 24 17.5 22 16C22.6575 15.5067 23.1832 14.859 23.5306 14.1142C23.8781 13.3694 24.0366 12.5504 23.9921 11.7298C23.9476 10.9091 23.7015 10.112 23.2755 9.40915C22.8496 8.70626 22.2569 8.11921 21.55 7.69995"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            1:1 Sessions
          </h3>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
