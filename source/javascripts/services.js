window.onload = function() {loadjs()};


function loadjs() {
  const paidSocialBtn = document.getElementById('paid-social-btn');
  const paidSocialContent = document.getElementById('paid-social-content');
  const paidSearchBtn = document.getElementById('paid-search-btn');
  const paidSearchContent = document.getElementById('paid-search-content');
  const programmaticDisplayBtn = document.getElementById('programmatic-display-btn');
  const programmaticDisplayContent = document.getElementById('programmatic-display-content');
  paidSocialBtn.addEventListener("click", (event) => {
    toggleShow(paidSocialBtn,paidSocialContent);
  });
  paidSearchBtn.addEventListener("click", (event) => {
    toggleShow(paidSearchBtn,paidSearchContent);
  });
  programmaticDisplayBtn.addEventListener("click", (event) => {
    toggleShow(programmaticDisplayBtn,programmaticDisplayContent);
  });

};


function toggleShow(btn, content) {
  if (btn.classList.contains("on")) {
    content.classList.add('hidden');
    btn.innerHTML = '<i class="fas fa-angle-down"></i> Show more';
    btn.classList.remove('on');
    btn.classList.add('off');
  } else {
    content.classList.remove('hidden');
    btn.innerHTML = '<i class="fas fa-angle-up"></i> Show less';
    btn.classList.remove('off');
    btn.classList.add('on');
  };
}
