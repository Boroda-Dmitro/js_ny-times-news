const paginationContainer = document.querySelector('#pagination');
const nextPageButton = document.querySelector('.next-page');
const prevPageButton = document.querySelector('.prev-page');
const isMobile = window.innerWidth <= 767;
const isTablet = window.innerWidth < 1200;

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 5,
};

renderPagination();

paginationContainer.addEventListener('click', handlePageNumberClick);
nextPageButton.addEventListener('click', handleNextPageClick);
prevPageButton.addEventListener('click', handlePrevPageClick);

function handlePageNumberClick (e) {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(ele.dataset.page, 10);

   valuePage.curPage = pageNumber;
    renderPagination(valuePage);
    handlePrevPageClick();
    handleNextPageClick();
  }
}
function renderArticles(pageNumber) {
  const articles = document.querySelectorAll('.article');
  let articlesPerPage = 0;
   articlesPerPage = isMobile ? 4 : isTablet ? 7 : 8;
  const startIndex = (pageNumber - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage - 1;
  const totalArticles = articles.length;
 
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
   
  articles.forEach((article, index) => {
    if (index >= startIndex && index <= endIndex) {
      article.style.display = 'block';
      valuePage.totalPages = totalPages;
    } else {
      article.style.display = 'none';
    }
  })
}

function renderPagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;
  let range = delta + 4;
  let render = '';
  let renderTwoSide = '';
  const dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;

 let countTruncate = 0; 

  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = '';

  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'active' : '';

    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {

        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {

        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      render += renderPage(pos, active);
    }
  }
 if (renderTwoSide) {
   paginationContainer.innerHTML = renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
  } else {
    paginationContainer.innerHTML = render;
  }
   renderArticles(curPage);
  handlePrevPageClick();
  handleNextPageClick();
}
  
function renderPage(index, active = '') {
  return `<li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.page-container')
  .addEventListener('click', function (e) {
    handleButton(e.target);
  });

function handleButton(element) {
  if (element.classList.contains('prev-page')) {
    valuePage.curPage-=1;
    handlePrevPageClick();
    nextPageButton.disabled = false;
  } else if (element.classList.contains('next-page')) {
    valuePage.curPage+=1;
    handleNextPageClick();
    prevPageButton.disabled = false;
  }
  renderPagination();
}
function handlePrevPageClick() {
  prevPageButton.disabled = valuePage.curPage === 1 ? true : false;
}
function handleNextPageClick() {
  nextPageButton.disabled = valuePage.curPage === valuePage.totalPages ? true : false;
}

