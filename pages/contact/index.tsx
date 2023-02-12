import AppLayout from "@/components/layouts/App";

import { NextPage } from "next";
// import Image from "next/image";
import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <AppLayout>
      <div className="w-full px-3 h-screen antialiased lg:px-6 flex items-center justify-center">
        <div className="mx-auto max-w-5xl center">
          <div className="container py-auto mx-auto text-center sm:px-4">
            <div className="max-w-md border-md mx-auto p-4">
              <div className="contact-us-form">
                <h1>Contact Us</h1>
                <form>
                  <div className="form-group">
                    <Input
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      label="Username"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      label="Email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <Textarea
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      label="Message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                    />
                  </div>
                  {/* {formError && (
          <p className="form-error">An error occurred. Please try again.</p>
        )} */}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
