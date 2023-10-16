
import "./Picstyles.css";

import React,{useState, useEffect, useMemo} from "react";
import Pagination from '../paginate/MyPagination';
import axios from 'axios';
import Popup from '../popups/Popup';
import sq1 from '../../assets/images/sq1.png';
import sq2 from '../../assets/images/sq2.png';
import sq4 from '../../assets/images/sq5.png';

const imgStyle ={
    width:"100%"
};
let PageSize = 16;

var elements = document.getElementsByClassName("piccolumn");                  
var i;

function one(){
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";
    elements[i].style.flex = "100%";
    }
}
function two(){
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";
        elements[i].style.flex = "50%";
    }
}
    
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  
        elements[i].style.flex = "25%";
    }
} 

const Picture = () =>  {
    const [images, setimages] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [imgPopup,setImgPopup] =useState();

  

    useEffect(() => {
        axios.get('http://206.251.47.48:8080/api/pictures')
        .then(res => {
            setimages(res.data);
        }).catch(error => {
            console.log('Error fetching pictures: ', error);
        })
    },[]);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return images.slice(firstPageIndex, lastPageIndex);
    }, [images , currentPage]); 
  
    return  ( 
            <div className="picbody"> 
                <h1>Pictures</h1>  
                <div className="myHeader">  
                    <button className="btn" onClick={one}><img src={sq1} alt=''></img></button>
                    <button className="btn" onClick={two}><img src={sq2} alt=''></img></button>
                    <button className="btn" onClick={four}><img src={sq4} alt=''></img></button>  
                 <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={images.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                />       
                </div>
                <div>
                
            </div>
                <div className="picrow"> 
                     
                    <div className="piccolumn">  
                    {currentTableData.slice(0, 4).map(pic => ( 
                        <button id="pic-btn" onClick={()=>{setButtonPopup(true);setImgPopup(pic.url);}}> 
                            <img src={pic.url} key={pic.id} alt={pic.name} style={imgStyle}></img>
                        </button>
                    ))}      
                    </div>
                  
                    
                    <div className="piccolumn">
                    {currentTableData.slice(4, 8).map(pic => ( 
                        <button id="pic-btn" onClick={()=>{setButtonPopup(true);setImgPopup(pic.url);}}>
                            <img src={pic.url} key={pic.id} alt={pic.name} style={imgStyle}></img>
                        </button>
                    ))}     
                    </div> 
                    
                    <div className="piccolumn" >
                    {currentTableData.slice(8,12).map(pic => ( 
                        <button id="pic-btn" onClick={()=>{setButtonPopup(true);setImgPopup(pic.url);}}>
                            <img src={pic.url} key={pic.id} alt={pic.name} style={imgStyle}></img>
                        </button>
                    ))}
                    </div> 
                    
                    <div className="piccolumn" >
                    {currentTableData.slice(12,currentTableData.length).map(pic => ( 
                        <button id="pic-btn" onClick={()=>{setButtonPopup(true);setImgPopup(pic.url);}}>
                            <img src={pic.url} key={pic.id} alt={pic.name} style={imgStyle}></img>
                        </button>
                    ))}
                    </div> 
                     
                </div>  
                <Popup className="popup" trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <img src={imgPopup} alt=""></img>
                </Popup>
            </div>   
    )   
};

export default Picture;
