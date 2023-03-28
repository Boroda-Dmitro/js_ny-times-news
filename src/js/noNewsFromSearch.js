export function noNewsFromSearch(targetElement) {
  const markup = ` <p class="default-picture__text">We haven’t found news from this category</p>
            <picture>
              <source
                srcset="
                  ./images/desktop-no-news-601.png    1x,
                  ./images/desktop-no-news-601@2x.png 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ./images/tablet-no-news-560.png    1x,
                  ../images/tablet-no-news-560@2x.png 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ./images/mobile-no-news-248.png    1x,
                  ./images/mobile-no-news-248@2x.png 2x
                "
                media="(max-width: 320px)"
              />
              <img
                src="./images/mobile-no-news-248.png"
                alt="We haven’t found news from this category"
                min-width="248"
                class="default-picture__image"
              />
            </picture>
          </div>`;

  targetElement.innerHTML = markup;
}
