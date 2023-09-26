import '..css/PageNation.css';

const PageNation = () => {
    return (
        <section className="pagination">
            <div className="prev"></div>
            <div className="number">
                <a className="selected">1</a>
                <a href="#" className="notSelected">
                    2
                </a>
                <a href="#" className="notSelected">
                    3
                </a>
                <a href="#" className="notSelected">
                    4
                </a>
                <a href="#" className="notSelected">
                    5
                </a>
                {/*여기도 맵으로?*/}
            </div>
            <div className="next">
                <a href="#">다음</a>
            </div>
        </section>
    );
};
export default PageNation;
