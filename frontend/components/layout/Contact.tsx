"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-card">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Let&apos;s Grow Together</h2>
            <p className="contact-subtitle">
              Let&apos;s Connect and plan your Career! Reach out and let the
              magic of Education sparkle your life
            </p>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <Input 
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <Input 
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <Textarea
                  placeholder="Message"
                />
              </div>
              <Button>
                Connect
                <Image
                  src="/images/contact-rocket.png"
                  alt="Rocket"
                  width={20}
                  height={20}
                  className="button-icon"
                />
              </Button>
            </form>
          </div>
        </div>
        <div className="contact-image-container">
          <Image
            src="/images/contact-astronaut.png"
            alt="Astronaut"
            width={500}
            height={500}
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
