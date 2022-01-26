const GetData = (data) => {
   

   const list = document.querySelector(".swiper-wrapper");

  
      list.innerHTML = "";

      data.forEach(item => {
         list.insertAdjacentHTML("beforeend", 
               `<div class="swiper-slide my-swiper-slide">
                  <div class="slide">
                     <div class="slide__item">
                        <div class="slide__item-image" style="background-color: ${item.color};"></div>
                        <div class="slide__item-title">${item.title}</div>
                        <div class="slide__item-price" data-price="${item.price}">${item.price} &#8381;</div>
                        <button class="slide__item-btn" data-id="${item.id}">Добавить в букет</button>
                     </div>
                  </div>
               </div>`
         )
      });
   }

export default GetData;