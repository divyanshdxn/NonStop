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

export const courses: CourseDetails[] = 
  [  {    name: "Beginner Tennis Lessons",    desc: "Learn the basics of tennis, including forehand, backhand, and serving.",    price: 999,    rating: 4.5,    tags: ["tennis", "lessons", "beginner"],
    instructor: "John Doe",
    length: "6 weeks"
  },
  {
    name: "Golf Swing Fundamentals",
    desc: "Learn the basics of golf swing, including grip, stance, and posture.",
    price: 1499,
    rating: 4.8,
    tags: ["golf", "swing", "fundamentals"],
    instructor: "Jane Smith",
    length: "8 weeks"
  },
  {
    name: "Boxing for Fitness",
    desc: "Learn basic boxing techniques to get in shape, including punching, footwork, and defense.",
    price: 1999,
    rating: 4.9,
    tags: ["boxing", "fitness", "techniques"],
    instructor: "Bob Johnson",
    length: "10 weeks"
  },
  {
    name: "Soccer Skills Clinic",
    desc: "Improve your soccer skills with drills, practice games, and expert coaching.",
    price: 2999,
    rating: 4.7,
    tags: ["soccer", "skills", "clinic"],
    instructor: "Sara Lee",
    length: "12 weeks"
  },
  {
    name: "Introduction to Swimming",
    desc: "Learn the fundamentals of swimming, including proper breathing, form, and technique.",
    price: 7999,
    rating: 4.3,
    tags: ["swimming", "fundamentals", "breathing", "technique"],
    instructor: "Mike Brown",
    length: "4 weeks"
  },
  {
    name: "Cricket Skills Morfs",
    desc: "Improve your batting and bowling skills with drills, practice games, and expert coaching.",
    price: 2999,
    rating: 4.7,
    tags: ["cricket", "skills", "batsman"],
    instructor: "Sara Lee",
    length: "12 weeks"
  },
  {
    name: "Cycling for Beginners",
    desc: "Learn the basics of cycling, including bike setup, safety, and handling.",
    price: 2496,
    rating: 4.6,
    tags: ["cycling", "beginner", "safety", "handling"],
    instructor: "Adam Smith",
    length: "12 weeks"
  },
  {
    name: "Introduction to Yoga",
    desc: "Learn the fundamentals of yoga, including poses, breathing, and meditation.",
    price: 1499,
    rating: 4.4,
    tags: ["yoga", "fundamentals", "poses", "meditation"],
    instructor: "Amy Jones",
    length: "8 weeks"
  },
  {
    name: "Marathon Training",
    desc: "Get in shape and train for a marathon with expert coaching and customized workouts.",
    price: 1999,
    rating: 4.7,
    tags: ["marathon", "training", "coaching", "workouts"],
    instructor: "David Lee",
    length: "10 weeks"
  },
  {
    name: "Basketball Skills Development",
    desc: "Improve your basketball skills with expert coaching and personalized training programs.",
    price: 3499,
    rating: 4.9,
    tags: ["basketball", "skills", "development", "coaching"],
    instructor: "Mark Johnson",
    length: "16 weeks"
  },
  {
    name: "Introduction to Rock Climbing",
    desc: "Learn the basics of rock climbing, including equipment, safety, and technique.",
    price: 1299,
    rating: 4.5,
    tags: ["rock climbing", "basics", "intermediate"],
    instructor: "Lee Henry",
    length: "18 weeks"
  },
];
