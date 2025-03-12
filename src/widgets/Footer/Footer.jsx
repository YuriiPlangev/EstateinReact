import LogoIcon from '../../shared/assets/icon/LogoIcon'

function Footer() {
    return (
        <footer className="footer">
  <LogoIcon />
  <div className="social__wrapper">
    <div className="social">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className="social__link"
        aria-label="facebook link"
      >
        <svg
          width={20}
          height={20}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <use xlinkHref="svg/sprite.svg#facebook" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        className="social__link"
        aria-label="linkedin link"
      >
        <svg
          width={20}
          height={20}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <use xlinkHref="svg/sprite.svg#linkedin" />
        </svg>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        className="social__link"
        aria-label="twitter link"
      >
        <svg
          width={20}
          height={20}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <use xlinkHref="svg/sprite.svg#twitter" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        className="social__link"
        aria-label="youtube link"
      >
        <svg
          width={20}
          height={20}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <use xlinkHref="svg/sprite.svg#youtube" />
        </svg>
      </a>
    </div>
    <div className="copyright">
      <p className="copyright__text">@2023 Estatein. All Rights Reserved.</p>
      <a href="terms.html" className="copyright__link">
        Terms &amp; Conditions
      </a>
    </div>
  </div>
  <form action="" method="post" className="email__form">
    <input
      type="email"
      className="email__input"
      placeholder="Enter Your Email"
    />
    <button
      className="email__btn"
      type="submit"
      aria-label="subscribe to email"
    >
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
</footer>

    )
}
export default Footer