/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const CHECK_IMAGE = "images/checked.png";
const UNCHECK_IMAGE = "images/unchecked.png";

function onclick(event) {
  const check = event.currentTarget;
  const image = document.createElement("img");
  image.src = CHECK_IMAGE;

  if (check.parentNode.dataset.questionId == "one") {
    controllo(image, "one");
    trasparenza("one");
  } else if (check.parentNode.dataset.questionId == "two") {
    controllo(image, "two");
    trasparenza("two");
  } else if (check.parentNode.dataset.questionId == "three") {
    controllo(image, "three");
    trasparenza("three");
  }

  check.src = image.src;
  check.parentNode.classList.remove("trasparenza");
  check.parentNode.classList.add("blu");
  verifica(image);
}

function controllo(x, domanda) {
  const boxes = document.querySelectorAll(".checkbox ");
  const im = document.createElement("img");
  im.src = UNCHECK_IMAGE;
  for (const box of boxes) {
    if (box.parentNode.dataset.questionId == domanda)
      if (box.src == x.src) {
        box.src = im.src;
        box.parentNode.classList.remove("blu");
        box.parentNode.classList.add("trasparenza");
      }
  }
}
function trasparenza(domanda) {
  const bs = document.querySelectorAll(".choice-grid div");
  for (const b of bs)
    if (b.dataset.questionId == domanda) b.classList.add("trasparenza");
}
function verifica(y) {
  let flag1 = false;
  let flag2 = false;
  let flag3 = false;
  const bs = document.querySelectorAll(".checkbox");
  for (const b of bs) {
    if (b.src == y.src && b.parentNode.dataset.questionId == "one") {
      //console.log("prima verifica");
      flag1 = true;
    }
    if (b.src == y.src && b.parentNode.dataset.questionId == "two") {
      // console.log("seconda verifica");
      flag2 = true;
    }
    if (b.src == y.src && b.parentNode.dataset.questionId == "three") {
      //console.log("terza verifica");
      flag3 = true;
    }
  }
  if (flag1 == flag2 && flag2 == flag3 && flag3 == true) {
    for (const b of bs) {
      b.removeEventListener("click", onclick);
    }
    risultato(y);
  }
}
function risultato(z) {
  let vet = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const boxs = document.querySelectorAll(".checkbox");
  for (const box of boxes) {
    if (box.src == z.src && box.parentNode.dataset.choiceId == "blep")
      if (box.parentNode.dataset.questionId == "one") vet[0] = vet[0] + 1.5;
      else vet[0] = vet[0] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "happy")
      if (box.parentNode.dataset.questionId == "one") vet[1] = vet[1] + 1.5;
      else vet[1] = vet[1] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "burger")
      if (box.parentNode.dataset.questionId == "one") vet[2] = vet[2] + 1.5;
      else vet[2] = vet[2] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "sleeping")
      if (box.parentNode.dataset.questionId == "one") vet[3] = vet[3] + 1.5;
      else vet[3] = vet[3] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "dopey")
      if (box.parentNode.dataset.questionId == "one") vet[4] = vet[4] + 1.5;
      else vet[4] = vet[4] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "cart")
      if (box.parentNode.dataset.questionId == "one") vet[5] = vet[5] + 1.5;
      else vet[5] = vet[5] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "nerd")
      if (box.parentNode.dataset.questionId == "one") vet[6] = vet[6] + 1.5;
      else vet[6] = vet[6] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "shy")
      if (box.parentNode.dataset.questionId == "one") vet[7] = vet[7] + 1.5;
      else vet[7] = vet[7] + 1;

    if (box.src == z.src && box.parentNode.dataset.choiceId == "sleepy")
      if (box.parentNode.dataset.questionId == "one") vet[8] = vet[6] + 1.5;
      else vet[8] = vet[8] + 1;
  }
  massimo(vet);
}
function massimo(v) {
  let i = 0;
  let max = 0;
  for (let x = 0; x <= 8; x++) {
    if (max <= v[x]) {
      max = v[x];
      i = x;
    }
  }
  scelta(i);
}

function scelta(scelta) {
  let risultato = " ";
  switch (scelta) {
    case 0:
      risultato = "blep";
      break;

    case 1:
      risultato = "happy";
      break;

    case 2:
      risultato = "burger";
      break;

    case 3:
      risultato = "sleeping";
      break;

    case 4:
      risultato = "dopey";
      break;

    case 5:
      risultato = "cart";
      break;

    case 6:
      risultato = "nerd";
      break;

    case 7:
      risultato = "shy";
      break;

    case 8:
      risultato = "sleepy";
      break;
  }
  const conteiner = document.querySelector(".finequiz");
  const titolo = document.createElement("h1");
  titolo.textContent = RESULTS_MAP[risultato].title;
  conteiner.appendChild(titolo);
  const corpo = document.createElement("p");
  corpo.textContent = RESULTS_MAP[risultato].contents;
  conteiner.appendChild(corpo);
  const bottone = document.createElement("botton");
  bottone.classList.add("bottone");
  bottone.textContent = "Ricomincia il quiz";
  bottone.addEventListener("click", restart);
  conteiner.appendChild(bottone);
}

function restart(event) {
  pulire();
  const boxes = document.querySelectorAll(".checkbox ");
  for (const box of boxes) {
    box.addEventListener("click", onclick);
  }
}

function pulire() {
  const boxes = document.querySelectorAll(".checkbox ");
  const im = document.createElement("img");
  const chk = document.createElement("img");
  im.src = UNCHECK_IMAGE;
  chk.src = CHECK_IMAGE;
  for (const box of boxes) {
    if (box.src == chk.src) {
      box.src = im.src;
      box.parentNode.classList.remove("blu");
    }
    box.parentNode.classList.remove("trasparenza");
  }
  const c = document.querySelector(".finequiz");
  c.innerHTML = "";
}

const boxes = document.querySelectorAll(".checkbox ");
for (const box of boxes) {
  box.addEventListener("click", onclick);
}
