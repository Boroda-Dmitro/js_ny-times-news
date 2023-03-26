// import { onBtnClicks } from './changeAddToFavoriteBtn';
// import { addNewsToLocalStorage } from './addNewsToLocalStorage';
// import { LOCAL_STORAGE_FAVOURITE_KEY } from './createHomePageNews';

// const favoritePageContainer = document.querySelector('.favorite-page-container');

// function renderFavoritePage() {
//   const newsFromStorage = JSON.parse(localStorage.getItem('favoriteNews')) || [];
//   const favoriteNewsGallery = document.createElement('div');
//   favoriteNewsGallery.classList.add('favorite-news-gallery');

//   newsFromStorage.forEach((news) => {
//     const favoriteNewsCard = createNewsCard(news);

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-from-favorite-btn');
//     removeButton.textContent = 'Remove from Favorite';
//     removeButton.addEventListener('click', () => {
//       const updatedNews = newsFromStorage.filter((n) => n.title !== news.title);
//       localStorage.setItem('favoriteNews', JSON.stringify(updatedNews));
//       renderFavoritePage();
//     });

//     favoriteNewsCard.appendChild(removeButton);
//     favoriteNewsGallery.appendChild(favoriteNewsCard);
//   });

//   favoritePageContainer.appendChild(favoriteNewsGallery);
// }


//   renderFavoritePage();
