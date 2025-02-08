const $ = document;

const tagsUlElem = $.querySelector("ul");
const tagInputElem = $.querySelector("input");
const tagsCountSpanElem = $.querySelector("span");
const removeAllBtn = $.querySelector("button");

let tags = ["sabzlearn", "js", "React"];
let maxTagsCount = 10;

const removeAllLis = () => {
 tagsUlElem.querySelectorAll("li").forEach(tag => tag.remove())
}

const countTags = () => {
  tagInputElem.focus();
  tagsCountSpanElem.innerText = maxTagsCount - tags.length;
};

const removeTag = (tagElem) => {
  console.log(tagElem);
};

const createTag = () => {

  removeAllLis()

  let tagli = null;

  [...tags].reverse().forEach((tag) => {
    tagli = `<li>${tag}<i class = " uit uit-multiply" onclick="removeTag(this)"></i></li>`;
    tagsUlElem.insertAdjacentHTML("afterbegin", tagli);
  });

  countTags()
};

const addTag = (event) => {
  if (event.key === "Enter") {
    let tagTitle = event.target.value;
    console.log(tagTitle)

    if (tags.length < 10) {
      if (tagTitle.length < 10 && tagTitle.length > 0) {
        tags.push(tagTitle)
        createTag()
      }
    }
    event.target.value = ''
  }
};

createTag();
countTags();

tagInputElem.addEventListener("keyup", addTag);
removeAllBtn.addEventListener('click', ()=>{
  tags.length = 0

  removeAllLis()
  countTags();

})
