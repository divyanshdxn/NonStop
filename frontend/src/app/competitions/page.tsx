import { CompetitionCard, CompetitionItem } from "./CompetitionCard";

const cp = [1, 2, 4, 5, 0, 6, 7];
const competitionItem: CompetitionItem[] = [  {    name: "Kick for a Cause",    type: "Football Tournament",    theme: "Raising Funds for Children's Hospital",    tags: ["Nike", "Adidas", "Puma"],
teamSize: 5,
socialUrls: {
  instagram: "https://www.instagram.com/kickforacause",
  facebook: "https://www.facebook.com/kickforacause",
  twitter: "https://twitter.com/kickforacause"
}
},
{
name: "Swim for the Environment",
type: "Swimming Marathon",
theme: "Protecting Marine Life",
tags: ["Speedo", "TYR", "Arena"],
teamSize: 3,
socialUrls: {
  instagram: "https://www.instagram.com/swimfortheenvironment",
  facebook: "https://www.facebook.com/swimfortheenvironment",
  twitter: "https://twitter.com/swimenvironment"
}
},
{
name: "Race Against Cancer",
type: "Running Event",
theme: "Raising Awareness for Cancer Research",
tags: ["Asics", "New Balance", "Brooks"],
teamSize: 2,
socialUrls: {
  instagram: "https://www.instagram.com/raceagainstcancer",
  facebook: "https://www.facebook.com/raceagainstcancer",
  twitter: "https://twitter.com/racecancer"
}
},
{
name: "Hoop for the Homeless",
type: "Basketball Tournament",
theme: "Supporting Homeless Shelters",
tags: ["Under Armour", "Jordan", "Converse"],
teamSize: 4,
socialUrls: {
  instagram: "https://www.instagram.com/hoopforthehomeless",
  facebook: "https://www.facebook.com/hoopforthehomeless",
  twitter: "https://twitter.com/hoophomeless"
}
},
{
name: "Tennis for All",
type: "Charity Tennis Match",
theme: "Promoting Inclusivity in Sports",
tags: ["Wilson", "Head", "Babolat"],
teamSize: 2,
socialUrls: {
  instagram: "https://www.instagram.com/tennisforall",
  facebook: "https://www.facebook.com/tennisforall",
  twitter: "https://twitter.com/tennisforall"
}
},
{
name: "Ride for a Cure",
type: "Biking Fundraiser",
theme: "Supporting Medical Research for Rare Diseases",
tags: ["Specialized", "Trek", "Giant"],
teamSize: 6,
socialUrls: {
  instagram: "https://www.instagram.com/rideforacure",
  facebook: "https://www.facebook.com/rideforacure",
  twitter: "https://twitter.com/ridecure"
}
},
{
name: "Paddle for the Planet",
type: "Kayaking Cleanup Event",
theme: "Cleaning Up Waterways and Shorelines",
tags: ["NRS", "Dagger", "Perception"],
teamSize: 2,
socialUrls: {
  instagram: "https://www.instagram.com/paddlefortheplanet",
  facebook: "https://www.facebook.com/paddlefortheplanet",
  twitter: "https://twitter.com/paddleplanet"
}
},
];
export default function Compete() {
  return (
    <div className="flex flex-wrap flex-row gap-4 justify-around m-2 md:p-16">
      {competitionItem.map((c) => <CompetitionCard competitionItem={c}/>)}
    </div>
  );
}
