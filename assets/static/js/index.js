(function(){

var max = 20;

function init(max) {
  let dom = document.createDocumentFragment();
  for (let i = 0; i < max; i ++) {
    for (let j = 0; j < max; j ++) {
      let item = document.createElement('div');
      item.classList.add('item');
      item.classList.add('item-' + i + '-' + j);
      item.setAttribute('data-x', i);
      item.setAttribute('data-y', j);
      item.style.left = (i * 40) + 'px';
      item.style.top = (j * 40) + 'px';
      dom.appendChild(item);
    }
  }
  return dom;
}

var mainContainer = document.querySelector('#id-main');

var background = document.createElement('div');
background.classList.add('background');
background.style.zIndex = 1;
background.appendChild(init(max));

var building = document.createElement('div');
building.classList.add('building');
building.style.zIndex = 11;
building.appendChild(init(max));

building.querySelector('.item-1-1').classList.add('tiger');

var handle = document.createElement('div');
handle.classList.add('handle');
handle.style.zIndex = 21;
handle.appendChild(init(max));

// building.querySelector('.item-0-0').classList.add('house-1');
// building.querySelector('.item-1-0').classList.add('house-2');
// building.querySelector('.item-2-0').classList.add('house-3');
// building.querySelector('.item-3-0').classList.add('house-4');
// building.querySelector('.item-4-0').classList.add('house-5');
// building.querySelector('.item-5-0').classList.add('house-6');

// for (let i = 1; i < 8; i ++) {
  // b = building.querySelector(`.item-${i}-1`);
  // b.classList.add('road');
// }

// function updateBuilding(selector, index) {
  // index = index || 1;
  // let className = `house-${index}`;
  // console.log('update housing', className);
  // selector.classList.add(className);
  // if (index < 6) {
    // setTimeout(() => {
      // selector.classList.add(className);
      // updateBuilding(selector, index + 1);
    // }, 2000);
  // }
// }
// updateBuilding(building.querySelector('.item-0-0'));

// building.querySelector('.item-1-0').classList.add('house-1');
// building.querySelector('.item-2-0').classList.add('house-2');
// building.querySelector('.item-3-0').classList.add('house-3');
// building.querySelector('.item-4-0').classList.add('house-4');
// building.querySelector('.item-5-0').classList.add('house-5');
// building.querySelector('.item-6-0').classList.add('house-6');

mainContainer.appendChild(background);
mainContainer.appendChild(building);
mainContainer.appendChild(handle);

}());
