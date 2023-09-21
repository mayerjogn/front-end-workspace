import "../css/Post.css"

const Post = () => {
  
  
  return <>
   
      <section>
       <h1>
        <div>코끼리끼리</div>
        </h1>
    </section>

    <section id="postList" className="bestPost">
      <a className="item" href="#">
        <div className="best">
          <div className="titleContainer">
              <div className="category">베스트글 카테고리</div>
              <div className="title">
              <div className="text"> 
              <div className="pre">베스트글 제목 </div> 
              어느정도 내용
            </div>
              </div>
            <div class="commentCount">0</div>
          </div>
          <div className="etc">
            <div className="nickName">
              "user1"
              <i className="닉네임 인증 아이콘?">
                ::before
              </i>
            </div>
            <div className="dot">
              :: after
            </div>
            <div className="datetime">n일전</div>
            <div className="dot">
              :: after
            </div>
            <div className="viewCount">
              <i className="조회수 모양아이콘">
                  ::before
              </i>
              "0"
            </div>
            <div className="dot">
              :: after
            </div>
            <div className="likeCount">
              <i className="좋아요 아이콘">
              ::before
              </i>
              "0"
            </div>
          </div>
        </div>
      </a>
    </section>

    <section id="postlist" className="">
      {/*게시글들은 나중에 map으로 때려박을거임*/}
      {/* <a className="item" href="#"> 
        <div className="image">
          <img src="#" alt="대충 게시글 제목 styled는 나중에 위로빼자"></img>
        </div>

        <div className="info">
          <div className="titleContainer">
            <div className="category">꼬랑이</div>
            <div className="title">
              <div className="text">꼬랑이는 왜이렇게 귀여울까</div>
              <div className="commentCount">0</div>
            </div>
          </div>

          <div className="etc">
            <div className="nickName">"꼬랑러버"</div>
            <div className="dot">
              :: after
            </div>
            <div className="datetime">n시간 전</div>
            <div className="dot">
              :: after
            </div>
            <div className="viewCount">
              <i className="조회수 모양아이콘">
                  ::before
              </i>
              "0"
            </div>
            <div className="dot">
              :: after
            </div>
            <div className="likeCount">
              <i className="좋아요 아이콘">
              ::before
              </i>
              "0"
            </div>
          </div>

        </div>

      </a>

      <a className="item" href="#"> 
        <div className="image">
          <img src="#" alt="대충 게시글 제목 styled는 나중에 위로빼자"></img>
        </div>

        <div className="info">
          <div className="titleContainer">
            <div className="category">꼬랑이</div>
            <div className="title">
              <div className="text">꼬랑이는 왜이렇게 귀여울까</div>
              <div className="commentCount">0</div>
            </div>
          </div>

          <div className="etc">
            <div className="nickName">"꼬랑러버"</div>
            <div className="dot">
              :: after
            </div>
            <div className="datetime">n시간 전</div>
            <div className="dot">
              :: after
            </div>
            <div className="viewCount">
              <i className="조회수 모양아이콘">
                  ::before
              </i>
              "0"
            </div>
            <div className="dot">
              :: after
            </div>
            <div className="likeCount">
              <i className="좋아요 아이콘">
              ::before
              </i>
              "0"
            </div>
          </div>

        </div>

      </a>

      <a className="item" href="#"> 
        <div className="image">
          <img src="#" alt="대충 게시글 제목 styled는 나중에 위로빼자"></img>
        </div>

        <div className="info">
          <div className="titleContainer">
            <div className="category">꼬랑이</div>
            <div className="title">
              <div className="text">꼬랑이는 왜이렇게 귀여울까</div>
              <div className="commentCount">0</div>
            </div>
          </div>

          <div className="etc">
            <div className="nickName">"꼬랑러버"</div>
            <div className="dot">
              :: after
            </div>
            <div className="datetime">n시간 전</div>
            <div className="dot">
              :: after
            </div>
            <div className="viewCount">
              <i className="조회수 모양아이콘">
                  ::before
              </i>
              "0"
            </div>
            <div className="dot">
              :: after
            </div>
            <div className="likeCount">
              <i className="좋아요 아이콘">
              ::before
              </i>
              "0"
            </div>
          </div>

        </div>

      </a> */}
    </section>

    <section className="pagination"> 
      <div className="prev"></div>
      <div className="number">
        <a className="selected">1</a>
        {/*여기도 맵으로?*/}
      </div>
      <div className="next">
        <a href="#">다음</a>
      </div>
    </section>
  
    <div className="searchAndWrite">
      <div></div>
      <div>
        <form action="/best">
          <div className="search">
            <select name="searchType">
              <option value={"title"}>제목</option>
              <option value={"titleAndContent"}>제목+내용</option>
              <option value={"nickName"}>글쓴이</option>
            </select>
            <input type="text" name="keyword" maxLength={"50"} />
            <button>검색</button>
          </div>
        </form>
      </div>
      <div className="write"> </div>
    </div>
  </>;
}

export default Post;