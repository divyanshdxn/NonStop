import Link from 'next/link';
import './categories.css'
import {BsFillCalendarDateFill, BsFillPeopleFill} from 'react-icons/bs'

export interface CategoryItem {
    imageurl: string;
    texturl: string
    highlightimageurl: string;
    href: string
}
export interface EventItem {
    imageurl: string;
    text: string;
    total_registration: string;
    days_left: string;
}
  
interface CategoryProps {
    categoryItem: CategoryItem;
}
interface EventProps {
    eventDetails: EventItem;
}
export function Categorycard({categoryItem} : CategoryProps){
    return(
            <Link href={categoryItem.href}>
                <div className="categorycard">
                    <div className="wrapper">
                    <img src={categoryItem.imageurl} className="cover-image" />
                    </div>
                    <img src={""} className="title" />
                    <img src={categoryItem.texturl} className="character" />
                </div>
            </Link>
    )
}

export function Eventcard({eventDetails} : EventProps){
    const {imageurl, text, total_registration, days_left} = eventDetails;
    return(
        <div className="w-96 border border-gray-500 rounded-3xl">
            <img
                className="w-96 h-64 rounded-3xl"
                src={imageurl}
            />
            <div className="p-4">
                <div className="flex justify-between">
                    <h4 className="text-2xl font-semibold text-gray-200">{text}</h4>
                </div>
                </div>
                <div className="flex flex-row flex-wrap mt-4 gap-2">
                <p className="flex items-center m-2 gap-2 px-4 py-2 rounded-full bg-[#201B03]"> <BsFillPeopleFill/> {total_registration}</p>
                    <p className="flex items-center m-2 gap-2 px-4 py-2 rounded-full bg-[#201B03]"> <BsFillCalendarDateFill/> {days_left}</p>
                </div>
            </div>
        );
}