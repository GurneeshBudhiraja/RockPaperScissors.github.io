const images =  document.querySelector('.images')
const reset = document.querySelector('.reset');


images.addEventListener('click', (evt)=>{
  if (evt.target.tagName==='IMG' && evt.target.classList.contains('rock')) {
    console.log('rock');
  } else if (evt.target.tagName === 'IMG' && evt.target.classList.contains('paper')) {
    console.log('paper');
  } else if (evt.target.tagName==='IMG' && evt.target.classList.contains('scissors')) {
    console.log('scissors');
  }
});


reset.addEventListener('click', ()=> {
  console.clear(); //to clear the console
  alert('Reset Done');
});