const spanList=document.querySelectorAll('span')
var i=0
const nextButton=document.getElementById('next')
const prevButton=document.getElementById('prev')
const NextFunc=()=>{
if(i==0)
  prevButton.classList.add('active')
if(i==3)
   nextButton.classList.remove('active')
spanList[i].style.borderColor="#0077ff";
const progree=spanList[i].nextElementSibling
progree.value="100"
i++
}
const PrevFunc=()=>{
i--
if(i==0)
  prevButton.classList.remove('active')
if(i==3)
   nextButton.classList.add('active')

const progree=spanList[i].nextElementSibling
progree.value="0"
spanList[i].style.borderColor="#d0d0d0";  

}