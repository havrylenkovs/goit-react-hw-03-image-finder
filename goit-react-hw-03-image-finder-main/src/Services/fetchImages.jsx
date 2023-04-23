import axios from 'axios';

const API_KEY = '31523940-001a34e6ef463768beef02e4d';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(BASE_URL, {
    method: 'get',
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  console.log(response.data);
  console.log(response.data.hits);

  return response.data;
};
export default fetchImages;

// response.data.forEach((item, i) => {
//   const template = `
//       <option id="_${i}">${item.name}</option>
//   `
//   select.insertAdjacentHTML('beforeend', template)
// })

// const API_KEY = '31523940-001a34e6ef463768beef02e4d';
// const BASE_URL = 'https://pixabay.com/api/';

// export function fetchImages(searchQuerry, page) {
//   return fetch(
//     `${BASE_URL}?q=${searchQuerry}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => response.json());

// }

// https://pixabay.com/api/?q=frog&page=1&key=31523940-001a34e6ef463768beef02e4d&image_type=photo&orientation=horizontal&per_page=12

// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: '31523940-001a34e6ef463768beef02e4d',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export const fetchImages = async (query, page) => {
//   const { data } = await axios.get(`?q=${query}&page=${page}`);
//   return data;
// };
