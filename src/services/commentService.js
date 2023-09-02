import { API_BASE_URL } from "../config";
import Cookies from "js-cookie";

export async function getComments() {
  const validateComments = await fetch(`${API_BASE_URL}/comment/getComments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    const data = await response.json();
    return data.commentObjects;
  });
  return validateComments;
}

export async function createComment(commentInfo) {
  const authToken = Cookies.get("userToken");

  const bodyCommentData = {
    comment: commentInfo,
  };
  const validateComment = await fetch(`${API_BASE_URL}/comment/createComment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(bodyCommentData),
  }).then(async (response) => {
    const data = await response.json();
    return data.message;
  });
  return validateComment;
}
