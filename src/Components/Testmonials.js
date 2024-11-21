import testimonialsData from '../assets/testimonial.json'; 

const Testimonials = () => {
  

  return (
    <div>
        <div className='text-center text-3xl mt-60 text-gray-500 font-medium'>
            <h1>My happy clients..</h1>
        </div>

        {/* Testimonials */}
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 w-full bg-white'>
            {
                testimonialsData.map((client) => (
                    <div key={client.id} className='rounded-3xl shadow-md p-10'>
                        {/* Top part of the testimonial */}
                        <div className='flex items-center'>
                            <img src={client.img || '/default-image.jpg'} alt={`${client.name}'s picture`}  className='w-12 h-12 rounded-full object-cover'/>
                            <p className='ml-5 space-y-0 text-base font-bold'>
                                <a href={client.link} target="_blank" rel="noopener noreferrer">{client.name}</a>
                                <p className='text-gray-400 text-sm -mt-4 font-normal'>{client.nickname}</p>
                            </p>
                            
                        </div>

                        {/* bottom */}
                        <div>
                            <h1>{client.desc}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Testimonials;
