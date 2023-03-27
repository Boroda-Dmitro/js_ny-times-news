import { createHomePageNews } from './js/createHomePageNews';
import { createHomePageSeachingNews } from "./js/createHomePageSeachingNews";



createHomePageNews();


setTimeout(() => {
    createHomePageSeachingNews('toys')
}, 1000);
