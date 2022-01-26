const CalcTotal = ()=>{
const dist = document.querySelector(".bouquet__dist");
const fixedBtn = document.querySelector(".bouquet__btn-fixed");

const getList = ()=>{
   const list = dist.querySelectorAll(".item-dist");
   
   list.forEach(item => {
      item.addEventListener("click", event => {
         const currentBtn = event.target;
        
         if(currentBtn.dataset.option === "+"){
            currentBtn.nextElementSibling.textContent = Number(currentBtn.nextElementSibling.textContent) + 1;
         }
         if(currentBtn.dataset.option === "-") {
            currentBtn.previousElementSibling.textContent = Number(currentBtn.previousElementSibling.textContent) - 1;
         }
      })
   });
}
fixedBtn.addEventListener("click",getList);

}
export default CalcTotal;