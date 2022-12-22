import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsURL, author, date, resource } = props;
    return (
        <>
            <div className="card m-1 my-3">
                <img src={imageUrl ? imageUrl : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/iphone13-sixteen_nine.jpg?VersionId=LweAqYHYfslrJ7DyHXvbewfzsNgvnVUh"} className="card-img-top" style={{ height: "160px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
                        {resource}</span>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">By {author}, on {new Date(date).toGMTString()}</p>
                    <a rel='noreferrer' href={newsURL} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem
