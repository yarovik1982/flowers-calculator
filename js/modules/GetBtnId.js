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
 console.log(flowers[0].id);
buttons.forEach(btn=>{
   btn.addEventListener("click", event=>{
      const currentBtn = event.target;
      let currentBtnId = currentBtn.dataset.id;
      renderClone(currentBtnId)
      // console.log(currentBtnId);
      
   })
})
const renderClone = (id)=>{
   const dictContainer = document.querySelector(".bouquet__dist");
   let item = flowers[id - 1]; 
   console.log(item);
   dictContainer.insertAdjacentHTML("beforeend",
                        `<div class="slide">
                           <div class="slide__item slide__item-dist">
                              <div class="slide__item-image item-image-dist" style="background-color: ${item.color};"></div>
                              <div class="slide__item-title">${item.title}</div>
                              <div class="slide__item-price" data-price="${item.price}">${item.price} &#8381;</div>
                           </div>
                        </div>`               
   );
}

}
export default GetBtnId;