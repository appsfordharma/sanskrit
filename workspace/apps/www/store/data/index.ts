export const events = [];
export const shlokas = [];
export const courses = Array.from({ length: 10 }, (_, idx) => ({
  id: idx,
  title: `Course ${idx}`,
  description: `Course ${idx} description`,
  // image: `https://picsum.photos/seed/${idx}/200/300`,
  price: 100,
  discount: 10,
  rating: 4.5,
  totalRatings: 100,
  totalStudents: 1000,
  totalHours: 100,
  totalLessons: 100,
  totalQuizzes: 100,
  totalAssignments: 100,
  totalDownloads: 100,
  totalViews: 100,
  totalLikes: 100,
  totalComments: 100,
  totalShares: 100,
  totalBookmarks: 100,
}));
export const centers = Array.from({ length: 10 }, (_, idx) => ({
  id: idx,
  title: `Center ${idx}`,
  description: `Center ${idx} description`,
  address: `Address ${idx}`,
  city: `City ${idx}`,
  state: `State ${idx}`,
  country: `Country ${idx}`,
  pincode: `Pincode ${idx}`,
  phone: `Phone ${idx}`,
  email: `Email ${idx}`,
  website: `Website ${idx}`,
}));
export const blogs = [];
export const contributors = [];

export { default as categories } from "./category";
export { default as books } from "./books";
