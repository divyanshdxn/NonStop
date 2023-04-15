import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface SocialUrls {
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface CompetitionItem {
  name: string;
  type: string;
  theme: string;
  tags: string[];
  teamSize: number;
  socialUrls: SocialUrls;
}

interface Props {
  competitionItem: CompetitionItem;
}

const SocialLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a href={href}>
      <button className="p-3 rounded-full bg-neutral-900"> {children}</button>
    </a>
  );
};

export function CompetitionCard({ competitionItem }: Props) {
  return (
    <div className="bg-black shadow border border-transparent hover:border-green-600 rounded-2xl w-full md:w-[36rem] p-8">
      
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl font-bold ">{competitionItem.name}</h3>
          <p className="text-gray-500">{competitionItem.type}</p>
        </div>
        <ul className="flex flex-row gap-2">
          {competitionItem.socialUrls.facebook && (
            <li>
              <SocialLink href="">
                <FaFacebook />
              </SocialLink>
            </li>
          )}
          {competitionItem.socialUrls.instagram && (
            <li>
              <SocialLink href="">
                <FaInstagram />
              </SocialLink>
            </li>
          )}
          {competitionItem.socialUrls.twitter && (
            <li>
              <SocialLink href="">
                <FaTwitter />
              </SocialLink>
            </li>
          )}
        </ul>
      </div>

      <div className="w-full flex flex-col-reverse mt-4 md:flex-row gap-2 items-end">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-row justify-between my-12">
            <div>
              <p className="text-xl text-gray-500">Theme</p>
              <p className="px-4 py-2 mt-2 rounded-full border border-gray-700 text-gray-500">
                {competitionItem.theme}
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            {competitionItem.tags.map((tag) => (
              <p className="px-4 py-2 bg-neutral-900 rounded-lg text-gray-500">
                {tag}
              </p>
            ))}
          </div>

          <a href="">
            <button className="px-4 mt-4 rounded-lg py-2 bg-green-600 text-black">
              Apply Now
            </button>
          </a>
        </div>
        <img src="https://picsum.photos/200/300" className="w-full md:w-1/2 h-64 bg-white rounded-lg justify-self-end align-self-end"/>
      </div>

    </div>
  );
}
