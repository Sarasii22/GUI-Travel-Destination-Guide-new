import Tours from "../assets/data/Tours";

export const getTourById = (id) => {
  return Tours.find((tour) => tour.id === id);
};