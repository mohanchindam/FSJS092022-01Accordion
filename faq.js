const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.getElementsByClassName("accordian_body")[0];
const faqs = [];

// show/hide para when button is clicked
function showFaq(faqPara) {
  let displayPara=faqPara.style.display;
  faqPara.style.display=displayPara==="none"?"block":"none";
}

//create all required elements
function createFaq() {
  let faq=document.createElement("div");
  faq.setAttribute("class","faq");
  let faqHeader=document.createElement("div");
  faqHeader.setAttribute("class","faq_header");
  let faqHeading=document.createElement("h3");
  let faqPara=document.createElement("p")
  faqPara.setAttribute("class","hidden");
 
  let faqBtn=document.createElement("button");
  faqBtn.setAttribute("class","show_btn");

  //append elements to their parents
  faq.append(faqHeader);
  faqHeader.append(faqHeading);
  faqHeader.append(faqBtn);
  faq.append(faqPara);
  return faq;
}

//append all the created elements to DOM with data
faqData.forEach((faqEle)=>{
  let faq=createFaq();
  faq.id=faqEle.id;
  faq.querySelector(".faq h3").innerHTML=faqEle.question;
  faq.querySelector(".faq p").innerHTML=faqEle.answer;
  faq.querySelector(".show_btn").innerHTML="+";
  accordianBody.append(faq);
  faq.querySelector('.hidden').style.display=getComputedStyle(faq.querySelector('.hidden')).display;
  faqs.push(faq);
})

//modify button b/w + and - when clicked
function btnStatusUpdate(faq,btn) {
  let faqPara=faq.getElementsByClassName('hidden')[0]
  btn.innerHTML=btn.innerHTML==="+"?"-":"+";
  showFaq(faqPara);
}

//perform show/hide operation when button is clicked in faq
faqs.forEach((faq)=>{
  let btn=faq.querySelector(".show_btn");
  btn.addEventListener("click",()=>{
    btnStatusUpdate(faq,btn)
  })
})
