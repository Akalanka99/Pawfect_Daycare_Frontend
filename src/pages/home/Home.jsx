import React from 'react';
import Banner from '../../components/Banner';

function Home() {
  return (
    <div >
      <Banner/>
      
      {/* Services Heading */}
      <div className='text-2xl text-left uppercase font-bold mb-12 text-[#1B4A7B] text-center mt-16' >
        Services
      </div>

      {/* Services Boxes */}
      <div className='flex flex-col md:flex-row gap-10 px-3 justify-center items-center '>
        {/* Service Box 1 */}
        <div className='flex flex-col items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg'>
          
          <h3 className='text-lg font-semibold mb-2'>Cat Boarding</h3>
          <p className='text-center mb-4'>A cozy environment where your cat receives attentive care and comfort during your absence.</p>
          <button className='bg-[#1B4A7B] px-4 py-2 text-white rounded-full'>View More</button>
        </div>

        {/* Service Box 2 */}
        <div className='flex flex-col items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg'>
          {/* //<img src="dog-boarding.png" alt="Dog Boarding" className='w-24 h-24 mb-4' /> */}
          <h3 className='text-lg font-semibold mb-2'>Dog Boarding</h3>
          <p className='text-center mb-4'>A safe and comfortable place where your dog can stay and be cared for while you're away.</p>
          <button className='bg-[#1B4A7B] px-4 py-2 text-white rounded-full'>View More</button>
        </div>

        {/* Service Box 3 */}
        <div className='flex flex-col items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg'>
          {/* <img src="pet-grooming.png" alt="Pet Grooming" className='w-24 h-24 mb-4' /> */}
          <h3 className='text-lg font-semibold mb-2'>Pet Grooming</h3>
          <p className='text-center mb-4'>A professional service to keep your pet clean, healthy, and looking their best.</p>
          <button className='bg-[#1B4A7B] px-4 py-2 text-white rounded-full'>View More</button>
        </div>
      </div>

      {/* Pet Care Tips Section */}
      <div className='mt-16'>
        {/* Pet Care Tips Heading */}
        <div className='text-2xl text-left uppercase font-bold mb-8 text-center text-[#1B4A7B]' >
          Pet Care Tips
        </div>

        {/* Tips Boxes */}
        <div className='flex flex-col gap-8 items-center'>
          {/* Tip Box 1 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <img src="dog-walking.png" alt="Dog Walking" className='w-24 h-24 mr-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Dog Walking</h3>
              <p>Regular walks are essential for your dog's physical and mental health. Daily exercise helps maintain a healthy weight, prevents behavioral issues, and strengthens the bond between you and your dog.</p>
            </div>
          </div>

          {/* Tip Box 2 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <div className='mr-4'>
              <h3 className='text-lg font-semibold mb-2'>Pet Vaccination</h3>
              <p>Keep your pet healthy with essential vaccines that protect against serious diseases. Our clinic offers personalized vaccination schedules to ensure your pet's well-being.</p>
            </div>
            <img src="pet-vaccination.png" alt="Pet Vaccination" className='w-24 h-24 ml-auto' />
          </div>

          {/* Tip Box 3 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <img src="vet-visits.png" alt="Proper Nutrition" className='w-24 h-24 mr-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Proper Nutrition</h3>
              <p>Schedule routine visits to the vet to ensure your pet's overall health. Early detection of potential issues can lead to more effective treatments and a healthier, happier pet.</p>
            </div>
          </div>

          {/* Tip Box 4 */}
          <div className='flex items-center bg-[#F1FBFD] shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <div className='mr-4'>
              <h3 className='text-lg font-semibold mb-2'>Regular Vet Checkups</h3>
              <p>Provide a balanced diet tailored to your pet's specific needs. Quality food contributes to their longevity, energy levels, and overall well-being.</p>
            </div>
            <img src="proper-nutrition.png" alt="Regular Vet Visits" className='w-24 h-24 ml-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
