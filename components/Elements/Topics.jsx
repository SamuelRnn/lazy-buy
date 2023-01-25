import { motion } from "framer-motion";
import Image from "next/image";

const Topics = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex justify-center mt-5 mb-5 px-5"
      >
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <Image
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://assets.entrepreneur.com/content/3x2/2000/20150316052356-shutterstock-232609255.jpeg"
            width={700}
            height={700}
            alt="why us"
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Why us?</h5>
            <p class="text-gray-700 text-base mb-4">
              At our marketplace, we are dedicated to providing a reliable and
              trustworthy platform for both buyers and sellers. We understand
              the importance of ease and convenience, which is why we have
              designed a modern and visually appealing interface that makes it
              easy for sellers to list their products and for buyers to find
              exactly what they&apos;re looking for.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex justify-center mt-5 mb-5"
      >
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg lg:w-1/2">
          <Image
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://www.thedigitalsalesinstitute.com/wp-content/uploads/2018/09/what-is-selling-definition.jpeg"
            width={700}
            height={700}
            alt="your backup"
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Your backup</h5>
            <p class="text-gray-700 text-base mb-4">
              Our passionate team of developers has put love and care into every
              aspect of our platform, ensuring that it is constantly evolving
              and improving to meet the needs of our community. When you sell
              with us, you can rest assured that you are in good hands. So why
              wait? Start selling with us today and join the thousands of
              satisfied sellers on our platform!
            </p>
          </div>
        </div>
      </motion.div>

      {/* <div class="flex justify-center mt-5 mb-5 mr-5">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Topics;
