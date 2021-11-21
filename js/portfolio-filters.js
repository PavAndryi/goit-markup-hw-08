const filterListItemsArray = document.querySelectorAll('.portfolio__item');

const refs = {
  allBtn: document.querySelector('[data-value="AllBtn"]'),
  webBtn: document.querySelector('[data-value="WebBtn"]'),
  appBtn: document.querySelector('[data-value="AppBtn"]'),
  designBtn: document.querySelector('[data-value="DesignBtn"]'),
  marketingBtn: document.querySelector('[data-value="MarketingBtn"]'),
};

refs.allBtn.addEventListener('click', onAllBtnClick);
refs.webBtn.addEventListener('click', onWebBtnClick);
refs.appBtn.addEventListener('click', onAppBtnClick);
refs.designBtn.addEventListener('click', onDesignBtnClick);
refs.marketingBtn.addEventListener('click', onMarketingBtnClick);

function onHideItem(item) {
  item.classList.add('visually-hidden');
}

function onAllBtnClick() {
  filterListItemsArray.forEach(filterItem =>
    filterItem.classList.remove('visually-hidden'),
  );
}

function onWebBtnClick() {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Website') {
      onHideItem(filterItem);
    }
  });
}

function onAppBtnClick() {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Application') {
      onHideItem(filterItem);
    }
  });
}

function onDesignBtnClick() {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Design') {
      onHideItem(filterItem);
    }
  });
}

function onMarketingBtnClick() {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Marketing') {
      onHideItem(filterItem);
    }
  });
}

