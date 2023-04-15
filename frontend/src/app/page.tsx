import  {Categorycard, CategoryItem } from './home/categories'
import './home/home.css'
import {FaArrowCircleDown} from 'react-icons/fa' 

const cp = [1,0,2,3];
const categoryItem: CategoryItem[] = [{
  imageurl: 'https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406',
  texturl: '',
  highlightimageurl: ''
},{
  imageurl: 'https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406',
  texturl: '',
  highlightimageurl: ''
},{
    imageurl:'https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406',
    texturl:'',
    highlightimageurl:''

},
{
    imageurl:'https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406',
    texturl:'',
    highlightimageurl:''

}];
export default function Home() {
    return(
      <div className='flex flex-col w-full items-center'>
        <div className='flex w-10/12 justify-center'>
          <div className='flex'>
            <div className="Introtext">
              <div className="md:p-32 md:w-4/5"> 
                <h3 className="text-4xl font-bold">Unleash the Sports Person within You! </h3>
                <p className="mt-12">Connecting Talents,</p>
                <p>Potential Platforms</p>
                <p>and Sports coaches from all over India!</p>
                <p className='content-center ml-6'>
                <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Explore Events
                </button>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
                {cp.map((i) => (
                    <Categorycard categoryItem={categoryItem[i]} />
                ))}
            </div>
          </div>    
        </div>
        <div className='mt-20 mb-9'>
        <FaArrowCircleDown className="animate-bounce w-6 h-6 ..."/>
        </div>
        <div className='flex '>
          <img _ngcontent-d2c-frontend-c198="" src="https://d8it4huxumps7.cloudfront.net/uploads/images/63cfcda15edad_how_it_works.png" 
          alt="How does it work?" loading="lazy" className="ng-star-inserted" width="1180" height="516"/>
        </div>
      </div>
    )
 }
