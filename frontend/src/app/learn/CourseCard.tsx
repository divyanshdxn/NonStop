import { FaStar } from "react-icons/fa";

interface CourseDetails {
  name: string;
  desc: string;
  price: number;
  rating: number;
  tags: string[];
  instructor: string;
  length: string;
}

interface Props {
  courseDetails: CourseDetails;
}

export const CourseCard = ({ courseDetails }: Props) => {
  const { name, desc, rating, price, tags, instructor, length } = courseDetails;
  return (
    <div className="w-96 border border-gray-500 rounded-3xl">
      <img
        className="w-96 h-64 rounded-3xl"
        src="https://i.pinimg.com/564x/97/5d/00/975d00076330b10dd69f0312136e5b81.jpg"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h4 className="text-2xl font-semibold text-gray-200">{name}</h4>

          <span className="flex items-center gap-2">
            <FaStar className="inline text-yellow-500" />
            {rating}
          </span>
        </div>
        <h3 className="text-gray-400 mt-2">{desc}</h3>
        <h2 className="text-gray-400 mt-2 text-xl font-bold">Instructor: {instructor}</h2>
        <div className="flex flex-row flex-wrap mt-4 gap-2">
          <p className="px-4 py-2 rounded-full bg-[#201B03]">₹ {price}/hr</p>
          {tags.map((e) => (
            <p className="px-4 py-2 rounded-full bg-[#1C1C1C]">{e}</p>
          ))}
        </div>

        <a href="">
          <button className="px-4 py-2 mt-4 bg-green-600 rounded-full w-full">
           Register
          </button>
        </a>
      </div>
    </div>
  );
};

export const courses: CourseDetails[] = [
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
  {
    name: "Bachelor of Physical Education",
    desc: " Mythrill is a Serialized Reading App for Sci-Fi and Fantasy",
    price: 4582,
    rating: 4.5,
    tags: ["cricket", "sports", "health"],
    instructor: "John Doe",
    length: "6 Months",
  },
];
