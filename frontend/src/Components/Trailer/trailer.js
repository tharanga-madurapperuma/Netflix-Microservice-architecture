import React from "react";
import Navbar from "../Navbar/Navbar";
import './trailer.css';
import { backdrop4 } from "../../assets/images";

const Trailer = () => {
    return(
        <div className="wrapper__trailer">
            <Navbar />
            <div className="trailer-box">
                <div className="trailer-box_firstSection">
                    <div className="firstSection-left">
                        <iframe width="550" height="320" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=cvxRUiy8YrDK3QV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="firstSection-middle"></div>
                    <div className="firstSection-right">
                        <img src={backdrop4} alt="Back Drop"/>
                        <div>
                            <p>Planet Apes</p>
                            <p>dfsdhk fkdshfjkds hfkjds hfkjds hfjkd shkjf dshjkf hdskjfh dskj hfkdsj fkdjs fkds kjds hfkjds fkjd skfjdh skjf dshkfj</p> 
                        </div>
                    </div>
                </div>
                <div className="trailer-box_secondSection">
                    <h1 className="secondSection-reviews">Reviews</h1>
                    <p>djh fjkdhfkjdshfkjds fkd kjf dskjf dskj fdksj fkdjs kds kfjd skf dskf dskf dksj fkjd kjds kdkds fkjds hkfj dhskjfh dskjfh dskj fhdkjs hfkjdsh fdkhdfkhdskfdkh fkdjh kdh fkhd kf dhkjf hdkjfh dkj hkjd jk hfkjdh fkjdsh kf dhkfh dskhf dk fdk fkds fk</p>
                    <h2 className="secondSection-addReview">Add a Review</h2>
                    <form>
                        <textarea></textarea>
                        <input type='button' value="Review"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Trailer;

