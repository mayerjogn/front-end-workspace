import { useEffect, useState, useRef } from 'react';
import '../css/RightModal.css';

const RightModal = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    // const modalRef = useRef < HTMLDivElement > null;
    // useEffect(() => {
    //     const handler = (e) => {
    //         if (modalRef.current && !modalRef.current.contains(e.target)) {
    //             setOpen(false);
    //         }
    //     };
    //     document.addEventListener('mousedown', handler);

    //     return () => {
    //         document.removeEventListener('mousedown', handler);
    //     };
    // });

    const handleReport = () => {
        // 신고 동작을 처리
        alert('게시물이 신고되었습니다.');
    };

    const handleBlock = () => {
        // 차단 동작을 처리
        alert('김민수가 차단되었습니다.');
    };

    const handleShare = () => {
        // 공유 동작을 처리
        alert('홍수민이 공유되었습니다.');
    };

    return (
        <div>
            <div className="buttons">
                <button onClick={openModal}>옵션 열기</button>
            </div>
            {open && ( // open일 경우 신고 차단 공유등이 보임
                <div className="popUp active">
                    <ul>
                        <li className="report">
                            <button onClick={handleReport} type="button">
                                신고❌
                            </button>
                        </li>
                        <li className="block">
                            <button onClick={handleBlock} type="button">
                                차단🚫
                            </button>
                        </li>
                        <li className="share">
                            <button onClick={handleShare} type="button">
                                공유📮
                            </button>
                        </li>
                    </ul>
                </div>
            )}
            {open && <div className="modal-background" onClick={closeModal}></div>}
        </div>
    );
};
// open&& (<div></div>) () 얘 왜 계속 삭제됨 ㅈ같게

export default RightModal;
