import '../css/BestPost.css';
import PageNation from '../components/PageNation';

const BestPost = () => {
    return (
        <>
            <article id="list">
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
                                    <span className="like Icon">👍</span>
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
                                    <span className="like Icon">👍</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </section>
                <PageNation />
            </article>
        </>
    );
};

export default BestPost;
