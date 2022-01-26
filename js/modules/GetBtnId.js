const GetBtnId = ()=>{
const buttons = document.querySelectorAll(".slide__item-btn");
const flowers = [
   { "id": "1", "title": "Роза", "color": "pink", "price": "170"},
   {"id": "2", "title": "Гвоздика", "color": "orange", "price": "150"},
   {"id": "3", "title": "Гербера", "color": "#9400D3", "price": "150"},
   {"id": "4", "title": "Гиацинт", "color": "blue", "price": "50"},
   {"id": "5", "title": "Тюльпан","color": "black","price": "70"},
   {"id": "6","title": "Хризантема","color": "yellow","price": "100"}
 ];

buttons.forEach(btn=>{
   btn.addEventListener("click", event=>{
      const currentBtn = event.target;
      currentBtn.setAttribute("disabled", "true");
      currentBtn.textContent = "";
      currentBtn.textContent = "Вы выбрали";
      currentBtn.style.opacity = "0.7";
      document.querySelector(".bouquet__btn-fixed").classList.add("is-visible");

      let currentBtnId = currentBtn.dataset.id;
      renderClone(currentBtnId);     
   })
})
const renderClone = (id)=>{
   const dictContainer = document.querySelector(".bouquet__dist");
   let item = flowers[id - 1]; 
   
   dictContainer.insertAdjacentHTML("beforeend",
                        `<div class="slide">
                           <div class="slide__item item-dist">
                              <div class="slide__item-image item-image-dist" style="background-color: ${item.color};"></div>
                              <div class="slide__item-title">${item.title}</div>
                              <div class="slide__item-price" data-price="${item.price}">${item.price} &#8381;</div>
                              <div class="slide__item-dist-prise-counter">
                                 <button class="item-dist__btn" data-option="+">+</button>
                                 <span class="item-dist__counter">1</span>
                                 <button class="item-dist__btn" data-option="-">-</button>
                              </div>
                           </div>
                        </div>`               
   );
}

}
export default GetBtnId;