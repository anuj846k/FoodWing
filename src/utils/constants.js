const CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_660/`;
const LOGO_URL =
  "https://logowik.com/content/uploads/images/free-food-delivery699.logowik.com.webp";

const Fetch_res = `${process.env.REACT_FOODFIRE_APP_BASE_URL}restaurants?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING`;

const MENU_API = `${process.env.REACT_FOODFIRE_APP_BASE_URL}menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=`;
export { CDN_URL, LOGO_URL, MENU_API, Fetch_res };