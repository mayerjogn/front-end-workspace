import { useState } from 'react';
import '../css/RightModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faLink, faUserSlash, faFlag } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const RightModal = () => {
    const [open, setOpen] = useState(false);
    const [Xmark, setXmark] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    const handleXmark = () => {
        setXmark(!Xmark);
    };

    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('홍수민이 복사됐습니다.');
        } catch (e) {}
    };
    // const [textValue, setTextValue] = useState('');
    // const handleSetValue = (e) => { 오전에 신고 버튼 누르면 텍스트에어리어 뜨는거 만들기
    //     setTextValue(e.target.value);
    // };

    return (
        <div className="right-modal">
            <div className="buttons">
                <div
                    onClick={() => {
                        toggleModal();
                        handleXmark();
                    }}
                >
                    {Xmark ? (
                        <FontAwesomeIcon icon={faXmark} style={{ color: '#ff7f38' }} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} style={{ color: '#ff7f38' }} />
                    )}
                </div>
            </div>
            {open && (
                <div className="popUptable">
                    <div className="popUp active">
                        <ul>
                            <li className="report">
                                <div type="button">
                                    <FontAwesomeIcon icon={faFlag} style={{ color: '#ff7f38' }} />
                                    <span className="size1">신고</span>
                                </div>
                            </li>
                            <li className="block">
                                <div type="button">
                                    <FontAwesomeIcon icon={faUserSlash} style={{ color: '#ff7f38' }} />
                                    <span className="size">차단</span>
                                </div>
                            </li>
                            <li className="share">
                                <div
                                    type="button"
                                    onClick={() => {
                                        handleCopyClipBoard('http://localhost:3000/ViewPost ');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#ff7f38' }} /> 복사
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightModal;
