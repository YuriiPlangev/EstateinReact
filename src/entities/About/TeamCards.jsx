function TeamCards () {
    return (
        <div className="team__cards">
    <article className="team__card">
      <img src="images/Team/max.webp" alt="max" className="team__card-img" />
      <p className="team__card-name">Max Mitchell</p>
      <p className="team__card-position">Founder</p>
      <form className="team__card-form">
        <input
          type="text"
          placeholder="Say hello"
          className="team__card-input"
        />
        <button className="team__card-button">
          <svg
            width={24}
            height={24}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <use xlinkHref="svg/sprite.svg#send" />
          </svg>
        </button>
      </form>
    </article>
    <article className="team__card">
      <img src="images/Team/sarah.webp" alt="max" className="team__card-img" />
      <p className="team__card-name">Sarah Johnson</p>
      <p className="team__card-position">Chief Real Estate Officer</p>
      <form className="team__card-form">
        <input
          type="text"
          placeholder="Say hello"
          className="team__card-input"
        />
        <button className="team__card-button">
          <svg
            width={24}
            height={24}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <use xlinkHref="svg/sprite.svg#send" />
          </svg>
        </button>
      </form>
    </article>
    <article className="team__card">
      <img src="images/Team/david.webp" alt="max" className="team__card-img" />
      <p className="team__card-name">David Brown</p>
      <p className="team__card-position">Head of Property Management</p>
      <form className="team__card-form">
        <input
          type="text"
          placeholder="Say hello"
          className="team__card-input"
        />
        <button className="team__card-button">
          <svg
            width={24}
            height={24}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <use xlinkHref="svg/sprite.svg#send" />
          </svg>
        </button>
      </form>
    </article>
    <article className="team__card">
      <img src="images/Team/michael.webp" alt="max" className="team__card-img" />
      <p className="team__card-name">Michael Turner</p>
      <p className="team__card-position">Legal Counsel</p>
      <form className="team__card-form">
        <input
          type="text"
          placeholder="Say hello"
          className="team__card-input"
        />
        <button className="team__card-button">
          <svg
            width={24}
            height={24}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <use xlinkHref="svg/sprite.svg#send" />
          </svg>
        </button>
      </form>
    </article>
  </div>
    )
}
export default TeamCards