import './categories.css'

export interface CategoryItem {
    imageurl: string;
    texturl: string
    highlightimageurl: string;
}
  
interface Props {
    categoryItem: CategoryItem;
}
export function Categorycard({categoryItem} : Props){
    return(
            <div><a href="https://www.mythrillfiction.com/the-dark-rider" target="_blank">
                <div className="categorycard">
                    <div className="wrapper">
                    <img src={categoryItem.imageurl} className="cover-image" />
                    </div>
                    <img src={categoryItem.texturl} className="title" />
                    <img src={categoryItem.highlightimageurl} className="character" />
                </div>
            </a></div>
    )
}