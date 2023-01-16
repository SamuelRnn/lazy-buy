import Image from 'next/image'

export const Card = () => {
    
    
  return (
    <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
    <div className="bg-zinc-50 p-8 rounded-xl shadow-2xl border border-zinc-200">
      <div className="flex items-center gap-4 mb-8"></div>
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg"
          alt="Image not found"
          width={400}
          height={400}
          className="w-28 h-28 object-cover rounded-full border border-zinc-200"
        />
        <div>
          <h3 className="font-bold">Product</h3>
        </div>
      </div>
       <div className="flex justify-end">
          <p className="text-gray-500 flex ">Price: 200</p>
        </div>
    </div>
  </div>
  );
};