const AllPost = () => {
    return (
        <>
            <section id="postList" className="bestPost">
                <a className="item" href="#">
                    <div className="best">
                        <div className="titleContainer">
                            <div className="category">[베스트글 카테고리]</div>
                            <div className="title"></div>{' '}
                            <div className="text">
                                <div className="pre">[베스트글 제목]</div>
                                어느정도 내용
                            </div>
                        </div>

                        <div className="commentCount">0</div>

                        <div className="etc">
                            <div className="nickName">
                                닉네임
                                <i className="nicknameIcon">{/* ::before */}</i>
                            </div>
                            <div className="dot"></div>
                            <div className="datetime">n일전</div>
                            <div className="dot">{/* :: after */}</div>
                            <div className="viewCount">
                                <i className="viewIcon"></i>
                                {/* ::before */}뷰{/* 아이콘*/}
                            </div>
                            <div className="dot">{/* :: after */}</div>
                            <div className="likeCount">
                                <i className="like Icon">{/* ::before */}</i>
                                좋아요{/*아이콘*/}
                            </div>
                        </div>
                    </div>
                </a>
            </section>
            <section id="postList" className="bestPost">
                <a className="item" href="#">
                    <div className="best">
                        <div className="titleContainer">
                            <div className="category">[베스트글 카테고리]</div>
                            <div className="title"></div>{' '}
                            <div className="text">
                                <div className="pre">[베스트글 제목]</div>
                                어느정도 내용
                            </div>
                        </div>

                        <div className="commentCount">0</div>

                        <div className="etc">
                            <div className="nickName">
                                닉네임
                                <i className="nicknameIcon">{/* ::before */}</i>
                            </div>
                            <div className="dot"></div>
                            <div className="datetime">n일전</div>
                            <div className="dot">{/* :: after */}</div>
                            <div className="viewCount">
                                <i className="viewIcon"></i>
                                {/* ::before */}뷰{/* 아이콘*/}
                            </div>
                            <div className="dot">{/* :: after */}</div>
                            <div className="likeCount">
                                <i className="like Icon">{/* ::before */}</i>
                                좋아요{/*아이콘*/}
                            </div>
                        </div>
                    </div>
                </a>
            </section>

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
        </>
    );
};
export default AllPost;
