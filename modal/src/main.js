import "./style.css";

const openBtn = document.querySelector("#open-modal");
const modal = document.querySelector("#dialog");
const btn = document.querySelector("#close-modal");

openBtn.addEventListener("click", () => modal.showModal());
btn.addEventListener("click", () => modal.close());

//close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
