import React from "react";
import "./doc.css"
import Navbar from "../../Components/Navbar/Navbar";
import { poster11, poster12, poster13, poster14, poster15} from "../../assets/images"; 

const Docs = () => {
    return(
        <div className="wrapper__doc">
            <Navbar />
            <div className="doc-heading">
                <h1>Documentaries</h1>
            </div>
            {/* <div className="doc-trailer">
                <iframe width="650" height="365" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=cvxRUiy8YrDK3QV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
            <div className="doc_scroll-wrapper">
                
                <div className="scroll-content">
                    <img src={poster11} alt="poster"/>
                    <img src={poster12} alt="poster"/>
                    <img src={poster13} alt="poster"/>
                    <img src={poster14} alt="poster"/>
                    <img src={poster15} alt="poster"/>
                    <img src={poster11} alt="poster"/>
                    <img src={poster12} alt="poster"/>
                    <img src={poster13} alt="poster"/>
                    <img src={poster14} alt="poster"/>
                    <img src={poster15} alt="poster"/>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Docs;