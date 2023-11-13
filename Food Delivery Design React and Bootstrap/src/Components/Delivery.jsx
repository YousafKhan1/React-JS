import React from 'react'
import Process1 from '../assets/Images/process1.png'
import Process2 from '../assets/Images/process2.png'
import Process3 from '../assets/Images/process3.png'

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
        <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col px-5 text-center">
        <div className="mb-3">
          <img src={Process1} className='w-50 h-50' alt="" />
        </div>
        <h5>Pick Your Veg</h5>
        <p>
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi.
        </p>
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
          <img src={Process2} className='w-50 h-50' alt="" />
        </div>
        <h5>We Deliver the Bag</h5>
        <p>
          Gumbo beet greens corn soko endive gumbo gourd parsley.
          </p>
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
        <img src={Process3} className='w-50 h-50' alt="" />
        </div>
        <h5>You Enjoy Your Veg</h5>
          <p>
          Dandelion cucumber earthnut pea peanut soko zucchini.
          </p>
      </div>
    </div>
  </div>
  )
}

export default Delivery