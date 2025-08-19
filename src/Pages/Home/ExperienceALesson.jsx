import Swal from "sweetalert2";

export default function ExperienceALesson() {
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      icon: "success",
      title: "You have booked successfully!",
      text: "Lesson will be sent to your email.",
      confirmButtonColor: "#4f46e5",
    });
    form.reset();
  };
  return (
    <div className="bg-[url(/assets/experience.jpg)] p-4 rounded-lg">
      <h1 className="text-center text-[#3b3f02] mt-4 mb-10  bg-contain bg-no-repeat bg-center">
        Submit the Form
      </h1>
      {/* Benefits + Form Grid */}
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Benefits */}
        <div className="space-y-6">
          <div className="flex items-start">
            <span className="h-6 w-6 bg-primary rounded-full mr-3 mt-1 flex-shrink-0"></span>
            <p className="text-primary text-lg font-semibold">
              Personalized attention from certified tutors
            </p>
          </div>
          <div className="flex items-start">
            <span className="h-6 w-6 bg-primary rounded-full mr-3 mt-1 flex-shrink-0"></span>
            <p className="text-primary text-lg font-semibold">
              Flexible scheduling to fit your routine
            </p>
          </div>
          <div className="flex items-start">
            <span className="h-6 w-6 bg-primary rounded-full mr-3 mt-1 flex-shrink-0"></span>
            <p className="text-primary text-lg font-semibold">
              Interactive and engaging lesson format
            </p>
          </div>
          <div className="flex items-start">
            <span className="h-6 w-6 bg-primary rounded-full mr-3 mt-1 flex-shrink-0"></span>
            <p className="text-primary text-lg font-semibold">
              No obligation—just try and enjoy
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl shadow-lg">
          <form
            onSubmit={handleBook}
            className="border border-primary p-6 rounded-lg text-black
            md:min-w-[300px]  lg:min-w-[400px] min-w-[200px]  bg-[rgba(0,0,0,0.62)] *:text-white space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-white py-3 rounded-sm pl-3 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-white py-3 rounded-sm pl-3 w-full"
              required
            />
            <input
              type="text"
              name="language"
              placeholder="Preferred Language"
              className="border border-white py-3 rounded-sm pl-3 w-full"
              required
            />
            <input
              type="text"
              name="schedule"
              placeholder="Preferred Schedule"
              className="border border-white py-3 rounded-sm pl-3 w-full"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-sm py-3 font-semibold  transition cursor-pointer"
            >
              Book Free Trial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
