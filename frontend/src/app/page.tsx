import {
  Categorycard,
  CategoryItem,
  Eventcard,
  EventItem,
} from "./home/categories";
import "./home/home.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { CoachCard, coaches } from "./mentorship/CoachCard";

const cp = [1, 0, 2, 3, 4];
const ce = [0, 2, 1, 3];
const ct = [0, 2, 1, 1];
const eventDetails: EventItem[] = [
  {
    imageurl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6438043976529_unstop-ipl-cluekeepers.jpg?d=413x236",
    text: "InvestronX: Trading Times or Diving Dimes!",
    total_registration: "2,500",
    days_left: "9 days left",
  },
  {
    imageurl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6438043976529_unstop-ipl-cluekeepers.jpg?d=413x236",
    text: "InvestronX: Trading Times or Diving Dimes!",
    total_registration: "2,500",
    days_left: "9 days left",
  },
  {
    imageurl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6438043976529_unstop-ipl-cluekeepers.jpg?d=413x236",
    text: "Namma Yatri Open Mobility Challenge",
    total_registration: "30,995",
    days_left: "11 days left",
  },
  {
    imageurl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6438043976529_unstop-ipl-cluekeepers.jpg?d=413x236",
    text: "IPL Cluekeepers ",
    total_registration: "3,710",
    days_left: "5 days left",
  },
  {
    imageurl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6438043976529_unstop-ipl-cluekeepers.jpg?d=413x236",
    text: "InvestronX: Trading Times or Diving Dimes!",
    total_registration: "2,410",
    days_left: "14 days left",
  },
];
const categoryItem: CategoryItem[] = [
  {
    imageurl:
      "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
    texturl: "",
    highlightimageurl: "https://mythrill.onelink.me/fMFb/yt68v4j9",
  },
  {
    imageurl:
      "https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406",
    texturl: "",
    highlightimageurl: "",
  },
  {
    imageurl:
      "https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406",
    texturl: "",
    highlightimageurl: "",
  },
  {
    imageurl:
      "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
    texturl: "",
    highlightimageurl: "",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-10/12 justify-center">
        <div className="flex flex-col md:flex-row">
          <div className="Introtext">
            <div className="md:p-32 md:w-4/5">
              <h3 className="text-4xl font-bold">
                Unleash the Sports Person within You!{" "}
              </h3>
              <p className="mt-12">Connecting Talents,</p>
              <p>Potential Platforms</p>
              <p>and Sports coaches from all over India!</p>
              <p className="content-center ml-6">
                <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Explore Events
                </button>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 m-5">
            {ce.map((i) => (
              <Categorycard categoryItem={categoryItem[i]} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 mb-9">
        <FaArrowCircleDown className=" animate-bounce w-6 h-6 ... " />
      </div>
      <div className="flex mt-10 bg-cyan-50 rounded-2xl">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/63cfcda15edad_how_it_works.png"
          alt="How does it work?"
          loading="lazy"
          width="1180"
          height="516"
        />
      </div>
      <div className="flex w-9/12 flex-wrap p-6 m-5 justify-center gap-12">
        <div className="flex w-9/12 flex-wrap p-6 m-3">
          <h3 className="text-4xl font-bold"> Recent Events </h3>
        </div>
        {cp.map((i) => (
          <Eventcard eventDetails={eventDetails[i]} />
        ))}
      </div>
      <div className="flex w-9/12 flex-col p-3 justify-center bg-gray-900 rounded-3xl">
        <div className="flex w-9/12 flex-wrap p-6 m-3">
          <h3 className="text-4xl font-bold"> Featured Coaches</h3>
        </div>
        <div className="flex w-full gap-12 px-12 py-5 overflow-x-auto">
          {ct.map((i) => (
            <CoachCard coachDetails={coaches[i]} />
          ))}
        </div>
      </div>
    </div>
  );
}
