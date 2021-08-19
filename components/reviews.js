import React, {useEffect} from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  Link  from 'next/link';

export default function Reviews() {
  useEffect(() => {
  
  const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const ImgOp = document.querySelector("img");
const messageOp = document.querySelector(".messagea");
const customerNameOp = document.querySelector(".customer-name");
const Test = document.querySelector('.test')

class Person {
  constructor(customerImg, message, customerName) {
    this.customerImg = customerImg;
    this.message = message;
    this.customerName = customerName;
  }
}

let counter = 0;
const customer0 = new Person(
  `./img/customer-0.jpg`,
  "Jorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio",
  "John"
);
const customer1 = new Person(
  `./img/customer-1.jpg`,
  "Borem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio",
  "Bohn"
);
const customer2 = new Person(
  `./img/customer-2.jpg`,
  "Morem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio",
  "Mohn"
);
const customer3 = new Person(
  `./img/customer-3.jpg`,
  "Gorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio",
  "Gohn"
);
const customer4 = new Person(
  `./img/customer-4.jpg`,
  "LLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio",
  "Lohn"
);

const array = [customer0, customer1, customer2, customer3, customer4];
// if (counter === 0) {
  ImgOp.src = array[counter].customerImg;
messageOp.textContent = array[counter].message;
customerNameOp.textContent = array[counter].customerName;
console.log()
// console.log(counter+'1')
// }
Test.textContent = 'blajldsfsdfa'
console.log(Test.textContent)

prevBtn.addEventListener("click", function () {
  counter -= 1;
  if (counter < 0) {
    counter = 4;
  }
  console.log(counter);
  ImgOp.src = array[counter].customerImg;
  messageOp.textContent = array[counter].message;
  customerNameOp.textContent = array[counter].customerName;
});

nextBtn.addEventListener("click", function () {
  counter += 1;
  if (counter > 4) {
    counter = 0;
  }
  console.log(counter);

  ImgOp.src = array[counter].customerImg;
  messageOp.textContent = array[counter].message;
  customerNameOp.textContent = array[counter].customerName;
});
});
    return (
        <div>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            What our users say
          </h1>
          <div>
            <button className='prev-btn'>
                PREV BUTTON
            </button>
            <button className='next-btn'>
                NEXT BUTTON
            </button>
            <h2 className="customer-name"></h2>
            <img src="" alt="" />
            <p className="messagea"></p>
            <div className='test'>

            </div>
          </div>
        </div>
        <div className='icon-container' data-aos="zoom-in" data-aos-duration='1000' >
          <Link className='icon-container' href='/about' passHref><FontAwesomeIcon icon={faAngleRight} className='icon' /></Link>
        </div>
        <div className='goToTop'>
            <Link className='goToTop' href='/' passHref><a>GO TO TOP</a></Link>
        </div>
      </section>
        </div>
    )
}