import '../css/UnderPostList.css';

const UnderPostList = () => {
    return (
        <>
            <h2 className="bottomBoardListHeader"> 전체글</h2>

            <section id="boardList" className="simple">
                <div className="item header">
                    <div className="info">
                        <div className="titleContainer">
                            <span className="title">
                                <span className="text">제목</span>
                            </span>
                        </div>
                        <div className="etc">
                            <div className="nickName">글쓴이</div>
                            <div className="datetime filed">날짜</div>
                            <div className="viewCount number">조회</div>
                            <div className="likeCount number">추천</div>
                        </div>
                    </div>
                </div>
                <a className="item" href="#">
                    <div className="info">
                        <div className="titleContainer">
                            <span className="category">기타취미</span>
                            <span className="title">
                                <i></i>
                                <span className="text">기타취미 &nbsp;</span>
                                <span className="commentCount">11</span>
                            </span>
                        </div>
                        <div className="etc">
                            <div className="nickName">유저닉네임</div>
                            <div className="dot"></div>
                            <div className="datetime field"></div>
                            <div className="dot"></div>
                            <div className="viewCount number">
                                <i className="view">조회수</i>
                            </div>
                            <div className="dot"></div>
                            <div className="likeCount number">
                                <i className="like">👍</i>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </>
    );
};

export default UnderPostList;
