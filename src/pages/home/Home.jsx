import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import SignIn from '../../components/SignIn';

function Banner() {
  return (
    <div className='section-container bg-gradient-to-r from-[#ffffff] to-[#ffffff] flex flex-col min-h-screen'>
      
      {/* Welcome Section */}
      <div className='text-center py-8 mb-2'>
        <h1 className='text-4xl font-bold mb-0.5' style={{ color: '#000000', fontFamily: 'Lora' }}>
          Welcome to Pawfect Daycare
        </h1>
      </div>

      {/* Paragraph */}
      <div className='text-center mb-4 px-20 md:px-40 lg:px-60'>
        <p className='text-xl md:text-xl text-[#000000] font-thin font-serif'>
          Providing a Nurturing Environment Where Your Pets are Pampered, Loved, and Cared for as Our Own, Ensuring They Thrive, Play, and Feel Right at Home Every Day
        </p>
      </div>

      {/* Buttons */}
      <div className='flex flex-col md:flex-row gap-4 mb-8 justify-center items-center'>
        <button className='bg-[#C97F05] px-8 py-3 font-semibold text-white rounded-full'
        onClick={()=>document.getElementById('my_modal_3').showModal()}>
        
          Join with Us
        </button>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <RegisterForm></RegisterForm>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      
    </form>
    
  </div>
  
        </dialog>
      
        
        
        <button className='bg-[#C97F05] px-8 py-3 font-semibold text-white rounded-full'
         onClick={()=>document.getElementById('my_modal_4').showModal()}>
          Sign In
        </button>
        
<dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <SignIn></SignIn>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
  </div>
</dialog>
        
      
        
      </div>

      {/* Image */}
      <div className='w-full flex justify-center items-center'>
        <img src="banner.png" alt="Happy Pets" className='w-full' />
      </div>

      {/* Services Heading */}
      <div className='text-2xl text-left uppercase font-bold mb-12' style={{ color: 'black', fontFamily: 'Lora', fontWeight: '700', textDecoration: 'underline' }}>
        Services
      </div>

      {/* Services Boxes */}
      <div className='flex flex-col md:flex-row gap-10 px-3'>
        {/* Service Box 1 */}
        <div className='flex flex-col items-center bg-[#FFF7EA] shadow-lg p-6 rounded-lg'>
          <img src="cat-boarding.png" alt="Cat Boarding" className='w-24 h-24 mb-4' />
          <h3 className='text-lg font-semibold mb-2'>Cat Boarding</h3>
          <p className='text-center mb-4'>A cozy environment where your cat receives attentive care and comfort during your absence.</p>
          <button className='bg-[#C97F05] px-4 py-2 text-white rounded-full'>View More</button>
        </div>

        {/* Service Box 2 */}
        <div className='flex flex-col items-center bg-[#FFF7EA] shadow-lg p-6 rounded-lg'>
          <img src="dog-boarding.png" alt="Dog Boarding" className='w-24 h-24 mb-4' />
          <h3 className='text-lg font-semibold mb-2'>Dog Boarding</h3>
          <p className='text-center mb-4'>A safe and comfortable place where your dog can stay and be cared for while you're away.</p>
          <button className='bg-[#C97F05] px-4 py-2 text-white rounded-full'>View More</button>
        </div>

        {/* Service Box 3 */}
        <div className='flex flex-col items-center bg-[#FFF7EA] shadow-lg p-6 rounded-lg'>
          <img src="pet-grooming.png" alt="Pet Grooming" className='w-24 h-24 mb-4' />
          <h3 className='text-lg font-semibold mb-2'>Pet Grooming</h3>
          <p className='text-center mb-4'>A professional service to keep your pet clean, healthy, and looking their best.</p>
          <button className='bg-[#C97F05] px-4 py-2 text-white rounded-full'>View More</button>
        </div>
      </div>

      {/* Pet Care Tips Section */}
      <div className='mt-16'>
        {/* Pet Care Tips Heading */}
        <div className='text-2xl text-left uppercase font-bold mb-8' style={{ color: 'black', fontFamily: 'Lora', fontWeight: '700', textDecoration: 'underline' }}>
          Pet Care Tips
        </div>

        {/* Tips Boxes */}
        <div className='flex flex-col gap-8 items-center'>
          {/* Tip Box 1 */}
          <div className='flex items-center bg-white shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <img src="dog-walking.png" alt="Dog Walking" className='w-24 h-24 mr-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Dog Walking</h3>
              <p>Regular walks are essential for your dog's physical and mental health. Daily exercise helps maintain a healthy weight, prevents behavioral issues, and strengthens the bond between you and your dog.</p>
            </div>
          </div>

          {/* Tip Box 2 */}
          <div className='flex items-center bg-white shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <div className='mr-4'>
              <h3 className='text-lg font-semibold mb-2'>Pet Vaccination</h3>
              <p>Keep your pet healthy with essential vaccines that protect against serious diseases. Our clinic offers personalized vaccination schedules to ensure your pet's well-being.</p>
            </div>
            <img src="pet-vaccination.png" alt="Pet Vaccination" className='w-24 h-24 ml-auto' />
          </div>

          {/* Tip Box 3 */}
          <div className='flex items-center bg-white shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <img src="vet-visits.png" alt="Proper Nutrition" className='w-24 h-24 mr-4' />
            <div>
              <h3 className='text-lg font-semibold mb-2'>Proper Nutrition</h3>
              <p>Schedule routine visits to the vet to ensure your pet's overall health. Early detection of potential issues can lead to more effective treatments and a healthier, happier pet.</p>
            </div>
          </div>

          {/* Tip Box 4 */}
          <div className='flex items-center bg-white shadow-lg p-6 rounded-lg w-full md:w-3/4'>
            <div className='mr-4'>
              <h3 className='text-lg font-semibold mb-2'>Regular Vet Visits</h3>
              <p>Provide a balanced diet tailored to your pet's specific needs. Quality food contributes to their longevity, energy levels, and overall well-being.</p>
            </div>
            <img src="proper-nutrition.png" alt="Regular Vet Visits" className='w-24 h-24 ml-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
