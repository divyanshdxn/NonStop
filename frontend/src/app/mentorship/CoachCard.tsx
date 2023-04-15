import { FaStar } from "react-icons/fa";

export interface CoachDetails {
  name: string;
  desc: string;
  rating: number;
  price: number;
  exclusives: string[];
}

interface Props {
  coachDetails: CoachDetails;
}

export const CoachCard = ({ coachDetails }: Props) => {
  const { name, desc, rating, price, exclusives } = coachDetails;
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
        <div className="flex flex-row flex-wrap mt-4 gap-2">
          <p className="px-4 py-2 rounded-full bg-[#201B03]">₹ {price}/hr</p>
          {exclusives.map((e) => (
            <p className="px-4 py-2 rounded-full bg-[#1C1C1C]">{e}</p>
          ))}
        </div>

        <a href=""><button className="px-4 py-2 mt-4 bg-green-600 rounded-full w-full">Book a Demo</button></a>
      </div>
    </div>
  );
};

export const coaches: CoachDetails[] = [
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
  {
    name: "John Doe",
    desc: "Quick as lightning, our teachers usually respond in less than 1 hrs",
    rating: 4.3,
    price: 1234,
    exclusives: ["Cricket", "Motivation"],
  },
];
