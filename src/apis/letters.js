import axios from "axios";

export const getLetters = async () => {
  const letters = await axios.get("http://localhost:5002/letters");
  return letters.data;
};
