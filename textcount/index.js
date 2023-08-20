const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const capi=document.getElementById("capital")
const small=document.getElementById("small")
const num=document.getElementById("num")
const spl=document.getElementById("spl")


textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
}
function updateCounter()
      {
        var upper = 0,
          lower = 0,
          number = 0,
          special = 0;
        for (var i = 0; i < textareaEl.value.length; i++)
        {
          if (textareaEl.value[i] >= "A" && textareaEl.value[i] <= "Z") upper++;
          else if (textareaEl.value[i] >= "a" && textareaEl.value[i] <= "z") lower++;
          else if (textareaEl.value[i] >= "0" && textareaEl.value[i] <= "9") number++;
          else special++;
        }
        totalCounterEl.innerText = textareaEl.value.length;
        capi.innerText = upper;
        small.innerText = lower;
        num.innerText = number;
        spl.innerText = special;
      }


