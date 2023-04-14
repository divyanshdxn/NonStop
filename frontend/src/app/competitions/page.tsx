import { CompetitionCard, CompetitionItem } from "./CompetitionCard";

const cp = [1, 2, 4, 5, 0, 6, 7];
const competitionItem: CompetitionItem = {
  name: "Hack-a-Sol",
  type: "Hackthon",
  theme: "Social Good",
  tags: ["Google Cloud", "GeeksForGeeks", "AMD"],
  teamSize: 4,
  socialUrls: {
    instagram:"https://instagram.com",
    facebook:"https://instagram.com",
    twitter:"https://instagram.com",
  },
};

export default function Compete() {
  return (
    <div className="flex flex-wrap flex-row gap-4 justify-around m-2 md:p-16">
      {cp.map((i) => (
        <CompetitionCard competitionItem={competitionItem} />
      ))}
    </div>
  );
}
