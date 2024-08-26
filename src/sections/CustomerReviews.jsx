import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
import FadeInSection from "../components/FadeInSection"
const CustomerReviews = () => {
  return (
<section className="max-container">
  <h2 className="font-palanquin font-bold text-center text-4xl">
  What Our 
    <span className="text-coral-red"> Customers </span>
    Say?
  </h2>
  <p className="text-center text-slate-gray text-lg m-auto mt-4 max-w-lg leading-7">Hear genuine stories from our satisfied customers about their exceptional experience with us.</p>
  <FadeInSection>
    <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review)=>(
        <ReviewCard key={review.customerName}
            {...review}
    />
      ))}
    </div>
  </FadeInSection>
</section>
  )
}

export default CustomerReviews