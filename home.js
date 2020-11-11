(function () {
  // const targetRow = document.querySelector('.categories__row');

  const categories = [
    'Courts',
    'Policing',
    'Human Rights',
    'Child Rights',
    'Land Rights',
    'Education',
    'Health',
    'Economy',
    'Migration',
    'Corporate',
    'Legal Aid',
    'Consititution'
  ];

  function categoryTemplate(categoryName) {
    const categoryElement = document.createElement('div');
    categoryElement.setAttribute('class', 'col-lg-3 col-md-4 col-sm-4 col-xs-4');
    categoryElement.innerHTML = categoryName;
    return categoryElement;
  }

  // categories.forEach((cat) => targetRow.appendChild(categoryTemplate(cat)));
})();