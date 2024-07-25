"use client"; // Add this at the top of the file

const GoogleSlidesWidget = () => {
  return (
    <a
    href="https://docs.google.com/presentation/d/1u4DRQ7kqJg70x4RdYP7c5JFSrczSgtdOx1rIv2L-vk0/edit?usp=sharing" // Replace with your Google Slides link
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full max-w-md mt-4 bg-blue-500 hover:bg-blue-600 text-white text-center py-4 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out mx-auto"
  >
    <div className="flex items-center justify-center">
   
      <h2 className="text-xl font-bold">View Google Slides</h2>
    </div>
  </a>
  );
};

export default GoogleSlidesWidget;
