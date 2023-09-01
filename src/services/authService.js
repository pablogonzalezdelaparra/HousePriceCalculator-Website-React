import { API_BASE_URL } from "../config";

export async function signUp(userInfo) {
  const bodyUserData = {
      email: userInfo.email,
      name: userInfo.name,
      lastName: userInfo.lastName,
      password: userInfo.password,
  };
  const validateSignup = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyUserData),
  }).then(async (response) => {
    const data = await response.json();
    return data.message;
  });
  return validateSignup;
}

export async function signIn(userInfo) {
    const bodyUserData = {
        email: userInfo.email,
        password: userInfo.password,
    };
  const validateToken = await fetch(`${API_BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyUserData),
  }).then(async (response) => {
    const data = await response.json();
    return data.AccessToken;
  });
  return validateToken;
}

export async function verifyCode(verifyUserData) {
  const bodyVerifyData = {
    email: verifyUserData.email,
    verifyCode: verifyUserData.verifyCode,
  };
  const validateVerification = await fetch(`${API_BASE_URL}/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyVerifyData),
  }).then(async (response) => {
    const data = await response.json();
    return data.message;
  });
  return validateVerification;
}