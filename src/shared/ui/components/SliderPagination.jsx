function SliderPaginagion() {
    return (
        <div className="pagination">
        <div className="pagination__button" id="prev__featured">
          <svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pagination__button--svg"
          >
            <path
              d="M8.5 16.5L1 9M1 9L8.5 1.5M1 9H19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="pagination__button" id="next__featured">
          <svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pagination__button--svg"
          >
            <path
              d="M11.5 1.5L19 9M19 9L11.5 16.5M19 9H1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    )
}
export default SliderPaginagion