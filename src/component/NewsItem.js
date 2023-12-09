import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let{title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/10/30/1600x900/The-meeting-aims-at-creating-a-global-narrative-fo_1674645574807_1698668186589.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
