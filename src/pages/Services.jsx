import React from "react";

const ServicesPage = () => {
  return (
    <div>
      {/* Services Section */}
      <div className='mt-16 text-black'>
        {/* Services Heading */}
        <div className='text-2xl text-left uppercase font-bold mb-8 text-center text-[#1B4A7B]'>
          Services
        </div>

        {/* Service Description */}
        <div className='flex flex-col gap-8 items-center'>
          {/* Service 1 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <img src="dog-walking.png" alt="Dog Walking" className='w-24 h-24 mr-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Cat Boarding</h3>
              <p className='mb-4'>
                Our Cat Boarding service provides a warm and cozy environment where your feline friends can
                feel safe and pampered while you&#39;re away. Our dedicated team of caregivers ensures your cat
                receives attentive care, plenty of affection, and comfort throughout their stay. From providing
                personalized feeding routines to engaging playtime activities, your cat will enjoy a stress-free
                experience in a clean, safe, and enriching space. With comfortable bedding, access to fresh water,
                and plenty of scratching posts, your cat will be happy and relaxed until your return.
              </p>
              <div className='flex justify-center'>
                <button className='bg-[#1B4A7B] px-4 py-2 text-white rounded-full'>
                  <a href="/bookingnow">Book Now</a>
                </button>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <div className='mr-4'>
              <h3 className='text-lg font-semibold mb-2'>Dog Boarding</h3>
              <p className='mb-4'>
                Our Dog Boarding service offers a secure and comfortable space where your furry friend can feel
                at home while you&#39;re away. Whether it&#39;s a short vacation or an extended trip, our experienced
                team takes great care to ensure your dog feels safe, loved, and well-cared for. We provide
                personalized attention, regular exercise, nutritious meals, and plenty of playtime in a spacious,
                clean environment. Dogs enjoy socializing with other friendly pets, engaging in fun activities,
                and having access to relaxing areas designed for their comfort.
              </p>
              <div className='flex justify-center'>
                <button className='bg-[#1B4A7B] px-4 py-2 text-white rounded-full'>
                  <a href="/bookingnow">Book Now</a>
                </button>
              </div>
            </div>
            <img src="pet-vaccination.png" alt="Pet Vaccination" className='w-24 h-24 ml-auto' />
          </div>

          {/* Service 3 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <img src="vet-visits.png" alt="Proper Nutrition" className='w-24 h-24 mr-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Pet Grooming</h3>
              <p className='mb-4'>
                Our Pet Grooming service is designed to keep your beloved pets clean, healthy, and looking
                their absolute best. Whether it’s a bath, nail trim, or a full grooming session, our professional
                groomers use gentle, high-quality products that cater to the unique needs of your pet.
                We ensure your pet&#39;s coat is shiny, skin is healthy, and they feel refreshed after every grooming
                session. With experienced hands, we also provide ear cleaning, flea removal, and styling to match
                your pet&#39;s personality.
              </p>
              <div className='flex justify-center'>
                <button className='bg-[#1B4A7B] px-4 py-2 text-white rounded-full'>
                  <a href="/bookingnow">Book Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
