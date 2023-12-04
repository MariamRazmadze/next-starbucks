"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  StyledAuth,
  AuthHeader,
  AuthP,
  AuthPAccent,
  AuthFooter,
  Star,
  Actions,
  WaveInput,
  AuthFormWrapper,
} from "@/styles/StyledAuth";

export default function UserForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("api/Users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <AuthFormWrapper>
      <AuthHeader>Create an account</AuthHeader>
      <StyledAuth>
        <AuthP>
          <Star>*</Star> indicates required field
        </AuthP>

        <form onSubmit={handleSubmit} method="post">
          <FloatingLabel
            controlId="floatingInput"
            label={
              <>
                <Star>*</Star> Username
              </>
            }
          >
            <Form.Control
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.name}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingEmail"
            label={
              <>
                <Star>*</Star> Email
              </>
            }
          >
            <Form.Control
              id="email"
              name="email"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.email}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label={
              <>
                <Star>*</Star> Password
              </>
            }
          >
            <Form.Control
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              required={true}
              value={formData.password}
            />
            <Actions>
              <WaveInput type="submit" value="Create User" />
            </Actions>
          </FloatingLabel>
        </form>
      </StyledAuth>

      <AuthFooter>
        <AuthPAccent>JOIN STARBUCKS® REWARDS</AuthPAccent>
        <AuthP>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </AuthP>
      </AuthFooter>
    </AuthFormWrapper>
  );
}
