import GetData from "./modules/GetData.js";
import RenderDuplicate from "./modules/GetBtnId.js";
import InitSlider from "./modules/InitSlider.js"
import CalcTotal from "./modules/CalcTotal.js";




const flowers = [
  { "id": "1", "title": "Роза", "color": "pink", "price": "170"},
  {"id": "2", "title": "Гвоздика", "color": "orange", "price": "150"},
  {"id": "3", "title": "Гербера", "color": "#9400D3", "price": "150"},
  {"id": "4", "title": "Гиацинт", "color": "blue", "price": "50"},
  {"id": "5", "title": "Тюльпан","color": "black","price": "70"},
  {"id": "6","title": "Хризантема","color": "yellow","price": "100"}
];

GetData(flowers);
RenderDuplicate();
InitSlider();
CalcTotal();