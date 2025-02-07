const $ = document;

const tagsUlElem = $.querySelector("ul");
const tagInputElem = $.querySelector("input");
const tagsCountSpanElem = $.querySelector("span");
const removeAllBtn = $.querySelector("button");

let tags = ["sabzlearn", "js" , "React"];
let maxTagsCount = 10;

const countTags = () => {
  tagInputElem.focus();
  tagsCountSpanElem.innerText = maxTagsCount - tags.length;
};

const removeTag = (tagElem) => {
  console.log(tagElem);
};

const createTag = () => {
  let tagli = null;

  tags.forEach((tag) => {
    tagli = `<li>${tag}<i class = " uit uit-multiply" onclick="removeTag(this)"></i></li>`;
    tagsUlElem.insertAdjacentHTML('afterbegin', tagli);
  });
};

createTag()
countTags();
