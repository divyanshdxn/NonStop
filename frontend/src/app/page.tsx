import  {Categorycard, CategoryItem } from './home/categories'
import './home/home.css'

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
      <>
        <div className="Container">
          <div className="Introtext">
            
          </div>
          <div className="Categories">
              {cp.map((i) => (
                  <Categorycard categoryItem={categoryItem[i]} />
              ))}
          </div>    
        </div>
      </>
    )
 }
