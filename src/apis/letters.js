import axios from "axios";

export const getLetters = async () => {
  const letters = await axios.get("http://localhost:5002/letters");
  return letters.data;
};

export const postLetter = async (newLetter) => {
  await axios.post("http://localhost:5002/letters", newLetter);
};

export const deleteLetter = async (id) => {
  await axios.delete(`http://localhost:5002/letters/${id}`);
};
